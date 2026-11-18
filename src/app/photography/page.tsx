import type { Metadata } from "next";
import { PortfolioImage as Image } from "@/components/portfolio-image";
import { photos } from "@/lib/content";

export const metadata: Metadata = {
  title: "Photography",
};

export default function PhotographyPage() {
  const left = photos.filter((_, i) => i % 2 === 0);
  const right = photos.filter((_, i) => i % 2 === 1);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="mb-10 font-display text-3xl font-semibold sm:text-5xl">
        PHOTOGRAPHY
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-4">
          {left.map((photo) => (
            <Image
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="h-auto w-full"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {right.map((photo) => (
            <Image
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="h-auto w-full"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
