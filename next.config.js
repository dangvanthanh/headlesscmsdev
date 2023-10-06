const withBuilderDevTools = require("@builder.io/dev-tools/next")();

/** @type {import('next').NextConfig} */
const nextConfig = withBuilderDevTools({
  images: {
    remotePatterns: [{ hostname: "flowbite.s3.amazonaws.com" }],
  },
});

module.exports = nextConfig;
