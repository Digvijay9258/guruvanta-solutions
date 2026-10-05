import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Engagement & Service Agreements',
  description: 'Enterprise master services agreement, SLAs, and technical warranties for software engineering projects.',
};

export default function TermsPage() {
  return (
    <div className="w-full bg-black text-white pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-3">
            LEGAL TERMS &bull; SERVICE AGREEMENTS
          </div>
          <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white mb-4">
            Terms of Engagement.
          </h1>
          <p className="text-xs font-mono text-zinc-400">LAST REVISED: OCTOBER 2026</p>
        </div>

        <div className="space-y-6 text-sm text-zinc-300 font-light leading-relaxed pt-8 border-t border-white/10">
          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white">1. Scope of Engagement</h2>
            <p>
              Engagements initiated with Guruvanta Solutions Technologies are governed by individual Master Services Agreements (MSA) and Statements of Work (SOW) executed between the parties specifying architectural milestones, deliverables, and acceptance criteria.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white">2. Intellectual Property Rights</h2>
            <p>
              Upon final milestone settlement, all custom source code, database schemas, and proprietary configurations developed specifically for the client are assigned to the client organization as work-for-hire, ensuring total operational freedom.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white">3. System Uptime & Engineering SLAs</h2>
            <p>
              Hosted instances configured by our team are monitored under guaranteed Service Level Agreements (SLAs) targeting 99.95% availability, with dedicated engineering response escalations based on severity tiers.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
