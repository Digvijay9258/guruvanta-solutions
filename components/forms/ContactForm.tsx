'use client';

import React, { useState } from 'react';
import { trackEvent } from '@/lib/analytics';
import { CheckCircle2, Loader2, Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    trackEvent('form_submit', { form: 'contact' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to dispatch message');
      }

      setSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage('Failed to send message. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="glass-panel p-8 rounded-lg border border-white/20 text-center animate-fade-in">
        <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-medium text-white mb-2">Message Transmitted</h3>
        <p className="text-xs text-zinc-400 font-light mb-6">
          Your inquiry has been stored securely in our executive dispatch system. An architect will respond directly to <span className="text-white">{formData.email}</span>.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
          }}
          className="text-xs font-mono text-zinc-400 hover:text-white underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-lg border border-white/10 space-y-4">
      {errorMessage && (
        <div className="p-3 rounded bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs">
          {errorMessage}
        </div>
      )}

      <div>
        <label className="block text-xs font-mono text-zinc-400 mb-1.5">NAME *</label>
        <input
          type="text"
          required
          name="name"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-black/60 border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono text-zinc-400 mb-1.5">EMAIL *</label>
          <input
            type="email"
            required
            name="email"
            placeholder="you@company.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-black/60 border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-mono text-zinc-400 mb-1.5">PHONE (OPTIONAL)</label>
          <input
            type="tel"
            name="phone"
            placeholder="+91..."
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-black/60 border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono text-zinc-400 mb-1.5">SUBJECT *</label>
        <input
          type="text"
          required
          name="subject"
          placeholder="System architecture inquiry, partnership, or general consultation"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-black/60 border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-mono text-zinc-400 mb-1.5">MESSAGE *</label>
        <textarea
          required
          rows={4}
          name="message"
          placeholder="Provide an overview of your systems or operational objectives..."
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-black/60 border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 transition-colors"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 rounded bg-white text-black font-medium text-xs font-mono tracking-wider transition-all duration-300 hover:bg-zinc-200 disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>TRANSMITTING MESSAGE...</span>
          </>
        ) : (
          <>
            <Send className="w-3.5 h-3.5" />
            <span>TRANSMIT DISPATCH &rarr;</span>
          </>
        )}
      </button>
    </form>
  );
}
