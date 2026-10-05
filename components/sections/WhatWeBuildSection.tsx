'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Receipt, Boxes, Zap, ArrowUpRight } from 'lucide-react';

const ITEMS = [
  {
    title: 'Custom Software',
    desc: 'Bespoke microservices, internal portals, and enterprise tools built around your exact proprietary workflow.',
    icon: Code2,
    href: '/services/custom-software-development',
    tag: 'Bespoke Architecture',
  },
  {
    title: 'Enterprise ERP',
    desc: 'Unify finance, procurement, production, and supply chain into one single source of truth.',
    icon: Database,
    href: '/services/erp-software',
    tag: 'Unified Operations',
  },
  {
    title: 'Omni CRM',
    desc: 'Turn incoming sales inquiries into won contracts with pipeline telemetry and automated WhatsApp touchpoints.',
    icon: Zap,
    href: '/crm',
    tag: 'Pipeline Telemetry',
  },
  {
    title: 'GST & Billing',
    desc: 'Sub-second compliant tax invoices, automated e-way bills, and customer aging ledgers.',
    icon: Receipt,
    href: '/billing-software',
    tag: 'High Velocity',
  },
  {
    title: 'Smart Inventory',
    desc: 'Multi-warehouse stock control, batch expiration prevention, and predictive automated replenishment.',
    icon: Boxes,
    href: '/inventory-software',
    tag: 'Supply Precision',
  },
  {
    title: 'AI & Automation',
    desc: 'Self-operating workflow chains, document OCR extraction, and 24/7 intelligent domain assistants.',
    icon: Cpu,
    href: '/ai-solutions',
    tag: 'Machine Intelligence',
  },
];

export default function WhatWeBuildSection() {
  return (
    <section id="what-we-build" className="relative w-full py-28 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-3">
              SECTION 01 &bull; CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
              Software that works <br />
              <span className="font-normal text-zinc-300">around your business.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-zinc-400 font-light max-w-md">
            We reject off-the-shelf software compromises. We construct high-durability digital infrastructure that fits your real operations.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <Link
                  href={item.href}
                  className="group block h-full p-8 rounded-lg glass-card relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:border-white/30 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase group-hover:text-zinc-300 transition-colors">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-medium text-white mb-3 group-hover:translate-x-0.5 transition-transform duration-300 flex items-center gap-1.5">
                    <span>{item.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 opacity-0 group-hover:opacity-100 group-hover:text-white transition-all duration-300" />
                  </h3>

                  <p className="text-sm text-zinc-400 font-light leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    <span>EXPLORE ARCHITECTURE</span>
                    <span>&rarr;</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
