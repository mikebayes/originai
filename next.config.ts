import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      // Legacy Framer auto-generated route from the previous site.
      // The post at /insights/:tG9AbZrun was indexed before slugs were
      // normalized. 301s to the insights index so Google and SE Ranking
      // can drop it from their reports. Two source variants because
      // the colon may or may not be present depending on how the URL
      // was originally indexed.
      {
        source: "/insights/\\:tG9AbZrun",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/insights/tG9AbZrun",
        destination: "/insights",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
