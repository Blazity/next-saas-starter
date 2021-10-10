const CopyPlugin = require('copy-webpack-plugin');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    domains: ['github.blog'],
    deviceSizes: [320, 640, 1080, 1200],
    imageSizes: [64, 128],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (!dev) {
      config.plugins.push(new CopyPlugin({ patterns: [{ from: 'posts', to: 'posts' }] }));
    }

    return config;
  },
});
