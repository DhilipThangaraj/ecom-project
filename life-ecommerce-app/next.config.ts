import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lifeadmin-app.s3.me-south-1.amazonaws.com",
        port: "",
        pathname: "/EcomApp/products/**",
      },
      {
        protocol: "https",
        hostname: "life-cdn.lifepharmacy.com",
        port: "",
        pathname: "/EcomApp/products/**",
      },
      {
        protocol: "https",
        hostname: "life-cdn.lifepharmacy.com",
        port: "",
        pathname: "/archieved-images/media/catalog/product/**",
      },
      {
        protocol: "https",
        hostname: "life-cdn.lifepharmacy.com",
        port: "",
        pathname: "/PRODUCT%20IMAGE/**",
      },
      {
        protocol: "https",
        hostname: "life-cdn.lifepharmacy.com",
        port: "",
        pathname: "/images/products/**",
      },
    ],
  },
};

export default nextConfig;
