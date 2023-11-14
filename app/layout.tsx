import type { Metadata } from 'next';

import PlausibleAnalytics from 'next-plausible';

import './globals.css';

import { getFontConfig } from '@/fonts/fonts.config';
const { accent, sans } = getFontConfig();

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import { Providers } from './providers';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={`${accent.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <PlausibleAnalytics domain="konstantin.digital" />
        {/* <meta name="og:image" /> is generated. */}
        <meta property="og:image:alt" content="Konstantin Münster" />
        {/* <meta name="twitter:image" /> is generated. */}
        <meta property="og:image:alt" content="Konstantin Münster" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="konstantin.digital – Blog"
          href="/rss.xml"
        />
      </head>
      <body>
        <Providers>
          <div className="min-h-screen" data-page-root>
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
};

/**
 * Exports
 */

export const metadata: Metadata = {
  metadataBase: new URL('https://konstantin.digital'),
  authors: { name: 'Konstantin Münster' },
  creator: 'Konstantin Münster',
  publisher: 'Konstantin Münster',
  title: {
    template: '%s | Konstantin Münster',
    default: 'Konstantin Münster – Product Engineer',
  },
  description:
    'Turn your product’s pain into production-ready features that unlock opportunities. For startups and scale-ups.',
  keywords: [
    'Web Development',
    'Freelancer',
    'Product Engineer',
    'Product Development',
    'Product Management',
    'MVP',
    'Startups',
  ],
  viewport: { width: 'device-width', initialScale: 1 },
  alternates: {
    canonical: 'https://konstantin.digital',
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
  manifest: '/manifest.json',
  twitter: {
    card: 'summary_large_image',
    site: '@kmuenster',
    creator: '@kmuenster',
    title: 'Konstantin Münster – Product Engineer',
    description:
      'Turn your product’s pain into production-ready features that unlock opportunities. For startups and scale-ups.',
  },
  openGraph: {
    type: 'profile',
    firstName: 'Konstantin',
    lastName: 'Münster',
    username: 'kmuenster',
    gender: 'he/him',
    emails: ['hey@konstantin.digital'],
    url: 'https://konstantin.digital',
    siteName: 'Konstantin Münster',
    title: 'Konstantin Münster – Product Engineer',
    description:
      'Turn your product’s pain into production-ready features that unlock opportunities. For startups and scale-ups.',
    countryName: 'Germany',
    locale: 'en_US',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Konstantin Münster',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default RootLayout;
