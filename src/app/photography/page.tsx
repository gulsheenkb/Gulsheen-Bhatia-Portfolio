import type { Metadata } from "next";
import Image from "next/image";
import { photos } from "@/lib/content";

export const metadata: Metadata = {
  title: "Photography",
};

export default function PhotographyPage() {
  const left = photos.filter((_, i) => i < 8 && i % 2 === 0);
  const right = photos.filter((_, i) => i < 8 && i % 2 === 1);
  const wide = photos[8];

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
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
              width={800}
              height={1000}
              className="h-auto w-full"
            />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {right.map((photo) => (
            <Image
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              width={800}
              height={1000}
              className="h-auto w-full"
            />
          ))}
        </div>
      </div>
      {wide ? (
        <div className="mt-4">
          <Image
            src={wide.src}
            alt={wide.alt}
            width={1600}
            height={1100}
            className="h-auto w-full"
          />
        </div>
      ) : null}
    </div>
  );
}
