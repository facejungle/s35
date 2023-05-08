/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    // outputStandalone: true,
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
