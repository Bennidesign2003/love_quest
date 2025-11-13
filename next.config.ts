/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.pixabay.com'], // hier alle externen Domains eintragen
  },
  typescript: {
    // 🚀 Ignore TypeScript errors during build
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig