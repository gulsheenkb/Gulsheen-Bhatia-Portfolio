import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={project.href}
      className="group flex min-w-0 flex-col gap-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-[30px] border-[5px] border-[#ffb8b9] bg-white shadow-[0_10px_28px_rgba(20,40,32,0.06)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_40px_rgba(20,40,32,0.12)]">
        <Image
          src={project.cover}
          alt={project.coverAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 315px"
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="min-w-0 px-1">
        <h3 className="font-display text-[1.05rem] font-semibold leading-snug tracking-tight">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{project.subtitle}</p>
      </div>
    </Link>
  );
}
