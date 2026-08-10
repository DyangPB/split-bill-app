import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /*
     * Optimizer bawaan next/image tidak jalan di Cloudflare Workers — pilihan
     * lainnya adalah binding Cloudflare Images yang berbayar. Gambar di sini
     * cuma 4 ikon PNG kecil yang dirender 28px, jadi tidak ada yang dihemat:
     * sajikan apa adanya dari static assets.
     */
    unoptimized: true,
  },
};

export default nextConfig;
