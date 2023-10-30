'use client';

import { useState, Fragment, useMemo } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { PlayCircleIcon } from 'lucide-react';
import clsx from 'clsx';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const LazyReactPlayer = dynamic(() => import('react-player/file'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

type VideoProps = {
  src: string;
  thumbnail: string;
  alt: string;
  caption?: string;
};

export const Video = ({ src, alt, caption, thumbnail }: VideoProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const VideoPlayer = useMemo(() => {
    return (
      <LazyReactPlayer
        url={src}
        width="100%"
        height="100%"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        playsinline
        config={{
          attributes: {
            muted: true,
            autoPlay: true,
            controls: true,
          },
        }}
      />
    );
  }, [src]);

  const Thumbnail = useMemo(() => {
    return (
      <div className="not-prose group relative rounded-xl ring-1 ring-black-300 ring-offset-2 transition-all dark:ring-black-800 dark:ring-offset-black">
        <Image
          src={thumbnail}
          alt={alt}
          width={720}
          height={405}
          sizes="(max-width: 768px) 100vw, 720px"
          className="h-full w-full cursor-pointer rounded-xl bg-black-100 object-cover dark:bg-black-900"
          onClick={() => setIsOpen(true)}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-xl opacity-50 transition-all group-hover:opacity-40"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 1) 23%, rgba(0, 0, 0, 0.5) 100%)',
          }}
        />
        <button
          aria-label="Play video"
          onClick={() => setIsOpen(true)}
          className="absolute left-[calc(50%-50px)] top-[calc(50%-50px)]"
        >
          <PlayCircleIcon
            size={100}
            strokeWidth={1.5}
            className="stroke-white/60 transition-all group-hover:stroke-white/75"
          />
        </button>
      </div>
    );
  }, [thumbnail, alt]);

  return (
    <>
      <div
        className={clsx(
          'relative rounded-xl ring-black-300 ring-offset-2 dark:ring-black-800 dark:ring-offset-black md:ring-1',
          caption ? 'mb-8 mt-6 md:mb-16 md:mt-12' : 'my-6 md:my-12'
        )}
      >
        <div className="block md:hidden">{VideoPlayer}</div>
        <div className="hidden md:block">{Thumbnail}</div>
        {caption && (
          <div className="absolute -bottom-8 w-full text-center text-sm opacity-50">
            {caption}
          </div>
        )}
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 dark:bg-black-100 dark:bg-opacity-10" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="h-full items-center justify-center p-4 text-center lg:p-16">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl transition-all dark:bg-black lg:h-full">
                  <div className="flex h-full w-full items-center justify-center">
                    {VideoPlayer}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
