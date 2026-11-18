import type { Metadata } from "next";
import Image from "next/image";
import { photos } from "@/lib/content";

export const metadata: Metadata = {
  title: "Photography",
};

export default function PhotographyPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        Photography
      </h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        Quiet frames from walks — berries, black-eyed Susans, and a swallowtail
        on the forest floor.
      </p>
      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {photos.map((photo) => (
          <figure
            key={photo.src}
            className="mb-4 break-inside-avoid overflow-hidden rounded-3xl"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={1600}
              height={1200}
              className="h-auto w-full"
            />
            <figcaption className="px-1 py-3 text-sm text-muted-foreground">
              {photo.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
