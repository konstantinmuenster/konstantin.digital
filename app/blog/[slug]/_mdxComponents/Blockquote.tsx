import type { FC, ReactNode } from 'react';

type MdxBlockquoteProps = {
  children: ReactNode;
};

export const MdxBlockquote: FC<MdxBlockquoteProps> = ({ children }) => {
  return (
    <div className="not-prose relative my-8 px-4 py-1 italic before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:rounded-md before:bg-mint before:opacity-80">
      {children}
    </div>
  );
};
