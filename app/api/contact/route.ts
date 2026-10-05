import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { ContactMessageSchema } from '@/lib/validations';
import { notifyAdminNewLead } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = ContactMessageSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid message parameters', details: result.error.format() },
        { status: 400 }
      );
    }

    const data = result.data;

    const contact = await prisma.contactMessage.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
        status: 'UNREAD',
      },
    });

    // Also register as an inquiry lead if not existing
    const existing = await prisma.lead.findFirst({
      where: { email: data.email },
    });

    if (!existing) {
      const newLead = await prisma.lead.create({
        data: {
          name: data.name,
          company: 'Inbound Inquiry',
          email: data.email,
          phone: data.phone || 'Not Provided',
          interestedSolution: data.subject,
          requirement: data.message,
          status: 'NEW',
        },
      });

      await prisma.leadActivity.create({
        data: {
          leadId: newLead.id,
          type: 'CREATED',
          title: 'Direct Inbound Contact Message',
          description: `Subject: ${data.subject}`,
        },
      });
    }

    await prisma.notification.create({
      data: {
        title: `Contact Message: ${data.name}`,
        message: data.subject,
        type: 'INFO',
        link: '/admin/contact-messages',
      },
    });

    notifyAdminNewLead({
      name: data.name,
      company: 'General Contact Form',
      email: data.email,
      phone: data.phone || 'N/A',
      solution: data.subject,
      requirement: data.message,
    }).catch((err) => console.error('Email error:', err));

    return NextResponse.json({
      success: true,
      messageId: contact.id,
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Failed to dispatch message.' },
      { status: 500 }
    );
  }
}
