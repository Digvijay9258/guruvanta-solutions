'use client';

import React, { useEffect, useState } from 'react';
import { MessageSquare, Mail, Phone, CheckCircle, Archive, Search, Filter } from 'lucide-react';

interface ContactMessageItem {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  subject?: string | null;
  message: string;
  status: string;
  createdAt: string;
}

export default function AdminContactMessagesPage() {
  const [messages, setMessages] = useState<ContactMessageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  const fetchMessages = async () => {
    try {
      const res = await fetch('/api/admin/contact-messages');
      const data = await res.json();
      if (data.messages) {
        setMessages(data.messages);
      }
    } catch (err) {
      console.error('Failed to load contact messages:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch('/api/admin/contact-messages', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });

      if (res.ok) {
        setMessages((prev) =>
          prev.map((m) => (m.id === id ? { ...m, status: newStatus } : m))
        );
      }
    } catch (err) {
      console.error('Failed to update status:', err);
    }
  };

  const filtered = messages.filter((m) => {
    const matchesStatus = statusFilter === 'ALL' || m.status === statusFilter;
    const matchesSearch =
      !search ||
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase()) ||
      (m.subject && m.subject.toLowerCase().includes(search.toLowerCase())) ||
      m.message.toLowerCase().includes(search.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-1">
            INBOUND DISPATCHES
          </div>
          <h1 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
            Contact Messages Archive
          </h1>
        </div>
        <div className="text-xs font-mono text-zinc-400">
          Total Messages: <span className="text-white font-medium">{messages.length}</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-72">
          <input
            type="text"
            placeholder="Search dispatches..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded bg-black/60 border border-white/10 text-xs text-white placeholder-zinc-500 font-mono focus:outline-none focus:border-white/30"
          />
          <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
          {['ALL', 'UNREAD', 'READ', 'RESPONDED', 'ARCHIVED'].map((st) => (
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

      {/* Messages List */}
      <div className="space-y-4">
        {loading ? (
          <div className="rounded-lg glass-panel border border-white/10 p-12 text-center text-xs font-mono text-zinc-500">
            LOADING DISPATCH ARCHIVE...
          </div>
        ) : filtered.length === 0 ? (
          <div className="rounded-lg glass-panel border border-white/10 p-12 text-center text-xs font-mono text-zinc-500">
            NO CONTACT MESSAGES FOUND
          </div>
        ) : (
          filtered.map((msg) => (
            <div
              key={msg.id}
              className="p-6 rounded-lg glass-panel border border-white/10 space-y-4 hover:border-white/20 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-base font-medium text-white">{msg.subject || 'Direct Inbound Inquiry'}</h3>
                  <div className="text-xs font-mono text-zinc-400 mt-1 flex flex-wrap items-center gap-3">
                    <span className="text-white font-medium">{msg.name}</span>
                    <span className="flex items-center gap-1 text-zinc-400">
                      <Mail className="w-3 h-3 text-zinc-500" />
                      {msg.email}
                    </span>
                    {msg.phone && (
                      <span className="flex items-center gap-1 text-zinc-400">
                        <Phone className="w-3 h-3 text-zinc-500" />
                        {msg.phone}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-1">
                  <span
                    className={`px-2.5 py-0.5 rounded text-[10px] font-mono tracking-wider border uppercase ${
                      msg.status === 'UNREAD'
                        ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                        : msg.status === 'RESPONDED'
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        : 'bg-white/5 text-zinc-400 border-white/10'
                    }`}
                  >
                    {msg.status}
                  </span>
                  <div className="text-[10px] font-mono text-zinc-500 mt-1">
                    {new Date(msg.createdAt).toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded bg-black/60 border border-white/5 text-xs text-zinc-300 font-light leading-relaxed whitespace-pre-wrap">
                {msg.message}
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-white/5">
                {msg.status !== 'READ' && (
                  <button
                    onClick={() => handleUpdateStatus(msg.id, 'READ')}
                    className="px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-[11px] font-mono text-zinc-300 border border-white/10 transition-colors"
                  >
                    Mark as Read
                  </button>
                )}
                {msg.status !== 'RESPONDED' && (
                  <button
                    onClick={() => handleUpdateStatus(msg.id, 'RESPONDED')}
                    className="px-3 py-1 rounded bg-emerald-500/10 hover:bg-emerald-500/20 text-[11px] font-mono text-emerald-400 border border-emerald-500/20 transition-colors"
                  >
                    Mark Responded
                  </button>
                )}
                {msg.status !== 'ARCHIVED' && (
                  <button
                    onClick={() => handleUpdateStatus(msg.id, 'ARCHIVED')}
                    className="px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-[11px] font-mono text-zinc-500 hover:text-zinc-300 border border-white/10 transition-colors"
                  >
                    Archive
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
