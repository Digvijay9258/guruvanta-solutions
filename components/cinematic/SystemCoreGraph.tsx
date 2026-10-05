'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CreditCard,
  TrendingUp,
  ShoppingCart,
  Boxes,
  Users,
  Banknote,
  Target,
  BarChart3,
  Smartphone,
  Cpu,
  Webhook,
  Activity,
  CheckCircle2,
} from 'lucide-react';

const SATELLITE_NODES = [
  { id: 'billing', label: 'Billing', desc: 'Compliant GST invoices & aging', icon: CreditCard, angle: 0 },
  { id: 'sales', label: 'Sales', desc: 'Estimates & recurring orders', icon: TrendingUp, angle: 32.7 },
  { id: 'purchase', label: 'Purchase', desc: 'Supplier POs & receiving', icon: ShoppingCart, angle: 65.4 },
  { id: 'inventory', label: 'Inventory', desc: 'Multi-bin batch control', icon: Boxes, angle: 98.1 },
  { id: 'hr', label: 'HR', desc: 'Biometric shift attendance', icon: Users, angle: 130.8 },
  { id: 'payroll', label: 'Payroll', desc: 'Automated PF/ESI/TDS calc', icon: Banknote, angle: 163.5 },
  { id: 'crm', label: 'CRM', desc: 'Deal pipeline & conversion', icon: Target, angle: 196.2 },
  { id: 'analytics', label: 'Analytics', desc: 'Real-time financial telemetry', icon: BarChart3, angle: 228.9 },
  { id: 'mobile', label: 'Mobile', desc: 'Offline-ready native apps', icon: Smartphone, angle: 261.6 },
  { id: 'automation', label: 'Automation', desc: 'WhatsApp & webhook rules', icon: Cpu, angle: 294.3 },
  { id: 'api', label: 'API', desc: 'Microservices & event stream', icon: Webhook, angle: 327 },
];

export default function SystemCoreGraph() {
  const [selectedNode, setSelectedNode] = useState<string | null>('billing');

  const active = SATELLITE_NODES.find((n) => n.id === selectedNode) || SATELLITE_NODES[0];

  return (
    <section className="relative w-full py-28 px-6 bg-black text-white border-t border-b border-white/10 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 font-mono text-[10px] tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>Section 02 &bull; Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white mb-4">
            One intelligent core. <br />
            <span className="font-normal text-zinc-300">Every important operation connected.</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-light max-w-xl mx-auto">
            Break down the operational silos between your departments. When an event fires in one system, every dependent operation updates instantly.
          </p>
        </div>

        {/* Interactive Architecture Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Orbital Visualization (Left 7 Cols) */}
          <div className="lg:col-span-7 flex justify-center items-center relative min-h-[460px] sm:min-h-[520px]">
            {/* Concentric rings */}
            <div className="absolute w-[360px] sm:w-[460px] h-[360px] sm:h-[460px] rounded-full border border-white/10 pointer-events-none animate-pulse-slow" />
            <div className="absolute w-[240px] sm:w-[310px] h-[240px] sm:h-[310px] rounded-full border border-white/5 pointer-events-none" />

            {/* Central Core: ERP Core */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative z-20 w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-[#0a0a0e] border border-white/30 flex flex-col items-center justify-center p-3 text-center shadow-[0_0_50px_rgba(255,255,255,0.08)] cursor-pointer"
            >
              <div className="w-2 h-2 rounded-full bg-white mb-2 animate-ping" />
              <div className="text-xs font-mono tracking-widest text-zinc-400 uppercase">CORE</div>
              <div className="text-sm sm:text-base font-medium text-white tracking-tight">ERP ENGINE</div>
              <div className="text-[9px] font-mono text-zinc-500 mt-1">REAL-TIME SYNC</div>
            </motion.div>

            {/* Satellite Nodes arranged around the circle */}
            {SATELLITE_NODES.map((node, i) => {
              const radius = 180; // distance from center
              const rad = (node.angle * Math.PI) / 180;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;
              const isSelected = selectedNode === node.id;
              const Icon = node.icon;

              return (
                <div
                  key={node.id}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                  className="absolute z-30 transition-all duration-300"
                >
                  <button
                    onClick={() => setSelectedNode(node.id)}
                    className={`group relative flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 ${
                      isSelected
                        ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-110'
                        : 'bg-[#0e0e12]/90 text-zinc-300 border-white/15 hover:border-white/40 hover:bg-[#16161c]'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-black' : 'text-zinc-400 group-hover:text-white'}`} />
                    <span className="text-xs font-medium tracking-tight whitespace-nowrap">{node.label}</span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Detailed Inspector Panel (Right 5 Cols) */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-8 rounded-lg border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-white/5 border border-white/15 flex items-center justify-center text-white">
                    <active.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">NODE TELEMETRY</div>
                    <h3 className="text-xl font-medium text-white tracking-tight">{active.label} Subsystem</h3>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono tracking-widest uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  CONNECTED
                </span>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-light">
                {active.desc}. Connected directly to the ERP Core transaction journal, ensuring instantaneous propagation across all dependent departments without asynchronous delay.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Deterministic bi-directional schema validation</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Sub-millisecond event broadcast & audit stream</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Granular row-level access control & encryption</span>
                </div>
              </div>

              <div className="p-3.5 rounded bg-black/50 border border-white/5 font-mono text-[11px] text-zinc-400 flex items-center justify-between">
                <span>PIPELINE LATENCY</span>
                <span className="text-white font-medium">&lt; 4.2ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
