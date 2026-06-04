/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // App Router is enabled by default in this Next.js version; no explicit flag needed
    images: {
        formats: ['image/avif', 'image/webp'],
    },
};

module.exports = nextConfig;
