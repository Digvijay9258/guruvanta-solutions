import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, ArrowRight, CheckCircle2, ShieldCheck, Calendar, Bed, Sparkles } from 'lucide-react';
import DemoRequestForm from '@/components/forms/DemoRequestForm';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Hotel Property Management System (PMS) & ERP Software',
  description:
    'Front-desk reservations, housekeeping telemetry, room tariff management, guest folios, and OTA channel manager for luxury hotels and resorts.',
};

const MODULES = [
  { name: 'Room Inventory & Matrix', desc: 'Visual grid displaying deluxe, suites, executive rooms with occupancy color coding.' },
  { name: 'Room Categories & Tariffs', desc: 'Dynamic seasonal pricing, corporate discounts, and extra bed rate matrices.' },
  { name: 'Direct & OTA Reservations', desc: 'Real-time two-way synchronization with Booking.com, Agoda, Expedia, and Airbnb.' },
  { name: 'Guest Profiles & Digital KYC', desc: 'Passport & national ID image vault, guest preferences, and VIP arrival alerts.' },
  { name: 'Express Check-In & Digital Key', desc: 'Cut check-in delays to seconds with contactless QR key issuance and digital signatures.' },
  { name: 'Unified Guest Folio', desc: 'Aggregate room charges, restaurant dining, minibar, laundry, and spa to a single ledger.' },
  { name: 'Housekeeping Mobile Status', desc: 'Clean, Inspected, Dirty, and Out-of-Order room states updating in real-time from mobile.' },
  { name: 'Express Checkout & GST Bill', desc: 'Split billing across multiple corporate payment tenders with compliant tax formatting.' },
  { name: 'Banquet & Event Space', desc: 'Conference hall calendars, catering packages, and advance milestone deposits.' },
  { name: 'Night Audit & RevPAR Reports', desc: 'Automated midnight ledger lock, average daily rate (ADR), RevPAR, and occupancy audits.' },
];

export default function HotelERPPage() {
  return (
    <div className="w-full bg-black text-white pt-32 pb-24 px-6">
      <JsonLd
        type="SoftwareApplication"
        data={{
          name: 'Guruvanta Hotel Property Management System',
          applicationCategory: 'HotelManagementApplication',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-zinc-400 uppercase mb-4">
            <Building2 className="w-3.5 h-3.5 text-zinc-300" />
            <span>HOSPITALITY ARCHITECTURE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-6">
            Hotel Property Management <br />
            <span className="font-normal text-zinc-300">&amp; Guest Folio Platform.</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed mb-8">
            Unite your front desk, housekeeping staff, fine-dining restaurants, and OTA booking channels into one seamless hotel operating system.
          </p>

          <Link
            href="#demo-form"
            className="inline-flex items-center gap-2 px-6 py-3 rounded bg-white text-black font-medium text-xs font-mono tracking-wider hover:bg-zinc-200 transition-colors"
          >
            <span>SCHEDULE HOTEL PMS DEMO</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Modules Grid */}
        <div className="mb-20">
          <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-3">
            PMS MODULE SUITE
          </div>
          <h2 className="text-3xl font-light text-white mb-10">
            Integrated Operations for Modern Properties
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

        {/* Demo Form */}
        <div id="demo-form" className="max-w-2xl mx-auto pt-10 border-t border-white/10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-light text-white mb-3">
              Request Hotel PMS Walkthrough
            </h2>
            <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              Tailored demonstration for boutique hotels, business properties, and luxury resorts
            </p>
          </div>
          <DemoRequestForm />
        </div>
      </div>
    </div>
  );
}
