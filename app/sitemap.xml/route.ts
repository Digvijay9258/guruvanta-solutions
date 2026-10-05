import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://guruvanta.com';

  const [services, products, industries, portfolio] = await Promise.all([
    prisma.service.findMany({ where: { published: true }, select: { slug: true, updatedAt: true } }),
    prisma.product.findMany({ where: { published: true }, select: { slug: true, updatedAt: true } }),
    prisma.industry.findMany({ where: { published: true }, select: { slug: true, updatedAt: true } }),
    prisma.portfolioProject.findMany({ where: { published: true }, select: { slug: true, updatedAt: true } }),
  ]);

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/products',
    '/solutions',
    '/industries',
    '/portfolio',
    '/restaurant-erp',
    '/hotel-erp',
    '/hospital-erp',
    '/pharmacy-erp',
    '/jewellery-erp',
    '/billing-software',
    '/inventory-software',
    '/hr-payroll',
    '/crm',
    '/pos',
    '/ai-solutions',
    '/whatsapp-automation',
    '/contact',
    '/request-demo',
    '/faq',
    '/privacy-policy',
    '/terms',
  ];

  const now = new Date().toISOString();

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Static pages
  for (const route of staticRoutes) {
    xml += `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${route === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>
`;
  }

  // Dynamic services
  for (const s of services) {
    xml += `  <url>
    <loc>${baseUrl}/services/${s.slug}</loc>
    <lastmod>${s.updatedAt.toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  }

  // Dynamic products
  for (const p of products) {
    xml += `  <url>
    <loc>${baseUrl}/products/${p.slug}</loc>
    <lastmod>${p.updatedAt.toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  }

  // Dynamic industries & solutions
  for (const ind of industries) {
    xml += `  <url>
    <loc>${baseUrl}/industries/${ind.slug}</loc>
    <lastmod>${ind.updatedAt.toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/solutions/${ind.slug}</loc>
    <lastmod>${ind.updatedAt.toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  }

  // Dynamic portfolio projects
  for (const proj of portfolio) {
    xml += `  <url>
    <loc>${baseUrl}/portfolio/${proj.slug}</loc>
    <lastmod>${proj.updatedAt.toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  }

  xml += `</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=600',
    },
  });
}
