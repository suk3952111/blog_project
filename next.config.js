const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'build',
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client'],
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  sassOptions: {
    additionalData: '@import "@/styles/main.scss";',
  },
};

module.exports = withContentlayer(nextConfig);
