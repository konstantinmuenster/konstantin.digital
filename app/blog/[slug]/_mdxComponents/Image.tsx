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
        className="rounded-lg"
      />
      {caption && (
        <p className="mt-2 text-center text-sm text-black/50">{caption}</p>
      )}
    </div>
  );
};
