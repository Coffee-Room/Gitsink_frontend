/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Add this configuration to use the static 404 page
  async rewrites() {
    return [
      {
        source: '/_not-found',
        destination: '/404.html',
      },
    ];
  },
}

export default nextConfig
