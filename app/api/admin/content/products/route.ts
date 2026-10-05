import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getCurrentUser } from '@/lib/auth';

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { order: 'asc' },
    });
    return NextResponse.json({ products });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await req.json();
    const product = await prisma.product.create({
      data: {
        title: body.title,
        slug: body.slug,
        tag: body.tag,
        headline: body.headline,
        description: body.description,
        features: JSON.stringify(body.features || []),
        modules: JSON.stringify(body.modules || []),
        architecture: body.architecture,
        pricingTier: body.pricingTier,
        published: body.published ?? true,
        order: Number(body.order || 0),
        seoTitle: body.seoTitle,
        seoDescription: body.seoDescription,
      },
    });
    return NextResponse.json({ success: true, product });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}
