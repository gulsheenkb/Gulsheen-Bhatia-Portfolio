import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={project.href}
      className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[1.75rem] border-[3px] border-blush-strong bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="relative aspect-[5/4] w-full overflow-hidden bg-secondary">
        <Image
          src={project.cover}
          alt={project.coverAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-2 p-4 sm:p-5">
        <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-balance sm:text-xl">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground">{project.subtitle}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}
