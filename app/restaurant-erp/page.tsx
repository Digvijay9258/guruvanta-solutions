import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { UtensilsCrossed, ArrowRight, CheckCircle2, ShieldCheck, Zap, Layers, RefreshCw } from 'lucide-react';
import DemoRequestForm from '@/components/forms/DemoRequestForm';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Restaurant ERP & Kitchen Management System (KDS)',
  description:
    'Ultra-fast table orders, Kitchen Display Systems (KDS), KOT routing, recipe inventory depletion, and multi-outlet restaurant management software.',
};

const MODULES = [
  { name: 'Visual Floor & Tables', desc: 'Interactive floor plan, live occupancy status, and table transfers.' },
  { name: 'Digital Menu & Variants', desc: 'Add-ons, portion sizes, dietary tags, and dynamic price tiers.' },
  { name: 'Captain Mobile Ordering', desc: 'Punch orders directly tableside on smartphones or tablets.' },
  { name: 'KOT Dispatch Engine', desc: 'Sub-second routing to multiple kitchen stations (Bar, Grill, Tandoor).' },
  { name: 'Kitchen Display System (KDS)', desc: 'Real-time order ticket timers, item strike-offs, and prep telemetry.' },
  { name: 'Split Billing & Payment', desc: 'Split by seat, item, or percentage. Cash, Cards, UPI & gift cards.' },
  { name: 'Compliant GST Invoicing', desc: 'Instant print to thermal printer, digital WhatsApp bills, and tax reports.' },
  { name: 'Recipe Inventory Depletion', desc: 'Raw material stock (cheese, flour, meats, spirits) depletes per order.' },
  { name: 'Staff Shifts & Captain Audits', desc: 'Role permissions, cashier day tally, and waiter sales performance.' },
  { name: 'Multi-Outlet Central Control', desc: 'Centralized recipe master, commissary transfers, and franchise royalty.' },
];

const WORKFLOW = [
  'Menu',
  'Table',
  'Order',
  'KOT',
  'Kitchen',
  'Billing',
  'Payment',
  'Reports',
];

export default function RestaurantERPPage() {
  return (
    <div className="w-full bg-black text-white pt-32 pb-24 px-6">
      <JsonLd
        type="SoftwareApplication"
        data={{
          name: 'Guruvanta Restaurant ERP & POS',
          applicationCategory: 'RestaurantManagementApplication',
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-zinc-400 uppercase mb-4">
            <UtensilsCrossed className="w-3.5 h-3.5 text-zinc-300" />
            <span>INDUSTRY SPECIALIZED ERP</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-6">
            Restaurant ERP & <br />
            <span className="font-normal text-zinc-300">Kitchen Display System.</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed mb-8">
            Engineered for high-volume dining rooms, quick-service counters, and multi-location cloud kitchens. Streamline your entire floor from tableside ordering to ingredient depletion.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#demo-form"
              className="px-6 py-3 rounded bg-white text-black font-medium text-xs font-mono tracking-wider hover:bg-zinc-200 transition-colors flex items-center gap-2"
            >
              <span>REQUEST RESTAURANT DEMO</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 8-Stage Operational Workflow */}
        <div className="mb-20 p-8 rounded-lg glass-panel border border-white/10">
          <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-3">
            DETERMINISTIC RESTAURANT WORKFLOW
          </div>
          <h2 className="text-2xl font-light text-white mb-8">
            Sub-Second Lifecycle from Table to Report
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {WORKFLOW.map((step, idx) => (
              <div
                key={step}
                className="p-4 rounded bg-black/50 border border-white/10 text-center relative group hover:border-white/30 transition-colors"
              >
                <div className="text-[10px] font-mono text-zinc-500 mb-1">0{idx + 1}</div>
                <div className="text-sm font-medium text-white tracking-tight">{step}</div>
                {idx < WORKFLOW.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-zinc-600 z-10">
                    &rarr;
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Modules Grid */}
        <div className="mb-20">
          <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-3">
            SYSTEM ARCHITECTURE
          </div>
          <h2 className="text-3xl font-light text-white mb-10">
            Specialized Restaurant Modules
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MODULES.map((mod) => (
              <div key={mod.name} className="p-6 rounded-lg glass-card border border-white/10">
                <h3 className="text-base font-medium text-white mb-2">{mod.name}</h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Form Anchor */}
        <div id="demo-form" className="max-w-2xl mx-auto pt-10 border-t border-white/10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-light text-white mb-3">
              Experience the Restaurant Platform
            </h2>
            <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              Live floor plan & KDS demonstration configured for your outlets
            </p>
          </div>
          <DemoRequestForm />
        </div>
      </div>
    </div>
  );
}
