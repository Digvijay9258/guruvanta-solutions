'use client';

import React, { useEffect, useState } from 'react';
import { Plus, Check, X, Layers, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  shortDesc: string;
  description: string;
  published: boolean;
  order: number;
}

export default function AdminServicesCMSPage() {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  // Form states
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState('Software Development');
  const [shortDesc, setShortDesc] = useState('');
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const fetchServices = async () => {
    try {
      const res = await fetch('/api/admin/content/services');
      const data = await res.json();
      if (data.services) setServices(data.services);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleCreateService = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/admin/content/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          slug: slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
          category,
          shortDesc,
          description,
          features: ['Custom Enterprise Workflow', 'Audit Logs & RBAC', 'High Performance API'],
          order: services.length + 1,
        }),
      });

      if (res.ok) {
        setShowModal(false);
        setTitle('');
        setSlug('');
        setShortDesc('');
        setDescription('');
        await fetchServices();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-1">
            CONTENT MANAGEMENT SYSTEM
          </div>
          <h1 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
            Services &amp; Engineering Disciplines ({services.length})
          </h1>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded bg-white text-black font-medium text-xs font-mono tracking-wider hover:bg-zinc-200 transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>ADD NEW SERVICE</span>
        </button>
      </div>

      <div className="rounded-lg glass-panel border border-white/10 overflow-hidden">
        <table className="w-full text-left text-xs font-mono">
          <thead className="bg-black/60 text-zinc-400 border-b border-white/10 uppercase tracking-widest text-[10px]">
            <tr>
              <th className="py-3 px-4">Service Title</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Slug</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-zinc-300">
            {loading ? (
              <tr>
                <td colSpan={5} className="py-8 text-center text-zinc-500">
                  LOADING SERVICES...
                </td>
              </tr>
            ) : (
              services.map((svc) => (
                <tr key={svc.id} className="hover:bg-white/[0.02]">
                  <td className="py-3 px-4 font-medium text-white">{svc.title}</td>
                  <td className="py-3 px-4 text-zinc-400">{svc.category}</td>
                  <td className="py-3 px-4 text-zinc-500">/{svc.slug}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      PUBLISHED
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <Link
                      href={`/services/${svc.slug}`}
                      target="_blank"
                      className="inline-flex items-center gap-1 text-[11px] text-zinc-400 hover:text-white"
                    >
                      <span>VIEW</span>
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal to add service */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <form
            onSubmit={handleCreateService}
            className="w-full max-w-xl rounded-lg glass-panel border border-white/20 p-6 sm:p-8 space-y-4 bg-[#0c0c10] text-white"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="text-lg font-medium text-white">Create New Service Module</h3>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1">SERVICE TITLE</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Distributed Ledger Systems"
                className="w-full px-3 py-2 rounded bg-black border border-white/10 text-xs text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1">URL SLUG</label>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="e.g. distributed-ledger-systems"
                className="w-full px-3 py-2 rounded bg-black border border-white/10 text-xs text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1">CATEGORY</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 rounded bg-black border border-white/10 text-xs text-white"
              >
                <option value="Software Development">Software Development</option>
                <option value="ERP & Business Systems">ERP &amp; Business Systems</option>
                <option value="Industry Solutions">Industry Solutions</option>
                <option value="Automation & AI">Automation &amp; AI</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1">SHORT SUMMARY</label>
              <input
                type="text"
                required
                value={shortDesc}
                onChange={(e) => setShortDesc(e.target.value)}
                placeholder="Brief single-sentence capability summary"
                className="w-full px-3 py-2 rounded bg-black border border-white/10 text-xs text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1">FULL DESCRIPTION</label>
              <textarea
                rows={3}
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Detailed technical specifications and architecture overview..."
                className="w-full px-3 py-2 rounded bg-black border border-white/10 text-xs text-white"
              />
            </div>

            <div className="flex justify-end gap-3 pt-3 border-t border-white/10">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded border border-white/10 text-xs font-mono text-zinc-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="px-4 py-2 rounded bg-white text-black font-medium text-xs font-mono tracking-wider hover:bg-zinc-200"
              >
                {submitting ? 'PUBLISHING...' : 'PUBLISH SERVICE'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
