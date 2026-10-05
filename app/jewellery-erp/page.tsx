import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Gem, ArrowRight, CheckCircle2, ShieldCheck, Scale } from 'lucide-react';
import DemoRequestForm from '@/components/forms/DemoRequestForm';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Jewellery Retail & Manufacturing ERP Software',
  description:
    'Gold inventory, live bullion rates, Karat purity management, stone weight calculations, Karigar scrap ledgers, and customer gold savings scheme software.',
};

const MODULES = [
  { name: 'Live Metal Rate Engine', desc: 'Real-time gold, silver, and platinum spot rate feeds driving showroom counter tags.' },
  { name: 'Karat Purity & Melting Matrix', desc: 'Precise conversions for 24K, 22K, 18K, and 14K metal with automated alloy deductions.' },
  { name: 'Weight Calculation (Gross / Stone / Net)', desc: 'Direct electronic weighing scale interface for accurate stone and diamond valuations.' },
  { name: 'Karigar (Artisan) Job Cards', desc: 'Track raw bullion issued to artisans, crafting scrap returns, and making loss tolerances.' },
  { name: 'Old Gold Exchange & Melting', desc: 'Instant purity testing logs, touch calculation, and credit balance ledger for exchanged gold.' },
  { name: 'Customer Monthly Gold Scheme', desc: 'Manage 11+1 installment savings schemes, automated WhatsApp reminders, and bonus payouts.' },
];

export default function JewelleryERPPage() {
  return (
    <div className="w-full bg-black text-white pt-32 pb-24 px-6">
      <JsonLd
        type="SoftwareApplication"
        data={{
          name: 'Guruvanta Jewellery Retail & Manufacturing ERP',
          applicationCategory: 'JewelleryERPApplication',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-zinc-400 uppercase mb-4">
            <Gem className="w-3.5 h-3.5 text-zinc-300" />
            <span>PRECIOUS METALS &amp; JEWELLERY ARCHITECTURE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-6">
            Jewellery ERP & <br />
            <span className="font-normal text-zinc-300">Bullion Operating System.</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed mb-8">
            Engineered for high-end retail showrooms, bullion traders, and ornament fabricators. Automate weight calculations, Karigar scrap reconciliation, and live metal price tagging.
          </p>

          <Link
            href="#demo-form"
            className="inline-flex items-center gap-2 px-6 py-3 rounded bg-white text-black font-medium text-xs font-mono tracking-wider hover:bg-zinc-200 transition-colors"
          >
            <span>SCHEDULE JEWELLERY ERP DEMO</span>
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
              Request Jewellery Showroom Demo
            </h2>
          </div>
          <DemoRequestForm />
        </div>
      </div>
    </div>
  );
}
