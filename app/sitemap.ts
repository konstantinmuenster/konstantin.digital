import type { MetadataRoute } from 'next';

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: 'https://konstantin.digital',
    changeFrequency: 'monthly',
    priority: 1,
  },
];

export default sitemap;
