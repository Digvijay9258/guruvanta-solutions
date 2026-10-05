import React from 'react';
import prisma from '@/lib/prisma';
import Link from 'next/link';
import { Building2, ExternalLink } from 'lucide-react';

export default async function AdminIndustriesCMSPage() {
  const industries = await prisma.industry.findMany({
    orderBy: { order: 'asc' },
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-6 border-b border-white/10">
        <div>
          <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-1">
            CONTENT MANAGEMENT SYSTEM
          </div>
          <h1 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
            Industry ERP Solutions ({industries.length})
          </h1>
        </div>
      </div>

      <div className="rounded-lg glass-panel border border-white/10 overflow-hidden">
        <table className="w-full text-left text-xs font-mono">
          <thead className="bg-black/60 text-zinc-400 border-b border-white/10 uppercase tracking-widest text-[10px]">
            <tr>
              <th className="py-3 px-4">Industry Sector</th>
              <th className="py-3 px-4">Headline</th>
              <th className="py-3 px-4">Slug</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-zinc-300">
            {industries.map((ind) => (
              <tr key={ind.id} className="hover:bg-white/[0.02]">
                <td className="py-3 px-4 font-medium text-white">{ind.title}</td>
                <td className="py-3 px-4 text-zinc-400 truncate max-w-xs">{ind.headline}</td>
                <td className="py-3 px-4 text-zinc-500">/{ind.slug}</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    PUBLISHED
                  </span>
                </td>
                <td className="py-3 px-4 text-right">
                  <Link
                    href={`/industries/${ind.slug}`}
                    target="_blank"
                    className="inline-flex items-center gap-1 text-[11px] text-zinc-400 hover:text-white"
                  >
                    <span>VIEW</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
