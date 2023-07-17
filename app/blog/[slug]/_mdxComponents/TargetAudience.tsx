import type { FC, ReactNode } from 'react';

type MdxTargetAudienceProps = {
  children: ReactNode;
};

export const MdxTargetAudience: FC<MdxTargetAudienceProps> = ({ children }) => {
  return (
    <div className="my-12 rounded-lg border-4 border-sun text-base">
      <div className="not-prose bg-sun px-2 py-1 text-sm font-medium uppercase text-black/75">
        Who&apos;s This For
      </div>
      <div className="px-4 py-2">{children}</div>
    </div>
  );
};
