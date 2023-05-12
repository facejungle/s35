/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    // outputStandalone: true,
  },
  env: {
    CONTACTS_URI: 'kontakty',
    DYNAMIC_PAGES_URI: 'page',

    PORTFOLIO_URI: 'portfolio',
    PORTFOLIO_NO_CATEGORY_SLUG: 'bez-kategorii',
    PORTFOLIO_NO_CATEGORY_TITLE: 'Без категории',
    PORTFOLIO_NO_CATEGORY_DESCRIPTION: 'Без категории',

    PRICES_URI: 'tseny',
    PRICES_BUILDING_URI: 'doma-bani',
    PRICES_SERVICE_URI: 'uslugi',
    PRICES_DELIVERY_URI: 'dostavka',

    PROJECTS_URI: 'proekty',
    PROJECTS_NO_CATEGORY_SLUG: 'bez-kategorii',
    PROJECTS_NO_CATEGORY_TITLE: 'Без категории',
    PROJECTS_NO_CATEGORY_DESCRIPTION: 'Без категории',

    BLOG_URI: 'blog',
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
