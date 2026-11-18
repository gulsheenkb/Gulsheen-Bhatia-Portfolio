import type { Metadata } from "next";
import Image from "next/image";
import { photos } from "@/lib/content";

export const metadata: Metadata = {
  title: "Photography",
};

export default function PhotographyPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="mb-10 text-center font-display text-3xl font-semibold sm:text-4xl">
        PHOTOGRAPHY
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {photos.map((photo) => (
          <div key={photo.src} className="relative aspect-[4/5]">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
