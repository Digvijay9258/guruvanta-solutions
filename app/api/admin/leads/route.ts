import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getCurrentUser } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const search = searchParams.get('search') || '';
    const status = searchParams.get('status') || '';
    const sortBy = searchParams.get('sortBy') || 'createdAt';
    const order = searchParams.get('order') || 'desc';

    const where: Record<string, unknown> = {};

    if (status && status !== 'ALL') {
      where.status = status;
    }

    if (search) {
      where.OR = [
        { name: { contains: search } },
        { company: { contains: search } },
        { email: { contains: search } },
        { phone: { contains: search } },
        { interestedSolution: { contains: search } },
      ];
    }

    const leads = await prisma.lead.findMany({
      where,
      orderBy: { [sortBy]: order },
      include: {
        assignedTo: { select: { id: true, name: true, email: true } },
        activities: {
          orderBy: { createdAt: 'desc' },
          include: { createdBy: { select: { name: true } } },
        },
      },
    });

    const salesUsers = await prisma.user.findMany({
      where: { role: { in: ['ADMIN', 'SUPER_ADMIN', 'SALES'] } },
      select: { id: true, name: true, role: true, email: true },
    });

    return NextResponse.json({ leads, salesUsers });
  } catch (error) {
    console.error('Leads GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();

    const newLead = await prisma.lead.create({
      data: {
        name: body.name,
        company: body.company,
        email: body.email,
        phone: body.phone,
        businessType: body.businessType,
        city: body.city,
        interestedSolution: body.interestedSolution,
        numberOfUsers: body.numberOfUsers,
        requirement: body.requirement,
        status: body.status || 'NEW',
        assignedToId: body.assignedToId || null,
        notes: body.notes || null,
      },
    });

    await prisma.leadActivity.create({
      data: {
        leadId: newLead.id,
        type: 'CREATED',
        title: 'Manually Registered Lead',
        description: `Created directly via Admin Console by ${user.name}`,
        createdById: user.id,
      },
    });

    return NextResponse.json({ success: true, lead: newLead });
  } catch (error) {
    console.error('Leads POST error:', error);
    return NextResponse.json({ error: 'Failed to create lead' }, { status: 500 });
  }
}
