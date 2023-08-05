'use client';

import { useState, type FC } from 'react';

import { allPosts } from 'contentlayer/generated';

import { CategoryColors } from '@/config/blog.config';
import { BlogPostCard } from '@/components/Card';
import { Button } from '@/components/Button';

const CATEGORIES = Object.keys(CategoryColors);

export const BlogPostTimeline: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>();

  const posts = allPosts
    .filter(post => {
      return selectedCategory ? post.category === selectedCategory : true;
    })
    .sort((a, b) => {
      return (
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    });

  return (
    <div id="timeline" className="scroll-m-8">
      <h2 className="block font-accent text-2xl font-medium md:mb-10 md:hidden">
        All Posts
      </h2>
      <div className="mb-4 flex gap-2 overflow-x-auto py-4 pl-1">
        <Button
          as="button"
          size="sm"
          variant="label"
          className={!selectedCategory ? 'bg-black-200 dark:bg-black-800' : ''}
          onClick={() => setSelectedCategory(undefined)}
        >
          All Categories
        </Button>
        {CATEGORIES.map(category => {
          return (
            <Button
              key={category}
              as="button"
              size="sm"
              variant="label"
              className={
                selectedCategory === category
                  ? 'bg-black-200 dark:bg-black-800'
                  : ''
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          );
        })}
      </div>
      <div className="flex flex-col flex-wrap gap-4 sm:flex-row lg:flex-col">
        {posts.map(post => {
          return (
            <BlogPostCard
              key={post._id}
              post={post}
              variant="image-horizontal"
            />
          );
        })}
        {posts.length === 0 && (
          <span className="p-4 text-lg font-medium opacity-50">
            No posts in this category yet.
          </span>
        )}
      </div>
    </div>
  );
};
