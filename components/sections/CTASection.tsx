'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageSquareCode } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative w-full py-32 px-6 bg-black text-white border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 radial-glow pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[10px] font-mono tracking-widest text-zinc-400 uppercase mb-6">
          <MessageSquareCode className="w-3.5 h-3.5 text-zinc-300" />
          <span>INITIATE ENGAGEMENT</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white mb-6 leading-tight">
          Let&apos;s build the system <br />
          <span className="font-normal text-zinc-300">your business actually needs.</span>
        </h2>

        <p className="max-w-xl mx-auto text-sm sm:text-base text-zinc-400 font-light leading-relaxed mb-10">
          Eliminate disconnected spreadsheets, manual reconciliation, and software that fights against your operations. Talk directly with our solutions architects.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-sm bg-white text-black font-medium text-sm tracking-wide transition-all duration-300 hover:bg-zinc-200 hover:shadow-[0_0_24px_rgba(255,255,255,0.2)] active:scale-[0.98]"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/request-demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-sm border border-white/20 bg-black/40 backdrop-blur-md text-white font-medium text-sm tracking-wide transition-all duration-300 hover:bg-white/10 hover:border-white/40 active:scale-[0.98]"
          >
            <span>Schedule System Demo</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
