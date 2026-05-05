import { createHmac, timingSafeEqual } from 'node:crypto';

export const ADMIN_SESSION_COOKIE = 'creait_admin_session';
export const ADMIN_SESSION_MAX_AGE = 60 * 60 * 12;

const SESSION_SCOPE = 'creait-admin-session:v1';

function getAdminSecret() {
  return String(process.env.ADMIN_SECRET || '');
}

function parseCookies(header = '') {
  return header
    .split(/;\s*/)
    .filter(Boolean)
    .reduce((acc, pair) => {
      try {
        const index = pair.indexOf('=');
        if (index <= 0) return acc;
        const key = decodeURIComponent(pair.slice(0, index).trim());
        const value = decodeURIComponent(pair.slice(index + 1).trim());
        if (key) acc[key] = value;
      } catch {}
      return acc;
    }, {});
}

function safeEqual(a = '', b = '') {
  const aBuffer = Buffer.from(String(a));
  const bBuffer = Buffer.from(String(b));
  if (aBuffer.length !== bBuffer.length) return false;
  return timingSafeEqual(aBuffer, bBuffer);
}

function createSessionToken(secret) {
  return createHmac('sha256', secret).update(SESSION_SCOPE).digest('hex');
}

function shouldUseSecureCookie(request) {
  try {
    return new URL(request.url).protocol === 'https:';
  } catch {
    return true;
  }
}

export function hasAdminSecret() {
  return Boolean(getAdminSecret());
}

export function isValidAdminSecret(secret) {
  const expected = getAdminSecret();
  return Boolean(expected) && safeEqual(secret, expected);
}

export function isAuthorizedRequest(request) {
  const expectedSecret = getAdminSecret();
  if (!expectedSecret) return false;

  const headerSecret = request.headers.get('x-admin-key') || '';
  if (headerSecret && safeEqual(headerSecret, expectedSecret)) {
    return true;
  }

  const cookies = parseCookies(request.headers.get('cookie') || '');
  const sessionToken = cookies[ADMIN_SESSION_COOKIE] || '';
  return Boolean(sessionToken) && safeEqual(sessionToken, createSessionToken(expectedSecret));
}

export function createAdminSessionCookie(request) {
  const secret = getAdminSecret();
  const parts = [
    `${ADMIN_SESSION_COOKIE}=${createSessionToken(secret)}`,
    'Path=/',
    'HttpOnly',
    'SameSite=Lax',
    `Max-Age=${ADMIN_SESSION_MAX_AGE}`
  ];

  if (shouldUseSecureCookie(request)) {
    parts.push('Secure');
  }

  return parts.join('; ');
}

export function clearAdminSessionCookie(request) {
  const parts = [
    `${ADMIN_SESSION_COOKIE}=`,
    'Path=/',
    'HttpOnly',
    'SameSite=Lax',
    'Max-Age=0'
  ];

  if (shouldUseSecureCookie(request)) {
    parts.push('Secure');
  }

  return parts.join('; ');
}
