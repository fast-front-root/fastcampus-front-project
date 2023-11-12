const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

const withVanillaExtract = createVanillaExtractPlugin();

module.exports = withVanillaExtract(nextConfig);
