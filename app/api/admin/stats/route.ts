import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getCurrentUser } from '@/lib/auth';

export async function GET() {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const [
      totalLeads,
      newLeads,
      demoRequests,
      contactMessages,
      totalServices,
      totalProducts,
      totalPortfolio,
      totalFaqs,
      recentLeads,
      recentActivities,
    ] = await Promise.all([
      prisma.lead.count(),
      prisma.lead.count({ where: { status: 'NEW' } }),
      prisma.demoRequest.count(),
      prisma.contactMessage.count({ where: { status: 'UNREAD' } }),
      prisma.service.count(),
      prisma.product.count(),
      prisma.portfolioProject.count(),
      prisma.fAQ.count(),
      prisma.lead.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.leadActivity.findMany({
        take: 8,
        orderBy: { createdAt: 'desc' },
        include: {
          lead: { select: { company: true, name: true } },
          createdBy: { select: { name: true } },
        },
      }),
    ]);

    // Status breakdown
    const leadsByStatus = await prisma.lead.groupBy({
      by: ['status'],
      _count: {
        id: true,
      },
    });

    return NextResponse.json({
      stats: {
        totalLeads,
        newLeads,
        demoRequests,
        unreadMessages: contactMessages,
        totalServices,
        totalProducts,
        totalPortfolio,
        totalFaqs,
      },
      leadsByStatus,
      recentLeads,
      recentActivities,
    });
  } catch (error) {
    console.error('Stats error:', error);
    return NextResponse.json({ error: 'Failed to retrieve stats' }, { status: 500 });
  }
}
