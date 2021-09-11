// const CopyPlugin = require('copy-webpack-plugin')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx'],
  images: {
    domains: [],
    deviceSizes: [320, 640, 1080, 1200],
    imageSizes: [64, 128],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
      config.resolve.fallback.child_process = false
      config.resolve.fallback.worker_threads = false
      config.resolve.fallback.net = false
      config.resolve.fallback.tls = false
    }

    // if (!dev) {
    //   config.plugins.push(new CopyPlugin({ patterns: [{ from: 'posts', to: 'posts' }] }))
    // }

    return config
  },
})
