import React from 'react';
import type { Metadata } from 'next';
import { getSafeIndustries } from '@/lib/safe-data';
import Link from 'next/link';
import { ArrowRight, Building2, Stethoscope, UtensilsCrossed, Gem, Store, Truck, Factory, GraduationCap, Building } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Specialized Industry Solutions & Vertical ERPs',
  description:
    'Dedicated ERP software solutions tailored for Hospitals, Pharmacies, Jewellery showrooms, Restaurants, Hotels, Retail chains, Manufacturing, Logistics, Schools, and Real Estate.',
};

export default async function IndustriesPage() {
  const industries = await getSafeIndustries();

  const getIndustryIcon = (slug: string) => {
    switch (slug) {
      case 'hospital-erp':
        return <Stethoscope className="w-5 h-5" />;
      case 'restaurant-erp':
        return <UtensilsCrossed className="w-5 h-5" />;
      case 'hotel-erp':
        return <Building2 className="w-5 h-5" />;
      case 'jewellery-erp':
        return <Gem className="w-5 h-5" />;
      case 'retail-pos':
        return <Store className="w-5 h-5" />;
      case 'transport-logistics-erp':
        return <Truck className="w-5 h-5" />;
      case 'manufacturing-erp':
        return <Factory className="w-5 h-5" />;
      case 'school-erp':
        return <GraduationCap className="w-5 h-5" />;
      case 'real-estate-erp':
        return <Building className="w-5 h-5" />;
      default:
        return <Building2 className="w-5 h-5" />;
    }
  };

  return (
    <div className="w-full bg-black text-white pt-32 pb-24 px-6">
      <JsonLd
        type="Service"
        data={{
          name: 'Specialized Enterprise Industry ERPs',
          description:
            'Vertical business operating systems customized for distinct sector workflows.',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-3">
            SECTOR SPECIALIZATIONS &bull; 10 VERTICALS
          </div>
          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-6">
            Industry ERP Platforms.
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            Generic software forces you to change your workflow. Our vertical ERP systems are pre-engineered around the exact regulatory, terminology, and operational requirements of your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => {
            let modules: string[] = [];
            try {
              modules = JSON.parse(ind.keyModules);
            } catch {
              modules = [];
            }

            return (
              <div
                key={ind.slug}
                className="flex flex-col justify-between p-8 rounded-lg glass-panel border border-white/10 hover:border-white/25 transition-all duration-300 relative group"
              >
                <div>
                  <div className="w-10 h-10 rounded bg-white/5 border border-white/15 flex items-center justify-center text-zinc-300 group-hover:text-white mb-6">
                    {getIndustryIcon(ind.slug)}
                  </div>

                  <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-2">
                    VERTICAL ARCHITECTURE
                  </div>

                  <h2 className="text-2xl font-light text-white mb-2 group-hover:text-zinc-200">
                    {ind.title} ERP
                  </h2>

                  <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                    {ind.headline}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">
                      CORE MODULES
                    </div>
                    {modules.slice(0, 4).map((m, idx) => (
                      <div key={idx} className="text-xs text-zinc-300 font-light flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-zinc-500" />
                        <span className="truncate">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 group-hover:text-white transition-colors"
                  >
                    <span>VIEW WORKFLOW</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/request-demo"
                    className="px-3.5 py-1.5 rounded text-[11px] font-mono tracking-wider bg-white/5 hover:bg-white text-zinc-300 hover:text-black border border-white/10 transition-all duration-300"
                  >
                    DEMO
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
