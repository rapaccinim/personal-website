/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  webpack: (config,) => {
    config.module.rules.push({
      test: /\.md/,
      type: "asset/source",
    })
    return config;
  }
};

module.exports = nextConfig;