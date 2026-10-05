'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' IST'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-[#030304] text-white border-t border-white/10 pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Tier: Company Positioning & Status */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded border border-white/20 bg-white/5 flex items-center justify-center font-mono text-xs text-white">
                G
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium tracking-tight uppercase">
                  GURUVANTA SOLUTIONS
                </span>
                <span className="text-[9px] font-mono tracking-[0.18em] text-zinc-500 uppercase">
                  TECHNOLOGIES
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-sm mb-6">
              We build intelligent software systems that connect people, processes and business data into one high-throughput operational core.
            </p>

            <div className="flex items-center gap-4 text-[11px] font-mono text-zinc-500">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                SYSTEM STATUS: OPTIMAL
              </span>
              <span>&bull;</span>
              <span>{time || '13:25:00 IST'}</span>
            </div>
          </div>

          {/* Quick Links Column 1: Core Platforms */}
          <div className="md:col-span-2">
            <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-4">
              PLATFORMS
            </div>
            <ul className="space-y-2 text-xs text-zinc-400 font-light">
              <li>
                <Link href="/billing-software" className="hover:text-white transition-colors">
                  Billing & GST
                </Link>
              </li>
              <li>
                <Link href="/inventory-software" className="hover:text-white transition-colors">
                  Inventory Control
                </Link>
              </li>
              <li>
                <Link href="/hr-payroll" className="hover:text-white transition-colors">
                  HR & Payroll
                </Link>
              </li>
              <li>
                <Link href="/crm" className="hover:text-white transition-colors">
                  CRM System
                </Link>
              </li>
              <li>
                <Link href="/pos" className="hover:text-white transition-colors">
                  Retail POS
                </Link>
              </li>
              <li>
                <Link href="/whatsapp-automation" className="hover:text-white transition-colors">
                  WhatsApp Automation
                </Link>
              </li>
              <li>
                <Link href="/ai-solutions" className="hover:text-white transition-colors">
                  AI Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 2: Industry ERPs */}
          <div className="md:col-span-3">
            <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-4">
              INDUSTRY SUITES
            </div>
            <ul className="space-y-2 text-xs text-zinc-400 font-light">
              <li>
                <Link href="/hospital-erp" className="hover:text-white transition-colors">
                  Hospital Management (HMIS)
                </Link>
              </li>
              <li>
                <Link href="/pharmacy-erp" className="hover:text-white transition-colors">
                  Pharmacy & Chemist ERP
                </Link>
              </li>
              <li>
                <Link href="/jewellery-erp" className="hover:text-white transition-colors">
                  Jewellery Retail & Karigar
                </Link>
              </li>
              <li>
                <Link href="/restaurant-erp" className="hover:text-white transition-colors">
                  Restaurant & KDS System
                </Link>
              </li>
              <li>
                <Link href="/hotel-erp" className="hover:text-white transition-colors">
                  Hotel PMS & Reservations
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">
                  Manufacturing & Logistics &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 3: Corporate */}
          <div className="md:col-span-2">
            <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-4">
              CORPORATE
            </div>
            <ul className="space-y-2 text-xs text-zinc-400 font-light">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About the Firm
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Case Studies & Work
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Architecture FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Architects
                </Link>
              </li>
              <li>
                <Link href="/request-demo" className="hover:text-white transition-colors">
                  Request Live Demo
                </Link>
              </li>
              <li>
                <Link href="/admin/login" className="hover:text-white transition-colors font-mono text-[11px] text-zinc-500">
                  Staff Login &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Tier: Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} GURUVANTA SOLUTIONS TECHNOLOGIES. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-zinc-300 transition-colors">
              Terms of Engagement
            </Link>
            <Link href="/sitemap.xml" className="hover:text-zinc-300 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
