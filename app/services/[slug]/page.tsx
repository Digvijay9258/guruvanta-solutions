import React from 'react';
import type { Metadata } from 'next';
import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, Shield, Cpu, Layers } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = await prisma.service.findUnique({
    where: { slug: params.slug },
  });

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: service.seoTitle || `${service.title} | Guruvanta Solutions Technologies`,
    description: service.seoDescription || service.shortDesc,
    openGraph: {
      title: `${service.title} | Guruvanta Solutions Technologies`,
      description: service.shortDesc,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = await prisma.service.findUnique({
    where: { slug: params.slug },
  });

  if (!service) {
    notFound();
  }

  let features: string[] = [];
  let technologies: string[] = [];

  try {
    features = JSON.parse(service.features);
  } catch {
    features = [];
  }

  try {
    technologies = service.technologies ? JSON.parse(service.technologies) : [];
  } catch {
    technologies = [];
  }

  // Related services in same category
  const relatedServices = await prisma.service.findMany({
    where: {
      category: service.category,
      NOT: { id: service.id },
    },
    take: 3,
  });

  return (
    <div className="w-full bg-black text-white pt-32 pb-24 px-6">
      <JsonLd
        type="Service"
        data={{
          name: service.title,
          description: service.description,
          provider: {
            '@type': 'Organization',
            name: 'Guruvanta Solutions Technologies',
          },
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Back Link */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO SERVICES DIRECTORY</span>
        </Link>

        {/* Title & Metadata Header */}
        <div className="mb-12 pb-8 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-zinc-400 uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>{service.category}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white mb-6">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-3xl">
            {service.description}
          </p>
        </div>

        {/* Architecture & Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-8 space-y-8">
            <div className="p-8 rounded-lg glass-panel border border-white/10">
              <h2 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-zinc-400" />
                <span>Engineered Capabilities & Modules</span>
              </h2>

              <div className="space-y-4">
                {features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded bg-white/[0.02] border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-300 font-light">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-lg glass-panel border border-white/10">
              <h2 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-zinc-400" />
                <span>Enterprise SLA & Operational Guarantee</span>
              </h2>
              <p className="text-xs text-zinc-400 font-light leading-relaxed mb-4">
                All software components engineered under this discipline adhere to ISO-aligned security benchmarks, automated unit test suites, sub-10ms database query times, and complete data ownership.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-mono text-zinc-400">
                <div>&bull; 99.95% Target Uptime</div>
                <div>&bull; Immutable Transaction Logs</div>
                <div>&bull; End-to-End Encryption</div>
              </div>
            </div>
          </div>

          {/* Right Rail: Tech Stack & Actions */}
          <div className="md:col-span-4 space-y-6">
            {technologies.length > 0 && (
              <div className="p-6 rounded-lg glass-panel border border-white/10">
                <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-4">
                  CORE TECH STACK
                </div>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-black/50 border border-white/10 text-xs font-mono text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="p-6 rounded-lg glass-panel border border-white/20 text-center">
              <h3 className="text-base font-medium text-white mb-2">Request System Walkthrough</h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                Consult with our senior systems architect to assess implementation timelines and architecture.
              </p>
              <Link
                href="/request-demo"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded bg-white text-black font-medium text-xs font-mono tracking-wider hover:bg-zinc-200 transition-colors"
              >
                <span>REQUEST LIVE DEMO</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <div className="pt-12 border-t border-white/10">
            <h2 className="text-xl font-light text-white mb-6">
              Related Systems in {service.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="p-6 rounded-lg glass-card border border-white/10 block group"
                >
                  <h3 className="text-base font-medium text-white mb-2 group-hover:text-zinc-200">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light line-clamp-2">
                    {rel.shortDesc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
