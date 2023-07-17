import type { MDXComponents } from 'mdx/types';

import { MdxImage } from './Image';
import { MdxCallout } from './Callout';
import { MdxLearningPath } from './LearningPath';
import { MdxTargetAudience } from './TargetAudience';
import { MdxTwitterHandle } from './TwitterHandle';
import { MdxBlockquote } from './Blockquote';
import { MdxCodeInline } from './CodeInline';
import { MdxCodeBlock } from './CodeBlock';

export const mdxComponents: MDXComponents = {
  // @ts-expect-error
  blockquote: MdxBlockquote,
  // @ts-expect-error
  code: MdxCodeInline,
  // @ts-expect-error
  pre: MdxCodeBlock,

  // @ts-expect-error
  Callout: MdxCallout,
  // @ts-expect-error
  Image: MdxImage,
  // @ts-expect-error
  LearningPath: MdxLearningPath,
  // @ts-expect-error
  TargetAudience: MdxTargetAudience,
  // @ts-expect-error
  TwitterHandle: MdxTwitterHandle,
};
