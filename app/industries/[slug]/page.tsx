import React from 'react';
import type { Metadata } from 'next';
import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, AlertCircle, Layers, Workflow } from 'lucide-react';
import DemoRequestForm from '@/components/forms/DemoRequestForm';
import JsonLd from '@/components/seo/JsonLd';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const industry = await prisma.industry.findUnique({
    where: { slug: params.slug },
  });

  if (!industry) {
    return { title: 'Industry Not Found' };
  }

  return {
    title: industry.seoTitle || `${industry.title} ERP | Guruvanta Solutions Technologies`,
    description: industry.seoDescription || industry.description,
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const industry = await prisma.industry.findUnique({
    where: { slug: params.slug },
  });

  if (!industry) {
    notFound();
  }

  let painPoints: string[] = [];
  let keyModules: string[] = [];

  try {
    painPoints = JSON.parse(industry.painPoints);
  } catch {
    painPoints = [];
  }

  try {
    keyModules = JSON.parse(industry.keyModules);
  } catch {
    keyModules = [];
  }

  return (
    <div className="w-full bg-black text-white pt-32 pb-24 px-6">
      <JsonLd
        type="SoftwareApplication"
        data={{
          name: `${industry.title} ERP Platform`,
          description: industry.description,
        }}
      />

      <div className="max-w-5xl mx-auto">
        <Link
          href="/industries"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO ALL INDUSTRIES</span>
        </Link>

        {/* Title Header */}
        <div className="mb-12 pb-8 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-zinc-400 uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>VERTICAL ENTERPRISE ARCHITECTURE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-4">
            {industry.title} ERP
          </h1>

          <p className="text-xl sm:text-2xl text-zinc-300 font-light mb-6">
            {industry.headline}
          </p>

          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-3xl">
            {industry.description}
          </p>
        </div>

        {/* Workflow Diagram Banner */}
        {industry.workflow && (
          <div className="mb-16 p-8 rounded-lg glass-panel border border-white/10">
            <h2 className="text-sm font-mono tracking-widest uppercase text-zinc-400 mb-4 flex items-center gap-2">
              <Workflow className="w-4 h-4 text-zinc-300" />
              <span>DETERMINISTIC OPERATIONAL WORKFLOW</span>
            </h2>
            <div className="p-4 rounded bg-black/60 border border-white/5 font-mono text-xs text-white leading-relaxed tracking-wide">
              {industry.workflow}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Pain Points Addressed */}
          <div className="p-8 rounded-lg glass-panel border border-white/10">
            <h2 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-400" />
              <span>Legacy Vulnerabilities Solved</span>
            </h2>

            <div className="space-y-4">
              {painPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded bg-white/[0.02] border border-white/5">
                  <span className="text-amber-400 font-mono text-xs mt-0.5">&bull;</span>
                  <span className="text-xs text-zinc-300 font-light leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Modules Engineered */}
          <div className="p-8 rounded-lg glass-panel border border-white/10">
            <h2 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-400" />
              <span>Integrated Sector Modules</span>
            </h2>

            <div className="space-y-4">
              {keyModules.map((mod, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-300 font-light leading-relaxed">{mod}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Demo Form */}
        <div className="max-w-2xl mx-auto pt-10 border-t border-white/10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-light text-white mb-3">
              Request {industry.title} ERP Walkthrough
            </h2>
          </div>
          <DemoRequestForm />
        </div>
      </div>
    </div>
  );
}
