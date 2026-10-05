import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy & Data Sovereignty Charter',
  description: 'Data security, privacy practices, and compliance protocols enforced by Guruvanta Solutions Technologies.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-black text-white pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-3">
            LEGAL COMPLIANCE &bull; DATA GOVERNANCE
          </div>
          <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white mb-4">
            Privacy Policy &amp; Data Charter.
          </h1>
          <p className="text-xs font-mono text-zinc-400">LAST REVISED: OCTOBER 2026</p>
        </div>

        <div className="space-y-6 text-sm text-zinc-300 font-light leading-relaxed pt-8 border-t border-white/10">
          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white">1. Data Ownership & Sovereignty</h2>
            <p>
              Guruvanta Solutions Technologies strictly upholds client data sovereignty. All transaction data, employee records, customer lists, and financial logs stored in software platforms engineered by us remain 100% the intellectual and proprietary property of the client organization. We never monetize, sell, or train public AI models on proprietary client data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white">2. Technical Security & Encryption</h2>
            <p>
              All communication channels and database connections enforce TLS 1.3 protocol encryption. At-rest persistence utilizes AES-256 standards with strict key-rotation protocols. Role-Based Access Control (RBAC) ensures only authorized personnel access designated database tables.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white">3. Information Collected</h2>
            <p>
              When requesting demonstrations or initiating contact, we collect business contact details (name, corporate email, telephone, company name, operational requirements) solely for evaluating and responding to your inquiry.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white">4. Contact Compliance Officer</h2>
            <p>
              Inquiries regarding data rights, audits, or technical certifications should be addressed to privacy@guruvanta.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
