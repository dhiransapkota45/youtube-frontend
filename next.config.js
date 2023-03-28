/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  generateEtags: false,
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/i,
        type: "asset",
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] },
        use: [{ loader: "@svgr/webpack", options: { icon: true } }],
      }
    );
    return config;
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  env: {
    BACKEND_URL: "http://192.168.1.131:8000",
  },
  images: {
    domains: ["localhost", "192.168.1.131"],
  },
};

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: "frame-ancestors https://magic.store",
  },
  {
    key: "Cache-Control",
    value: "no-store",
  },
];

module.exports = nextConfig;
