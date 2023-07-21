import type { FC } from 'react';

import NextImage from 'next/image';

type MdxImageProps = {
  src: string;
  alt: string;
  caption?: string;
};

export const MdxImage: FC<MdxImageProps> = ({ src, alt, caption }) => {
  return (
    <div className="not-prose my-12">
      <NextImage
        src={src}
        alt={alt}
        width={800}
        height={600}
        className="rounded-lg bg-black-50 ring-2 ring-black-300 ring-offset-2 ring-offset-white dark:bg-black-950 dark:ring-black-700 dark:ring-offset-black"
      />
      {caption && (
        <p className="mt-2 text-center text-sm opacity-50">{caption}</p>
      )}
    </div>
  );
};
