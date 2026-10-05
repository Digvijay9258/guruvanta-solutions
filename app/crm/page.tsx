import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Target, ArrowRight, CheckCircle2, ShieldCheck, Zap, MessageSquare } from 'lucide-react';
import DemoRequestForm from '@/components/forms/DemoRequestForm';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Enterprise CRM Software & Sales Pipeline Telemetry',
  description:
    'Visual deal pipelines, omni-channel interaction histories, automated WhatsApp follow-ups, and sales rep performance analytics.',
};

const FEATURES = [
  'Instant lead capture from landing pages, paid ads, and WhatsApp Business',
  'Visual drag-and-drop pipeline stages with deal velocity telemetry',
  'Omni-channel activity timeline tracking calls, meetings, notes, and emails',
  'Automated follow-up scheduling with SLA breach alerts for sales managers',
  'Team task delegation, automated assignment rounds, and quota scorecards',
  'Predictive win-probability scoring based on prospect engagement signals',
];

export default function CRMPage() {
  return (
    <div className="w-full bg-black text-white pt-32 pb-24 px-6">
      <JsonLd
        type="SoftwareApplication"
        data={{
          name: 'Guruvanta Enterprise CRM System',
          applicationCategory: 'CustomerRelationshipManagementApplication',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-zinc-400 uppercase mb-4">
            <Target className="w-3.5 h-3.5 text-zinc-300" />
            <span>COMMERCIAL GROWTH PLATFORM</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-6">
            Enterprise CRM & <br />
            <span className="font-normal text-zinc-300">Sales Pipeline Telemetry.</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed mb-8">
            Empower your sales executives to close high-value contracts faster. Zero dropped leads, automated follow-up cadences, and real-time deal telemetry.
          </p>

          <Link
            href="#demo-form"
            className="inline-flex items-center gap-2 px-6 py-3 rounded bg-white text-black font-medium text-xs font-mono tracking-wider hover:bg-zinc-200 transition-colors"
          >
            <span>SCHEDULE CRM DEMO</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {FEATURES.map((feat, idx) => (
            <div key={idx} className="p-6 rounded-lg glass-card border border-white/10 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-sm text-zinc-300 font-light leading-relaxed">{feat}</span>
            </div>
          ))}
        </div>

        {/* Demo Form */}
        <div id="demo-form" className="max-w-2xl mx-auto pt-10 border-t border-white/10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-light text-white mb-3">
              Request Live CRM Walkthrough
            </h2>
          </div>
          <DemoRequestForm />
        </div>
      </div>
    </div>
  );
}
