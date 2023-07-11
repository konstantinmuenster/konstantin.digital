import { Label } from '@/components/Label';
import { ThemeToggle } from '@/components/ThemeToggle';

export const HeroSection = () => {
  return (
    <div className="relative mb-16">
      <div className="relative mx-auto flex max-w-2xl flex-col items-center justify-center lg:h-[calc(100vh-15rem)] lg:max-h-[600px]">
        <h1 className="text-center font-accent text-6xl font-bold md:text-7xl">
          <span className="block text-violet">Writing code,</span>
          <span className="block">thinking product.</span>
        </h1>
        <p className="my-5 text-center text-lg md:text-xl">
          I help individuals and companies build better web applications.
          Available for freelance work in Hamburg or remote.
        </p>
        <div className="flex justify-center">
          <Label color="sun" size="lg" className="my-8 inline-block">
            Coming soon
          </Label>
        </div>
      </div>
      <ThemeToggle className="absolute -bottom-10 left-0 md:bottom-0" />
    </div>
  );
};
