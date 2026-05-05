import {
  clearAdminSessionCookie,
  createAdminSessionCookie,
  hasAdminSecret,
  isAuthorizedRequest,
  isValidAdminSecret
} from '../../lib/admin-auth.mjs';

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

export async function GET(request) {
  if (!hasAdminSecret()) {
    return json({ authenticated: false, error: 'ADMIN_SECRET 환경 변수가 설정되지 않았습니다.' }, { status: 500 });
  }

  if (!isAuthorizedRequest(request)) {
    return json({ authenticated: false }, { status: 401 });
  }

  return json({ authenticated: true });
}

export async function POST(request) {
  if (!hasAdminSecret()) {
    return json({ error: 'ADMIN_SECRET 환경 변수가 설정되지 않았습니다.' }, { status: 500 });
  }

  const payload = await request.json().catch(() => null);
  const password = String(payload?.password || '');

  if (!isValidAdminSecret(password)) {
    return json({ error: '비밀번호가 올바르지 않습니다.' }, { status: 401 });
  }

  return json(
    { ok: true, authenticated: true },
    { headers: { 'Set-Cookie': createAdminSessionCookie(request) } }
  );
}

export async function DELETE(request) {
  return json(
    { ok: true },
    { headers: { 'Set-Cookie': clearAdminSessionCookie(request) } }
  );
}
