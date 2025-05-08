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
  // Change output mode to standalone instead of static
  output: 'standalone',
  // Disable static generation for all pages
  experimental: {
    // Disable Partial Prerendering which can cause issues with client components
    ppr: false
  }
}

export default nextConfig
