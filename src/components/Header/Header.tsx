'use client';

import { ComponentProps } from 'react';
import clsx from 'clsx';

import { navigation } from '@/config/navigation.config';
import { useScrollPosition } from '@/hooks/useScrollPosition';

import { Button } from '../Button';
import { Logo } from '../Logo';
import { ScrollableRelativeToParent } from '../Helpers';

export const Header = () => {
  return (
    <header className="px-container mx-auto flex min-h-[calc(44px+2.5rem)] max-w-container justify-between gap-8 py-5">
      <Logo iconRotated textHidden />
      <nav className="flex items-center gap-12">
        {navigation.slice(1).map(({ name, href }) => {
          return (
            <Button as="a" variant="text" href={href} key={href}>
              {name}
            </Button>
          );
        })}
        <CallToActionButton />
      </nav>
      <FixedCallToActionButton />
    </header>
  );
};

const FixedCallToActionButton = () => {
  const scrollPos = useScrollPosition();

  const isDisplayBlock = scrollPos > 50;
  const isVisible = scrollPos > 100;

  return (
    <ScrollableRelativeToParent className="z-10 text-right">
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

const CallToActionButton = (props: ComponentProps<'a'>) => {
  return (
    <Button as="a" href="mailto:hey@konstantin.digital" size="sm" {...props}>
      hey@konstantin.digital
    </Button>
  );
};
