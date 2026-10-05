'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ThreeFibonacciSphere from './ThreeFibonacciSphere';
import { ArrowRight, Move, Sparkles, Layers } from 'lucide-react';

export default function CinematicHero() {
  return (
    <section className="relative w-full h-[100vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* 3D Background Canvas */}
      <ThreeFibonacciSphere />

      {/* Subtle radial glow & vignette overlay */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none" />

      {/* Top telemetry bar */}
      <div className="absolute top-28 md:top-32 inset-x-0 flex justify-center items-center pointer-events-none z-10 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-[10px] sm:text-xs font-mono tracking-widest text-zinc-400 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Operational Architecture Core</span>
          <span className="text-zinc-600">&bull;</span>
          <span className="text-zinc-400">21 Connected Modules</span>
        </div>
      </div>

      {/* Central Fixed Content Overlay */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-block text-[11px] font-mono tracking-[0.22em] text-zinc-400 uppercase mb-4">
            Guruvanta Solutions Technologies
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white mb-6 leading-[1.08]">
            Business Technology. <br className="hidden sm:inline" />
            <span className="font-normal text-zinc-100">Connected. Intelligent.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-400 font-light leading-relaxed mb-10">
            We build software systems that connect your people, processes and business data into one high-throughput operational core.
          </p>

          {/* Interactive Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
            <Link
              href="/request-demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-sm bg-white text-black font-medium text-sm tracking-wide transition-all duration-300 hover:bg-zinc-200 hover:shadow-[0_0_24px_rgba(255,255,255,0.2)] active:scale-[0.98]"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-sm border border-white/20 bg-black/40 backdrop-blur-md text-white font-medium text-sm tracking-wide transition-all duration-300 hover:bg-white/10 hover:border-white/40 active:scale-[0.98]"
            >
              <Layers className="w-4 h-4 text-zinc-400" />
              <span>Explore Solutions</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Hint */}
      <div className="absolute bottom-8 inset-x-0 flex flex-col items-center justify-center gap-1.5 pointer-events-none z-10 text-zinc-500 font-mono text-[10px] tracking-widest uppercase">
        <div className="flex items-center gap-2 text-zinc-400">
          <Move className="w-3.5 h-3.5 animate-bounce" />
          <span>Click & Drag to Rotate Ecosystem Orbit</span>
        </div>
        <div className="w-px h-6 bg-gradient-to-b from-zinc-500 to-transparent mt-1" />
      </div>
    </section>
  );
}
