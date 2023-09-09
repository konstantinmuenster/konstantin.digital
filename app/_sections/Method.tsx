import {
  ProjectStep1,
  ProjectStep2,
  ProjectStep3,
  ProjectStep4,
} from '@/components/Illustration';

export const MethodSection = () => {
  return (
    <div className="relative -mt-16 mb-12 sm:-mt-32 md:mb-24">
      <div className="px-container mx-auto max-w-container">
        <h3 className="max-w-2xl font-accent text-2xl font-medium md:text-3xl">
          Each project is unique. However, a recipe for a successful
          collaboration often looks like this.
        </h3>
        <div className="flex flex-col gap-6 sm:flex-row md:gap-12">
          {steps.map(({ Illustration, description }, i) => {
            return (
              <div
                key={i}
                className="mt-6 flex flex-1 flex-row gap-5 sm:flex-col md:mt-12"
              >
                <Illustration className="h-20 w-20 flex-shrink-0 md:h-36 md:w-36" />
                <p className="opacity-90">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const steps = [
  {
    Illustration: ProjectStep1,
    description:
      'Together, we identify major opportunities for your product. Aligned with your vision.',
  },
  {
    Illustration: ProjectStep2,
    description:
      "We spare ideas to turn your product's pains into beloved features. By you and your users.",
  },
  {
    Illustration: ProjectStep3,
    description:
      'Once committed, I start coding. Following best practices and bullet-proven patterns.',
  },
  {
    Illustration: ProjectStep4,
    description:
      'We gather actionable user feedback and keep improving the product each day.',
  },
];
