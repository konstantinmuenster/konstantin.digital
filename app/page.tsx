import type { CSSProperties } from 'react';

import Image from 'next/image';

import { faq } from '@/content/faq';
import { products, studio } from '@/content/projects';

const stagger = (index: number) => ({ '--stagger': index }) as CSSProperties;

const HoverArrow = () => (
  <svg
    viewBox="0 0 16 16"
    aria-hidden="true"
    className="hidden h-4 w-4 shrink-0 -translate-x-1 opacity-0 transition-[opacity,transform] duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100 motion-reduce:transition-none sm:block"
  >
    <rect width="16" height="16" rx="8" fill="#CEAFFA" />
    <path
      d="M5 8h6M8.2 5 11 8l-2.8 3"
      fill="none"
      stroke="#121212"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://konstantin.digital/#person',
      name: 'Konstantin Ruge',
      image: 'https://konstantin.digital/konstantin-ruge.jpg',
      jobTitle: 'Fractional CTO & AI Product Engineer',
      description:
        'Fractional CTO and Freelance AI Product Engineer helping startups build and ship product.',
      url: 'https://konstantin.digital',
      email: 'mailto:hey@konstantin.digital',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hamburg',
        addressCountry: 'DE',
      },
      worksFor: {
        '@type': 'Organization',
        name: 'cobuild GmbH',
        url: 'https://cobuild.digital',
      },
      sameAs: [
        'https://www.linkedin.com/in/konstantinruge/',
        'https://github.com/konstantinruge',
        'https://cobuild.digital',
      ],
      knowsAbout: [
        'Fractional CTO',
        'Product Engineering',
        'MVP Development',
        'SaaS',
        'TypeScript',
        'React',
        'Next.js',
        'AI'
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://konstantin.digital/#service',
      name: 'Konstantin Ruge — Fractional CTO & AI Product Engineering',
      url: 'https://konstantin.digital',
      email: 'mailto:hey@konstantin.digital',
      founder: { '@id': 'https://konstantin.digital/#person' },
      areaServed: ['Hamburg', 'Germany', 'Europe', 'Remote'],
      serviceType: [
        'Fractional CTO',
        'Freelance Product Engineering',
        'MVP Development',
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://konstantin.digital/#faq',
      mainEntity: faq.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
  ],
};

const Home = () => (
  <main>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />

    <section className="reveal pt-16 sm:pt-24" style={stagger(0)}>
      <h1 className="sr-only">
        Konstantin Ruge — Fractional CTO & AI Product Engineer
      </h1>
      <Image
        src="/konstantin-ruge.jpg"
        alt="Konstantin Ruge"
        width={64}
        height={64}
        priority
        className="h-16 w-16 rounded-full object-cover"
      />
      <p className="mt-8 max-w-xl text-xl font-medium text-neutral-500 leading-snug">
        Konstantin Ruge
      </p>
      <p className="mt-2 max-w-xl text-2xl font-medium leading-snug sm:text-[1.75rem] text-pretty">
        I am a product manager turned engineer. I've been building software
        products for over a decade. Today, I work with startups as a Fractional
        CTO and AI Product Engineer - mostly through{' '}
        <a
          href="https://cobuild.digital/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-ink"
        >
          cobuild
        </a>
        , a product studio for SaaS founders.
      </p>
      <p className="mt-6 flex items-center gap-5 text-sm text-neutral-500">
        <span className="flex items-center gap-1.5">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-3.5 w-3.5"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Hamburg, Germany
        </span>
        <a
          href="https://www.linkedin.com/in/konstantinruge/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-ink"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/konstantinruge"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-ink"
        >
          GitHub
        </a>
      </p>
    </section>

    <section className="mt-24 sm:mt-32">
      <h2 className="reveal text-sm text-neutral-500" style={stagger(2)}>
        Company
      </h2>
      <div
        className="reveal mt-4 border-t border-b border-neutral-200"
        style={stagger(3)}
      >
        <a
          href={studio.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-x-4 py-6 sm:grid-cols-[2.5rem_minmax(0,0.8fr)_minmax(0,1.3fr)_auto]"
        >
          <span className="row-span-2 flex h-7 w-8 items-center sm:row-span-1">
            <img
              src={studio.logo}
              alt="cobuild"
              className="max-h-6 w-auto max-w-full"
            />
          </span>
          <span className="col-start-2 flex items-center gap-2 font-medium">
            {studio.name}
            <HoverArrow />
          </span>
          <span className="col-start-2 row-start-2 text-sm text-neutral-500 sm:col-start-3 sm:row-start-1 sm:text-base">
            {studio.role}
          </span>
          <span className="col-start-3 row-start-1 justify-self-end text-sm text-neutral-500 tabular-nums sm:col-start-4 sm:text-base">
            {studio.years}
          </span>
        </a>
      </div>
    </section>

    <section className="mt-16 sm:mt-20">
      <h2 className="reveal text-sm text-neutral-500" style={stagger(4)}>
        Products
      </h2>
      <ul className="mt-4 border-t border-neutral-200">
        {products.map((project, index) => (
          <li
            key={project.name}
            className="reveal border-b border-neutral-200"
            style={stagger(index + 5)}
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-x-4 py-5 sm:grid-cols-[2.5rem_minmax(0,0.8fr)_minmax(0,1.3fr)_auto]"
            >
              <span className="row-span-2 flex h-7 w-8 items-center sm:row-span-1">
                <img
                  src={project.logo}
                  alt=""
                  className="max-h-6 w-auto max-w-full"
                />
              </span>
              <span className="col-start-2 flex items-center gap-2 font-medium">
                {project.name}
                <HoverArrow />
              </span>
              <span className="col-start-2 row-start-2 text-sm text-neutral-500 sm:col-start-3 sm:row-start-1 sm:text-base">
                {project.role}
              </span>
              <span className="col-start-3 row-start-1 justify-self-end text-sm text-neutral-500 tabular-nums sm:col-start-4 sm:text-base">
                {project.years}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>

    <section className="mt-24 sm:mt-32">
      <h2
        className="reveal text-sm text-neutral-500"
        style={stagger(products.length + 6)}
      >
        FAQ
      </h2>
      <dl className="mt-4 divide-y divide-neutral-200 border-t border-b border-neutral-200">
        {faq.map((item, index) => (
          <div
            key={item.question}
            className="reveal py-6"
            style={stagger(products.length + 7 + index)}
          >
            <dt className="font-medium">{item.question}</dt>
            <dd className="mt-2 max-w-xl text-neutral-600">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  </main>
);

export default Home;
