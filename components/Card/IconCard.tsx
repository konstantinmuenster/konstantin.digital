import clsx from 'clsx';
import { FC, ReactElement } from 'react';

type IconCardProps = {
  Icon: FC;
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
    <div className={clsx('flex-col', className)}>
      <Icon />
      <p className="my-4">{title}</p>
      <p>{description}</p>
    </div>
  );
};
