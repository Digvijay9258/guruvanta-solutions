import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Receipt, ArrowRight, CheckCircle2, ShieldCheck, FileSpreadsheet, Percent } from 'lucide-react';
import DemoRequestForm from '@/components/forms/DemoRequestForm';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Enterprise Billing & GST Invoicing Software Platform',
  description:
    'High-velocity GST invoicing, automated e-Way bill & e-Invoice generation, customer ledger reconciliation, and tax compliance audit reports.',
};

const FEATURES = [
  'Instant compliant GST invoices with HSN/SAC auto-mapping',
  'Automated e-Way Bill & IRN e-Invoice portal integration',
  'Customer ledger aging with automated WhatsApp payment links',
  'Multi-currency and multi-tax regime invoicing engines',
  'Integrated barcode scanning for high-velocity counter billing',
  'Comprehensive GSTR-1, GSTR-2B, and GSTR-3B audit reconciliation reports',
];

export default function BillingSoftwarePage() {
  return (
    <div className="w-full bg-black text-white pt-32 pb-24 px-6">
      <JsonLd
        type="SoftwareApplication"
        data={{
          name: 'Guruvanta Billing & GST Software',
          applicationCategory: 'BillingApplication',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-zinc-400 uppercase mb-4">
            <Receipt className="w-3.5 h-3.5 text-zinc-300" />
            <span>ENTERPRISE INVOICING CORE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-6">
            Billing &amp; GST Software <br />
            <span className="font-normal text-zinc-300">Engineered for High-Velocity.</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed mb-8">
            Process thousands of tax-compliant invoices per hour without latency. Maintain complete visibility over accounts receivable, aging customer debt, and statutory tax obligations.
          </p>

          <div className="relative rounded-2xl overflow-hidden border border-white/20 mb-10 shadow-[0_0_80px_rgba(255,255,255,0.06)] group">
            <img
              src="/images/financial-ledger-3d.jpg"
              alt="High-Throughput Financial Settlement Crystal"
              className="w-full h-72 sm:h-96 object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-zinc-300 bg-black/60 backdrop-blur-md px-4 py-2.5 rounded border border-white/10">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                APPEND-ONLY LEDGER STREAM
              </span>
              <span>SETTLEMENT: &lt; 8ms</span>
            </div>
          </div>

          <Link
            href="#demo-form"
            className="inline-flex items-center gap-2 px-6 py-3 rounded bg-white text-black font-medium text-xs font-mono tracking-wider hover:bg-zinc-200 transition-colors"
          >
            <span>REQUEST BILLING SYSTEM DEMO</span>
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
              Experience the Billing Engine
            </h2>
          </div>
          <DemoRequestForm />
        </div>
      </div>
    </div>
  );
}
