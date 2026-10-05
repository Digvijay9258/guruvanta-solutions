import React from 'react';
import type { Metadata } from 'next';
import { getSafeServices } from '@/lib/safe-data';
import Link from 'next/link';
import { ArrowRight, Code2, Database, Factory, Sparkles, CheckCircle2 } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Enterprise Services & Engineering Disciplines',
  description:
    'Comprehensive catalogue of 31+ specialized software development, ERP, CRM, Billing, AI, and Automation capabilities engineered by Guruvanta Solutions Technologies.',
};

export default async function ServicesPage() {
  const services = await getSafeServices();

  const categories = [
    'Software Development',
    'ERP & Business Systems',
    'Industry Solutions',
    'Automation & AI',
  ];

  return (
    <div className="w-full bg-black text-white pt-32 pb-24 px-6">
      <JsonLd
        type="Service"
        data={{
          name: 'Enterprise Software & Systems Engineering',
          provider: {
            '@type': 'Organization',
            name: 'Guruvanta Solutions Technologies',
          },
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-3">
            TECHNICAL DISCIPLINES &bull; 31+ CAPABILITIES
          </div>
          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-6">
            Enterprise Services Directory.
          </h1>
          <p className="text-base text-zinc-400 font-light leading-relaxed">
            Every service is backed by strict engineering standards, typed microservices, fault-tolerant databases, and zero-compromise security protocols.
          </p>
        </div>

        {/* Grouped by Categories */}
        <div className="space-y-20">
          {categories.map((cat) => {
            const catServices = services.filter((s) => s.category === cat);
            if (catServices.length === 0) return null;

            return (
              <div key={cat} className="pt-8 border-t border-white/10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <h2 className="text-xl sm:text-2xl font-light text-white tracking-tight">
                    {cat}
                  </h2>
                  <span className="text-xs font-mono text-zinc-500">
                    ({catServices.length} modules)
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catServices.map((svc) => {
                    let feat: string[] = [];
                    try {
                      feat = JSON.parse(svc.features);
                    } catch {
                      feat = [];
                    }

                    return (
                      <Link
                        key={svc.slug}
                        href={`/services/${svc.slug}`}
                        className="group flex flex-col justify-between p-6 rounded-lg glass-card border border-white/10 relative"
                      >
                        <div>
                          <h3 className="text-lg font-medium text-white mb-2 group-hover:text-zinc-200">
                            {svc.title}
                          </h3>
                          <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6 line-clamp-3">
                            {svc.shortDesc}
                          </p>

                          <div className="space-y-2 mb-6">
                            {feat.slice(0, 3).map((f, i) => (
                              <div key={i} className="flex items-center gap-2 text-[11px] text-zinc-400 font-light">
                                <CheckCircle2 className="w-3 h-3 text-zinc-500 shrink-0" />
                                <span className="truncate">{f}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-500 group-hover:text-white transition-colors">
                          <span>INSPECT MODULE</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
