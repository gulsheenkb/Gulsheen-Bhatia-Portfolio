import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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

  return (
    <article className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <Link href="/work" className="text-sm hover:underline">
        ← Work
      </Link>
      <h1 className="mt-6 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
        {project.title}
      </h1>
      {(project.role || project.duration) && (
        <p className="mt-3 text-sm">
          {[project.role, project.duration].filter(Boolean).join(" · ")}
        </p>
      )}
      <p className="mt-8 leading-relaxed">{project.summary}</p>
      <div className="mt-10 space-y-10">
        {project.sections.map((section) => (
          <section key={section.heading || section.body[0]}>
            {section.heading ? (
              <h2 className="font-display text-2xl font-semibold">
                {section.heading}
              </h2>
            ) : null}
            {section.body.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="mt-3 leading-relaxed">
                {paragraph}
              </p>
            ))}
            {section.bullets ? (
              <ul className="mt-4 list-disc space-y-2 pl-5">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
      {project.gallery?.length ? (
        <div
          className={
            project.galleryLayout === "grid"
              ? "mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2"
              : "mt-12 flex flex-col gap-8"
          }
        >
          {project.gallery.map((image) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt || project.title}
              width={1400}
              height={900}
              className="h-auto w-full"
            />
          ))}
        </div>
      ) : null}
    </article>
  );
}
