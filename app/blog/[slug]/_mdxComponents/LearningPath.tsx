import type { FC } from 'react';

type MdxLearningPathProps = {
  items: string[];
};

export const MdxLearningPath: FC<MdxLearningPathProps> = ({ items }) => {
  return (
    <div className="my-12 rounded-lg border-4 border-violet text-base">
      <div className="not-prose bg-violet px-2 py-1 text-sm font-medium uppercase text-black/75">
        What We Cover
      </div>
      <ul className="mx-2 my-4">
        {items.map(item => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
