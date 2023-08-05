import { CheckCircle } from 'lucide-react';

import { Button } from '@/components/Button';
import { Hero } from '@/components/Hero';
import { ThemeToggle } from '@/components/ThemeToggle';

export const HeroSection = () => {
  return (
    <div className="px-container relative mx-auto mb-16 max-w-container">
      <Hero
        title={HeroTitle}
        description="Accelerate your startup with user-centric web apps. From idea to deployment in just 12 weeks, without agency overhead."
        actions={HeroActions}
      />
      <ThemeToggle className="absolute -bottom-10 left-0 md:bottom-0" />
    </div>
  );
};

const HeroTitle = (
  <>
    <span className="block text-violet">Writing code,</span>
    <span className="block">thinking product.</span>
  </>
);

const HeroActions = (
  <div className="mt-6 flex-col items-center justify-center text-center">
    <Button as="a">Schedule idea sparring</Button>
    <div className="mt-6 flex gap-4 text-sm opacity-50">
      <span className="flex items-center gap-1">
        <CheckCircle size={18} /> 15min call
      </span>
      <span className="flex items-center gap-1">
        <CheckCircle size={18} />
        Get feedback on idea
      </span>
    </div>
  </div>
);
