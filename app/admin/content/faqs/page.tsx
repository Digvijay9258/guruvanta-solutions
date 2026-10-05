'use client';

import React, { useEffect, useState } from 'react';
import { HelpCircle, Plus } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
}

export default function AdminFAQsCMSPage() {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/content/faqs')
      .then((res) => res.json())
      .then((data) => {
        if (data.faqs) setFaqs(data.faqs);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-6 border-b border-white/10">
        <div>
          <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-1">
            CONTENT MANAGEMENT SYSTEM
          </div>
          <h1 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
            Frequently Asked Questions ({loading ? '...' : faqs.length})
          </h1>
        </div>
      </div>

      {loading ? (
        <div className="p-12 text-center text-xs font-mono text-zinc-500">Loading FAQs repository...</div>
      ) : (
        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.id} className="p-6 rounded-lg glass-panel border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400">
                    {f.category}
                  </span>
                  <h3 className="text-sm font-medium text-white">{f.question}</h3>
                </div>
                <span className="text-[10px] font-mono text-emerald-400">PUBLISHED</span>
              </div>
              <p className="text-xs text-zinc-400 font-light leading-relaxed pl-1">
                {f.answer}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
