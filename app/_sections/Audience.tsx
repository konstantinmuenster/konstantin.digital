'use client';

import { useState } from 'react';
import clsx from 'clsx';

export const AudienceSection = () => {
  const titles = audiences.map(audience => audience.title);
  const [active, setActive] = useState(0);
  return (
    <div className="relative mb-16 md:mb-32">
      <div className="px-container mx-auto max-w-container">
        <h2 className="mb-5 mt-4 text-center font-accent text-4xl font-medium md:text-5xl">
          Where my work has the most impact.
        </h2>
        <div className="my-12 grid md:my-24 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_1.5fr]">
          <div className="mb-6 flex flex-row gap-8 md:mb-0 md:flex-col md:px-6 lg:px-12">
            {titles.map((title, i) => {
              return (
                <button
                  key={title}
                  onClick={() => setActive(i)}
                  className={clsx(
                    'flex gap-4 font-accent text-3xl font-medium md:text-4xl lg:text-5xl',
                    active === i
                      ? 'text-violet'
                      : 'opacity-50 transition-all hover:opacity-75 dark:opacity-60 dark:hover:opacity-80'
                  )}
                >
                  {title}
                </button>
              );
            })}
          </div>
          <div className="min-h-[280px] max-w-xl">
            <p className="mb-2 text-xl font-medium lg:text-2xl">
              {audiences[active].subtitle}
            </p>
            <p className="text-lg opacity-90">
              {audiences[active].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const audiences = [
  {
    title: 'Startups',
    subtitle:
      'You see a market opportunity. Now you are in the midst of building the product and staffing a team?',
    description:
      'In the early days, shipping fast and collecting feedback is key. I help you in executing your vision – without any managerial hassle.',
  },
  {
    title: 'Scale-ups',
    subtitle:
      'You already validated your core product. Now it is time to listen for user feedback and scale?',
    description:
      'The more mature your product gets, the more important becomes product discovery. I help you in shipping the right features, built with attention to detail.',
  },
];
