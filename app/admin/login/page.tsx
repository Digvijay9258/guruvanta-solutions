'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Shield, Loader2, ArrowRight, KeyRound } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@guruvanta.com');
  const [password, setPassword] = useState('admin123456');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Authentication rejected');
      }

      router.push('/admin');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Authentication failure');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md p-8 sm:p-10 rounded-lg glass-panel border border-white/10 space-y-6">
        <div className="text-center">
          <div className="w-12 h-12 rounded border border-white/20 bg-white/5 flex items-center justify-center mx-auto mb-4 text-white">
            <KeyRound className="w-5 h-5" />
          </div>

          <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-1">
            EXECUTIVE CONSOLE
          </div>
          <h1 className="text-2xl font-light text-white tracking-tight">
            Guruvanta Admin Access
          </h1>
        </div>

        {error && (
          <div className="p-3 rounded bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1.5">
              ADMIN EMAIL
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded bg-black/60 border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 font-mono transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1.5">
              SECURE KEY / PASSWORD
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 rounded bg-black/60 border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 font-mono transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded bg-white text-black font-medium text-xs font-mono tracking-wider transition-all duration-300 hover:bg-zinc-200 disabled:opacity-50 flex items-center justify-center gap-2 mt-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>AUTHENTICATING SESSION...</span>
              </>
            ) : (
              <span>AUTHENTICATE &amp; ENTER &rarr;</span>
            )}
          </button>
        </form>

        <div className="pt-4 border-t border-white/10 text-center">
          <div className="text-[11px] font-mono text-zinc-500">
            Default credentials pre-filled for local administrative evaluation.
          </div>
        </div>
      </div>
    </div>
  );
}
