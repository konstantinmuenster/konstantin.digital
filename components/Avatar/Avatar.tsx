import { FC } from 'react';
import Image from 'next/image';

import AvatarImg from './konstantin-muenster-avatar.jpg';

type AvatarProps = {
  size?: number;
};

export const Avatar: FC<AvatarProps> = ({ size = 32 }) => {
  return (
    <Image
      src={AvatarImg}
      alt="Konstantin Münster"
      width={size}
      height={size}
      className="rounded-full border border-black/50 bg-black-50 dark:bg-black-950"
    />
  );
};
