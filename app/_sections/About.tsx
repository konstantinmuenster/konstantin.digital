import { Label } from '@/components/Label';
import Image from 'next/image';

export const AboutSection = () => {
  return (
    <div className="relative mb-16 md:mb-32">
      <div className="px-container mx-auto flex max-w-xl flex-col-reverse items-center gap-8 py-8 md:gap-16 lg:max-w-container lg:flex-row">
        <div>
          <h3 className="font-accent text-3xl font-medium md:text-4xl">
            Hey, I am Konstantin
          </h3>
          <p className="my-5 text-xl md:text-2xl">
            A freelance product engineer - or to put it simply: a product
            manager who codes.
          </p>
          <p className="my-5 opacity-90">
            My passion has always been at the intersection of product and web
            development. I love talking to users and developing ideas as much as
            coding with a good lo-fi playlist running in the back 🎧
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Label color="gray">5+ years of building web apps</Label>
            <Label color="gray">educator at techlabs.org</Label>
          </div>
        </div>
        <div className="max-w-[580px] flex-shrink-0 rounded-md">
          <Image
            src="/images/portraits/konstantin-muenster-wide-couch.jpg"
            alt="Konstantin Münster"
            width={480 * 2}
            height={324 * 2}
            sizes="(max-width: 768px) 100vw, 760px"
            className="h-full w-full rounded-md object-cover"
          />
          <span className="mt-2 hidden text-center text-xs opacity-50 md:block">
            Building web apps since high school. Waiting for yours since.
          </span>
        </div>
      </div>
    </div>
  );
};
