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
  authors: { name: 'Konstantin Münster' },
  creator: 'Konstantin Münster',
  publisher: 'Konstantin Münster',
  title: {
    template: '%s | Konstantin Münster',
    default: 'Konstantin Münster – Web & Product Developer',
  },
  description:
    'As a freelance product engineer, I help startups build interactive and intuitive web apps.',
  keywords: [
    'Web Development',
    'Freelancer',
    'Product Development',
    'Product Management',
    'MVP',
    'Startups',
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default RootLayout;
