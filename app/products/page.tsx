import React from 'react';
import type { Metadata } from 'next';
import { getSafeProducts } from '@/lib/safe-data';
import Link from 'next/link';
import { ArrowRight, Check, ShieldCheck, Layers, Cpu } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Flagship Products & Core Platforms',
  description:
    'Database-driven business systems: Enterprise Billing & GST, Inventory Control, HR & Payroll, CRM, Executive Dashboards, and WhatsApp Automation.',
};

export default async function ProductsPage() {
  const products = await getSafeProducts();

  return (
    <div className="w-full bg-black text-white pt-32 pb-24 px-6">
      <JsonLd
        type="SoftwareApplication"
        data={{
          name: 'Guruvanta Enterprise Suite',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'All Modern Browsers / Cloud',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-3">
            FLAGSHIP SOFTWARE PLATFORMS
          </div>
          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-6">
            Connected Business Software.
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            Standardized, high-throughput software platforms ready to deploy or customize to your unique enterprise operating requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
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
              <div
                key={product.slug}
                className="flex flex-col justify-between p-8 rounded-lg glass-panel border border-white/10 hover:border-white/25 transition-all duration-300 relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400">
                      {product.tag || 'ENTERPRISE CORE'}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-zinc-500" />
                  </div>

                  <h2 className="text-2xl font-light text-white mb-2 group-hover:text-zinc-200">
                    {product.title}
                  </h2>

                  <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                    {product.headline}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">
                      KEY CAPABILITIES
                    </div>
                    {features.slice(0, 4).map((f, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300 font-light">
                        <Check className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  {modules.length > 0 && (
                    <div className="mb-6">
                      <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">
                        INTEGRATED SUBSYSTEMS
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {modules.map((m) => (
                          <span
                            key={m}
                            className="px-2 py-0.5 rounded bg-black/40 border border-white/5 text-[10px] font-mono text-zinc-400"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 group-hover:text-white transition-colors"
                  >
                    <span>TECHNICAL SPEC</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/request-demo"
                    className="px-3.5 py-1.5 rounded text-[11px] font-mono tracking-wider bg-white/5 hover:bg-white text-zinc-300 hover:text-black border border-white/10 transition-all duration-300"
                  >
                    REQUEST DEMO
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
