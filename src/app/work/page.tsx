import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
};

export default function WorkPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
        Portfolio
      </p>
      <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        Work that makes gifting, campus life, and civic services easier
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Case studies from Tapestry, Publicis Sapient, Laurier, and the Region of
        Waterloo — plus graphic work from school.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
