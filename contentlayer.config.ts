import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files';

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
    medium: { type: 'string' },
  },
}));

const Categories = ['Engineering', 'Product', 'Careers'] as const;

const POSTS_DIR_NAME = 'posts';

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

export default makeSource({ contentDirPath: 'content', documentTypes: [Post] });
