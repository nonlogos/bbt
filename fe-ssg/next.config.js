/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: "./",
};

// module.exports = nextConfig; // temporarily disabled for github page deployment

export default nextConfig;
