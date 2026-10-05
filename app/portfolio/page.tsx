import React from 'react';
import type { Metadata } from 'next';
import { getSafePortfolio } from '@/lib/safe-data';
import Link from 'next/link';
import { ArrowRight, BarChart3, ShieldCheck, CheckCircle2 } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Portfolio & Enterprise Engineering Case Studies',
  description:
    'Documented case studies across Finance, Healthcare, Retail chains, Hospitality, Logistics, Manufacturing, and Education engineered by Guruvanta Solutions Technologies.',
};

export default async function PortfolioPage() {
  const projects = await getSafePortfolio();

  return (
    <div className="w-full bg-black text-white pt-32 pb-24 px-6">
      <JsonLd
        type="Service"
        data={{
          name: 'Guruvanta Case Studies & Portfolio',
          description: 'Documented architectural deployments across global enterprises.',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-3">
            VERIFIED DEPLOYMENTS &bull; 8 CASE STUDIES
          </div>
          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-6">
            Engineering Case Studies.
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            Real enterprise problems solved with clean software engineering, deterministic data pipelines, and measurable commercial results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => {
            let resultsList: string[] = [];
            let techList: string[] = [];

            try {
              resultsList = JSON.parse(proj.results);
            } catch {
              resultsList = [];
            }

            try {
              techList = JSON.parse(proj.technology);
            } catch {
              techList = [];
            }

            return (
              <div
                key={proj.slug}
                className="flex flex-col justify-between p-8 rounded-lg glass-panel border border-white/10 hover:border-white/20 transition-all duration-300 relative group"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-3">
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400">
                      {proj.industry}
                    </span>
                    <span>{proj.clientType}</span>
                  </div>

                  <h2 className="text-2xl font-light text-white mb-3 group-hover:text-zinc-200">
                    {proj.title}
                  </h2>

                  <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                    {proj.summary}
                  </p>

                  <div className="p-4 rounded bg-black/60 border border-white/5 space-y-2 mb-6">
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                      MEASURED PRODUCTION IMPACT
                    </div>
                    {resultsList.map((r, i) => (
                      <div key={i} className="text-xs text-zinc-300 font-light flex items-start gap-2">
                        <span className="text-emerald-400">&bull;</span>
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>

                  {techList.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {techList.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-[10px] font-mono text-zinc-500"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-white/5">
                  <Link
                    href={`/portfolio/${proj.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 group-hover:text-white transition-colors"
                  >
                    <span>READ COMPLETE CASE STUDY</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
