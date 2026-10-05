import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Pill, ArrowRight, CheckCircle2, ShieldCheck, AlertTriangle } from 'lucide-react';
import DemoRequestForm from '@/components/forms/DemoRequestForm';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Pharmacy Management & Drug Expiry Control Software',
  description:
    'Sub-second prescription counter billing, generic salt substitute search, automated batch and expiry alerts, and strict narcotic registry compliance.',
};

const MODULES = [
  { name: 'Batch & Expiry Watcher', desc: 'Predictive alerts 90, 60, and 30 days prior to medicine expiration date.' },
  { name: 'Generic & Salt Lookup', desc: 'Instantly find composition-equivalent generic alternatives when a brand is out of stock.' },
  { name: 'Sub-Second Counter Billing', desc: 'Optimized barcode scanner integration for high-speed retail checkout.' },
  { name: 'Schedule H & Narcotic Logs', desc: 'Strict regulatory audit log recording prescribing doctor, patient ID, and batch numbers.' },
  { name: 'Distributor Purchase Reconciliation', desc: 'Direct electronic purchase bill ingestion with automatic margin audits.' },
  { name: 'Supplier Aging Ledger', desc: 'Track credit days, pending return adjustments for expired stock, and payments.' },
];

export default function PharmacyERPPage() {
  return (
    <div className="w-full bg-black text-white pt-32 pb-24 px-6">
      <JsonLd
        type="SoftwareApplication"
        data={{
          name: 'Guruvanta Pharmacy Management Platform',
          applicationCategory: 'PharmacyApplication',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-zinc-400 uppercase mb-4">
            <Pill className="w-3.5 h-3.5 text-zinc-300" />
            <span>PHARMACEUTICAL SPECIALIZATION</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-6">
            Pharmacy ERP & <br />
            <span className="font-normal text-zinc-300">Expiry Control Engine.</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed mb-8">
            Engineered for retail chemists and wholesale pharmaceutical distributors. Eliminate inventory expiration write-offs, prevent billing delays, and guarantee complete regulatory drug compliance.
          </p>

          <Link
            href="#demo-form"
            className="inline-flex items-center gap-2 px-6 py-3 rounded bg-white text-black font-medium text-xs font-mono tracking-wider hover:bg-zinc-200 transition-colors"
          >
            <span>SCHEDULE PHARMACY DEMO</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {MODULES.map((mod) => (
            <div key={mod.name} className="p-6 rounded-lg glass-card border border-white/10">
              <h3 className="text-base font-medium text-white mb-2">{mod.name}</h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">{mod.desc}</p>
            </div>
          ))}
        </div>

        {/* Demo Form */}
        <div id="demo-form" className="max-w-2xl mx-auto pt-10 border-t border-white/10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-light text-white mb-3">
              Request Pharmacy ERP Demonstration
            </h2>
          </div>
          <DemoRequestForm />
        </div>
      </div>
    </div>
  );
}
