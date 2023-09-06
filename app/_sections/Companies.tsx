'use client';

import { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import Image from 'next/image';

export const CompaniesSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 200);
  }, []);

  return (
    <div className="relative mb-16 flex min-h-[90px] items-center justify-center bg-violet/40 dark:bg-violet/90 md:mb-32 lg:min-h-[120px]">
      <Transition
        show={mounted}
        className="overflow-hidden"
        enter="transform transition duration-200 origin-bottom"
        enterFrom="opacity-0 scale-80"
        enterTo="opacity-100 scale-100"
      >
        <div className="lg:px-container hidden lg:mx-auto lg:flex lg:max-w-container">
          {companies.map(company => {
            return (
              <a
                key={company.name}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="a-reset flex items-center justify-center px-6 py-8 2xl:px-8"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={company.width * 2 || 140}
                  height={company.height * 2 || 40}
                  style={{
                    width: company.width || 140,
                    height: company.height || 40,
                  }}
                  className="object-contain opacity-80 grayscale transition-all hover:opacity-100 dark:opacity-100"
                />
              </a>
            );
          })}
        </div>
        <div
          className="flex w-[400%] animate-scrolling-container sm:w-[100%] lg:hidden"
          aria-hidden={true}
        >
          {[...companies, ...companies].map((company, key) => {
            return (
              <a
                key={key}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="a-reset flex flex-shrink-0 items-center justify-center px-6 py-2"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={company.width || 140}
                  height={company.height || 40}
                  loading="eager" // Needed for slider on mobile
                  style={{
                    width: company.width * 0.8 || 140,
                    height: company.height * 0.8 || 40,
                  }}
                  className="object-contain opacity-80 grayscale transition-all hover:opacity-100 dark:opacity-100"
                />
              </a>
            );
          })}
        </div>
      </Transition>
    </div>
  );
};

const companies = [
  {
    name: 'Regioful',
    logo: '/images/companies/regioful-de.svg',
    url: 'https://www.regioful.de/',
    width: 140,
    height: 50,
  },
  {
    name: 'Lazy',
    logo: '/images/companies/lazy-so.png',
    url: 'https://www.lazy.so/',
    width: 100,
    height: 40,
  },
  {
    name: 'OTTO',
    logo: '/images/companies/otto.svg',
    url: 'https://www.otto.de/',
    width: 90,
    height: 40,
  },
  {
    name: 'ABOUT YOU',
    logo: '/images/companies/about-you.svg',
    url: 'https://www.aboutyou.de/',
    width: 150,
    height: 40,
  },
  //   {
  //     name: 'Leadquelle',
  //     logo: '/images/companies/leadquelle.svg',
  //     url: 'https://www.leadquelle.net/',
  //     width: 150,
  //     height: 40,
  //   },
  {
    name: 'dskrpt',
    logo: '/images/companies/dskrpt.svg',
    url: 'https://www.dskrpt.de/',
    width: 100,
    height: 40,
  },
  {
    name: 'Lost Nomad Brewing',
    logo: '/images/companies/lostnomad.svg',
    url: 'https://www.lostnomadbrewing.com/',
    width: 150,
    height: 40,
  },
  {
    name: 'KABO KAFFEE',
    logo: '/images/companies/kabo.png',
    url: 'https://www.kabo-kaffee.de/',
    width: 50,
    height: 55,
  },
];
