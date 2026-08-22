import { NextResponse } from 'next/server';

type InquiryPayload = {
  source?: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  course?: string;
  therapy?: string;
  message?: string;
  agree?: boolean;
};

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'hello@novelle.ae';
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'Novelle Website <onboarding@resend.dev>';

function escapeHtml(value: unknown) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function buildRows(payload: InquiryPayload) {
  return Object.entries(payload)
    .filter(([, value]) => value !== undefined && value !== '')
    .map(([key, value]) => `<tr><td style="padding:8px 12px;border:1px solid #eadfd2;font-weight:700;text-transform:capitalize;">${escapeHtml(key)}</td><td style="padding:8px 12px;border:1px solid #eadfd2;">${escapeHtml(value)}</td></tr>`)
    .join('');
}

export async function POST(req: Request) {
  try {
    const payload = (await req.json()) as InquiryPayload;
    const name = payload.name || [payload.firstName, payload.lastName].filter(Boolean).join(' ');
    const subject = `Novelle website enquiry${payload.source ? ` - ${payload.source}` : ''}${name ? ` - ${name}` : ''}`;

    if (!payload.email && !payload.phone) {
      return NextResponse.json({ error: 'Email or phone is required.' }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.warn('Novelle inquiry received without RESEND_API_KEY configured:', payload);
      return NextResponse.json({ ok: true, delivered: false });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: payload.email || undefined,
        subject,
        html: `
          <div style="margin:0;background:#faf6f0;padding:32px;font-family:Arial,sans-serif;color:#4a3728;">
            <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #eadfd2;border-radius:20px;overflow:hidden;">
              <div style="background:#3b2f42;padding:24px 28px;color:#ffffff;">
                <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;opacity:.72;">Novelle · novelle.ae</div>
                <h2 style="margin:10px 0 0;font-size:26px;font-weight:500;">New website enquiry</h2>
              </div>
              <div style="padding:28px;">
                <p style="margin:0 0 22px;color:#7a6b63;line-height:1.6;">A new enquiry was submitted through the Novelle website. Reply directly to this email to contact the prospective student.</p>
                <table style="border-collapse:collapse;width:100%;">${buildRows(payload)}</table>
              </div>
            </div>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Email delivery failed.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch {
    return NextResponse.json({ error: 'Unable to submit enquiry.' }, { status: 500 });
  }
}
