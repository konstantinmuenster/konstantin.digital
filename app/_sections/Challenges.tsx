import { IconCard } from '@/components/Card';
import {
  Cycle,
  Growth,
  Money,
  PuzzlePiece,
  ShakeHands,
  SpeedingClock,
} from '@/components/Icon';

export const ChallengesSection = () => {
  return (
    <div className="relative mb-16 md:mb-32">
      <div className="px-container mx-auto max-w-container">
        <h2 className="mb-5 mt-4 text-center font-accent text-4xl font-medium md:text-5xl">
          When companies try to stay lean and fast, pure technical acumen isn’t
          enough.
        </h2>
        <p className="mb-10 mt-5 text-center text-xl sm:mb-20 md:text-2xl">
          You can’t afford developers who need well-defined specs and
          pixel-perfect mockups.
        </p>
        <div className="grid grid-cols-1 justify-items-center gap-x-10 gap-y-10 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-16 lg:grid-cols-3">
          {challenges.map(challenge => {
            return (
              <IconCard
                key={challenge.title}
                Icon={challenge.Icon}
                title={challenge.title}
                className="max-w-[400px]"
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
    Icon: SpeedingClock,
    title:
      'You want to spend more time on strategic topics, less on tightly managing engineers?',
  },
  {
    Icon: Cycle,
    title:
      'You want to accelerate the iteration velocity of your engineering team?',
  },
  {
    Icon: ShakeHands,
    title:
      'You need a product manager to spare ideas, yet don’t have the budget?',
  },
  {
    Icon: PuzzlePiece,
    title:
      'You seek a silver bullet that listens to feedback, develops ideas, and ships them?',
  },
  {
    Icon: Money,
    title: 'You want to avoid wasting money by shipping features nobody needs?',
  },
  {
    Icon: Growth,
    title:
      'You need an engineer who proactively pushes the UX to the next level?',
  },
];
