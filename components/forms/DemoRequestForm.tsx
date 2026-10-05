'use client';

import React, { useState } from 'react';
import { trackEvent } from '@/lib/analytics';
import { CheckCircle2, Loader2, Sparkles, ShieldCheck } from 'lucide-react';

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  businessType: string;
  city: string;
  interestedSolution: string;
  numberOfUsers: string;
  currentSoftware: string;
  requirement: string;
  preferredContact: 'EMAIL' | 'PHONE' | 'WHATSAPP';
  preferredDate: string;
  timeSlot: string;
}

const SOLUTIONS = [
  'ERP Software',
  'Billing & GST Software',
  'Inventory Management',
  'HR & Payroll Platform',
  'CRM System',
  'Hospital Management (HMIS)',
  'Pharmacy Software',
  'Jewellery Management ERP',
  'Restaurant ERP & KDS',
  'Hotel PMS & Reservations',
  'Retail POS (Offline Ready)',
  'Manufacturing ERP & BOM',
  'Transport & Logistics Fleet',
  'School & College Management',
  'Real Estate Builder ERP',
  'Custom Software Architecture',
  'WhatsApp Business Automation',
  'AI Solutions & Automation',
];

export default function DemoRequestForm() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    company: '',
    email: '',
    phone: '',
    businessType: 'Enterprise',
    city: '',
    interestedSolution: 'ERP Software',
    numberOfUsers: '10-25',
    currentSoftware: '',
    requirement: '',
    preferredContact: 'EMAIL',
    preferredDate: '',
    timeSlot: 'Morning (10:00 - 13:00)',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    trackEvent('form_submit', { form: 'demo_request', solution: formData.interestedSolution });

    try {
      const res = await fetch('/api/demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit request');
      }

      setSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="glass-panel p-10 rounded-lg border border-white/20 text-center max-w-xl mx-auto my-8 animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-light text-white mb-3">Request Received & Authenticated</h3>
        <p className="text-sm text-zinc-300 font-light leading-relaxed mb-6">
          Thank you, <span className="text-white font-medium">{formData.name}</span>. A senior systems specialist at Guruvanta Solutions Technologies has been assigned to <span className="text-white font-medium">{formData.company}</span>.
        </p>
        <div className="p-4 rounded bg-black/60 border border-white/10 text-xs font-mono text-zinc-400 mb-8 text-left space-y-1">
          <div>&bull; System Interest: {formData.interestedSolution}</div>
          <div>&bull; Preferred Channel: {formData.preferredContact}</div>
          <div>&bull; Target Review Time: Under 2 business hours</div>
        </div>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: '',
              company: '',
              email: '',
              phone: '',
              businessType: 'Enterprise',
              city: '',
              interestedSolution: 'ERP Software',
              numberOfUsers: '10-25',
              currentSoftware: '',
              requirement: '',
              preferredContact: 'EMAIL',
              preferredDate: '',
              timeSlot: 'Morning (10:00 - 13:00)',
            });
          }}
          className="text-xs font-mono text-zinc-400 hover:text-white underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel p-8 sm:p-12 rounded-lg border border-white/10 space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-white/10">
        <div>
          <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
            ENTERPRISE ACCESS INITIATION
          </div>
          <h2 className="text-xl font-medium text-white tracking-tight">Request an Architectural Demonstration</h2>
        </div>
        <ShieldCheck className="w-5 h-5 text-zinc-400" />
      </div>

      {errorMessage && (
        <div className="p-3.5 rounded bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs">
          {errorMessage}
        </div>
      )}

      {/* Row 1: Name & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-mono text-zinc-400 mb-2">FULL NAME *</label>
          <input
            type="text"
            required
            name="name"
            placeholder="e.g. Vikramaditya Rathore"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded bg-black/60 border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-mono text-zinc-400 mb-2">COMPANY / ORGANIZATION *</label>
          <input
            type="text"
            required
            name="company"
            placeholder="e.g. Acme Logistics Group"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded bg-black/60 border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 transition-colors"
          />
        </div>
      </div>

      {/* Row 2: Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-mono text-zinc-400 mb-2">CORPORATE EMAIL *</label>
          <input
            type="email"
            required
            name="email"
            placeholder="name@company.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded bg-black/60 border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-mono text-zinc-400 mb-2">MOBILE / PHONE NUMBER *</label>
          <input
            type="tel"
            required
            name="phone"
            placeholder="+91 98000 00000"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded bg-black/60 border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 transition-colors"
          />
        </div>
      </div>

      {/* Row 3: Business Type & City */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-mono text-zinc-400 mb-2">BUSINESS TYPE / INDUSTRY</label>
          <select
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded bg-black/60 border border-white/10 text-sm text-white focus:outline-none focus:border-white/40 transition-colors"
          >
            <option value="Manufacturing">Manufacturing</option>
            <option value="Healthcare">Healthcare & Hospital</option>
            <option value="Retail">Retail & Multi-store</option>
            <option value="Hospitality">Hospitality & Dining</option>
            <option value="Logistics">Transport & Logistics</option>
            <option value="Pharmaceutical">Pharmacy & Drugs</option>
            <option value="Jewellery">Jewellery & Bullion</option>
            <option value="Education">Education & School</option>
            <option value="Real Estate">Real Estate & Construction</option>
            <option value="Other">Other Enterprise</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-mono text-zinc-400 mb-2">CITY / REGION</label>
          <input
            type="text"
            name="city"
            placeholder="e.g. Bengaluru, Mumbai, Delhi"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded bg-black/60 border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 transition-colors"
          />
        </div>
      </div>

      {/* Row 4: Solution & Users */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-mono text-zinc-400 mb-2">TARGET SYSTEM / SOLUTION *</label>
          <select
            name="interestedSolution"
            value={formData.interestedSolution}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded bg-black/60 border border-white/10 text-sm text-white focus:outline-none focus:border-white/40 transition-colors"
          >
            {SOLUTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-mono text-zinc-400 mb-2">EXPECTED USERS / SEATS</label>
          <select
            name="numberOfUsers"
            value={formData.numberOfUsers}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded bg-black/60 border border-white/10 text-sm text-white focus:outline-none focus:border-white/40 transition-colors"
          >
            <option value="1-10">1 - 10 Users</option>
            <option value="10-25">10 - 25 Users</option>
            <option value="25-100">25 - 100 Users</option>
            <option value="100-500">100 - 500 Users</option>
            <option value="500+">500+ Enterprise</option>
          </select>
        </div>
      </div>

      {/* Row 5: Current Software & Preferred Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-mono text-zinc-400 mb-2">CURRENT SOFTWARE IN USE</label>
          <input
            type="text"
            name="currentSoftware"
            placeholder="e.g. Tally, Excel, SAP, Custom legacy"
            value={formData.currentSoftware}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded bg-black/60 border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-mono text-zinc-400 mb-2">PREFERRED CONTACT CHANNEL</label>
          <select
            name="preferredContact"
            value={formData.preferredContact}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded bg-black/60 border border-white/10 text-sm text-white focus:outline-none focus:border-white/40 transition-colors"
          >
            <option value="EMAIL">Email Consultation</option>
            <option value="PHONE">Direct Telephone</option>
            <option value="WHATSAPP">WhatsApp Executive Dispatch</option>
          </select>
        </div>
      </div>

      {/* Requirement Details */}
      <div>
        <label className="block text-xs font-mono text-zinc-400 mb-2">
          OPERATIONAL SCOPE & KEY REQUIREMENTS
        </label>
        <textarea
          rows={3}
          name="requirement"
          placeholder="Briefly describe your operational bottlenecks, transaction volume, or custom module specifications..."
          value={formData.requirement}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded bg-black/60 border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 transition-colors"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded bg-white text-black font-medium text-sm tracking-wide transition-all duration-300 hover:bg-zinc-200 disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>AUTHENTICATING & DISPATCHING LEAD...</span>
          </>
        ) : (
          <span>CONFIRM AND DISPATCH DEMO REQUEST &rarr;</span>
        )}
      </button>

      <div className="text-[10px] font-mono text-zinc-500 text-center uppercase tracking-wider">
        Guaranteed NDA &bull; 100% Data Sovereignty &bull; Zero Spam
      </div>
    </form>
  );
}
