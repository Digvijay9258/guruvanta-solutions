import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/cinematic/CustomCursor';
import IntroOverlay from '@/components/cinematic/IntroOverlay';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://guruvanta.com'),
  title: {
    default: 'GURUVANTA SOLUTIONS TECHNOLOGIES | Intelligent Software & Enterprise ERP Systems',
    template: '%s | Guruvanta Solutions Technologies',
  },
  description:
    'We build intelligent software systems that connect people, processes and business data. Custom software, ERP, CRM, Billing & GST, and Automation.',
  keywords: [
    'ERP Software',
    'Custom Software Development',
    'GST Billing Software',
    'Inventory Management',
    'Hospital Management HMIS',
    'Restaurant ERP',
    'Hotel PMS',
    'Retail POS',
    'HR & Payroll Software',
    'WhatsApp Business Automation',
    'AI Solutions',
    'Guruvanta Solutions Technologies',
  ],
  authors: [{ name: 'Guruvanta Solutions Technologies' }],
  creator: 'Guruvanta Solutions Technologies',
  publisher: 'Guruvanta Solutions Technologies',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://guruvanta.com',
    title: 'GURUVANTA SOLUTIONS TECHNOLOGIES | Connected Operations',
    description:
      'We build intelligent software systems that connect people, processes and business data.',
    siteName: 'Guruvanta Solutions Technologies',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GURUVANTA SOLUTIONS TECHNOLOGIES',
    description:
      'We build intelligent software systems that connect people, processes and business data.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-black text-foreground antialiased min-h-screen flex flex-col selection:bg-white/20 selection:text-white">
        <JsonLd />
        <CustomCursor />
        <IntroOverlay />
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
