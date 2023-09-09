import type { FC } from 'react';

import { CheckCircle } from 'lucide-react';
import { VariantProps, tv } from 'tailwind-variants';

import { Button } from '../Button';
import { Avatar } from '../Avatar';
import { FreshEyesAuditSchedulingLink } from '@/config/navigation.config';

const cta = tv({
  base: 'rounded-[20px] px-10 py-10 text-center text-black shadow-sm',
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
  buttonAdornment?: React.ReactNode;
  benefits?: string[];
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
};

export const CTA: FC<CTAProps> = ({
  title = "Let's challenge your product.",
  description = 'Fresh eyes help generate new perspectives. Book a free call in which we identify opportunities and broken flows in your web app.',
  buttonText = 'Schedule free call',
  buttonLink = FreshEyesAuditSchedulingLink,
  buttonAdornment = <DefaultButtonAdornment />,
  benefits = ['20min call', 'Get product feedback'],
  secondaryButtonText,
  secondaryButtonLink,
  variant,
}) => {
  return (
    <div className={cta({ variant })}>
      <div className="mx-auto max-w-4xl">
        <h2 className="font-accent text-4xl font-medium md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mb-7 mt-5 max-w-3xl text-center text-xl">
          {description}
        </p>
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
          <Button
            as="a"
            href={`${buttonLink}?source=CTA`}
            className="!bg-black !text-white"
          >
            {buttonText}
          </Button>
          {buttonAdornment}
        </div>
        {benefits && (
          <div className="mt-6 flex justify-center gap-4 text-xs opacity-50 sm:text-sm">
            {benefits.map(benefit => {
              return (
                <span key={benefit} className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4" /> {benefit}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

const DefaultButtonAdornment = () => {
  return (
    <div className="hidden -space-x-3 overflow-hidden p-1 sm:flex">
      <Avatar size={40} className="inline-block ring-2 ring-black-100" />
      <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-mint ring-2 ring-black-100">
        <span className="text-2xl font-semibold text-black/20">?</span>
      </div>
    </div>
  );
};
