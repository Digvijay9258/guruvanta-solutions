import React from 'react';
import type { Metadata } from 'next';
import { getSafeTeam, getSafeLocations } from '@/lib/safe-data';
import Link from 'next/link';
import { ArrowRight, Shield, Cpu, Code2, Users, CheckCircle2 } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'About The Firm | Enterprise Engineering & Architecture',
  description:
    'We engineer intelligent software systems designed around the way enterprise businesses actually function. Learn about our philosophy, engineering team, and technology principles.',
};

export default async function AboutPage() {
  const [teamMembers, locations] = await Promise.all([
    getSafeTeam(),
    getSafeLocations(),
  ]);

  return (
    <div className="w-full bg-black text-white pt-32 pb-24 px-6">
      <JsonLd
        data={{
          '@type': 'AboutPage',
          name: 'About Guruvanta Solutions Technologies',
          description:
            'We build intelligent software systems that connect people, processes and business data.',
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-3">
            THE FIRM &bull; ARCHITECTURAL PROFILE
          </div>
          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-6">
            Intelligent software systems <br />
            <span className="font-normal text-zinc-300">engineered for operational longevity.</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            Guruvanta Solutions Technologies designs and constructs custom business systems, enterprise ERPs, and automated workflows. We bridge the gap between abstract business strategy and resilient technical infrastructure.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 pb-20 border-b border-white/10">
          <div className="p-8 rounded-lg glass-panel border border-white/10">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">
              PRIMARY MISSION
            </div>
            <h2 className="text-2xl font-light text-white mb-4">
              To eliminate operational friction in growing enterprises.
            </h2>
            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              Most businesses outgrow generic SaaS platforms, leading to disconnected spreadsheets, redundant data entry, and delayed decision-making. Our mission is to engineer unified software infrastructure that works around your business, not the other way around.
            </p>
          </div>

          <div className="p-8 rounded-lg glass-panel border border-white/10">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">
              ARCHITECTURAL PHILOSOPHY
            </div>
            <h2 className="text-2xl font-light text-white mb-4">
              Deterministic, observable, and failure-resilient.
            </h2>
            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              We reject brittle abstractions. We write clean, typed code with strict database constraints, automated audit streams, sub-second query performance, and offline-first edge resilience for factory floors and retail counters.
            </p>
          </div>
        </div>

        {/* 4 Pillars */}
        <div className="mb-24 pb-20 border-b border-white/10">
          <div className="text-center max-w-xl mx-auto mb-16">
            <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-2">
              CORE PRINCIPLES
            </div>
            <h2 className="text-3xl font-light text-white">Why Enterprise Operators Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded glass-card border border-white/10">
              <Shield className="w-5 h-5 text-zinc-400 mb-4" />
              <h3 className="text-base font-medium text-white mb-2">100% Data Sovereignty</h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                You retain complete ownership of your databases and source code without recurring lock-in penalties.
              </p>
            </div>
            <div className="p-6 rounded glass-card border border-white/10">
              <Cpu className="w-5 h-5 text-zinc-400 mb-4" />
              <h3 className="text-base font-medium text-white mb-2">Bespoke Fit</h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Zero bloated features you never touch. Every screen and database table is engineered for your workflow.
              </p>
            </div>
            <div className="p-6 rounded glass-card border border-white/10">
              <Code2 className="w-5 h-5 text-zinc-400 mb-4" />
              <h3 className="text-base font-medium text-white mb-2">Modern Type Safety</h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Constructed with Next.js, TypeScript, PostgreSQL, and Prisma for zero runtime crashes and audited APIs.
              </p>
            </div>
            <div className="p-6 rounded glass-card border border-white/10">
              <Users className="w-5 h-5 text-zinc-400 mb-4" />
              <h3 className="text-base font-medium text-white mb-2">Direct Architect Access</h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Collaborate directly with senior systems engineers rather than junior account managers.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-24 pb-20 border-b border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-2">
                TECHNICAL LEADERSHIP
              </div>
              <h2 className="text-3xl font-light text-white">Engineers & Systems Architects</h2>
            </div>
            <p className="mt-4 md:mt-0 text-xs font-mono text-zinc-500">
              AVERAGE 14+ YEARS ENTERPRISE SYSTEMS DESIGN
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="p-6 rounded-lg glass-panel border border-white/10">
                <div className="w-12 h-12 rounded bg-white/5 border border-white/10 flex items-center justify-center font-mono text-sm text-zinc-300 mb-4">
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <h3 className="text-base font-medium text-white mb-1">{member.name}</h3>
                <div className="text-xs font-mono text-zinc-400 mb-3">{member.role}</div>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Physical Locations */}
        <div className="mb-20">
          <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-3">
            PRESENCE & CENTERS
          </div>
          <h2 className="text-3xl font-light text-white mb-10">Engineering Hubs</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <div key={loc.city} className="p-6 rounded-lg glass-panel border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-medium text-white">{loc.city}</h3>
                  {loc.isHeadquarter && (
                    <span className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-white/10 text-white border border-white/20">
                      HEADQUARTERS
                    </span>
                  )}
                </div>
                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-4">{loc.address}</p>
                <div className="text-xs font-mono text-zinc-500">{loc.phone}</div>
                <div className="text-xs font-mono text-zinc-500">{loc.email}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-10 rounded-lg glass-panel border border-white/20 text-center">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-4">
            Evaluate your enterprise architecture with our specialists.
          </h2>
          <div className="flex justify-center gap-4">
            <Link
              href="/request-demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-white text-black font-medium text-xs font-mono tracking-wider hover:bg-zinc-200 transition-colors"
            >
              <span>REQUEST TECHNICAL DEMO</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
