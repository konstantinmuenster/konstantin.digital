import type { FC, ReactNode } from 'react';

import clsx from 'clsx';

type HeroProps = {
  title: string | ReactNode;
  description?: string;
  actions?: ReactNode;
  className?: string;
  minHeight?: boolean;
};

export const Hero: FC<HeroProps> = ({
  title,
  description,
  actions,
  className,
  minHeight = true,
}) => {
  return (
    <div
      className={clsx(
        'relative mx-auto flex max-w-2xl flex-col items-center justify-center',
        minHeight ? 'lg:h-[calc(100vh-15rem)] lg:max-h-[600px]' : '',
        className
      )}
    >
      <h1 className="text-center font-accent text-6xl font-bold md:text-7xl">
        {title}
      </h1>
      <p className="my-5 text-center text-lg opacity-90 md:text-xl">
        {description}
      </p>
      <div className="flex items-center justify-center">{actions}</div>
    </div>
  );
};
