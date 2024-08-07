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
}

export default nextConfig
