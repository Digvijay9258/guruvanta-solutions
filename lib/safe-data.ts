import prisma from '@/lib/prisma';
import {
  initialServices,
  initialProducts,
  initialIndustries,
  initialPortfolioProjects,
  initialFAQs,
  initialTestimonials,
  initialLocations,
  initialTeam,
} from './seedData';

export async function getSafeServices() {
  try {
    const data = await prisma.service.findMany({
      where: { published: true },
      orderBy: { order: 'asc' },
    });
    if (data && data.length > 0) return data;
  } catch (err: any) {
    console.warn('[safe-data] Fallback for services:', err?.message || err);
  }
  return initialServices.map((s, idx) => ({
    ...s,
    id: `srv-${idx + 1}`,
    published: true,
    technologies: s.technologies || null,
    icon: null,
    featuredImage: null,
    seoTitle: s.seoTitle || null,
    seoDescription: s.seoDescription || null,
    createdAt: new Date(),
    updatedAt: new Date(),
  }));
}

export async function getSafeProducts() {
  try {
    const data = await prisma.product.findMany({
      where: { published: true },
      orderBy: { order: 'asc' },
    });
    if (data && data.length > 0) return data;
  } catch (err: any) {
    console.warn('[safe-data] Fallback for products:', err?.message || err);
  }
  return initialProducts.map((p, idx) => ({
    ...p,
    id: `prd-${idx + 1}`,
    tag: p.tag || null,
    modules: p.modules || '[]',
    architecture: p.architecture || null,
    pricingTier: p.pricingTier || null,
    featuredImage: null,
    published: true,
    seoTitle: p.seoTitle || null,
    seoDescription: p.seoDescription || null,
    createdAt: new Date(),
    updatedAt: new Date(),
  }));
}

export async function getSafeIndustries() {
  try {
    const data = await prisma.industry.findMany({
      where: { published: true },
      orderBy: { order: 'asc' },
    });
    if (data && data.length > 0) return data;
  } catch (err: any) {
    console.warn('[safe-data] Fallback for industries:', err?.message || err);
  }
  return initialIndustries.map((ind, idx) => ({
    ...ind,
    id: `ind-${idx + 1}`,
    workflow: ind.workflow || null,
    icon: null,
    featuredImage: null,
    published: true,
    seoTitle: ind.seoTitle || null,
    seoDescription: ind.seoDescription || null,
    createdAt: new Date(),
    updatedAt: new Date(),
  }));
}

export async function getSafePortfolio(limit?: number) {
  try {
    const data = await prisma.portfolioProject.findMany({
      where: { published: true },
      orderBy: { order: 'asc' },
      ...(limit ? { take: limit } : {}),
    });
    if (data && data.length > 0) return data;
  } catch (err: any) {
    console.warn('[safe-data] Fallback for portfolio:', err?.message || err);
  }
  const all = initialPortfolioProjects.map((p, idx) => ({
    ...p,
    id: `port-${idx + 1}`,
    featuredImage: null,
    gallery: null,
    published: true,
    seoTitle: p.seoTitle || null,
    seoDescription: p.seoDescription || null,
    createdAt: new Date(),
    updatedAt: new Date(),
  }));
  return limit ? all.slice(0, limit) : all;
}

export async function getSafeTestimonials() {
  try {
    const data = await prisma.testimonial.findMany({
      where: { published: true },
      orderBy: { order: 'asc' },
    });
    if (data && data.length > 0) return data;
  } catch (err: any) {
    console.warn('[safe-data] Fallback for testimonials:', err?.message || err);
  }
  return initialTestimonials.map((t, idx) => ({
    ...t,
    id: `test-${idx + 1}`,
    logo: null,
    avatar: null,
    published: true,
    createdAt: new Date(),
  }));
}

export async function getSafeFAQs() {
  try {
    const data = await prisma.fAQ.findMany({
      where: { published: true },
      orderBy: { order: 'asc' },
    });
    if (data && data.length > 0) return data;
  } catch (err: any) {
    console.warn('[safe-data] Fallback for faqs:', err?.message || err);
  }
  return initialFAQs.map((f, idx) => ({
    ...f,
    id: `faq-${idx + 1}`,
    published: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  }));
}

export async function getSafeTeam() {
  try {
    const data = await prisma.teamMember.findMany({
      where: { published: true },
      orderBy: { order: 'asc' },
    });
    if (data && data.length > 0) return data;
  } catch (err: any) {
    console.warn('[safe-data] Fallback for team:', err?.message || err);
  }
  return initialTeam.map((m, idx) => ({
    ...m,
    id: `team-${idx + 1}`,
    avatar: null,
    linkedin: null,
    published: true,
    createdAt: new Date(),
  }));
}

export async function getSafeLocations() {
  try {
    const data = await prisma.location.findMany({
      orderBy: { isHeadquarter: 'desc' },
    });
    if (data && data.length > 0) return data;
  } catch (err: any) {
    console.warn('[safe-data] Fallback for locations:', err?.message || err);
  }
  return initialLocations.map((l, idx) => ({
    ...l,
    id: `loc-${idx + 1}`,
    phone: l.phone || null,
    email: l.email || null,
    mapUrl: null,
    createdAt: new Date(),
  }));
}
