'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Work', href: '/portfolio' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

const MOBILE_MENU_ITEMS = [
  { label: 'The Company', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'FAQ', href: '/faq' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/85 backdrop-blur-md border-b border-white/10 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo / Wordmark */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded border border-white/20 bg-white/5 flex items-center justify-center font-mono text-xs tracking-wider text-white group-hover:border-white/50 transition-colors">
              G
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-medium tracking-tight text-white group-hover:text-zinc-200 transition-colors uppercase">
                GURUVANTA SOLUTIONS
              </span>
              <span className="text-[9px] font-mono tracking-[0.18em] text-zinc-500 uppercase -mt-0.5">
                TECHNOLOGIES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-xs font-mono tracking-wider transition-colors duration-200 ${
                    isActive ? 'text-white font-medium' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action / CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/admin/login"
              className="text-[11px] font-mono tracking-wider text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              PORTAL
            </Link>

            <Link
              href="/request-demo"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-white/20 bg-white/5 hover:bg-white hover:text-black text-xs font-mono tracking-wider text-white transition-all duration-300"
            >
              <span>Request Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Full-Screen Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-black/98 text-white flex flex-col justify-between pt-24 pb-8 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-2">
                INDEX NAVIGATION
              </div>

              {MOBILE_MENU_ITEMS.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-2xl font-light tracking-tight text-zinc-200 hover:text-white py-1"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 space-y-4">
              <Link
                href="/request-demo"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-sm bg-white text-black font-medium text-sm tracking-wide"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                <Link href="/admin/login" onClick={() => setIsOpen(false)}>
                  ADMIN PORTAL &rarr;
                </Link>
                <span>&copy; {new Date().getFullYear()} GST</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
