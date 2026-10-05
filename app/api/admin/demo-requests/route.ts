import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getCurrentUser } from '@/lib/auth';

export async function GET() {
  try {
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const demoRequests = await prisma.demoRequest.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json({ demoRequests });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch demo requests' }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { id, status } = await req.json();
    const updated = await prisma.demoRequest.update({
      where: { id },
      data: { status },
    });
    return NextResponse.json({ success: true, demoRequest: updated });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update demo request' }, { status: 500 });
  }
}
