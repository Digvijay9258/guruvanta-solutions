'use client';

import React, { useEffect, useState } from 'react';
import {
  Search,
  Filter,
  UserCheck,
  Calendar,
  Clock,
  CheckCircle2,
  X,
  FileText,
  Activity,
  Phone,
  Mail,
  Building2,
} from 'lucide-react';

interface LeadItem {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  businessType?: string | null;
  city?: string | null;
  interestedSolution?: string | null;
  numberOfUsers?: string | null;
  currentSoftware?: string | null;
  requirement?: string | null;
  preferredContact?: string | null;
  status: string;
  assignedToId?: string | null;
  assignedTo?: { id: string; name: string; email: string } | null;
  followUpDate?: string | null;
  notes?: string | null;
  createdAt: string;
  activities: {
    id: string;
    type: string;
    title: string;
    description?: string | null;
    createdAt: string;
    createdBy?: { name: string } | null;
  }[];
}

const STATUSES = [
  'ALL',
  'NEW',
  'CONTACTED',
  'QUALIFIED',
  'DEMO_SCHEDULED',
  'PROPOSAL',
  'NEGOTIATION',
  'WON',
  'LOST',
];

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

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<LeadItem[]>([]);
  const [salesUsers, setSalesUsers] = useState<{ id: string; name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [activeLead, setActiveLead] = useState<LeadItem | null>(null);

  // Edit fields inside modal
  const [editStatus, setEditStatus] = useState('');
  const [editAssignedToId, setEditAssignedToId] = useState('');
  const [editFollowUpDate, setEditFollowUpDate] = useState('');
  const [newNote, setNewNote] = useState('');
  const [saving, setSaving] = useState(false);

  const fetchLeads = async () => {
    try {
      const query = new URLSearchParams();
      if (search) query.append('search', search);
      if (statusFilter !== 'ALL') query.append('status', statusFilter);

      const res = await fetch(`/api/admin/leads?${query.toString()}`);
      const data = await res.json();
      if (data.leads) {
        setLeads(data.leads);
        setSalesUsers(data.salesUsers || []);
      }
    } catch (err) {
      console.error('Fetch leads error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, [statusFilter]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchLeads();
  };

  const openLeadModal = (lead: LeadItem) => {
    setActiveLead(lead);
    setEditStatus(lead.status);
    setEditAssignedToId(lead.assignedToId || '');
    setEditFollowUpDate(
      lead.followUpDate ? new Date(lead.followUpDate).toISOString().slice(0, 10) : ''
    );
    setNewNote('');
  };

  const handleSaveLead = async () => {
    if (!activeLead) return;
    setSaving(true);

    try {
      const selectedAssignee = salesUsers.find((u) => u.id === editAssignedToId);
      const res = await fetch(`/api/admin/leads/${activeLead.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: editStatus,
          assignedToId: editAssignedToId || null,
          assignedToName: selectedAssignee?.name || null,
          followUpDate: editFollowUpDate ? editFollowUpDate : null,
          notes: newNote
            ? activeLead.notes
              ? `${activeLead.notes}\n[${new Date().toLocaleDateString()}]: ${newNote}`
              : `[${new Date().toLocaleDateString()}]: ${newNote}`
            : activeLead.notes,
          newNoteAdded: newNote || undefined,
        }),
      });

      if (res.ok) {
        await fetchLeads();
        // Update modal instance
        const updated = await fetch(`/api/admin/leads/${activeLead.id}`).then((r) => r.json());
        if (updated.lead) {
          setActiveLead(updated.lead);
          setNewNote('');
        }
      }
    } catch (err) {
      console.error('Update lead error:', err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Title & Stats */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-1">
            SALES PIPELINE
          </div>
          <h1 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
            Inbound Leads &amp; Opportunities
          </h1>
        </div>
        <div className="text-xs font-mono text-zinc-400">
          Total Inquiries: <span className="text-white font-medium">{leads.length}</span>
        </div>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <form onSubmit={handleSearchSubmit} className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search company, name, email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded bg-black/60 border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 font-mono"
          />
          <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" />
        </form>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          {STATUSES.map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-2.5 py-1 rounded text-[11px] font-mono whitespace-nowrap transition-colors border ${
                statusFilter === st
                  ? 'bg-white text-black border-white'
                  : 'bg-black/40 text-zinc-400 border-white/10 hover:border-white/20'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Leads Table */}
      <div className="rounded-lg glass-panel border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-black/60 text-zinc-400 border-b border-white/10 uppercase tracking-widest text-[10px]">
              <tr>
                <th className="py-3 px-4">Organization / Contact</th>
                <th className="py-3 px-4">Solution Interest</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Assignee</th>
                <th className="py-3 px-4">Follow-Up</th>
                <th className="py-3 px-4 text-right">Received</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-zinc-300">
              {loading ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-zinc-500">
                    SCANNING LEADS ARCHIVE...
                  </td>
                </tr>
              ) : leads.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-zinc-500">
                    NO LEADS MATCHING CRITERIA
                  </td>
                </tr>
              ) : (
                leads.map((lead) => (
                  <tr
                    key={lead.id}
                    onClick={() => openLeadModal(lead)}
                    className="hover:bg-white/[0.03] cursor-pointer transition-colors"
                  >
                    <td className="py-3 px-4">
                      <div className="font-medium text-white">{lead.company}</div>
                      <div className="text-[11px] text-zinc-400">{lead.name}</div>
                    </td>
                    <td className="py-3 px-4 text-zinc-300">
                      {lead.interestedSolution || 'General Consultation'}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[10px] border uppercase ${
                          STATUS_COLORS[lead.status] || 'bg-white/5 text-zinc-400'
                        }`}
                      >
                        {lead.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-zinc-400">
                      {lead.assignedTo?.name || 'Unassigned'}
                    </td>
                    <td className="py-3 px-4 text-zinc-400">
                      {lead.followUpDate
                        ? new Date(lead.followUpDate).toLocaleDateString()
                        : '—'}
                    </td>
                    <td className="py-3 px-4 text-right text-zinc-500">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Lead Detail & History Drawer Modal */}
      {activeLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg glass-panel border border-white/20 p-6 sm:p-8 space-y-6 text-white bg-[#0c0c10]">
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div>
                <span
                  className={`inline-block px-2 py-0.5 rounded text-[10px] font-mono border uppercase mb-2 ${
                    STATUS_COLORS[activeLead.status]
                  }`}
                >
                  {activeLead.status}
                </span>
                <h2 className="text-xl sm:text-2xl font-light text-white">
                  {activeLead.company}
                </h2>
                <div className="text-xs font-mono text-zinc-400 mt-1">
                  Contact: {activeLead.name} &bull; {activeLead.email} &bull; {activeLead.phone}
                </div>
              </div>

              <button
                onClick={() => setActiveLead(null)}
                className="p-1 rounded text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Inbound Requirements */}
            <div className="p-4 rounded bg-black/50 border border-white/5 space-y-2 text-xs">
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                INBOUND PARAMETERS
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-zinc-300">
                <div>
                  <span className="text-zinc-500 block text-[10px]">SOLUTION</span>
                  {activeLead.interestedSolution}
                </div>
                <div>
                  <span className="text-zinc-500 block text-[10px]">USERS / SEATS</span>
                  {activeLead.numberOfUsers || 'Not specified'}
                </div>
                <div>
                  <span className="text-zinc-500 block text-[10px]">CURRENT SOFTWARE</span>
                  {activeLead.currentSoftware || 'None / Not stated'}
                </div>
                <div>
                  <span className="text-zinc-500 block text-[10px]">CONTACT PREFERENCE</span>
                  {activeLead.preferredContact}
                </div>
              </div>
              {activeLead.requirement && (
                <div className="pt-2 border-t border-white/5">
                  <span className="text-zinc-500 block text-[10px]">USER SPECIFICATIONS</span>
                  <p className="text-zinc-300 font-light mt-0.5">{activeLead.requirement}</p>
                </div>
              )}
            </div>

            {/* Action Bar: Change Status & Assignee */}
            <div className="p-4 rounded bg-white/[0.02] border border-white/10 space-y-4">
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                MANAGE STATUS &amp; DISPATCH
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[10px] font-mono text-zinc-500 mb-1">
                    STATUS PIPELINE
                  </label>
                  <select
                    value={editStatus}
                    onChange={(e) => setEditStatus(e.target.value)}
                    className="w-full px-3 py-1.5 rounded bg-black border border-white/10 text-xs text-white"
                  >
                    {STATUSES.filter((s) => s !== 'ALL').map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-zinc-500 mb-1">
                    ASSIGN SALESPERSON
                  </label>
                  <select
                    value={editAssignedToId}
                    onChange={(e) => setEditAssignedToId(e.target.value)}
                    className="w-full px-3 py-1.5 rounded bg-black border border-white/10 text-xs text-white"
                  >
                    <option value="">Unassigned</option>
                    {salesUsers.map((u) => (
                      <option key={u.id} value={u.id}>
                        {u.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-zinc-500 mb-1">
                    FOLLOW-UP DATE
                  </label>
                  <input
                    type="date"
                    value={editFollowUpDate}
                    onChange={(e) => setEditFollowUpDate(e.target.value)}
                    className="w-full px-3 py-1.5 rounded bg-black border border-white/10 text-xs text-white"
                  >
                  </input>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-zinc-500 mb-1">
                  ADD NEW OPERATIONAL NOTE / SUMMARY
                </label>
                <textarea
                  rows={2}
                  placeholder="Record summary of client phone call, demo outcome, or pricing quotation..."
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  className="w-full px-3 py-2 rounded bg-black border border-white/10 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white/30"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={() => setActiveLead(null)}
                  className="px-4 py-2 rounded border border-white/10 text-xs font-mono text-zinc-400 hover:text-white"
                >
                  Close
                </button>
                <button
                  onClick={handleSaveLead}
                  disabled={saving}
                  className="px-4 py-2 rounded bg-white text-black font-medium text-xs font-mono tracking-wider hover:bg-zinc-200 transition-colors"
                >
                  {saving ? 'UPDATING...' : 'SAVE & LOG ACTIVITY'}
                </button>
              </div>
            </div>

            {/* Full History Timeline */}
            <div>
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Activity className="w-3.5 h-3.5" />
                <span>LEAD ACTIVITY TIMELINE</span>
              </div>

              <div className="p-4 rounded bg-black/40 border border-white/5 space-y-3 max-h-48 overflow-y-auto text-xs">
                {activeLead.activities.length === 0 ? (
                  <div className="text-zinc-600 text-[11px] py-2">No past timeline events.</div>
                ) : (
                  activeLead.activities.map((act) => (
                    <div key={act.id} className="pb-2 border-b border-white/5 last:border-0 last:pb-0">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-medium text-white">{act.title}</span>
                        <span className="text-zinc-500 font-mono text-[9px]">
                          {new Date(act.createdAt).toLocaleString()}
                        </span>
                      </div>
                      {act.description && (
                        <p className="text-zinc-400 font-light text-[11px] mt-0.5">
                          {act.description}
                        </p>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
