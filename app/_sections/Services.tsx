import { Check } from 'lucide-react';

import { Button } from '@/components/Button';
import { ServiceMVPs, ServiceTailoredWebApps } from '@/components/Illustration';

export const ServicesSection = () => {
  return (
    <div className="relative mb-4 md:mb-8">
      <div className="px-container mx-auto max-w-container py-8">
        <div className="mx-auto mb-8 max-w-4xl text-center md:mb-16">
          <h2 className="font-accent text-4xl font-bold md:text-5xl">
            Let’s develop a low-cost web app to get actionable user insights
            from the start!
          </h2>
          <p className="mx-auto my-5 max-w-3xl text-xl md:text-2xl">
            Whether it&apos;s a SaaS product, advanced website features or an
            MVP to address new territories - I can help bring your ideas to
            life.
          </p>
        </div>
        <div>
          {services.map(({ title, benefits, Illustration, link }) => {
            return (
              <div
                key={title}
                className="flex flex-col gap-8 py-8 md:flex-row md:items-center md:gap-16 lg:py-16"
              >
                {Illustration && (
                  <Illustration className="max-w-sm lg:max-w-md" />
                )}
                <div className="max-w-xl">
                  <h3 className="font-accent text-3xl font-medium md:text-4xl">
                    {title}
                  </h3>
                  <ul className="my-5 flex flex-col gap-3">
                    {benefits.map(benefit => {
                      return (
                        <li key={benefit} className="flex gap-4">
                          <Check className="flex-shrink-0" /> {benefit}
                        </li>
                      );
                    })}
                  </ul>
                  <Button as="a" href={link} size="sm">
                    Learn more
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    title: 'Get a custom-built web app that truly solves your needs',
    benefits: [
      'Bring your own design or we create one from scratch together.',
      'I use modern technologies and best-practices to deliver state-of-the-art sites that are accessible and fast for all users.',
      'I offer continuous support & maintenance alongside every project – which means your app will grow with your business.',
      'Collaboration at eye level – I guide you through the process with transparency and space for feedback at all stages.',
    ],
    Illustration: ServiceTailoredWebApps,
    link: '/services',
  },
  {
    title: 'Get a low-cost web app to validate your idea with real users',
    benefits: [
      'An MVP built within weeks – without the costs and bureaucracy of an agency.',
      'Having worked as product manager and web developer, I know how products are built and can guide you through the process.',
      'I use modern technologies and best-practices – so you can extend (rather than throw away) your product once validated.',
    ],
    Illustration: ServiceMVPs,
    link: '/services',
  },
];
