import type { NextConfig } from "next";

const repo = "Gulsheen-Bhatia-Portfolio";
const onGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = onGitHubPages ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: onGitHubPages ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
  },
};

export default nextConfig;
