module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  experiments: {
    asset: true
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.md/,
      type: "asset/source",
    })
    return config;
  },
}
