export type UserRole = 'SUPER_ADMIN' | 'ADMIN' | 'EDITOR' | 'SALES' | 'SUPPORT';

export type LeadStatus =
  | 'NEW'
  | 'CONTACTED'
  | 'QUALIFIED'
  | 'DEMO_SCHEDULED'
  | 'PROPOSAL'
  | 'NEGOTIATION'
  | 'WON'
  | 'LOST';

export interface UserSession {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  description?: string;
}

export interface LeadActivityItem {
  id: string;
  leadId: string;
  type: string;
  title: string;
  description?: string | null;
  createdById?: string | null;
  createdBy?: {
    name: string;
    email: string;
  } | null;
  createdAt: string;
}
