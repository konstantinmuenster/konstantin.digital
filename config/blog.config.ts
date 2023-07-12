import type { Post } from 'contentlayer/generated';

export const CategoryColors: Record<
  NonNullable<Post['category']>,
  'mint' | 'violet' | 'sun'
> = {
  Engineering: 'mint',
  Product: 'violet',
  Careers: 'sun',
} as const;
