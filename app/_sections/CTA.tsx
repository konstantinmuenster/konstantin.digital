import { CTA } from '@/components/CTA';
import { FC } from 'react';

type CTASectionProps = {
  variant?: 'mint' | 'sun' | 'violet';
};

export const CTASection: FC<CTASectionProps> = ({ variant }) => {
  return (
    <div className="relative mb-16">
      <div className="px-container mx-auto max-w-container py-8">
        <CTA variant={variant} />
      </div>
    </div>
  );
};
