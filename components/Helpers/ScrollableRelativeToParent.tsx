import clsx from 'clsx';
import { FC, ReactNode } from 'react';

type ScrollableRelativeToParentProps = {
  children: ReactNode;
  className?: string;
};

export const ScrollableRelativeToParent: FC<
  ScrollableRelativeToParentProps
> = ({ className, children }) => {
  return (
    <div className={clsx('fixed w-full max-w-[inherit]', className)}>
      {children}
    </div>
  );
};
