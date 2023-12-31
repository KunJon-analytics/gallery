/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nft-cdn.alchemy.com",
        port: "",
        pathname: "/eth-mainnet/**",
      },
    ],
  },
};

module.exports = nextConfig;
