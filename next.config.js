/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => {
    return [
      {
        source: "/about",
        destination: "/sobre",
      },
    ];
  },
};

module.exports = nextConfig;
