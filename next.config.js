/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.IMAGE_STORAGE_URL, // Replace with your exact image domain (e.g., 'images.unsplash.com')
        port: '',
        pathname: '/**', // Matches all paths under this domain
      },
    ],
  },
};

module.exports = nextConfig;