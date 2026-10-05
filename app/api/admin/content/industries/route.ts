import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getCurrentUser } from '@/lib/auth';

export async function GET() {
  try {
    const industries = await prisma.industry.findMany({
      orderBy: { order: 'asc' },
    });
    return NextResponse.json({ industries });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch industries' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await req.json();
    const industry = await prisma.industry.create({
      data: {
        title: body.title,
        slug: body.slug,
        headline: body.headline,
        description: body.description,
        painPoints: JSON.stringify(body.painPoints || []),
        keyModules: JSON.stringify(body.keyModules || []),
        workflow: body.workflow,
        published: body.published ?? true,
        order: Number(body.order || 0),
        seoTitle: body.seoTitle,
        seoDescription: body.seoDescription,
      },
    });
    return NextResponse.json({ success: true, industry });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create industry' }, { status: 500 });
  }
}
