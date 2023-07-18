import type { FC } from 'react';

import { VariantProps, tv } from 'tailwind-variants';

import { Button } from '../Button';

const cta = tv({
  base: 'rounded-[20px] px-10 py-10 text-center text-black',
  variants: {
    variant: {
      sun: 'bg-sun',
      mint: 'bg-mint',
      violet: 'bg-violet',
    },
  },
  defaultVariants: {
    variant: 'sun',
  },
});

type CTAVariants = VariantProps<typeof cta>;

type CTAProps = CTAVariants & {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
};

export const CTA: FC<CTAProps> = ({
  title = "Let's build your idea.",
  description = 'Make your users happy. With an intuitive and interactive web application.',
  buttonText = 'hey@konstantin.digital',
  buttonLink = 'mailto:hey@konstantin.digital',
  secondaryButtonText,
  secondaryButtonLink,
  variant,
}) => {
  return (
    <div className={cta({ variant })}>
      <div className="mx-auto max-w-4xl">
        <h2 className="font-accent text-4xl font-bold md:text-5xl">{title}</h2>
        <p className="mb-7 mt-5 text-lg">{description}</p>
        <div className="flex items-center justify-center gap-4">
          {secondaryButtonLink && secondaryButtonText && (
            <Button
              as="a"
              href={secondaryButtonLink}
              variant="text"
              className="!text-black"
            >
              {secondaryButtonText}
            </Button>
          )}
          <Button as="a" href={buttonLink} className="!bg-black !text-white">
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};