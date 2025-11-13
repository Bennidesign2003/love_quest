/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.pixabay.com'], // hier alle externen Domains eintragen
  },
}

module.exports = nextConfig