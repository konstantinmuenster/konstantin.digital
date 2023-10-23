'use client';

import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { PlayCircleIcon } from 'lucide-react';
import Image from 'next/image';
import ReactPlayer from 'react-player/file';

type VideoProps = {
  src: string;
  thumbnail: string;
  alt: string;
};

export const Video = ({ src, alt, thumbnail }: VideoProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="not-prose group relative my-16 rounded-xl ring-1 ring-black-300 ring-offset-2 transition-all dark:ring-black-800 dark:ring-offset-black">
        <Image
          src={thumbnail}
          alt={alt}
          width={1280}
          height={720}
          className="h-full w-full cursor-pointer rounded-xl object-cover"
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
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-black">
                  <ReactPlayer
                    url={src}
                    width="100%"
                    height="100%"
                    config={{
                      attributes: {
                        muted: true,
                        autoPlay: true,
                        controls: true,
                      },
                    }}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
