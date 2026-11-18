import type { Metadata } from "next";
import Image from "next/image";
import { photos } from "@/lib/content";

export const metadata: Metadata = {
  title: "Photography",
};

export default function PhotographyPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="mb-10 font-display text-3xl font-semibold sm:text-5xl">
        PHOTOGRAPHY
      </h1>
      <div className="flex flex-col gap-8">
        {photos.map((photo) => (
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            width={1600}
            height={1200}
            className="h-auto w-full"
          />
        ))}
      </div>
    </div>
  );
}
