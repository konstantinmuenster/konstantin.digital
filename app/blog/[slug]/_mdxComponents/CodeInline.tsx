import type { FC, ReactNode } from 'react';

type MdxCodeInlineProps = {
  children: ReactNode;
};

export const MdxCodeInline: FC<MdxCodeInlineProps> = ({ children }) => {
  return (
    <span className="not-prose inline">
      <code className="rounded-md bg-black-200 px-1 py-1 text-[0.85em] dark:bg-black-800">
        {children}
      </code>
    </span>
  );
};
