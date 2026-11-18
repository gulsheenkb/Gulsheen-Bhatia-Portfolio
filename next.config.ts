import type { NextConfig } from "next";

const repo = "Gulsheen-Bhatia-Portfolio";
const onGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: onGitHubPages ? `/${repo}` : "",
  assetPrefix: onGitHubPages ? `/${repo}/` : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
