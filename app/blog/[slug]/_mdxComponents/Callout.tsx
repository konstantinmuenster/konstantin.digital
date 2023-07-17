import type { FC, ReactNode } from 'react';

type MdxCalloutProps = {
  children: ReactNode;
};

export const MdxCallout: FC<MdxCalloutProps> = ({ children }) => {
  return (
    <div className="my-8 rounded-lg border-4 border-black-300 px-2 text-base font-medium dark:border-black-700">
      {children}
    </div>
  );
};
