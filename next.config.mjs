/** @type {import('next').NextConfig} */

const nextConfig = {
  rewrites: () => [
    {
      source: "/api/:path*",
      destination: "http://localhost:3000/api/:path*",
    },
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rwchqsylfosfanxzgria.supabase.co",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/articles/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/podcasts/:path*",
        destination: "/",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
