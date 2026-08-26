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

      // Legacy Framer slug for the "Business First, Technology Second"
      // article. Framer encoded the comma-space as a period in the URL,
      // so the old indexed URL has a literal period before the dash.
      // The new Next.js slug drops it. 301 the old form to the new.
      {
        source: "/insights/business-first-technology-second.-a-smarter-way-to-adopt-ai",
        destination: "/insights/business-first-technology-second-a-smarter-way-to-adopt-ai",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
