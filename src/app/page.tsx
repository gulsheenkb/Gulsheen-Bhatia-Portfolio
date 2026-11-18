import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { ProjectCard } from "@/components/project-card";
import { photos, projects, site, skills } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute right-0 top-6 hidden w-48 sm:block lg:w-64">
          <Image
            src="/images/GwDEfvBGJV4DDG63wb5wPOlQ79M.jpg"
            alt=""
            width={990}
            height={848}
            className="h-auto w-full"
            priority
          />
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16">
          <div className="min-w-0">
            <p className="font-display text-xl font-medium sm:text-2xl">
              {site.role}
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-[3.5rem]">
              {site.tagline}
            </h1>
            <Link
              href="/about"
              className="mt-8 inline-flex h-12 items-center rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground"
            >
              Learn More
            </Link>
          </div>
          <div className="relative mx-auto w-[min(100%,18rem)] sm:w-[min(100%,20rem)]">
            <div className="relative aspect-square overflow-hidden rounded-full border-[15px] border-white">
              <Image
                src="/images/fj3HW7pYR9SZ43B34M1WNG6jS4U.jpg"
                alt="Gulsheen Bhatia"
                fill
                sizes="320px"
                className="object-cover object-[50%_18%]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="font-display text-2xl font-semibold tracking-wide">
            <Link href="/about">ABOUT ME</Link>
          </h2>
        </div>
      </section>

      <section id="work" className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="mb-10 text-center font-display text-3xl font-semibold sm:text-4xl">
            My Projects
          </h2>
          <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="mb-10 text-center font-display text-3xl font-semibold sm:text-4xl">
            Skills
          </h2>
          <ul className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
            {skills.map((skill) => (
              <li key={skill.name} className="relative h-12 w-36 sm:h-16 sm:w-44">
                <Image
                  src={skill.src}
                  alt={skill.name}
                  fill
                  className="object-contain"
                  sizes="176px"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="mb-8 text-center font-display text-3xl font-semibold sm:text-4xl">
            <Link href="/photography">Photography</Link>
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {photos.map((photo) => (
              <Link
                key={photo.src}
                href="/photography"
                className="relative aspect-[4/5] overflow-hidden"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-xl">
          <h2 className="mb-8 text-center font-display text-3xl font-semibold sm:text-4xl">
            Let’s Connect
          </h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
