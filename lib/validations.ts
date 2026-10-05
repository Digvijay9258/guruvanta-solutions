import { z } from 'zod';

export const DemoRequestSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  company: z.string().min(2, 'Company name is required').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please provide a valid phone number').max(20),
  businessType: z.string().optional(),
  city: z.string().optional(),
  interestedSolution: z.string().min(1, 'Please select a solution'),
  numberOfUsers: z.string().optional(),
  currentSoftware: z.string().optional(),
  requirement: z.string().optional(),
  preferredContact: z.enum(['EMAIL', 'PHONE', 'WHATSAPP']).default('EMAIL'),
  preferredDate: z.string().optional(),
  timeSlot: z.string().optional(),
});

export const ContactMessageSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().max(20).optional(),
  subject: z.string().min(3, 'Subject must be at least 3 characters').max(150),
  message: z.string().min(10, 'Message must be at least 10 characters').max(3000),
});

export const LoginSchema = z.object({
  email: z.string().email('Valid email required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const LeadStatusUpdateSchema = z.object({
  status: z.enum([
    'NEW',
    'CONTACTED',
    'QUALIFIED',
    'DEMO_SCHEDULED',
    'PROPOSAL',
    'NEGOTIATION',
    'WON',
    'LOST',
  ]),
  assignedToId: z.string().nullable().optional(),
  notes: z.string().optional(),
  followUpDate: z.string().nullable().optional(),
});
