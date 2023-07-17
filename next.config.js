/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "a.mktgcdn.com",
        port: "",
        pathname: "/p/**",
      },
      {
        protocol: "https",
        hostname: "a.mktgcdn.com",
        port: "",
        pathname: "/p/**",
      },
    ],
  },
};

module.exports = nextConfig;
