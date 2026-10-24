import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/garden",
        destination: "/",
        permanent: false,
      },
      {
        source: "/scrollable-princess",
        destination: "/",
        permanent: false,
      },
      {
        source: "/index.html",
        destination: "/",
        permanent: false,
      },
      {
        source: "/home",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
