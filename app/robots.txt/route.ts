export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://guruvanta.com';

  const robots = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /api/admin

Sitemap: ${baseUrl}/sitemap.xml
`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
