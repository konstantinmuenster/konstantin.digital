import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/blog', destination: '/', permanent: true },
      { source: '/blog/:slug*', destination: '/', permanent: true },
      { source: '/projects', destination: '/', permanent: true },
      { source: '/projects/:slug*', destination: '/', permanent: true },
      { source: '/rss.xml', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
