import type { Metadata } from "next";
import Image from "next/image";
import { photos } from "@/lib/content";

export const metadata: Metadata = {
  title: "Photography",
};

export default function PhotographyPage() {
  const bySrc = new Map(photos.map((photo) => [photo.src, photo]));
  const pick = (srcs: string[]) =>
    srcs.map((src) => bySrc.get(src)).filter((photo) => photo != null);
  const left = pick([
    "/images/photo-01.jpg",
    "/images/photo-03.jpg",
    "/images/photo-06.jpg",
    "/images/photo-08.jpg",
  ]);
  const right = pick([
    "/images/photo-02.jpg",
    "/images/photo-04.jpg",
    "/images/photo-05.jpg",
    "/images/photo-07.jpg",
  ]);
  const wide = bySrc.get("/images/photo-09.jpg");

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
