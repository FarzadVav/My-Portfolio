/** @type {import('next').NextConfig} */

const nextConfig = {
  rewrites: () => [
    {
      source: "/api/:path*",
      destination: "https://farzadweb.liara.run/api/:path*",
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
