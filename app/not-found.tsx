import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldAlert } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center bg-black text-white px-6">
      <div className="max-w-md text-center">
        <div className="w-12 h-12 rounded border border-white/20 bg-white/5 flex items-center justify-center mx-auto mb-6 text-zinc-400">
          <ShieldAlert className="w-6 h-6" />
        </div>

        <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-2">
          ERROR 404 &bull; RECORD NOT LOCATED
        </div>

        <h1 className="text-3xl font-light text-white mb-4">
          Specified Architecture Endpoint Does Not Exist.
        </h1>

        <p className="text-xs text-zinc-400 font-light leading-relaxed mb-8">
          The requested system route, module specification, or archive node is unavailable or has been relocated within the network.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded bg-white text-black font-medium text-xs font-mono tracking-wider hover:bg-zinc-200 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>RETURN TO OPERATIONAL CORE</span>
        </Link>
      </div>
    </div>
  );
}
