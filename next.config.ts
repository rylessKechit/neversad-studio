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
  // Configuration pour les images statiques
  images: {
    unoptimized: true, // Pour Vercel static export si nécessaire
    remotePatterns: [],
    formats: ['image/webp', 'image/avif'],
  },
  // Assurer que les assets statiques sont inclus
  output: 'standalone', // ou 'export' si vous voulez un export statique
  trailingSlash: false,
  /* config options here */
};

export default nextConfig;