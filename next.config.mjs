/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "export",
  basePath: "/nextjs-github-pages",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
