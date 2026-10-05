'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  CalendarClock,
  MessageSquare,
  Layers,
  Boxes,
  Building2,
  Briefcase,
  HelpCircle,
  LogOut,
  Shield,
  Menu,
  X,
  ExternalLink,
} from 'lucide-react';

const ADMIN_NAV = [
  { label: 'Overview', href: '/admin', icon: LayoutDashboard },
  { label: 'Leads & Inquiries', href: '/admin/leads', icon: Users },
  { label: 'Demo Requests', href: '/admin/demo-requests', icon: CalendarClock },
  { label: 'Contact Messages', href: '/admin/contact-messages', icon: MessageSquare },
  { label: 'Services CMS', href: '/admin/content/services', icon: Layers },
  { label: 'Products CMS', href: '/admin/content/products', icon: Boxes },
  { label: 'Industries CMS', href: '/admin/content/industries', icon: Building2 },
  { label: 'Portfolio CMS', href: '/admin/content/portfolio', icon: Briefcase },
  { label: 'FAQs CMS', href: '/admin/content/faqs', icon: HelpCircle },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; email: string; role: string } | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [checking, setChecking] = useState(true);

  const isLoginPage = pathname === '/admin/login';

  useEffect(() => {
    if (isLoginPage) {
      setChecking(false);
      return;
    }

    fetch('/api/auth/me')
      .then((res) => {
        if (!res.ok) {
          router.push('/admin/login');
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (data?.user) {
          setUser(data.user);
        }
      })
      .finally(() => setChecking(false));
  }, [pathname, isLoginPage, router]);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  if (isLoginPage) {
    return <>{children}</>;
  }

  if (checking) {
    return (
      <div className="w-full min-h-screen bg-[#050505] text-white flex items-center justify-center font-mono text-xs">
        <span className="animate-pulse">AUTHENTICATING SESSION...</span>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#070709] text-zinc-200 flex">
      {/* Sidebar Desktop */}
      <aside className="hidden lg:flex flex-col justify-between w-64 border-r border-white/10 bg-[#09090c] p-6 shrink-0 fixed inset-y-0 left-0 z-30">
        <div>
          {/* Brand Monogram */}
          <div className="flex items-center gap-3 pb-6 border-b border-white/10 mb-6">
            <div className="w-8 h-8 rounded bg-white text-black font-mono font-bold flex items-center justify-center text-xs">
              GST
            </div>
            <div>
              <div className="text-xs font-medium text-white tracking-tight uppercase">
                GURUVANTA ADMIN
              </div>
              <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                OPERATIONAL PORTAL
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {ADMIN_NAV.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded text-xs font-mono tracking-wide transition-colors ${
                    isActive
                      ? 'bg-white/10 text-white font-medium border border-white/15'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0 text-zinc-400" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Card & Logout */}
        <div className="pt-6 border-t border-white/10 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs font-medium text-white truncate max-w-[130px]">
                {user?.name || 'Administrator'}
              </span>
              <span className="text-[10px] font-mono text-emerald-400">
                {user?.role || 'SUPER_ADMIN'}
              </span>
            </div>

            <button
              onClick={handleLogout}
              className="p-1.5 rounded hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              title="Log out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>

          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between text-[11px] font-mono text-zinc-500 hover:text-zinc-300 transition-colors pt-1"
          >
            <span>VIEW LIVE WEBSITE</span>
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-64 flex flex-col min-h-screen">
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between p-4 bg-[#09090c] border-b border-white/10 sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-white text-black font-mono font-bold text-[10px] flex items-center justify-center">
              G
            </div>
            <span className="text-xs font-mono text-white">GURUVANTA ADMIN</span>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1 text-zinc-400 hover:text-white"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </header>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#09090c] border-b border-white/10 p-6 space-y-3">
            {ADMIN_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-xs font-mono text-zinc-300 hover:text-white py-1.5"
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={handleLogout}
              className="text-xs font-mono text-rose-400 pt-2 block"
            >
              Log Out
            </button>
          </div>
        )}

        <main className="flex-1 p-6 sm:p-10 max-w-7xl w-full mx-auto">{children}</main>
      </div>
    </div>
  );
}
