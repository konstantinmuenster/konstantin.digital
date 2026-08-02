import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Link from 'next/link';

import { Glyph } from '@/components/Glyph';

import './globals.css';

const uxum = localFont({
  src: [
    { path: '../fonts/UxumGrotesque-Regular.woff2', weight: '400' },
    { path: '../fonts/UxumGrotesque-Medium.woff2', weight: '500' },
    { path: '../fonts/UxumGrotesque-Bold.woff2', weight: '700' },
  ],
  variable: '--font-uxum',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://konstantin.digital'),
  title: 'Konstantin Ruge — Fractional CTO & Product Engineer',
  description:
    'Konstantin Ruge is a Fractional CTO and Freelance Product Engineer based in Hamburg, Germany. He helps startups build and ship product — and runs cobuild, a product studio for SaaS founders.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://konstantin.digital',
    siteName: 'Konstantin Ruge',
    title: 'Konstantin Ruge — Fractional CTO & Product Engineer',
    description:
      'Fractional CTO & Freelance Product Engineer based in Hamburg, Germany.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Konstantin Ruge — Fractional CTO & Product Engineer',
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" className={uxum.variable}>
    <body className="bg-white font-sans text-ink">
      <div className="mx-auto flex min-h-svh w-full max-w-2xl flex-col px-6">
        <header className="flex items-center justify-between py-10">
          <Link href="/" aria-label="Konstantin Ruge — home">
            <Glyph size={28} />
          </Link>
          <a
            href="mailto:hey@konstantin.digital"
            className="text-sm text-neutral-500 transition-colors hover:text-ink"
          >
            hey@konstantin.digital
          </a>
        </header>
        <div className="flex-1">{children}</div>
        <footer className="mt-24 border-t border-neutral-200 py-10">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 text-sm text-neutral-500">
            <p>© {new Date().getFullYear()} Konstantin Ruge</p>
            <nav className="flex gap-5">
              <Link href="/transparency" className="transition-colors hover:text-ink">
                Transparency
              </Link>
              <Link href="/imprint" className="transition-colors hover:text-ink">
                Imprint
              </Link>
              <a
                href="https://www.linkedin.com/in/konstantinmuenster/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-ink"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/konstantinmuenster"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-ink"
              >
                GitHub
              </a>
            </nav>
          </div>
        </footer>
      </div>
    </body>
  </html>
);

export default RootLayout;
