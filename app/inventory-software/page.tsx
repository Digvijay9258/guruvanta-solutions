import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Boxes, ArrowRight, CheckCircle2, ShieldCheck, Barcode, TrendingDown } from 'lucide-react';
import DemoRequestForm from '@/components/forms/DemoRequestForm';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Warehouse & Multi-Location Inventory Software System',
  description:
    'Multi-warehouse stock control, purchase order workflows, supplier records, automated low-stock replenishment alerts, and FIFO inventory valuation.',
};

const FEATURES = [
  'Multi-warehouse bin, aisle, and shelf inventory tracking',
  'Automated purchase order generation upon reaching minimum safety stock',
  'Supplier performance records, lead-time audits, and quality rejection logs',
  'Automated low-stock alerts delivered via SMS, Email, and WhatsApp',
  'Inter-warehouse transfer notes with transit loss verification',
  'FIFO, LIFO, and Moving Weighted Average real-time valuation reports',
];

export default function InventorySoftwarePage() {
  return (
    <div className="w-full bg-black text-white pt-32 pb-24 px-6">
      <JsonLd
        type="SoftwareApplication"
        data={{
          name: 'Guruvanta Inventory Management Platform',
          applicationCategory: 'InventoryApplication',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-zinc-400 uppercase mb-4">
            <Boxes className="w-3.5 h-3.5 text-zinc-300" />
            <span>SUPPLY CHAIN PRECISION</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-6">
            Inventory Software & <br />
            <span className="font-normal text-zinc-300">Warehouse Operating System.</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed mb-8">
            Gain real-time visibility over raw materials and finished goods across dozens of physical hubs. Eliminate stockouts and dead capital with predictive replenishment triggers.
          </p>

          <Link
            href="#demo-form"
            className="inline-flex items-center gap-2 px-6 py-3 rounded bg-white text-black font-medium text-xs font-mono tracking-wider hover:bg-zinc-200 transition-colors"
          >
            <span>SCHEDULE INVENTORY DEMO</span>
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
              Request Inventory System Demo
            </h2>
          </div>
          <DemoRequestForm />
        </div>
      </div>
    </div>
  );
}
