import React from 'react';
import type { Metadata } from 'next';
import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, Shield, Layers, Cpu } from 'lucide-react';
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
    return { title: 'Solution Not Found' };
  }

  return {
    title: `${industry.title} Solutions Architecture | Guruvanta Solutions Technologies`,
    description: industry.description,
  };
}

export default async function SolutionDetailPage({
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

  let modules: string[] = [];
  try {
    modules = JSON.parse(industry.keyModules);
  } catch {
    modules = [];
  }

  return (
    <div className="w-full bg-black text-white pt-32 pb-24 px-6">
      <JsonLd
        type="Service"
        data={{
          name: `${industry.title} Enterprise Solution`,
          description: industry.description,
        }}
      />

      <div className="max-w-5xl mx-auto">
        <Link
          href="/solutions"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO ALL SOLUTIONS</span>
        </Link>

        {/* Title Header */}
        <div className="mb-12 pb-8 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-zinc-400 uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>OUTCOME-DRIVEN ARCHITECTURE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-4">
            {industry.title} Solution
          </h1>

          <p className="text-xl sm:text-2xl text-zinc-300 font-light mb-6">
            {industry.headline}
          </p>

          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-3xl">
            {industry.description}
          </p>
        </div>

        {/* Modules & Blueprint */}
        <div className="p-8 rounded-lg glass-panel border border-white/10 mb-16">
          <h2 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
            <Layers className="w-5 h-5 text-zinc-400" />
            <span>Integrated Solution Components</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {modules.map((mod, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded bg-white/[0.02] border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs text-zinc-300 font-light">{mod}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Form */}
        <div className="max-w-2xl mx-auto pt-10 border-t border-white/10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-light text-white mb-3">
              Request {industry.title} Solution Demonstration
            </h2>
          </div>
          <DemoRequestForm />
        </div>
      </div>
    </div>
  );
}
