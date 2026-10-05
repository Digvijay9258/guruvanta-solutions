'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Users,
  CalendarClock,
  MessageSquare,
  Layers,
  Boxes,
  ArrowRight,
  TrendingUp,
  Activity,
  Clock,
  CheckCircle2,
} from 'lucide-react';

interface StatsData {
  stats: {
    totalLeads: number;
    newLeads: number;
    demoRequests: number;
    unreadMessages: number;
    totalServices: number;
    totalProducts: number;
    totalPortfolio: number;
    totalFaqs: number;
  };
  leadsByStatus: { status: string; _count: { id: number } }[];
  recentLeads: {
    id: string;
    name: string;
    company: string;
    status: string;
    interestedSolution?: string | null;
    createdAt: string;
  }[];
  recentActivities: {
    id: string;
    type: string;
    title: string;
    description?: string | null;
    createdAt: string;
    lead?: { company: string; name: string } | null;
    createdBy?: { name: string } | null;
  }[];
}

export default function AdminOverviewPage() {
  const [data, setData] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/stats')
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch((err) => console.error('Failed to load admin stats:', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh] font-mono text-xs text-zinc-500">
        LOADING TELEMETRY...
      </div>
    );
  }

  const s = data?.stats;

  const STATUS_COLORS: Record<string, string> = {
    NEW: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    CONTACTED: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    QUALIFIED: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    DEMO_SCHEDULED: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    PROPOSAL: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    NEGOTIATION: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    WON: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    LOST: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-1">
            CONTROL CONSOLE
          </div>
          <h1 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
            Operational Telemetry Overview
          </h1>
        </div>

        <Link
          href="/admin/leads"
          className="inline-flex items-center gap-2 px-4 py-2 rounded bg-white text-black font-medium text-xs font-mono tracking-wider hover:bg-zinc-200 transition-colors"
        >
          <span>MANAGE INBOUND LEADS</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="p-6 rounded-lg glass-panel border border-white/10">
          <div className="flex items-center justify-between text-zinc-500 mb-3">
            <span className="text-[10px] font-mono tracking-widest uppercase">TOTAL LEADS</span>
            <Users className="w-4 h-4 text-zinc-400" />
          </div>
          <div className="text-3xl font-light text-white mb-1 font-mono">
            {s?.totalLeads ?? 0}
          </div>
          <div className="text-xs font-mono text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>{s?.newLeads ?? 0} Uncontacted New</span>
          </div>
        </div>

        <div className="p-6 rounded-lg glass-panel border border-white/10">
          <div className="flex items-center justify-between text-zinc-500 mb-3">
            <span className="text-[10px] font-mono tracking-widest uppercase">DEMO SESSIONS</span>
            <CalendarClock className="w-4 h-4 text-zinc-400" />
          </div>
          <div className="text-3xl font-light text-white mb-1 font-mono">
            {s?.demoRequests ?? 0}
          </div>
          <div className="text-xs font-mono text-zinc-400">
            Registered Demo Inquiries
          </div>
        </div>

        <div className="p-6 rounded-lg glass-panel border border-white/10">
          <div className="flex items-center justify-between text-zinc-500 mb-3">
            <span className="text-[10px] font-mono tracking-widest uppercase">DISPATCH MESSAGES</span>
            <MessageSquare className="w-4 h-4 text-zinc-400" />
          </div>
          <div className="text-3xl font-light text-white mb-1 font-mono">
            {s?.unreadMessages ?? 0}
          </div>
          <div className="text-xs font-mono text-amber-400">
            Unread Portal Messages
          </div>
        </div>

        <div className="p-6 rounded-lg glass-panel border border-white/10">
          <div className="flex items-center justify-between text-zinc-500 mb-3">
            <span className="text-[10px] font-mono tracking-widest uppercase">CONTENT CATALOG</span>
            <Layers className="w-4 h-4 text-zinc-400" />
          </div>
          <div className="text-3xl font-light text-white mb-1 font-mono">
            {(s?.totalServices ?? 0) + (s?.totalProducts ?? 0)}
          </div>
          <div className="text-xs font-mono text-zinc-400">
            {s?.totalServices} Services &bull; {s?.totalProducts} Products
          </div>
        </div>
      </div>

      {/* Grid: Recent Leads & Activity Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Recent Inbound Leads (Left 7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-medium text-white tracking-tight">
              Recent Enterprise Inbound Leads
            </h2>
            <Link
              href="/admin/leads"
              className="text-xs font-mono text-zinc-400 hover:text-white transition-colors"
            >
              VIEW ALL &rarr;
            </Link>
          </div>

          <div className="rounded-lg glass-panel border border-white/10 overflow-hidden divide-y divide-white/5">
            {data?.recentLeads.length === 0 ? (
              <div className="p-8 text-center text-xs font-mono text-zinc-500">
                NO INBOUND LEADS REGISTERED YET
              </div>
            ) : (
              data?.recentLeads.map((lead) => (
                <div key={lead.id} className="p-4 flex items-center justify-between hover:bg-white/[0.02]">
                  <div>
                    <div className="text-sm font-medium text-white">{lead.name}</div>
                    <div className="text-xs text-zinc-400">{lead.company}</div>
                    <div className="text-[10px] font-mono text-zinc-500 mt-1">
                      {lead.interestedSolution || 'General Inquiry'}
                    </div>
                  </div>

                  <div className="text-right">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-mono tracking-wider border uppercase ${
                        STATUS_COLORS[lead.status] || 'bg-white/5 text-zinc-400'
                      }`}
                    >
                      {lead.status}
                    </span>
                    <div className="text-[10px] font-mono text-zinc-500 mt-1">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Activity Timeline (Right 5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <h2 className="text-base font-medium text-white tracking-tight flex items-center gap-2">
            <Activity className="w-4 h-4 text-zinc-400" />
            <span>Audit &amp; Action Log</span>
          </h2>

          <div className="rounded-lg glass-panel border border-white/10 p-6 space-y-4">
            {data?.recentActivities.length === 0 ? (
              <div className="text-xs font-mono text-zinc-500 text-center py-4">
                NO AUDIT ACTIVITIES RECORDED
              </div>
            ) : (
              data?.recentActivities.map((act) => (
                <div key={act.id} className="flex items-start gap-3 pb-3 border-b border-white/5 last:border-0 last:pb-0">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <div className="flex-1">
                    <div className="text-xs font-medium text-white">{act.title}</div>
                    {act.lead && (
                      <div className="text-[11px] font-mono text-zinc-400">
                        {act.lead.company}
                      </div>
                    )}
                    {act.description && (
                      <p className="text-[11px] text-zinc-400 font-light mt-0.5">
                        {act.description}
                      </p>
                    )}
                    <div className="text-[9px] font-mono text-zinc-500 mt-1">
                      {new Date(act.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} &bull; {new Date(act.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
