'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { RefreshCw, ArrowLeft } from 'lucide-react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Operational Error Caught:', error);
  }, [error]);

  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center bg-black text-white px-6">
      <div className="max-w-md text-center">
        <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-2">
          SYSTEM FAULT INTERCEPTED
        </div>

        <h1 className="text-3xl font-light text-white mb-4">
          An Operational Interruption Occurred.
        </h1>

        <p className="text-xs text-zinc-400 font-light leading-relaxed mb-8">
          The application layer encountered an unexpected state. Telemetry logs have recorded this incident without compromising database integrity.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-white text-black font-medium text-xs font-mono tracking-wider hover:bg-zinc-200 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>RE-INITIALIZE ROUTE</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded border border-white/20 text-xs font-mono tracking-wider hover:bg-white/5 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>HOME</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
