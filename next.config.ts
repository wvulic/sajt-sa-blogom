import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/sajt-sa-blogom",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
