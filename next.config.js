/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/movies',
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
