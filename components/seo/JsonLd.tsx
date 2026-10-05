import React from 'react';

interface JsonLdProps {
  type?: 'Organization' | 'SoftwareApplication' | 'FAQPage' | 'Service' | 'BreadcrumbList';
  data?: Record<string, unknown>;
}

export default function JsonLd({ type = 'Organization', data = {} }: JsonLdProps) {
  const defaultOrg = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Guruvanta Solutions Technologies',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://guruvanta.com',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://guruvanta.com'}/logo.png`,
    description: 'We build intelligent software systems that connect people, processes and business data.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Prestige Tech Hub, Outer Ring Road',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      postalCode: '560103',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-80-4192-8800',
      contactType: 'customer service',
      email: 'contact@guruvanta.com',
    },
    sameAs: [
      'https://www.linkedin.com/company/guruvanta',
      'https://twitter.com/guruvanta',
    ],
  };

  const schema = {
    ...defaultOrg,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
