import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getCurrentUser } from '@/lib/auth';

export async function GET() {
  try {
    const portfolio = await prisma.portfolioProject.findMany({
      orderBy: { order: 'asc' },
    });
    return NextResponse.json({ portfolio });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch portfolio' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await req.json();
    const project = await prisma.portfolioProject.create({
      data: {
        title: body.title,
        slug: body.slug,
        industry: body.industry,
        clientType: body.clientType,
        summary: body.summary,
        problem: body.problem,
        solution: body.solution,
        modules: JSON.stringify(body.modules || []),
        technology: JSON.stringify(body.technology || []),
        results: JSON.stringify(body.results || []),
        published: body.published ?? true,
        order: Number(body.order || 0),
        seoTitle: body.seoTitle,
        seoDescription: body.seoDescription,
      },
    });
    return NextResponse.json({ success: true, project });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create portfolio project' }, { status: 500 });
  }
}
