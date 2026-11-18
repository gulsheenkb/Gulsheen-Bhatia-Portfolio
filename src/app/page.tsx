import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { photos, projects, site, skills } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-16 top-8 hidden w-56 opacity-80 sm:block lg:w-72">
          <Image
            src="/images/GwDEfvBGJV4DDG63wb5wPOlQ79M.jpg"
            alt=""
            width={990}
            height={848}
            className="h-auto w-full"
            priority
          />
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14 lg:px-8 lg:py-24">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              {site.role}
            </p>
            <h1 className="mt-4 max-w-[14ch] font-display text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {site.tagline}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {site.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg">
                <Link href="/about">
                  Learn more
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/work">View work</Link>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative mx-auto aspect-square w-[min(100%,22rem)] overflow-hidden rounded-full border-[12px] border-white shadow-[0_20px_50px_-24px_rgba(11,79,63,0.35)] sm:w-[min(100%,26rem)]">
              <Image
                src="/images/fj3HW7pYR9SZ43B34M1WNG6jS4U.jpg"
                alt="Gulsheen Bhatia seated in a cafe, smiling at the camera"
                fill
                sizes="(max-width: 1024px) 80vw, 420px"
                className="object-cover object-[50%_18%]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream/70 py-14 sm:py-20" id="work">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Selected work
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                My projects
              </h2>
            </div>
            <Button asChild variant="ghost">
              <Link href="/work">
                All projects
                <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Skills
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
            Everyday tools for research, systems, and shipping with product and
            engineering partners.
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {skills.map((skill) => (
              <li
                key={skill.name}
                className="flex min-h-28 flex-col items-center justify-center gap-3 rounded-3xl border border-border bg-card px-4 py-6"
              >
                <div className="relative h-10 w-full max-w-[9rem]">
                  <Image
                    src={skill.src}
                    alt=""
                    fill
                    className="object-contain"
                    sizes="144px"
                  />
                </div>
                <span className="text-center text-sm font-medium">
                  {skill.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cream/70 py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Photography
            </h2>
            <Button asChild variant="ghost">
              <Link href="/photography">
                Open gallery
                <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {photos.map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-[4/5] overflow-hidden rounded-3xl sm:last:aspect-auto sm:last:min-h-[18rem]"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20" id="contact">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Let’s connect
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              I’m always happy to talk about product design, gifting
              experiences, accessibility, or a role on your team.
            </p>
            <a
              href={site.linkedin}
              className="mt-6 inline-flex font-medium text-primary underline-offset-4 hover:underline"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn profile
            </a>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
