import React from 'react';
import type { Metadata } from 'next';
import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Layers, Cpu, Server } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = await prisma.product.findUnique({
    where: { slug: params.slug },
  });

  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: product.seoTitle || `${product.title} | Guruvanta Solutions Technologies`,
    description: product.seoDescription || product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await prisma.product.findUnique({
    where: { slug: params.slug },
  });

  if (!product) {
    notFound();
  }

  let features: string[] = [];
  let modules: string[] = [];

  try {
    features = JSON.parse(product.features);
  } catch {
    features = [];
  }

  try {
    modules = JSON.parse(product.modules);
  } catch {
    modules = [];
  }

  return (
    <div className="w-full bg-black text-white pt-32 pb-24 px-6">
      <JsonLd
        type="SoftwareApplication"
        data={{
          name: product.title,
          description: product.description,
          applicationCategory: 'BusinessApplication',
        }}
      />

      <div className="max-w-5xl mx-auto">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO ALL PRODUCTS</span>
        </Link>

        {/* Title Header */}
        <div className="mb-12 pb-8 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-zinc-400 uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>{product.tag || 'ENTERPRISE SYSTEM'}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-4">
            {product.title}
          </h1>

          <p className="text-xl sm:text-2xl text-zinc-300 font-light mb-6">
            {product.headline}
          </p>

          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-3xl">
            {product.description}
          </p>
        </div>

        {/* Main Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-8 space-y-8">
            {/* Features */}
            <div className="p-8 rounded-lg glass-panel border border-white/10">
              <h2 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-zinc-400" />
                <span>Core Capabilities & Features</span>
              </h2>

              <div className="space-y-4">
                {features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded bg-white/[0.02] border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-300 font-light">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Blueprint */}
            {product.architecture && (
              <div className="p-8 rounded-lg glass-panel border border-white/10">
                <h2 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                  <Server className="w-5 h-5 text-zinc-400" />
                  <span>Architecture & Reliability Blueprint</span>
                </h2>
                <p className="text-sm text-zinc-400 font-light leading-relaxed mb-4">
                  {product.architecture}
                </p>
                <div className="p-4 rounded bg-black/60 border border-white/5 font-mono text-xs text-zinc-400 space-y-1">
                  <div>&bull; Concurrency Mode: Optimistic Locking with Conflict Resolution</div>
                  <div>&bull; Data Persistence: Encrypted Relational Database &bull; TLS 1.3</div>
                  <div>&bull; API Gateway: High-throughput tokenized microservices</div>
                </div>
              </div>
            )}
          </div>

          {/* Right Rail */}
          <div className="md:col-span-4 space-y-6">
            {modules.length > 0 && (
              <div className="p-6 rounded-lg glass-panel border border-white/10">
                <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-4">
                  INCLUDED MODULES
                </div>
                <div className="space-y-2">
                  {modules.map((m) => (
                    <div
                      key={m}
                      className="px-3 py-2 rounded bg-black/40 border border-white/5 text-xs font-mono text-zinc-300 flex items-center justify-between"
                    >
                      <span>{m}</span>
                      <span className="text-[10px] text-emerald-400 font-sans">READY</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="p-6 rounded-lg glass-panel border border-white/20 text-center">
              <h3 className="text-base font-medium text-white mb-2">Request Live Demonstration</h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                See this platform in action with your team&apos;s specific transaction volume and operational workflows.
              </p>
              <Link
                href="/request-demo"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded bg-white text-black font-medium text-xs font-mono tracking-wider hover:bg-zinc-200 transition-colors"
              >
                <span>REQUEST DEMO</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
