import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.annbusiness.com",
          },
        ],
        destination: "https://annbusiness.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
