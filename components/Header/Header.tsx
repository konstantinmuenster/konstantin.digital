'use client';

import { ComponentProps, FC } from 'react';
import { Menu } from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';

import { navigation } from '@/config/navigation.config';
import { useScrollPosition } from '@/hooks/useScrollPosition';

import { Button } from '../Button';
import { Logo } from '../Logo';
import { ScrollableRelativeToParent } from '../Helpers';
import { SlideOver } from '../Slideover';

export const Header = () => {
  return (
    <header className="px-container mx-auto flex min-h-[calc(44px+2.5rem)] max-w-container justify-between gap-8 py-5">
      <Link href="/" className="a-reset focus-default rounded-md">
        <Logo textHidden />
      </Link>
      {/* DESKTOP */}
      <div className="hidden md:block">
        <NavigationItems className="flex items-center gap-8 lg:gap-12" />
      </div>
      <FixedCallToActionButton className="hidden md:block" />
      {/* MOBILE */}
      <div className="block md:hidden">
        <SlideOver Icon={Menu}>
          <NavigationItems className="flex flex-col items-start gap-8" />
        </SlideOver>
      </div>
    </header>
  );
};

const NavigationItems: FC<{ className?: string }> = props => {
  return (
    <nav className={props.className}>
      {navigation.slice(1).map(({ name, href }) => {
        return (
          <Button as="a" variant="text" href={href} key={href}>
            {name}
          </Button>
        );
      })}
      <CallToActionButton className="mt-4 md:mt-0" />
    </nav>
  );
};

const FixedCallToActionButton: FC<{ className?: string }> = props => {
  const scrollPos = useScrollPosition();

  const isDisplayBlock = scrollPos > 50;
  const isVisible = scrollPos > 100;

  return (
    <ScrollableRelativeToParent
      className={clsx('z-10 text-right', props.className)}
    >
      <CallToActionButton
        aria-hidden={!isVisible}
        className={clsx(
          'mr-16 transition-all',
          isDisplayBlock ? 'hidden md:inline-block' : 'hidden',
          isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        )}
      />
    </ScrollableRelativeToParent>
  );
};

const CallToActionButton: FC<ComponentProps<'a'>> = props => {
  return (
    <Button as="a" href="mailto:hey@konstantin.digital" size="sm" {...props}>
      hey@konstantin.digital
    </Button>
  );
};
