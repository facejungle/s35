/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost', '127.0.0.1'], formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
