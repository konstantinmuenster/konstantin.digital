import Link from 'next/link';

import { legals, navigation, socials } from '@/config/navigation.config';
import { Logo } from '../Logo';

const year = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 bg-black">
      <div className="px-container mx-auto flex max-w-container flex-row items-start justify-between gap-12 pb-32 pt-16">
        <div className="flex flex-col">
          <Logo iconColor="white" textHidden />
          <span className="mt-3 block text-sm text-white">
            &copy; {year} Konstantin Münster.
          </span>
          <span className="block text-sm text-white">All rights reserved.</span>
          <span className="mt-5 block text-sm text-white">
            This page visit emitted <CarbonFootprint />.
          </span>
        </div>
        <div className="flex flex-row gap-14 text-sm text-white">
          <div className="flex min-w-[200px] flex-col gap-3">
            <span className="font-medium">Navigation</span>
            <nav className="flex flex-col gap-3">
              {navigation.map(({ name, href }) => {
                return (
                  <Link key={href} href={href} className="a-reset">
                    {name}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="flex min-w-[200px] flex-col gap-3">
            <span className="font-medium">Contact</span>
            <nav className="flex flex-col gap-3">
              {socials.map(({ name, href }) => {
                return (
                  <Link key={href} href={href} className="a-reset">
                    {name}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-medium">Legal</span>
            <nav className="flex flex-col gap-3">
              {legals.map(({ name, href }) => {
                return (
                  <Link key={href} href={href} className="a-reset">
                    {name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

const carbonFootprint = 0.11;
const carbonFootprintUrl =
  'https://www.websitecarbon.com/website/konstantin-digital/';

const CarbonFootprint = () => {
  return (
    <a rel="noopener noreferrer" target="_blank" href={carbonFootprintUrl}>
      {carbonFootprint}g of CO2
    </a>
  );
};
