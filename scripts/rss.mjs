import { writeFileSync } from 'fs';
import { compareDesc, parseISO } from 'date-fns';
import { Feed } from 'feed';

import allPosts from '../.contentlayer/generated/Post/_index.json' assert { type: 'json' };

const baseUrl = 'https://konstantin.digital';
const author = {
  name: 'Konstantin Münster',
  email: 'hey@konstantin.digital',
  link: baseUrl,
};

const date = new Date();

const feed = new Feed({
  title: 'konstantin.digital',
  description: 'All about product development and freelancing.',
  id: baseUrl,
  link: baseUrl,
  language: 'en',
  image: `${baseUrl}/favicon.ico`,
  favicon: `${baseUrl}/favicon.ico`,
  updated: date,
  copyright: `All rights reserved ${date.getFullYear()}, Konstantin Münster`,
  author,
  feedLinks: {
    rss2: `${baseUrl}/rss.xml`,
  },
});

allPosts
  .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  .forEach(post => {
    const url = `https://konstantin.digital/blog/${post.slug}`;
    feed.addItem({
      id: url,
      link: url,
      title: post.title,
      description: post.summary,
      date: parseISO(post.publishedAt),
      category: post.category,
      image: `${baseUrl}${post.cover.src}`,
      author: [author],
      contributor: [author],
    });
  });

writeFileSync('./public/rss.xml', feed.rss2(), { encoding: 'utf-8' });
