import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getCurrentUser } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const services = await prisma.service.findMany({
      orderBy: { order: 'asc' },
    });
    return NextResponse.json({ services });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await req.json();
    const service = await prisma.service.create({
      data: {
        title: body.title,
        slug: body.slug,
        category: body.category,
        shortDesc: body.shortDesc,
        description: body.description,
        features: JSON.stringify(body.features || []),
        published: body.published ?? true,
        order: Number(body.order || 0),
        seoTitle: body.seoTitle,
        seoDescription: body.seoDescription,
      },
    });
    return NextResponse.json({ success: true, service });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create service' }, { status: 500 });
  }
}
