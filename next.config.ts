import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Permettre la production avec des warnings ESLint
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Permettre la production avec des erreurs TypeScript
    ignoreBuildErrors: true,
  },
  /* config options here */
};

export default nextConfig;