import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Stethoscope, ArrowRight, CheckCircle2, ShieldCheck, Activity, FileText } from 'lucide-react';
import DemoRequestForm from '@/components/forms/DemoRequestForm';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Hospital Management Information System (HMIS) & Clinical ERP',
  description:
    'Comprehensive hospital software for clinical workflows, patient EMR, OPD/IPD admission, pathology laboratory machine interfacing, and cashless TPA insurance billing.',
};

const MODULES = [
  { name: 'Patient Registration & EMR', desc: 'Unique health ID, biometric registration, digital medical history, and allergy alerts.' },
  { name: 'OPD Consultation Queue', desc: 'Doctor token display, appointment slots, and fast electronic prescription pad.' },
  { name: 'IPD Admission & Bed Allocation', desc: 'Visual ward layouts, ICU telemetry, nurse station charts, and transfer logs.' },
  { name: 'Pathology & Diagnostic LIS', desc: 'Direct bidirectional machine interfacing with automated test result entry.' },
  { name: 'In-House Hospital Pharmacy', desc: 'Ward drug requisition, expiry prevention, narcotic logs, and automated bill additions.' },
  { name: 'Operation Theatre (OT) Grid', desc: 'Surgeon availability, anesthetic notes, sterilizer tracking, and OT pacs integration.' },
  { name: 'TPA Insurance & Cashless Claims', desc: 'Pre-authorization documentation, claim adjudication tracking, and tariff packages.' },
  { name: 'Doctor Fee & Revenue Sharing', desc: 'Automated calculation of consultation splits, surgical charges, and referral bonuses.' },
];

export default function HospitalERPPage() {
  return (
    <div className="w-full bg-black text-white pt-32 pb-24 px-6">
      <JsonLd
        type="SoftwareApplication"
        data={{
          name: 'Guruvanta Hospital Information Management System (HMIS)',
          applicationCategory: 'HealthcareApplication',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-zinc-400 uppercase mb-4">
            <Stethoscope className="w-3.5 h-3.5 text-zinc-300" />
            <span>HEALTHCARE CLINICAL ARCHITECTURE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-6">
            Hospital Management & <br />
            <span className="font-normal text-zinc-300">Clinical Operating System.</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed mb-8">
            An enterprise HMIS designed to eliminate communication silos between outpatient desks, surgical theaters, diagnostic machines, and insurance billing counters.
          </p>

          <div className="relative rounded-2xl overflow-hidden border border-white/20 mb-10 shadow-[0_0_80px_rgba(255,255,255,0.06)] group">
            <img
              src="/images/hospital-3d-core.jpg"
              alt="Clinical Health Informatics 3D Holographic Core"
              className="w-full h-72 sm:h-96 object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-zinc-300 bg-black/60 backdrop-blur-md px-4 py-2.5 rounded border border-white/10">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                CLINICAL TELEMETRY STREAM &bull; HIPAA &amp; FHIR COMPLIANT
              </span>
              <span>EMR SYNC: INSTANT</span>
            </div>
          </div>

          <Link
            href="#demo-form"
            className="inline-flex items-center gap-2 px-6 py-3 rounded bg-white text-black font-medium text-xs font-mono tracking-wider hover:bg-zinc-200 transition-colors"
          >
            <span>SCHEDULE HOSPITAL SYSTEM DEMO</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Modules Grid */}
        <div className="mb-20">
          <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-3">
            CLINICAL MODULES
          </div>
          <h2 className="text-3xl font-light text-white mb-10">
            Engineered for Modern Healthcare Infrastructure
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              Request HMIS Architecture Review
            </h2>
            <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              Demonstrations for multi-specialty hospitals, clinic chains, and diagnostic centers
            </p>
          </div>
          <DemoRequestForm />
        </div>
      </div>
    </div>
  );
}
