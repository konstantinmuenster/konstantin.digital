import { FC, Fragment, ReactNode, useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Dialog, Transition } from '@headlessui/react';
import { LucideIcon, X } from 'lucide-react';
import clsx from 'clsx';

type SlideOverProps = {
  children: ReactNode;
  title?: string;
  Icon: LucideIcon;
};

export const SlideOver: FC<SlideOverProps> = ({ children, title, Icon }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setOpen(false);
  }, [pathname, searchParams]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="focus-default rounded-md p-1"
      >
        <span className="sr-only">Open panel</span>
        <Icon size={32} />
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-250"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-250"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/5 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-20">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-250"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-250"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll rounded-l-2xl bg-white py-6 shadow-xl dark:bg-black-900">
                      <div className="px-8">
                        <div
                          className={clsx(
                            'flex items-start',
                            title ? 'justify-between' : 'justify-end'
                          )}
                        >
                          {title && (
                            <Dialog.Title className="text-base font-semibold leading-6">
                              {title}
                            </Dialog.Title>
                          )}
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="focus-default rounded-md bg-white opacity-50 transition-opacity hover:opacity-100 dark:bg-black-900"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <X className="h-8 w-8" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative mt-6 flex-1 px-8">
                        {children}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
