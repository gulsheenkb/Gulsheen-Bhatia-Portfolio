import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={project.href}
      className="group flex min-w-0 flex-col gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-[30px] border-[5px] border-blush-strong bg-white">
        <Image
          src={project.cover}
          alt={project.coverAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 315px"
          className="object-cover"
        />
      </div>
      <div className="min-w-0 px-1">
        <h3 className="font-display text-lg font-semibold leading-snug">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{project.subtitle}</p>
      </div>
    </Link>
  );
}
