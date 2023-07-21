import { Hero } from '@/components/Hero';
import { Label } from '@/components/Label';
import { ThemeToggle } from '@/components/ThemeToggle';

export const HeroSection = () => {
  return (
    <div className="relative mb-16">
      <Hero
        title={HeroTitle}
        description="I help startups build interactive web apps that meet users needs. Available for freelance work in Hamburg or remote."
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
  <Label color="sun" size="lg" className="my-8 inline-block">
    Coming soon
  </Label>
);
