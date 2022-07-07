/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ['raw.githubusercontent.com'] },
  future: { webpack5: true }
}

module.exports = nextConfig
