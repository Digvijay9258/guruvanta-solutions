import {
  getLeadNotificationTemplate,
  getDemoRequestTemplate,
  getUserConfirmationTemplate,
} from '@/emails/templates';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@guruvanta.com';

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  if (RESEND_API_KEY) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Guruvanta Solutions <onboarding@resend.dev>',
          to,
          subject,
          html,
        }),
      });
      return await response.json();
    } catch (err) {
      console.error('[Email Error - Resend Dispatch Failed]', err);
    }
  }

  // Graceful development mode fallback logger
  console.log(`[DISPATCH EMAIL SIMULATOR]
To: ${to}
Subject: ${subject}
Length: ${html.length} bytes
Preview: Dispatched successfully into system log.
`);
  return { success: true, simulated: true };
}

export async function notifyAdminNewLead(data: {
  name: string;
  company: string;
  email: string;
  phone: string;
  solution: string;
  requirement?: string;
}) {
  return sendEmail({
    to: ADMIN_EMAIL,
    subject: `New Website Lead — ${data.name}`,
    html: getLeadNotificationTemplate(data),
  });
}

export async function notifyAdminDemoRequest(data: {
  name: string;
  company: string;
  email: string;
  phone: string;
  solution: string;
  preferredDate?: string;
  timeSlot?: string;
}) {
  return sendEmail({
    to: ADMIN_EMAIL,
    subject: `New Demo Request — ${data.company}`,
    html: getDemoRequestTemplate(data),
  });
}

export async function sendUserConfirmation(to: string, name: string, solution: string) {
  return sendEmail({
    to,
    subject: 'We received your request — Guruvanta Solutions Technologies',
    html: getUserConfirmationTemplate(name, solution),
  });
}
