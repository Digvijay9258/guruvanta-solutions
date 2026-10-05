import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Store, ArrowRight, CheckCircle2, ShieldCheck, WifiOff, ScanBarcode } from 'lucide-react';
import DemoRequestForm from '@/components/forms/DemoRequestForm';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Offline-Resilient Retail Point of Sale (POS) Software',
  description:
    'Lightning-fast checkout, barcode scanning, multi-tender payment processing, customer loyalty points, and offline-first local SQLite resilience.',
};

const FEATURES = [
  'Offline-first checkout terminal that continues billing through network outages',
  'Integrated barcode scanner, cash drawer, and thermal receipt printer drivers',
  'Multi-tender payment splits across Cash, Card, UPI QR, and store credits',
  'Instant customer phone number lookup with loyalty points accrual and redemption',
  'Inter-store real-time inventory lookup and automated transfer requests',
  'Shift-end register cash count and cashier audit discrepancy logs',
];

export default function POSPage() {
  return (
    <div className="w-full bg-black text-white pt-32 pb-24 px-6">
      <JsonLd
        type="SoftwareApplication"
        data={{
          name: 'Guruvanta Retail Point of Sale (POS)',
          applicationCategory: 'PointOfSaleApplication',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-zinc-400 uppercase mb-4">
            <Store className="w-3.5 h-3.5 text-zinc-300" />
            <span>RETAIL CHECKOUT PLATFORM</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-6">
            Retail POS &amp; <br />
            <span className="font-normal text-zinc-300">Offline Counter Checkout.</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed mb-8">
            Engineered for supermarkets, retail chains, and multi-counter department stores. Sub-second scanning speed with offline-first architecture that never halts checkout queues.
          </p>

          <Link
            href="#demo-form"
            className="inline-flex items-center gap-2 px-6 py-3 rounded bg-white text-black font-medium text-xs font-mono tracking-wider hover:bg-zinc-200 transition-colors"
          >
            <span>SCHEDULE POS DEMO</span>
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
              Request POS Terminal Demo
            </h2>
          </div>
          <DemoRequestForm />
        </div>
      </div>
    </div>
  );
}
