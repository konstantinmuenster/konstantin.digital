import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files';

/**
 * GENERIC TYPES
 */

const Image = defineNestedType(() => ({
  name: 'Image',
  fields: {
    src: { type: 'string', required: true },
    alt: { type: 'string', required: true },
    caption: { type: 'markdown' },
  },
}));

const Externals = defineNestedType(() => ({
  name: 'Externals',
  fields: {
    Medium: { type: 'string' },
    ProductHunt: { type: 'string' },
    Website: { type: 'string' },
  },
}));

/**
 * BLOG POSTS
 */

const POSTS_DIR_NAME = 'posts';

const Categories = ['Engineering', 'Product', 'Careers'] as const;

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `./${POSTS_DIR_NAME}/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'date', required: true },
    summary: { type: 'string' },
    cover: { type: 'nested', of: Image },
    externals: { type: 'nested', of: Externals },
    category: { type: 'enum', options: Categories },
    tags: { type: 'list', of: { type: 'string' } },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: post => {
        const name = post._raw.flattenedPath.split(`${POSTS_DIR_NAME}/`).pop();
        const slug = name?.replace(/^(\d{3})-/, '');
        if (!slug) throw new Error(`Invalid file name: ${name}`);
        return slug;
      },
    },
  },
}));

/**
 * PROJECTS
 */

const PROJECTS_DIR_NAME = 'projects';

const Review = defineNestedType(() => ({
  name: 'Review',
  fields: {
    biography: { type: 'string' },
    summary: { type: 'markdown' },
    avatar: { type: 'nested', of: Image },
  },
}));

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `./${PROJECTS_DIR_NAME}/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    period: { type: 'string' },
    subtitle: { type: 'string' },
    cover: { type: 'nested', of: Image },
    role: { type: 'string' },
    space: { type: 'string' },
    tags: { type: 'list', of: { type: 'string' } },
    stack: { type: 'list', of: { type: 'string' } },
    externals: { type: 'nested', of: Externals },
    background: { type: 'markdown' },
    carousel: { type: 'list', of: Image },
    responsibilities: { type: 'list', of: { type: 'markdown' } },
    achievements: { type: 'list', of: { type: 'markdown' } },
    review: { type: 'nested', of: Review },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: post => {
        const n = post._raw.flattenedPath.split(`${PROJECTS_DIR_NAME}/`).pop();
        const slug = n?.replace(/^(\d{3})-/, '');
        if (!slug) throw new Error(`Invalid file name: ${name}`);
        return slug;
      },
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Project],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        { target: '_blank', rel: ['noopener', 'noreferrer', 'nofollow'] },
      ],
      rehypeSlug,
      rehypeAutolinkHeadings,
    ],
  },
});
