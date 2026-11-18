import Image, { type ImageProps } from "next/image";
import { withBasePath } from "@/lib/paths";

export function PortfolioImage({ src, alt = "", ...props }: ImageProps) {
  const resolved = typeof src === "string" ? withBasePath(src) : src;
  return <Image src={resolved} alt={alt} unoptimized {...props} />;
}
