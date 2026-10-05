'use client';

import React, { useEffect, useState } from 'react';
import { CalendarClock, CheckCircle, XCircle, Search, Phone, Mail, Building2 } from 'lucide-react';

interface DemoItem {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  solution: string;
  numberOfUsers?: string | null;
  preferredDate?: string | null;
  timeSlot?: string | null;
  status: string;
  notes?: string | null;
  createdAt: string;
}

export default function AdminDemoRequestsPage() {
  const [demos, setDemos] = useState<DemoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  const fetchDemos = async () => {
    try {
      const res = await fetch('/api/admin/demo-requests');
      const data = await res.json();
      if (data.demoRequests) {
        setDemos(data.demoRequests);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDemos();
  }, []);

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch('/api/admin/demo-requests', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });

      if (res.ok) {
        setDemos((prev) =>
          prev.map((d) => (d.id === id ? { ...d, status: newStatus } : d))
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filtered = demos.filter((d) => {
    const matchesStatus = statusFilter === 'ALL' || d.status === statusFilter;
    const matchesSearch =
      !search ||
      d.company.toLowerCase().includes(search.toLowerCase()) ||
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.email.toLowerCase().includes(search.toLowerCase()) ||
      d.solution.toLowerCase().includes(search.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-1">
            DEMONSTRATION SCHEDULE
          </div>
          <h1 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
            Demo Requests Archive
          </h1>
        </div>
        <div className="text-xs font-mono text-zinc-400">
          Total Requests: <span className="text-white font-medium">{demos.length}</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-72">
          <input
            type="text"
            placeholder="Search demo requests..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded bg-black/60 border border-white/10 text-xs text-white placeholder-zinc-500 font-mono focus:outline-none focus:border-white/30"
          />
          <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
          {['ALL', 'PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED'].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1 rounded text-[11px] font-mono whitespace-nowrap border transition-colors ${
                statusFilter === st
                  ? 'bg-white text-black border-white'
                  : 'bg-black/40 text-zinc-400 border-white/10 hover:border-white/25'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-lg glass-panel border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-black/60 text-zinc-400 border-b border-white/10 uppercase tracking-widest text-[10px]">
              <tr>
                <th className="py-3 px-4">Organization / Contact</th>
                <th className="py-3 px-4">Target System</th>
                <th className="py-3 px-4">Requested Timing</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-zinc-300">
              {loading ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-zinc-500">
                    LOADING DEMO SESSIONS...
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-zinc-500">
                    NO DEMO REQUESTS LOCATED
                  </td>
                </tr>
              ) : (
                filtered.map((d) => (
                  <tr key={d.id} className="hover:bg-white/[0.02]">
                    <td className="py-3 px-4">
                      <div className="font-medium text-white">{d.company}</div>
                      <div className="text-[11px] text-zinc-400">
                        {d.name} &bull; {d.email} &bull; {d.phone}
                      </div>
                    </td>
                    <td className="py-3 px-4 font-medium text-white">{d.solution}</td>
                    <td className="py-3 px-4 text-zinc-400">
                      {d.preferredDate || 'Earliest available'} &bull; {d.timeSlot || 'Anytime'}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] border uppercase ${
                          d.status === 'PENDING'
                            ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                            : d.status === 'CONFIRMED'
                            ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                            : d.status === 'COMPLETED'
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                            : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                        }`}
                      >
                        {d.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right space-x-2">
                      {d.status !== 'CONFIRMED' && (
                        <button
                          onClick={() => handleUpdateStatus(d.id, 'CONFIRMED')}
                          className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-[10px] text-cyan-400 border border-cyan-500/20"
                        >
                          Confirm
                        </button>
                      )}
                      {d.status !== 'COMPLETED' && (
                        <button
                          onClick={() => handleUpdateStatus(d.id, 'COMPLETED')}
                          className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-[10px] text-emerald-400 border border-emerald-500/20"
                        >
                          Complete
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
