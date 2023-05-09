/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    // outputStandalone: true,
  },
  env: {
    PROJECTS_FOLDER: 'proekty',
    PROJECTS_NO_CATEGORY_SLUG: 'bez-kategorii',
    PROJECTS_NO_CATEGORY_TITLE: 'Без категории',
    PROJECTS_NO_CATEGORY_DESCRIPTION: 'Без категории',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'api.localhost',
        port: '80',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'backend',
        port: '1337',
        pathname: '/uploads/**',
      },
    ],
  },
}

module.exports = nextConfig
