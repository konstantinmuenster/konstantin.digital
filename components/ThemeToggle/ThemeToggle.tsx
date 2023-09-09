'use client';

import { FC, useEffect, useState } from 'react';
import { Switch, Transition } from '@headlessui/react';
import { useTheme } from 'next-themes';
import clsx from 'clsx';

type ThemeToggleProps = {
  className?: string;
};

export const ThemeToggle: FC<ThemeToggleProps> = ({ className }) => {
  const [mounted, setMounted] = useState(false);

  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  return (
    <Transition
      show={mounted}
      enter="transform transition duration-200 origin-left"
      enterFrom="opacity-0 scale-0"
      enterTo="opacity-100 scale-100"
    >
      {mounted && (
        <Switch
          checked={resolvedTheme === 'dark'}
          onChange={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          className={clsx(
            'focus-default flex w-[76px] cursor-pointer items-center rounded-full bg-black px-[6px] py-[5px] transition dark:bg-black-900',
            className
          )}
        >
          <span className="sr-only">Toggle light and dark mode</span>
          <span className="inline-block h-7 w-7 translate-x-0 transform rounded-full bg-violet transition dark:translate-x-9" />
          <LightIcon className="absolute left-[11px] top-[10px] inline-block h-[18px] w-[18px] fill-black opacity-100 dark:fill-white dark:opacity-50" />
          <DarkIcon className="absolute right-[11px] top-[10px] inline-block h-[18px] w-[18px] fill-white opacity-50 dark:fill-black dark:opacity-100" />
        </Switch>
      )}
    </Transition>
  );
};

type IconProps = {
  className?: string;
  fill?: string;
  opacity?: number;
};

const LightIcon: FC<IconProps> = ({ className, fill, opacity }) => {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.93354 2.53293C9.62871 2.48932 9.31709 2.46676 9.0002 2.46676C8.68332 2.46676 8.3717 2.48932 8.06687 2.53293V0.651365C8.37332 0.617489 8.68473 0.600098 9.0002 0.600098C9.31568 0.600098 9.62709 0.617489 9.93354 0.651365V2.53293ZM4.33331 9.0001C4.33331 11.5774 6.42265 13.6668 8.99997 13.6668C11.5773 13.6668 13.6666 11.5774 13.6666 9.0001C13.6666 6.42277 11.5773 4.33343 8.99997 4.33343C6.42265 4.33343 4.33331 6.42277 4.33331 9.0001ZM11.7996 8.99972C11.7996 10.5461 10.546 11.7997 8.9996 11.7997C7.4532 11.7997 6.1996 10.5461 6.1996 8.99972C6.1996 7.45333 7.4532 6.19972 8.9996 6.19972C10.546 6.19972 11.7996 7.45333 11.7996 8.99972ZM9.93354 17.3489V15.4674C9.62871 15.511 9.31709 15.5335 9.0002 15.5335C8.68332 15.5335 8.3717 15.511 8.06687 15.4674V17.3489C8.37332 17.3828 8.68473 17.4002 9.0002 17.4002C9.31568 17.4002 9.62709 17.3828 9.93354 17.3489ZM15.4672 8.06699H17.3488C17.3827 8.37344 17.4001 8.68485 17.4001 9.00033C17.4001 9.3158 17.3827 9.62721 17.3488 9.93366H15.4672C15.5108 9.62883 15.5334 9.31721 15.5334 9.00033C15.5334 8.68344 15.5108 8.37182 15.4672 8.06699ZM2.46664 9.00033C2.46664 8.68344 2.4892 8.37182 2.53281 8.06699H0.651242C0.617367 8.37344 0.599976 8.68485 0.599976 9.00033C0.599976 9.3158 0.617367 9.62721 0.651242 9.93366H2.53281C2.4892 9.62883 2.46664 9.31721 2.46664 9.00033ZM12.9129 3.76717L14.2433 2.43669C14.7306 2.82646 15.1735 3.26936 15.5633 3.75662L14.2328 5.0871C13.8581 4.58674 13.4132 4.14191 12.9129 3.76717ZM2.43656 3.75662L3.76704 5.0871C4.14179 4.58674 4.58662 4.14191 5.08698 3.76717L3.7565 2.43669C3.26924 2.82646 2.82634 3.26936 2.43656 3.75662ZM14.2328 12.913L15.5633 14.2435C15.1735 14.7307 14.7306 15.1736 14.2433 15.5634L12.9129 14.2329C13.4132 13.8582 13.8581 13.4133 14.2328 12.913ZM3.7565 15.5634L5.08698 14.2329C4.58662 13.8582 4.14179 13.4133 3.76704 12.913L2.43656 14.2435C2.82634 14.7307 3.26924 15.1736 3.7565 15.5634Z"
        fill={fill}
        fillOpacity={opacity}
      />
    </svg>
  );
};

const DarkIcon: FC<IconProps> = ({ className, fill, opacity }) => {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.44208 6.4801C9.44208 4.82146 10.1675 3.2753 11.4225 2.16892L12.729 1.01714L10.9733 0.725729C10.4708 0.642337 9.95906 0.600098 9.44208 0.600098C4.55872 0.600098 0.599976 4.36091 0.599976 9.0001C0.599976 13.6393 4.55872 17.4001 9.44208 17.4001C12.4355 17.4001 15.1755 15.9753 16.8046 13.6533L17.7918 12.2461L16.015 12.349C15.8878 12.3564 15.7599 12.3601 15.6316 12.3601C12.2132 12.3601 9.44208 9.72753 9.44208 6.4801ZM9.44202 15.7199C5.53533 15.7199 2.36834 12.7113 2.36834 8.99993C2.36834 5.42817 5.30157 2.50726 9.00446 2.29258C8.14814 3.51345 7.6736 4.96107 7.6736 6.47993C7.6736 10.2087 10.5152 13.307 14.2534 13.927C12.9681 15.0608 11.2643 15.7199 9.44202 15.7199Z"
        fill={fill}
        fillOpacity={opacity}
      />
    </svg>
  );
};
