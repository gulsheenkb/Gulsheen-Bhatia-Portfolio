import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProject, projects } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <Button asChild variant="ghost" className="-ml-3 mb-6">
        <Link href="/work">
          <ArrowLeft />
          All work
        </Link>
      </Button>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        {project.subtitle}
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        {project.title}
      </h1>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      {(project.role || project.duration) && (
        <p className="mt-4 text-sm text-muted-foreground">
          {[project.role, project.duration].filter(Boolean).join(" · ")}
        </p>
      )}
      <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-[1.75rem] border-[3px] border-blush-strong bg-secondary">
        <Image
          src={project.cover}
          alt={project.coverAlt}
          fill
          className="object-contain p-4 sm:p-8"
          sizes="(max-width: 896px) 100vw, 896px"
          priority
        />
      </div>
      <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
        {project.summary}
      </p>
      <div className="mt-10 space-y-10">
        {project.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              {section.heading}
            </h2>
            {section.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="mt-3 leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
            {section.bullets ? (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
      {project.gallery?.length ? (
        <div className="mt-12 grid gap-4">
          {project.gallery.map((image) => (
            <figure
              key={image.src}
              className="overflow-hidden rounded-3xl border border-border bg-secondary"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1400}
                height={900}
                className="h-auto w-full"
              />
              <figcaption className="px-4 py-3 text-sm text-muted-foreground">
                {image.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      ) : null}
      <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">Next project</p>
        <Button asChild variant="outline">
          <Link href={next.href}>
            {next.title}
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </article>
  );
}
