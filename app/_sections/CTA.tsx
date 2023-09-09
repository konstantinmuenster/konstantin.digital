import { FC } from 'react';

import { CTA } from '@/components/CTA';

type CTASectionProps = {
  id?: string;
  variant?: 'mint' | 'sun' | 'violet';
};

export const CTASection: FC<CTASectionProps> = ({ id, variant }) => {
  return (
    <div id={id} className="relative mb-12 scroll-m-16 md:mb-24">
      <div className="px-container mx-auto max-w-container py-8">
        <CTA variant={variant} />
      </div>
    </div>
  );
};
