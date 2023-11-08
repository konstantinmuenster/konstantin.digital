'use client';

import { useState, useEffect, FC } from 'react';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import clsx from 'clsx';

import Avatar from './konstantin-muenster-avatar.jpg';

type AvatarBubbleProps = {
  className?: string;
};

export const AvatarBubble: FC<AvatarBubbleProps> = ({ className }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 200);
  }, []);

  return (
    <Transition
      show={mounted}
      enter="transform transition duration-200 origin-right"
      enterFrom="opacity-0 scale-0"
      enterTo="opacity-100 scale-100"
    >
      {mounted && (
        <div className={clsx('', className)}>
          <div className="rounded-t-full rounded-bl-md rounded-br-full border-[8px] border-white bg-white shadow-[0_0px_50px_-10px_rgba(0,0,0,0.3)]">
            <Image
              src={Avatar}
              alt="Konstantin Münster"
              className="h-32 w-32 rounded-full border-2 border-white"
              sizes="256px"
              priority
            />
          </div>
        </div>
      )}
    </Transition>
  );
};
