/** @type {import('next').NextConfig} */

const nextConfig = {
  rewrites: () => [
    {
      source: "/api/:path*",
      destination: process.env.NEXT_PUBLIC_API_URL + "/:path*",
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
