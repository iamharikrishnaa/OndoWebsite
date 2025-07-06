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
   basePath: isGithubPages ? '/OndoWebsite' : '',
  assetPrefix: isGithubPages ? '/OndoWebsite/' : '',
  output:"export",
  reactStrictMode:true,
}

export default nextConfig
