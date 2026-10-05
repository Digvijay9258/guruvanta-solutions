import React from 'react';
import type { Metadata } from 'next';
import DemoRequestForm from '@/components/forms/DemoRequestForm';
import { ShieldCheck, CheckCircle2, Clock, Users, Server } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Request Enterprise Demonstration & Architectural Review',
  description:
    'Schedule a tailored demonstration of Guruvanta Solutions Technologies ERP, Billing, CRM, or Custom Software platforms with our systems architects.',
};

export default function RequestDemoPage() {
  return (
    <div className="w-full bg-black text-white pt-32 pb-24 px-6">
      <JsonLd
        type="Service"
        data={{
          name: 'Executive Technical Demonstration',
          description: 'Live interactive software platform demonstration.',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Proof */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-3">
                SYSTEM EVALUATION &bull; LIVE ACCESS
              </div>
              <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-white mb-6">
                Request an Architectural <br />
                <span className="font-normal text-zinc-300">Demonstration.</span>
              </h1>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                Experience our platforms configured around your actual operational data volume, department hierarchy, and integration endpoints.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-zinc-300" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">Rapid Response SLA</h3>
                  <p className="text-xs text-zinc-400 font-light">
                    A systems architect will review your parameters and connect within 2-4 business hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Server className="w-4 h-4 text-zinc-300" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">Dedicated Sandbox Access</h3>
                  <p className="text-xs text-zinc-400 font-light">
                    Receive interactive sandbox credentials with sample industry data matching your domain.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-zinc-300" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">Confidentiality Assured</h3>
                  <p className="text-xs text-zinc-400 font-light">
                    All workflow disclosures and architecture blueprints remain protected under mutual NDA.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg glass-panel border border-white/10">
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">
                DIRECT CONTACT
              </div>
              <div className="text-sm text-white font-mono mb-1">+91 (80) 4192-8800</div>
              <div className="text-xs text-zinc-400 font-mono">architecture@guruvanta.com</div>
            </div>
          </div>

          {/* Right Column: Complete Form */}
          <div className="lg:col-span-7">
            <DemoRequestForm />
          </div>
        </div>
      </div>
    </div>
  );
}
