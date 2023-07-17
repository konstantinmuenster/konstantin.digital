import type { Post } from 'contentlayer/generated';

export const CategoryColors: Record<
  NonNullable<Post['category']>,
  'mint' | 'violet' | 'sun'
> = {
  Engineering: 'mint',
  Product: 'violet',
  Careers: 'sun',
} as const;

export const favorites: Post['slug'][] = [
  'why-open-source-projects-are-your-best-marketing',
  'adopting-a-no-code-mindset',
];
