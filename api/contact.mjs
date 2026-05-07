export const config = {
  runtime: 'nodejs',
  maxDuration: 10
};

const FALLBACK_TO_EMAIL = 'hello@creait.kr';
const FALLBACK_FROM_EMAIL = 'CREAIT Contact <hello@creait.kr>';
const RESEND_ONBOARDING_FROM_EMAIL = 'CREAIT Contact <onboarding@resend.dev>';
const EMAIL_ENDPOINT = 'https://api.resend.com/emails';

function json(body, init = {}) {
  return new Response(JSON.stringify(body), {
    ...init,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...(init.headers || {})
    }
  });
}

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function normalizeTypes(value) {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => String(item || '').trim())
    .filter(Boolean)
    .slice(0, 12);
}

function toPlainText(payload) {
  return [
    '[CREAIT 문의]',
    `이름 / 회사명: ${payload.name}`,
    `연락처: ${payload.tel}`,
    `이메일: ${payload.email}`,
    `프로젝트 유형: ${payload.types.length ? payload.types.join(', ') : '미선택'}`,
    `예상 예산: ${payload.budget || '미입력'}`,
    `참고 링크: ${payload.ref || '미입력'}`,
    '',
    '[프로젝트 설명]',
    payload.desc || '미입력'
  ].join('\n');
}

function toHtml(payload) {
  const items = [
    ['이름 / 회사명', payload.name],
    ['연락처', payload.tel],
    ['이메일', payload.email],
    ['프로젝트 유형', payload.types.length ? payload.types.join(', ') : '미선택'],
    ['예상 예산', payload.budget || '미입력'],
    ['참고 링크', payload.ref || '미입력']
  ];

  const rows = items.map(([label, value]) => `
    <tr>
      <td style="padding:10px 14px;border:1px solid #e5e7eb;background:#f8fafc;font-weight:700;white-space:nowrap;">${escapeHtml(label)}</td>
      <td style="padding:10px 14px;border:1px solid #e5e7eb;">${escapeHtml(value)}</td>
    </tr>
  `).join('');

  return `
    <div style="font-family:Pretendard,Inter,Arial,sans-serif;line-height:1.65;color:#111827;">
      <h2 style="margin:0 0 18px;font-size:20px;">CREAIT 문의 접수</h2>
      <table style="width:100%;border-collapse:collapse;border-spacing:0;margin-bottom:18px;">
        <tbody>${rows}</tbody>
      </table>
      <div style="padding:16px 18px;border:1px solid #e5e7eb;border-radius:12px;background:#ffffff;">
        <div style="font-size:13px;font-weight:700;color:#6b7280;margin-bottom:8px;">프로젝트 설명</div>
        <div style="white-space:pre-wrap;">${escapeHtml(payload.desc || '미입력')}</div>
      </div>
    </div>
  `;
}

function validate(payload) {
  if (!payload.name || !payload.tel || !payload.email) {
    return '이름, 연락처, 이메일은 필수입니다.';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(payload.email)) {
    return '올바른 이메일 주소를 입력해주세요.';
  }

  return '';
}

export function GET() {
  return json({ ok: true, message: 'Use POST to submit contact inquiries.' });
}

async function sendWithResend({ resendApiKey, fromEmail, toEmail, subject, payload }) {
  const resendResponse = await fetch(EMAIL_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
      'User-Agent': 'creait-contact-form/1.0'
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject,
      html: toHtml(payload),
      text: toPlainText(payload),
      reply_to: payload.email
    })
  });

  const resendResult = await resendResponse.json().catch(() => ({}));
  return { resendResponse, resendResult };
}

export async function POST(request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || FALLBACK_TO_EMAIL;
  const configuredFromEmail = String(process.env.CONTACT_FROM_EMAIL || '').trim();

  if (!resendApiKey) {
    return json(
      { error: '메일 전송 환경 변수가 설정되지 않았습니다. RESEND_API_KEY를 확인해주세요.' },
      { status: 500 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: '잘못된 요청 형식입니다.' }, { status: 400 });
  }

  const payload = {
    name: String(body?.name || '').trim(),
    tel: String(body?.tel || '').trim(),
    email: String(body?.email || '').trim(),
    budget: String(body?.budget || '').trim(),
    desc: String(body?.desc || '').trim(),
    ref: String(body?.ref || '').trim(),
    types: normalizeTypes(body?.types)
  };

  const validationError = validate(payload);
  if (validationError) {
    return json({ error: validationError }, { status: 400 });
  }

  const subjectParts = ['CREAIT 문의'];
  if (payload.name) subjectParts.push(payload.name);
  if (payload.types.length) subjectParts.push(payload.types.join('/'));
  const subject = subjectParts.join(' | ');

  const usesFallbackSender = !configuredFromEmail;
  const primaryFromEmail = configuredFromEmail || FALLBACK_FROM_EMAIL;

  if (usesFallbackSender) {
    console.warn('[contact] CONTACT_FROM_EMAIL is not set. Using fallback sender.', {
      primaryFromEmail
    });
  }

  let resendResponse;
  let resendResult;

  try {
    ({ resendResponse, resendResult } = await sendWithResend({
      resendApiKey,
      fromEmail: primaryFromEmail,
      toEmail,
      subject,
      payload
    }));
  } catch (error) {
    console.error('[contact] Failed to reach Resend.', {
      message: error instanceof Error ? error.message : String(error)
    });
    return json(
      { error: '메일 전송 서비스에 연결하지 못했습니다. 잠시 후 다시 시도해주세요.' },
      { status: 502 }
    );
  }

  if (!resendResponse.ok && usesFallbackSender) {
    const primaryErrorMessage =
      resendResult?.message ||
      resendResult?.error ||
      '메일 전송 서비스에서 오류가 발생했습니다.';
    const senderRejected = /from|sender|domain|verify|verified|onboarding/i.test(
      primaryErrorMessage
    );

    if (senderRejected) {
      console.warn('[contact] Fallback sender rejected. Retrying with Resend onboarding sender.', {
        primaryFromEmail,
        primaryErrorMessage
      });

      try {
        ({ resendResponse, resendResult } = await sendWithResend({
          resendApiKey,
          fromEmail: RESEND_ONBOARDING_FROM_EMAIL,
          toEmail,
          subject,
          payload
        }));
      } catch (error) {
        console.error('[contact] Retry with Resend onboarding sender failed.', {
          message: error instanceof Error ? error.message : String(error)
        });
        return json(
          { error: '메일 전송 서비스에 연결하지 못했습니다. 잠시 후 다시 시도해주세요.' },
          { status: 502 }
        );
      }
    }
  }

  if (!resendResponse.ok) {
    const errorMessage =
      resendResult?.message ||
      resendResult?.error ||
      '메일 전송 서비스에서 오류가 발생했습니다.';

    console.error('[contact] Resend rejected the contact email.', {
      status: resendResponse.status,
      fromEmailTried: usesFallbackSender ? `${primaryFromEmail} -> ${RESEND_ONBOARDING_FROM_EMAIL}` : primaryFromEmail,
      errorMessage
    });

    return json({ error: errorMessage }, { status: 502 });
  }

  return json({ ok: true, id: resendResult?.id || null });
}
