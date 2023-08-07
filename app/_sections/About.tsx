import Image from 'next/image';
// import Link from 'next/link';

export const AboutSection = () => {
  return (
    <div className="relative mb-8 md:mb-16">
      <div className="px-container mx-auto flex max-w-xl flex-col-reverse items-center gap-8 py-8 md:gap-16 lg:max-w-container lg:flex-row">
        <div className="">
          <h3 className="font-accent text-3xl font-medium md:text-4xl">
            Hey, I am Konstantin
          </h3>
          <p className="my-5 text-xl md:text-2xl">
            I am a freelance web developer with a background in product
            management.
          </p>
          <p className="my-5">
            I believe that it does not need huge teams to build successful web
            apps. It only needs an agile and product-oriented mindset. Launching
            fast and getting better step by step.
          </p>
          {/* <Link href={'/about'}>Get to know me</Link> */}
        </div>
        <div className="max-w-[580px] flex-shrink-0 rounded-md border-4 border-black-100 bg-black-100 dark:border-black-800 dark:bg-black-800">
          <Image
            src="/images/km-1.jpg"
            alt="Konstantin Münster"
            width={480 * 2}
            height={324 * 2}
            className="h-full w-full rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};
