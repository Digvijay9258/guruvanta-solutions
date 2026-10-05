import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getCurrentUser } from '@/lib/auth';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const lead = await prisma.lead.findUnique({
      where: { id: params.id },
      include: {
        assignedTo: { select: { id: true, name: true, email: true } },
        activities: {
          orderBy: { createdAt: 'desc' },
          include: { createdBy: { select: { name: true } } },
        },
      },
    });

    if (!lead) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }

    return NextResponse.json({ lead });
  } catch (error) {
    console.error('Lead GET error:', error);
    return NextResponse.json({ error: 'Failed to retrieve lead' }, { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const existing = await prisma.lead.findUnique({
      where: { id: params.id },
      include: { assignedTo: true },
    });

    if (!existing) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }

    const updates: Record<string, unknown> = {};
    const activitiesToCreate: {
      type: string;
      title: string;
      description?: string;
    }[] = [];

    // 1. Status change check
    if (body.status && body.status !== existing.status) {
      updates.status = body.status;
      activitiesToCreate.push({
        type: 'STATUS_CHANGE',
        title: `Status Changed to ${body.status}`,
        description: `Transitioned from ${existing.status} to ${body.status} by ${user.name}`,
      });
    }

    // 2. Assignee check
    if (body.assignedToId !== undefined && body.assignedToId !== existing.assignedToId) {
      updates.assignedToId = body.assignedToId;
      const assigneeName = body.assignedToName || 'Team Member';
      activitiesToCreate.push({
        type: 'ASSIGNED',
        title: `Assigned to ${assigneeName}`,
        description: `Reassigned by ${user.name}`,
      });
    }

    // 3. Notes check
    if (body.notes !== undefined && body.notes !== existing.notes) {
      updates.notes = body.notes;
      if (body.newNoteAdded) {
        activitiesToCreate.push({
          type: 'NOTE_ADDED',
          title: 'Internal Note Added',
          description: body.newNoteAdded,
        });
      }
    }

    // 4. Follow up date check
    if (body.followUpDate !== undefined) {
      updates.followUpDate = body.followUpDate ? new Date(body.followUpDate) : null;
      activitiesToCreate.push({
        type: 'FOLLOW_UP_CHANGED',
        title: 'Follow-up Date Updated',
        description: `Scheduled for ${body.followUpDate ? new Date(body.followUpDate).toLocaleDateString() : 'Cleared'}`,
      });
    }

    const updatedLead = await prisma.lead.update({
      where: { id: params.id },
      data: updates,
    });

    // Create lead activities
    for (const act of activitiesToCreate) {
      await prisma.leadActivity.create({
        data: {
          leadId: params.id,
          type: act.type,
          title: act.title,
          description: act.description,
          createdById: user.id,
        },
      });
    }

    return NextResponse.json({ success: true, lead: updatedLead });
  } catch (error) {
    console.error('Lead PATCH error:', error);
    return NextResponse.json({ error: 'Failed to update lead' }, { status: 500 });
  }
}
