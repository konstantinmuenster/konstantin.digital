import { IconCard } from '@/components/Card';
import { Cycle, Growth, ShakeHands, Target } from '@/components/Icon';

export const ChallengesSection = () => {
  return (
    <div className="relative mb-16">
      <div className="px-container mx-auto max-w-container py-16">
        <h2 className="my-16 text-center font-accent text-5xl font-bold">
          You don’t want to waste money for overpriced agencies with bloated
          processes?
        </h2>
        <div className="flex justify-between gap-4">
          {challenges.map(challenge => {
            return (
              <IconCard
                key={challenge.title}
                Icon={challenge.Icon}
                title={challenge.title}
                className="max-w-[220px]"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const challenges = [
  {
    Icon: Target,
    title: 'You miss a technical partner who challenges and builds your idea?',
  },
  {
    Icon: Cycle,
    title:
      'You don’t want to invest 6 months and 200.000€ to launch your startup?',
  },
  {
    Icon: Growth,
    title:
      'You want to build a “Silicon Valley” user experience without VC funding?',
  },
  {
    Icon: ShakeHands,
    title: 'You don’t want to hire a full-time developer and stay flexible?',
  },
];
