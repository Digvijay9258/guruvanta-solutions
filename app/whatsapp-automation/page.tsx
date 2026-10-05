import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MessageSquareCode, ArrowRight, CheckCircle2, ShieldCheck, Send, BellRing } from 'lucide-react';
import DemoRequestForm from '@/components/forms/DemoRequestForm';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'WhatsApp Business Cloud Automation Platform',
  description:
    'Automated tax invoice PDF delivery, payment reminder sequences, lead follow-ups, order status tracking, and 24/7 conversational support on WhatsApp.',
};

const FEATURES = [
  'Direct Meta WhatsApp Business Cloud API integration with verified green tick support',
  'Automated invoice PDF generation and dispatch the instant a sale is confirmed',
  'Automated, polite payment collection sequences with one-click UPI payment links',
  'Real-time order shipment, tracking, and consignment delivery confirmation alerts',
  'Interactive button menus and product catalog browsing inside WhatsApp chats',
  'Seamless fallback to human support agents with shared multi-agent inbox',
];

export default function WhatsAppAutomationPage() {
  return (
    <div className="w-full bg-black text-white pt-32 pb-24 px-6">
      <JsonLd
        type="SoftwareApplication"
        data={{
          name: 'Guruvanta WhatsApp Business Automation',
          applicationCategory: 'MessagingApplication',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-zinc-400 uppercase mb-4">
            <MessageSquareCode className="w-3.5 h-3.5 text-zinc-300" />
            <span>CONNECTED CHAT MESSAGING</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-6">
            WhatsApp Business <br />
            <span className="font-normal text-zinc-300">Automated Communications.</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed mb-8">
            Connect your ERP database directly to your customers&apos; primary communication app. Send invoices, chase outstanding balances, and answer common questions 24/7.
          </p>

          <Link
            href="#demo-form"
            className="inline-flex items-center gap-2 px-6 py-3 rounded bg-white text-black font-medium text-xs font-mono tracking-wider hover:bg-zinc-200 transition-colors"
          >
            <span>SCHEDULE WHATSAPP DEMO</span>
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
              Request WhatsApp Automation Setup
            </h2>
          </div>
          <DemoRequestForm />
        </div>
      </div>
    </div>
  );
}
