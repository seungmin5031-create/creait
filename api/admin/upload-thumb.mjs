import { put } from '@vercel/blob';
import { hasAdminSecret, isAuthorizedRequest } from '../../lib/admin-auth.mjs';

function json(body, init = {}) {
  return new Response(JSON.stringify(body), {
    ...init,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...(init.headers || {})
    }
  });
}

function sanitizeFilename(filename = 'thumb') {
  const ext = filename.includes('.') ? `.${filename.split('.').pop().toLowerCase()}` : '.jpg';
  const name = filename.replace(/\.[^.]+$/, '').toLowerCase().replace(/[^a-z0-9가-힣]+/g, '-').replace(/^-+|-+$/g, '') || 'thumb';
  return `${name}${ext}`;
}

export async function POST(request) {
  if (!hasAdminSecret()) {
    return json({ error: 'ADMIN_SECRET 환경 변수가 설정되지 않았습니다.' }, { status: 500 });
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return json({ error: 'BLOB_READ_WRITE_TOKEN 환경 변수가 설정되지 않았습니다.' }, { status: 500 });
  }

  if (!isAuthorizedRequest(request)) {
    return json({ error: '관리자 인증에 실패했습니다.' }, { status: 401 });
  }

  const formData = await request.formData().catch(() => null);
  const file = formData?.get('file');

  if (!(file instanceof File)) {
    return json({ error: '업로드할 파일이 없습니다.' }, { status: 400 });
  }

  if (!file.type.startsWith('image/')) {
    return json({ error: '이미지 파일만 업로드할 수 있습니다.' }, { status: 400 });
  }

  if (file.size > 4 * 1024 * 1024) {
    return json({ error: '썸네일 파일은 4MB 이하로 업로드해주세요.' }, { status: 400 });
  }

  const pathname = `portfolio/thumbs/${Date.now()}-${sanitizeFilename(file.name)}`;
  const blob = await put(pathname, file, {
    access: 'public',
    addRandomSuffix: true,
    allowOverwrite: false,
    contentType: file.type,
    cacheControlMaxAge: 31536000
  });

  return json({ ok: true, url: blob.url, pathname: blob.pathname });
}
