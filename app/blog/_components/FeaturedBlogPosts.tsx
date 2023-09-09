import type { FC } from 'react';

import { allPosts } from 'contentlayer/generated';

import { favorites } from '@/config/blog.config';
import { BlogPostCard } from '@/components/Card';

export const FeaturedBlogPosts: FC = () => {
  const featured = allPosts.filter(post => favorites.includes(post.slug));
  if (featured.length === 0) return null;

  return (
    <div id="featured" className="scroll-m-8">
      <h2 className="mb-4 mt-4 font-accent text-2xl font-medium md:mb-10">
        Favorite Picks
      </h2>
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap lg:flex-col">
        {featured.map(post => {
          return <BlogPostCard key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
};
