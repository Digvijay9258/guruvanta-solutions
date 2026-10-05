'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code, Database, Factory, Sparkles } from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  shortDesc: string;
}

const CATEGORIES = [
  { name: 'All Categories', icon: Sparkles },
  { name: 'Software Development', icon: Code },
  { name: 'ERP & Business Systems', icon: Database },
  { name: 'Industry Solutions', icon: Factory },
  { name: 'Automation & AI', icon: Sparkles },
];

export default function ServicesGridSection({ initialServices }: { initialServices: ServiceItem[] }) {
  const [activeCategory, setActiveCategory] = useState('All Categories');

  const filtered =
    activeCategory === 'All Categories'
      ? initialServices
      : initialServices.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="relative w-full py-28 px-6 bg-[#070709] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-3">
            SECTION 03 &bull; SERVICES DIRECTORY
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white mb-4">
            Specialized Engineering & <br />
            <span className="font-normal text-zinc-300">Enterprise Solutions.</span>
          </h2>
          <p className="text-sm text-zinc-400 font-light">
            Modular software disciplines engineered to solve complex operational challenges with measurable precision.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wide transition-all duration-300 border ${
                  isSelected
                    ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                    : 'bg-black/40 text-zinc-400 border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.slice(0, 15).map((service, idx) => (
              <motion.div
                key={service.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group block h-full p-6 rounded-lg glass-card border border-white/10 relative"
                >
                  <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-2">
                    {service.category}
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-zinc-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed line-clamp-3 mb-6">
                    {service.shortDesc}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 group-hover:text-white transition-colors">
                    <span>INSPECT SERVICE</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Services Footer Link */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 text-xs font-mono tracking-wider text-zinc-300 hover:text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300"
          >
            <span>VIEW ALL 31+ ENTERPRISE SERVICES</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
