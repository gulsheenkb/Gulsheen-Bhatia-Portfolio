import { PortfolioImage as Image } from "@/components/portfolio-image";
import Link from "next/link";
import type { Project } from "@/lib/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={project.href}
      className="group flex min-w-0 flex-col overflow-hidden rounded-[28px] border-[3px] border-[#ffc4c5] bg-white shadow-[0_8px_24px_rgba(20,40,32,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,40,32,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f6f3ef]">
        <Image
          src={project.cover}
          alt={project.coverAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <h3 className="font-display text-lg font-semibold leading-snug tracking-tight">
          {project.cardTitle ?? project.title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {project.cardBlurb ?? project.subtitle}
        </p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-[#fde8e8] px-2.5 py-1 text-[11px] font-medium text-foreground/80"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
