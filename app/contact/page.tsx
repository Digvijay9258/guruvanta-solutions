import React from 'react';
import type { Metadata } from 'next';
import prisma from '@/lib/prisma';
import ContactForm from '@/components/forms/ContactForm';
import { Mail, Phone, MapPin, Globe, Linkedin, Twitter, Github } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Contact Engineering Hub & Office Centers',
  description:
    'Connect directly with Guruvanta Solutions Technologies systems architects in Bengaluru, Mumbai, and New Delhi NCR.',
};

export default async function ContactPage() {
  const locations = await prisma.location.findMany({
    orderBy: { isHeadquarter: 'desc' },
  });

  return (
    <div className="w-full bg-black text-white pt-32 pb-24 px-6">
      <JsonLd
        type="Organization"
        data={{
          name: 'Guruvanta Solutions Technologies',
          email: 'contact@guruvanta.com',
          telephone: '+91-80-4192-8800',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-3">
            DIRECT INQUIRIES &bull; CORPORATE CENTERS
          </div>
          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-6">
            Start an Architectural Conversation.
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            Reach out regarding custom software development, enterprise ERP deployments, or technology modernization. Our systems architects will respond promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Left Column: Direct Info & Social */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-lg glass-panel border border-white/10 space-y-6">
              <div>
                <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-1">
                  CENTRAL DIRECT DISPATCH
                </div>
                <div className="flex items-center gap-2 text-white font-mono text-sm">
                  <Mail className="w-4 h-4 text-zinc-400" />
                  <span>contact@guruvanta.com</span>
                </div>
              </div>

              <div>
                <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-1">
                  EXECUTIVE TELEPHONE
                </div>
                <div className="flex items-center gap-2 text-white font-mono text-sm">
                  <Phone className="w-4 h-4 text-zinc-400" />
                  <span>+91 (80) 4192-8800</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-3">
                  NETWORK CONNECTIVITY
                </div>
                <div className="flex items-center gap-4 text-zinc-400">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                    aria-label="Twitter / X"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder Graphic */}
            <div className="p-6 rounded-lg glass-panel border border-white/10 relative overflow-hidden h-56 flex flex-col justify-between">
              <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
              <div className="flex items-center justify-between z-10">
                <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                  GLOBAL GEO COORDINATES
                </div>
                <MapPin className="w-4 h-4 text-zinc-400" />
              </div>

              <div className="z-10 text-center">
                <div className="text-sm font-medium text-white">Prestige Tech Hub, Bengaluru</div>
                <div className="text-xs font-mono text-zinc-500">12.9352° N, 77.6946° E</div>
              </div>

              <div className="z-10 text-[10px] font-mono text-zinc-500 text-center">
                Interactive Map &bull; High-Security Data Center Tier III
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* Office Centers */}
        <div>
          <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-3">
            PHYSICAL CENTERS
          </div>
          <h2 className="text-3xl font-light text-white mb-8">Corporate Engineering Hubs</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <div key={loc.city} className="p-6 rounded-lg glass-panel border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-medium text-white">{loc.city}</h3>
                  {loc.isHeadquarter && (
                    <span className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-white/10 text-white border border-white/20">
                      HEADQUARTERS
                    </span>
                  )}
                </div>
                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-4">{loc.address}</p>
                <div className="text-xs font-mono text-zinc-500">{loc.phone}</div>
                <div className="text-xs font-mono text-zinc-500">{loc.email}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
