import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://app-cultiva.local/public/:path*", // Reemplaza con la URL de tu backend
      },
    ];
  },
};

export default nextConfig;
