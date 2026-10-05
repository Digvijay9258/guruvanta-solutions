import React from 'react';
import type { Metadata } from 'next';
import { getSafeIndustries } from '@/lib/safe-data';
import Link from 'next/link';
import { ArrowRight, Layers, Sparkles, Shield, Cpu } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Enterprise Business Solutions & Integrated Ecosystems',
  description:
    'Comprehensive end-to-end software solutions connecting enterprise ERP, CRM, Billing, and Machine Intelligence into unified operational ecosystems.',
};

export default async function SolutionsPage() {
  const industries = await getSafeIndustries();

  return (
    <div className="w-full bg-black text-white pt-32 pb-24 px-6">
      <JsonLd
        type="Service"
        data={{
          name: 'Enterprise Integrated Solutions',
          description: 'Outcome-driven software solutions connecting people, processes and data.',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-3">
            BUSINESS ARCHITECTURES
          </div>
          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-6">
            Connected Business Solutions.
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            Eliminate fragmented software tools. We deliver end-to-end architectures that unite front-line staff, back-office accounting, supply chain logistics, and executive decision-makers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((sol) => (
            <Link
              key={sol.slug}
              href={`/solutions/${sol.slug}`}
              className="p-8 rounded-lg glass-panel border border-white/10 hover:border-white/25 transition-all duration-300 block group"
            >
              <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-2">
                SOLUTION ARCHITECTURE
              </div>
              <h2 className="text-2xl font-light text-white mb-3 group-hover:text-zinc-200">
                {sol.title} Solution
              </h2>
              <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6 line-clamp-3">
                {sol.description}
              </p>
              <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
                <span>VIEW SOLUTION BLUEPRINT</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
