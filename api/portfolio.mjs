import { list, put } from '@vercel/blob';

const PORTFOLIO_PATH = 'cms/portfolio.json';

function json(body, init = {}) {
  return new Response(JSON.stringify(body), {
    ...init,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      ...(init.headers || {})
    }
  });
}

function isAuthorized(request) {
  const adminSecret = process.env.ADMIN_SECRET;
  return Boolean(adminSecret) && request.headers.get('x-admin-key') === adminSecret;
}

function sanitizeItems(items) {
  if (!Array.isArray(items)) return [];

  return items.map((item = {}, index) => {
    const safeItem = {
      id: String(item.id || `portfolio-${index + 1}`),
      featured: item.featured !== false,
      cat: String(item.cat || 'promotion').trim().toLowerCase(),
      displayCat: String(item.displayCat || '').trim(),
      client: String(item.client || '').trim(),
      title: String(item.title || '').trim(),
      year: String(item.year || '').trim(),
      duration: String(item.duration || '').trim(),
      format: String(item.format || '').trim(),
      bg: String(item.bg || '').trim(),
      thumb: String(item.thumb || '').trim(),
      videoUrl: String(item.videoUrl || '').trim(),
      desc: String(item.desc || '').trim(),
      gallery: Array.isArray(item.gallery) ? item.gallery.map((src) => String(src || '').trim()).filter(Boolean) : [],
      credits: {}
    };

    if (item.credits && typeof item.credits === 'object' && !Array.isArray(item.credits)) {
      safeItem.credits = Object.fromEntries(
        Object.entries(item.credits)
          .map(([key, value]) => [String(key || '').trim(), String(value || '').trim()])
          .filter(([key, value]) => key && value)
      );
    }

    return safeItem;
  });
}

async function readSavedPortfolio() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return null;

  const { blobs } = await list({ prefix: PORTFOLIO_PATH, limit: 10 });
  const blob = blobs.find((item) => item.pathname === PORTFOLIO_PATH);
  if (!blob) return null;

  const response = await fetch(blob.url, { cache: 'no-store' });
  if (!response.ok) return null;

  const payload = await response.json().catch(() => null);
  if (Array.isArray(payload?.items)) return payload.items;
  if (Array.isArray(payload)) return payload;
  return null;
}

export async function GET() {
  try {
    const items = await readSavedPortfolio();
    return json({ items, source: items ? 'blob' : 'fallback' });
  } catch (error) {
    return json({ items: null, source: 'fallback', error: error?.message || 'Failed to load remote portfolio data.' });
  }
}

export async function POST(request) {
  if (!process.env.ADMIN_SECRET) {
    return json({ error: 'ADMIN_SECRET 환경 변수가 설정되지 않았습니다.' }, { status: 500 });
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return json({ error: 'BLOB_READ_WRITE_TOKEN 환경 변수가 설정되지 않았습니다.' }, { status: 500 });
  }

  if (!isAuthorized(request)) {
    return json({ error: '관리자 인증에 실패했습니다.' }, { status: 401 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: '잘못된 요청 형식입니다.' }, { status: 400 });
  }

  const items = sanitizeItems(body?.items);
  if (!items.length) {
    return json({ error: '저장할 포트폴리오 데이터가 없습니다.' }, { status: 400 });
  }

  const saved = await put(
    PORTFOLIO_PATH,
    JSON.stringify({ items, updatedAt: new Date().toISOString() }, null, 2),
    {
      access: 'public',
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: 'application/json',
      cacheControlMaxAge: 60
    }
  );

  return json({ ok: true, savedUrl: saved.url, count: items.length });
}
