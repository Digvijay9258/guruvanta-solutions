import React from 'react';
import type { Metadata } from 'next';
import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, Shield, Layers, TrendingUp, AlertTriangle } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = await prisma.portfolioProject.findUnique({
    where: { slug: params.slug },
  });

  if (!project) {
    return { title: 'Case Study Not Found' };
  }

  return {
    title: project.seoTitle || `${project.title} Case Study | Guruvanta Solutions`,
    description: project.seoDescription || project.summary,
  };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await prisma.portfolioProject.findUnique({
    where: { slug: params.slug },
  });

  if (!project) {
    notFound();
  }

  let modules: string[] = [];
  let technology: string[] = [];
  let results: string[] = [];

  try {
    modules = JSON.parse(project.modules);
  } catch {
    modules = [];
  }

  try {
    technology = JSON.parse(project.technology);
  } catch {
    technology = [];
  }

  try {
    results = JSON.parse(project.results);
  } catch {
    results = [];
  }

  return (
    <div className="w-full bg-black text-white pt-32 pb-24 px-6">
      <JsonLd
        type="Service"
        data={{
          name: project.title,
          description: project.summary,
        }}
      />

      <div className="max-w-5xl mx-auto">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO PORTFOLIO ARCHIVE</span>
        </Link>

        {/* Title Header */}
        <div className="mb-12 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3 text-[10px] font-mono tracking-widest text-zinc-400 uppercase mb-4">
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white">
              {project.industry}
            </span>
            <span>&bull;</span>
            <span>{project.clientType}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white mb-6">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-3xl">
            {project.summary}
          </p>
        </div>

        {/* Problem vs Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-lg glass-panel border border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-4">
              <AlertTriangle className="w-4 h-4" />
              <span>THE OPERATIONAL PROBLEM</span>
            </div>
            <p className="text-sm text-zinc-300 font-light leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-8 rounded-lg glass-panel border border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-4">
              <CheckCircle2 className="w-4 h-4" />
              <span>THE ARCHITECTURAL SOLUTION</span>
            </div>
            <p className="text-sm text-zinc-300 font-light leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Measured Results */}
        <div className="mb-16 p-8 rounded-lg glass-panel border border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-widest mb-6">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span>MEASURED PRODUCTION RESULTS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {results.map((res, idx) => (
              <div key={idx} className="p-4 rounded bg-black/60 border border-white/5">
                <div className="text-emerald-400 text-lg font-mono mb-2">&bull; 0{idx + 1}</div>
                <div className="text-xs text-zinc-300 font-light leading-relaxed">{res}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Modules & Technology Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-lg glass-panel border border-white/10">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4">
              DEPLOYED SUBSYSTEMS
            </div>
            <div className="space-y-2">
              {modules.map((m) => (
                <div key={m} className="flex items-center gap-2 text-xs text-zinc-300 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-lg glass-panel border border-white/10">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4">
              TECHNOLOGY BLUEPRINT
            </div>
            <div className="flex flex-wrap gap-2">
              {technology.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded bg-black/50 border border-white/10 text-xs font-mono text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-10 rounded-lg glass-panel border border-white/20 text-center">
          <h2 className="text-2xl font-light text-white mb-3">
            Facing similar operational challenges?
          </h2>
          <p className="text-xs text-zinc-400 font-light max-w-md mx-auto mb-6">
            Talk with our solutions architect to blueprint a tailored software architecture for your enterprise.
          </p>
          <Link
            href="/request-demo"
            className="inline-flex items-center gap-2 px-6 py-3 rounded bg-white text-black font-medium text-xs font-mono tracking-wider hover:bg-zinc-200 transition-colors"
          >
            <span>START ARCHITECTURAL CONSULTATION</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
