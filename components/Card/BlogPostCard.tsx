import type { FC } from 'react';

import type { Post } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { formatDate } from '@/utils/formatDate';
import { Label } from '../Label';

type BlogPostCardProps = {
  post: Post;
  variant?: 'image-horizontal' | 'image-vertical' | 'default' | 'minimal';
  className?: string;
};

export const BlogPostCard: FC<BlogPostCardProps> = ({
  post,
  className,
  variant = 'default',
}) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      role="button"
      aria-label={`Read article: ${post.title}`}
      className="a-reset focus-default inline-block max-w-fit cursor-pointer rounded-lg transition-all hover:ring-2 hover:ring-violet hover:ring-offset-2 dark:hover:ring-offset-black"
    >
      <article
        className={clsx(
          'rounded-lg border border-black-300 dark:border-black-700',
          variant === 'image-horizontal'
            ? 'flex max-w-xs flex-col-reverse items-center gap-4 md:grid md:max-w-3xl md:grid-cols-2'
            : '',
          variant !== 'image-horizontal' ? 'max-w-xs' : '',
          variant === 'image-vertical' ? 'flex flex-col-reverse' : '',
          className
        )}
      >
        <div className="p-4">
          <time className="text-sm opacity-75">
            {formatDate(post.publishedAt, 'dd LLLL yyyy')}
          </time>
          <h3 className="my-1 text-lg font-medium">{post.title}</h3>
          {variant !== 'minimal' && (
            <p className="my-1 text-sm opacity-75">{post.summary}</p>
          )}
          {post.category && (
            <Label color="gray" className="mt-2 inline-block">
              {post.category}
            </Label>
          )}
        </div>
        {variant.startsWith('image') && (
          <div className="h-full">
            {post.cover && (
              <Image
                src={post.cover.src}
                alt={post.cover.alt}
                width={400}
                height={220}
                className={clsx(
                  'h-full bg-black-50 object-cover dark:bg-black-950',
                  variant === 'image-vertical'
                    ? 'rounded-t-lg'
                    : 'rounded-t-lg md:!rounded-r-lg md:rounded-t-none'
                )}
              />
            )}
          </div>
        )}
      </article>
    </Link>
  );
};
