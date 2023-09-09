import { FC } from 'react';
import clsx from 'clsx';

import { type IconProps } from '../Icon';

type IconCardProps = {
  Icon: FC<IconProps>;
  title: string;
  description?: string;
  className?: string;
};

export const IconCard: FC<IconCardProps> = ({
  Icon,
  className,
  title,
  description,
}) => {
  return (
    <div
      className={clsx(
        'flex flex-row items-start justify-start gap-6',
        className
      )}
    >
      <Icon className="flex-shrink-0" />
      <div>
        <p>{title}</p>
        <p className="opacity-90">{description}</p>
      </div>
    </div>
  );
};
