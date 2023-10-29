'use client';

import { useMDXComponent } from 'next-contentlayer/hooks';
import { FC } from 'react';

import { Video } from '../[slug]/_mdxComponents/Video';

type HighlightContentProps = {
  code: string;
};

export const HighlightContent: FC<HighlightContentProps> = ({ code }) => {
  const MDXContent = useMDXComponent(code);

  return (
    <div className="prose-custom">
      <MDXContent components={{ Video }} />
    </div>
  );
};
