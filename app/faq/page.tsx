import React from 'react';
import type { Metadata } from 'next';
import prisma from '@/lib/prisma';
import FAQAccordion from './FAQAccordion';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Architecture & Implementation FAQ',
  description:
    'Frequently asked technical questions regarding Guruvanta Solutions Technologies ERP systems, billing software, data sovereignty, security, and implementation.',
};

export default async function FAQPage() {
  const faqs = await prisma.fAQ.findMany({
    where: { published: true },
    orderBy: { order: 'asc' },
  });

  const faqSchema = {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  return (
    <div className="w-full bg-black text-white pt-32 pb-24 px-6">
      <JsonLd data={faqSchema} />

      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-3">
            TECHNICAL KNOWLEDGE BASE
          </div>
          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-4">
            Frequently Asked Questions.
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Detailed insights into our architecture methodology, data sovereignty guarantees, pricing principles, and deployment timelines.
          </p>
        </div>

        <FAQAccordion initialFaqs={faqs} />
      </div>
    </div>
  );
}
