import type { MetadataRoute } from 'next';

// AI search and training crawlers are explicitly welcomed — appearing in
// AI-generated answers (ChatGPT, Claude, Perplexity, …) is a goal of this site.
const aiCrawlers = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'anthropic-ai',
  'PerplexityBot',
  'Google-Extended',
  'CCBot',
];

const robots = (): MetadataRoute.Robots => ({
  rules: [
    { userAgent: '*', allow: '/' },
    ...aiCrawlers.map(userAgent => ({ userAgent, allow: '/' })),
  ],
  sitemap: 'https://konstantin.digital/sitemap.xml',
});

export default robots;
