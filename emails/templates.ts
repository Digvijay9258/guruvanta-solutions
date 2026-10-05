export interface EmailPayload {
  to: string;
  subject: string;
  html: string;
}

export function getLeadNotificationTemplate(data: {
  name: string;
  company: string;
  email: string;
  phone: string;
  solution: string;
  requirement?: string;
}) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { background-color: #050505; color: #ededed; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 40px 20px; }
    .card { max-width: 600px; margin: 0 auto; background: #0c0c0e; border: 1px solid #27272a; padding: 40px; border-radius: 8px; }
    .brand { font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #a1a1aa; margin-bottom: 24px; }
    h1 { font-size: 24px; font-weight: 500; color: #ffffff; margin: 0 0 20px 0; letter-spacing: -0.02em; }
    .field { margin-bottom: 16px; border-bottom: 1px solid #18181b; padding-bottom: 12px; }
    .label { font-size: 11px; color: #71717a; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px; }
    .value { font-size: 15px; color: #f4f4f5; font-weight: 400; }
    .footer { margin-top: 32px; font-size: 12px; color: #52525b; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="brand">GURUVANTA SOLUTIONS TECHNOLOGIES &middot; INTERNAL DISPATCH</div>
    <h1>New Inbound Lead Generated</h1>
    <div class="field">
      <div class="label">Client Name</div>
      <div class="value">${data.name}</div>
    </div>
    <div class="field">
      <div class="label">Organization / Company</div>
      <div class="value">${data.company}</div>
    </div>
    <div class="field">
      <div class="label">Direct Email</div>
      <div class="value">${data.email}</div>
    </div>
    <div class="field">
      <div class="label">Contact Number</div>
      <div class="value">${data.phone}</div>
    </div>
    <div class="field">
      <div class="label">System Interest</div>
      <div class="value">${data.solution}</div>
    </div>
    ${
      data.requirement
        ? `<div class="field"><div class="label">Specification & Notes</div><div class="value">${data.requirement}</div></div>`
        : ''
    }
    <div class="footer">
      Guruvanta Solutions Technologies Enterprise Dispatch &bull; Automated notification
    </div>
  </div>
</body>
</html>
  `;
}

export function getDemoRequestTemplate(data: {
  name: string;
  company: string;
  email: string;
  phone: string;
  solution: string;
  preferredDate?: string;
  timeSlot?: string;
}) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { background-color: #050505; color: #ededed; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 40px 20px; }
    .card { max-width: 600px; margin: 0 auto; background: #0c0c0e; border: 1px solid #27272a; padding: 40px; border-radius: 8px; }
    .brand { font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #a1a1aa; margin-bottom: 24px; }
    h1 { font-size: 24px; font-weight: 500; color: #ffffff; margin: 0 0 20px 0; letter-spacing: -0.02em; }
    .field { margin-bottom: 16px; border-bottom: 1px solid #18181b; padding-bottom: 12px; }
    .label { font-size: 11px; color: #71717a; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px; }
    .value { font-size: 15px; color: #f4f4f5; font-weight: 400; }
  </style>
</head>
<body>
  <div class="card">
    <div class="brand">GURUVANTA SOLUTIONS TECHNOLOGIES &middot; EXECUTIVE ARCHIVE</div>
    <h1>Demo Scheduled: ${data.company}</h1>
    <div class="field"><div class="label">Lead Contact</div><div class="value">${data.name} (${data.email})</div></div>
    <div class="field"><div class="label">Direct Phone</div><div class="value">${data.phone}</div></div>
    <div class="field"><div class="label">Target Platform</div><div class="value">${data.solution}</div></div>
    ${data.preferredDate ? `<div class="field"><div class="label">Requested Date</div><div class="value">${data.preferredDate}</div></div>` : ''}
    ${data.timeSlot ? `<div class="field"><div class="label">Time Slot</div><div class="value">${data.timeSlot}</div></div>` : ''}
  </div>
</body>
</html>
  `;
}

export function getUserConfirmationTemplate(name: string, solution: string) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { background-color: #050505; color: #ededed; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 40px 20px; }
    .card { max-width: 600px; margin: 0 auto; background: #0c0c0e; border: 1px solid #27272a; padding: 44px; border-radius: 8px; }
    .brand { font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: #a1a1aa; margin-bottom: 24px; }
    h1 { font-size: 24px; font-weight: 400; color: #ffffff; margin: 0 0 16px 0; letter-spacing: -0.03em; }
    p { font-size: 15px; line-height: 1.7; color: #a1a1aa; margin: 0 0 20px 0; }
    .highlight { color: #f4f4f5; font-weight: 500; }
    .box { background: #121216; border-left: 2px solid #ffffff; padding: 16px 20px; margin: 24px 0; font-size: 14px; color: #d4d4d8; }
    .footer { margin-top: 40px; font-size: 12px; color: #52525b; border-top: 1px solid #1f1f23; padding-top: 20px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="brand">GURUVANTA SOLUTIONS TECHNOLOGIES</div>
    <h1>We received your request.</h1>
    <p>Dear ${name},</p>
    <p>Thank you for initiating a consultation with Guruvanta Solutions Technologies regarding <span class="highlight">${solution}</span>.</p>
    <div class="box">
      Our solutions architecture team is reviewing your requirements. A senior systems specialist will connect with you within 2-4 business hours with an overview and live demonstration access.
    </div>
    <p>If you have urgent specifications or existing architecture diagrams to share, reply directly to this message.</p>
    <div class="footer">
      Guruvanta Solutions Technologies &bull; Business Technology. Intelligent Software. Connected Operations.
    </div>
  </div>
</body>
</html>
  `;
}
