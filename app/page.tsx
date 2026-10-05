import React from 'react';
import { getSafeServices, getSafeProducts, getSafeIndustries, getSafePortfolio, getSafeTestimonials } from '@/lib/safe-data';
import CinematicHero from '@/components/cinematic/CinematicHero';
import WhatWeBuildSection from '@/components/sections/WhatWeBuildSection';
import SystemCoreGraph from '@/components/cinematic/SystemCoreGraph';
import ServicesGridSection from '@/components/sections/ServicesGridSection';
import ProductsSpotlightSection from '@/components/sections/ProductsSpotlightSection';
import ProcessSection from '@/components/sections/ProcessSection';
import CTASection from '@/components/sections/CTASection';
import Link from 'next/link';
import { ArrowRight, Star, Building2, Stethoscope, UtensilsCrossed, Gem, Store, Truck, Shield } from 'lucide-react';

export const revalidate = 60; // ISR cache revalidation every minute

export default async function HomePage() {
  // Fetch dynamic content safely with fallback
  const [services, products, industries, portfolio, testimonials] = await Promise.all([
    getSafeServices(),
    getSafeProducts(),
    getSafeIndustries(),
    getSafePortfolio(4),
    getSafeTestimonials(),
  ]);

  const industryIcons: Record<string, React.ReactNode> = {
    'hospital-erp': <Stethoscope className="w-5 h-5" />,
    'pharmacy-erp': <Shield className="w-5 h-5" />,
    'jewellery-erp': <Gem className="w-5 h-5" />,
    'restaurant-erp': <UtensilsCrossed className="w-5 h-5" />,
    'hotel-erp': <Building2 className="w-5 h-5" />,
    'retail-pos': <Store className="w-5 h-5" />,
    'transport-logistics-erp': <Truck className="w-5 h-5" />,
  };

  return (
    <div className="w-full bg-black text-white overflow-hidden">
      {/* 1. Cinematic Hero with 3D Fibonacci Sphere */}
      <CinematicHero />

      {/* 2. Section 01: What We Build */}
      <WhatWeBuildSection />

      {/* 3. Section 02: Business System Core (ERP Connected to 11 Subsystems) */}
      <SystemCoreGraph />

      {/* 4. Section 03: Specialized Services Grid */}
      <ServicesGridSection initialServices={services} />

      {/* 4.5. Cinematic 3D Architectural Core Showcase */}
      <section className="relative w-full py-28 px-6 bg-black text-white border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/40 to-black pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>OBSIDIAN CORE ARCHITECTURE</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight">
                Architectural depth <br />
                <span className="font-normal text-zinc-300">meets enterprise resilience.</span>
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                Every software platform we engineer operates on deterministic microservices, append-only transaction logs, and hardware-accelerated processing layers designed to eliminate system latency and prevent single points of failure.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs font-mono text-zinc-300">
                <div className="p-4 rounded bg-white/[0.02] border border-white/5">
                  <div className="text-zinc-500 text-[10px] mb-1">DATA LATENCY</div>
                  <div className="text-white text-base font-semibold">&lt; 4.2ms</div>
                </div>
                <div className="p-4 rounded bg-white/[0.02] border border-white/5">
                  <div className="text-zinc-500 text-[10px] mb-1">CONCURRENCY</div>
                  <div className="text-white text-base font-semibold">100k+ req/sec</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-[0_0_80px_rgba(255,255,255,0.06)] group">
                <img
                  src="/images/enterprise-3d-core.jpg"
                  alt="Guruvanta 3D Enterprise Architecture Core"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-zinc-400 bg-black/60 backdrop-blur-md px-3 py-2 rounded border border-white/10">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE 3D QUANTUM CORE
                  </span>
                  <span>NODE: GURUVANTA-PRIME</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section 08: Flagship Database-Driven Products */}
      <ProductsSpotlightSection products={products} />

      {/* 6. Section 09: Dedicated Industry Solutions Spotlight */}
      <section className="relative w-full py-28 px-6 bg-[#050507] text-white border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
            <div>
              <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-3">
                VERTICAL ARCHITECTURES
              </div>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
                Industry-specialized <br />
                <span className="font-normal text-zinc-300">operational platforms.</span>
              </h2>
            </div>
            <Link
              href="/industries"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-mono tracking-wider text-zinc-400 hover:text-white transition-colors"
            >
              <span>EXPLORE ALL 10 SECTORS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.slice(0, 6).map((ind) => (
              <Link
                key={ind.slug}
                href={`/${ind.slug}`}
                className="group block p-8 rounded-lg glass-card border border-white/10 relative overflow-hidden"
              >
                <div className="w-10 h-10 rounded bg-white/5 border border-white/15 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:border-white/30 transition-all duration-300 mb-6">
                  {industryIcons[ind.slug] || <Building2 className="w-5 h-5" />}
                </div>

                <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-1">
                  SECTOR SPECIFIC ERP
                </div>

                <h3 className="text-xl font-medium text-white mb-2 group-hover:text-zinc-200">
                  {ind.title} ERP
                </h3>

                <p className="text-xs text-zinc-400 font-light leading-relaxed line-clamp-3 mb-6">
                  {ind.headline}
                </p>

                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
                  <span>VIEW WORKFLOW & MODULES</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Section 10: Selected Enterprise Case Studies */}
      <section className="relative w-full py-28 px-6 bg-black text-white border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
            <div>
              <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-3">
                PROVEN IMPACT
              </div>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
                Selected deployments & <br />
                <span className="font-normal text-zinc-300">engineering case studies.</span>
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-mono tracking-wider text-zinc-400 hover:text-white transition-colors"
            >
              <span>VIEW FULL ARCHIVE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.map((proj, pIdx) => {
              let resultsList: string[] = [];
              try {
                resultsList = JSON.parse(proj.results);
              } catch {
                resultsList = [];
              }

              const cardImage =
                pIdx === 0
                  ? '/images/financial-ledger-3d.jpg'
                  : pIdx === 1
                  ? '/images/ai-neural-lattice.jpg'
                  : null;

              return (
                <div
                  key={proj.slug}
                  className="p-8 rounded-lg glass-panel border border-white/10 flex flex-col justify-between group overflow-hidden"
                >
                  <div>
                    {cardImage && (
                      <div className="relative -mx-8 -mt-8 mb-6 h-48 overflow-hidden border-b border-white/10">
                        <img
                          src={cardImage}
                          alt={proj.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                        <div className="absolute bottom-3 left-4 text-[10px] font-mono text-zinc-300 uppercase px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10">
                          {pIdx === 0 ? 'FINANCIAL SETTLEMENT CRYSTAL' : 'NEURAL TELEMETRY CORE'}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-3">
                      <span>{proj.industry}</span>
                      <span>{proj.clientType}</span>
                    </div>

                    <h3 className="text-2xl font-light text-white mb-3 tracking-tight group-hover:text-zinc-200">
                      {proj.title}
                    </h3>

                    <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                      {proj.summary}
                    </p>

                    <div className="p-4 rounded bg-black/60 border border-white/5 space-y-2 mb-6">
                      <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                        MEASURED IMPACT
                      </div>
                      {resultsList.slice(0, 2).map((r, i) => (
                        <div key={i} className="text-xs text-zinc-300 font-light flex items-start gap-2">
                          <span className="text-emerald-400">&bull;</span>
                          <span>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/portfolio/${proj.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors pt-4 border-t border-white/5"
                  >
                    <span>READ ARCHITECTURAL CASE STUDY</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Section 11: Company Process (01 Discover, 02 Architect, 03 Engineer, 04 Evolve) */}
      <ProcessSection />

      {/* 9. Verified Leadership Testimonials */}
      <section className="relative w-full py-24 px-6 bg-[#040406] text-white border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-2">
              CLIENT TESTIMONIALS
            </div>
            <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-white">
              Trusted by enterprise operators.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.slice(0, 4).map((t, idx) => (
              <div key={idx} className="p-8 rounded-lg glass-card border border-white/10">
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-zinc-300 font-light italic leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="text-sm font-medium text-white">{t.authorName}</div>
                  <div className="text-xs font-mono text-zinc-500">
                    {t.authorRole} &bull; {t.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Closing Conversation CTA */}
      <CTASection />
    </div>
  );
}
