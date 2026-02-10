/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'hqpnwiaifysfpbpwixim.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'mhnrqqnwljoyiguqzrcp.supabase.co',
      },
    ],
  },
};

module.exports = nextConfig;

