'use client';

import React from 'react';
import { motion } from 'framer-motion';

const STEPS = [
  {
    num: '01',
    title: 'DISCOVER',
    statement: 'Understand your workflow.',
    detail: 'We immerse ourselves in your real-world operations, observing handoffs between departments, identifying bottlenecks, and auditing data structures.',
  },
  {
    num: '02',
    title: 'ARCHITECT',
    statement: 'Plan the right system.',
    detail: 'We engineer deterministic schemas, API contracts, fail-safe transaction pipelines, and user permission models before writing a line of code.',
  },
  {
    num: '03',
    title: 'ENGINEER',
    statement: 'Build and test.',
    detail: 'Iterative, type-safe development backed by comprehensive integration tests, automated staging previews, and end-to-end load benchmarking.',
  },
  {
    num: '04',
    title: 'EVOLVE',
    statement: 'Launch and improve.',
    detail: 'Zero-downtime production deployment, intensive hands-on staff onboarding, 24/7 telemetry monitoring, and continuous capability upgrades.',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative w-full py-28 px-6 bg-[#060608] text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-3">
            METHODOLOGY
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white mb-4">
            How we engineer <br />
            <span className="font-normal text-zinc-300">enduring business systems.</span>
          </h2>
          <p className="text-sm text-zinc-400 font-light">
            A disciplined four-stage engineering methodology designed to guarantee predictability, security, and immediate operational adoption.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-lg glass-panel border border-white/10 relative group hover:border-white/20 transition-all duration-300"
            >
              <div className="text-3xl font-mono font-light text-zinc-600 mb-6 group-hover:text-white transition-colors duration-300">
                {step.num}
              </div>

              <h3 className="text-lg font-medium text-white tracking-wide mb-1">
                {step.title}
              </h3>

              <div className="text-xs font-mono text-zinc-400 mb-4 tracking-tight">
                {step.statement}
              </div>

              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                {step.detail}
              </p>

              <div className="w-8 h-px bg-white/20 mt-8 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
