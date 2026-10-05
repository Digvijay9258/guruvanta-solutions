import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Cpu, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, BrainCircuit } from 'lucide-react';
import DemoRequestForm from '@/components/forms/DemoRequestForm';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Enterprise AI Solutions & Machine Learning Engineering',
  description:
    'Predictive demand forecasting, computer vision OCR, domain-specialized LLM fine-tuning, and automated exception detection for enterprise workflows.',
};

const FEATURES = [
  'Predictive inventory demand forecasting eliminating stock-outs and working capital waste',
  'Computer vision document OCR extracting unstructured supplier invoices into ERP ledgers',
  'Domain-grounded LLM agents with RAG indexing your proprietary manuals and contracts',
  'Automated transaction anomaly detection and financial fraud risk scoring',
  'Automated customer support resolution with continuous human-in-the-loop escalation',
  'Private cloud AI deployment ensuring zero enterprise data leaks to public foundation models',
];

export default function AISolutionsPage() {
  return (
    <div className="w-full bg-black text-white pt-32 pb-24 px-6">
      <JsonLd
        type="SoftwareApplication"
        data={{
          name: 'Guruvanta Enterprise AI Suite',
          applicationCategory: 'ArtificialIntelligenceApplication',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-zinc-400 uppercase mb-4">
            <Cpu className="w-3.5 h-3.5 text-zinc-300" />
            <span>MACHINE INTELLIGENCE CORE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-6">
            Enterprise AI Solutions & <br />
            <span className="font-normal text-zinc-300">Predictive Automation.</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed mb-8">
            Deploy machine intelligence directly into your core operational pipeline. From predictive purchasing models to domain-specialized LLMs that understand your business files.
          </p>

          <div className="relative rounded-2xl overflow-hidden border border-white/20 mb-10 shadow-[0_0_80px_rgba(255,255,255,0.06)] group">
            <img
              src="/images/ai-neural-lattice.jpg"
              alt="Intelligent AI Decision Neural Lattice"
              className="w-full h-72 sm:h-96 object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-zinc-300 bg-black/60 backdrop-blur-md px-4 py-2.5 rounded border border-white/10">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                NEURAL TENSOR MATRIX ACTIVE
              </span>
              <span>CONFIDENCE: 99.82%</span>
            </div>
          </div>

          <Link
            href="#demo-form"
            className="inline-flex items-center gap-2 px-6 py-3 rounded bg-white text-black font-medium text-xs font-mono tracking-wider hover:bg-zinc-200 transition-colors"
          >
            <span>SCHEDULE AI ARCHITECTURE DEMO</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {FEATURES.map((feat, idx) => (
            <div key={idx} className="p-6 rounded-lg glass-card border border-white/10 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-sm text-zinc-300 font-light leading-relaxed">{feat}</span>
            </div>
          ))}
        </div>

        {/* Demo Form */}
        <div id="demo-form" className="max-w-2xl mx-auto pt-10 border-t border-white/10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-light text-white mb-3">
              Consult with AI Architects
            </h2>
          </div>
          <DemoRequestForm />
        </div>
      </div>
    </div>
  );
}
