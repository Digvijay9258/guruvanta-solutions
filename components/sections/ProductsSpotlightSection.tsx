'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check, ShieldCheck, Zap } from 'lucide-react';

interface ProductItem {
  id: string;
  title: string;
  slug: string;
  tag?: string | null;
  headline: string;
  description: string;
  features: string;
  modules: string;
}

export default function ProductsSpotlightSection({ products }: { products: ProductItem[] }) {
  return (
    <section id="products" className="relative w-full py-28 px-6 bg-black text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-3">
              FLAGSHIP PLATFORMS
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
              Purpose-built products. <br />
              <span className="font-normal text-zinc-300">Ready for enterprise scale.</span>
            </h2>
          </div>
          <Link
            href="/products"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-mono tracking-wider text-zinc-400 hover:text-white transition-colors"
          >
            <span>VIEW COMPLETE PRODUCT SUITE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Products 2-Column Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            let featuresList: string[] = [];
            try {
              featuresList = JSON.parse(product.features);
            } catch {
              featuresList = [];
            }

            return (
              <div
                key={product.slug}
                className="flex flex-col justify-between p-8 rounded-lg glass-panel border border-white/10 hover:border-white/25 transition-all duration-300 relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400">
                      {product.tag || 'ENTERPRISE SYSTEM'}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-zinc-500" />
                  </div>

                  <h3 className="text-xl font-medium text-white mb-2 group-hover:text-zinc-200">
                    {product.title}
                  </h3>

                  <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                    {product.headline}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {featuresList.slice(0, 4).map((f, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300 font-light">
                        <Check className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 group-hover:text-white transition-colors"
                  >
                    <span>SPECIFICATIONS</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/request-demo"
                    className="px-3 py-1.5 rounded text-[11px] font-mono tracking-wider bg-white/5 hover:bg-white text-zinc-300 hover:text-black border border-white/10 transition-all duration-300"
                  >
                    REQUEST DEMO
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
