import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { DemoRequestSchema } from '@/lib/validations';
import { notifyAdminDemoRequest, sendUserConfirmation } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = DemoRequestSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: result.error.format() },
        { status: 400 }
      );
    }

    const data = result.data;

    // 1. Create Inbound Lead
    const lead = await prisma.lead.create({
      data: {
        name: data.name,
        company: data.company,
        email: data.email,
        phone: data.phone,
        businessType: data.businessType,
        city: data.city,
        interestedSolution: data.interestedSolution,
        numberOfUsers: data.numberOfUsers,
        currentSoftware: data.currentSoftware,
        requirement: data.requirement,
        preferredContact: data.preferredContact,
        status: 'NEW',
      },
    });

    // 2. Create Lead Activity Log
    await prisma.leadActivity.create({
      data: {
        leadId: lead.id,
        type: 'CREATED',
        title: 'Demo Request Inbound Lead Captured',
        description: `Solution: ${data.interestedSolution} | Users: ${data.numberOfUsers || 'Unspecified'} | Contact: ${data.preferredContact}`,
      },
    });

    // 3. Create DemoRequest Record
    const demoReq = await prisma.demoRequest.create({
      data: {
        name: data.name,
        company: data.company,
        email: data.email,
        phone: data.phone,
        solution: data.interestedSolution,
        numberOfUsers: data.numberOfUsers,
        preferredDate: data.preferredDate,
        timeSlot: data.timeSlot,
        status: 'PENDING',
        notes: data.requirement,
      },
    });

    // 4. Create In-System Notification
    await prisma.notification.create({
      data: {
        title: `New Demo Request: ${data.company}`,
        message: `${data.name} requested demonstration for ${data.interestedSolution}`,
        type: 'INFO',
        link: `/admin/leads`,
      },
    });

    // 5. Send Transactional Emails in Background
    notifyAdminDemoRequest({
      name: data.name,
      company: data.company,
      email: data.email,
      phone: data.phone,
      solution: data.interestedSolution,
      preferredDate: data.preferredDate,
      timeSlot: data.timeSlot,
    }).catch((err) => console.error('Admin email error:', err));

    sendUserConfirmation(data.email, data.name, data.interestedSolution).catch((err) =>
      console.error('User confirmation email error:', err)
    );

    return NextResponse.json({
      success: true,
      leadId: lead.id,
      demoId: demoReq.id,
      message: 'Demonstration request registered and dispatched successfully.',
    });
  } catch (error) {
    console.error('Demo request API error:', error);
    return NextResponse.json(
      { error: 'Failed to process request. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
