/** @type {import('next').NextConfig} */

const nextConfig = {
  rewrites: () => [
    {
      source: "/api/:path*",
      destination: "http://localhost:3000/api/:path*",
    },
  ],
}

export default nextConfig
