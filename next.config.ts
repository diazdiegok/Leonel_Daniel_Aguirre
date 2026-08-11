import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.padelfip.com" },
      { protocol: "https", hostname: "padelapi.org" },
    ],
  },
};

export default nextConfig;
