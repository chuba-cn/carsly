import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "car-dealer-website.s3.eu-west-1.amazonaws.com",
        pathname: "/next-s3-uploads/**",
      },
    ],
  },
};

export default nextConfig;
