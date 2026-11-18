import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { HeroShapes } from "@/components/hero-shapes";
import { ProjectCard } from "@/components/project-card";
import { photographyPreview, projects, site, skills } from "@/lib/content";

export default function HomePage() {
  const [leftPhoto, centerPhoto, rightPhoto] = photographyPreview;

  return (
    <>
      <section className="relative overflow-x-clip">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div className="min-w-0">
            <p className="font-display text-lg font-medium tracking-wide text-foreground/80 sm:text-xl">
              {site.role}
            </p>
            <h1 className="mt-3 max-w-xl text-balance font-display text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              {site.tagline}
            </h1>
            <Link
              href="/about"
              className="mt-8 inline-flex h-12 items-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90"
            >
              Learn More
            </Link>
          </div>
          <div className="relative mx-auto w-[min(100%,17.5rem)] sm:w-[min(100%,20.5rem)]">
            <HeroShapes />
            <div className="relative z-10 aspect-square overflow-hidden rounded-full border-[14px] border-white shadow-[0_18px_50px_rgba(20,40,32,0.12)]">
              <Image
                src="/images/fj3HW7pYR9SZ43B34M1WNG6jS4U.jpg"
                alt="Gulsheen Bhatia"
                fill
                sizes="328px"
                className="object-cover object-[50%_18%]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-2 pt-2 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="font-display text-xl font-semibold tracking-[0.08em]">
            <Link href="/about" className="transition hover:opacity-70">
              ABOUT ME
            </Link>
          </h2>
        </div>
      </section>

      <section id="work" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="mb-12 text-center font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            My Projects
          </h2>
          <div className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="mb-9 text-center font-display text-2xl font-medium tracking-tight">
            Skills
          </h2>
          <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            {skills.map((skill) => (
              <li
                key={skill.name}
                className="relative h-[4.25rem] w-40 overflow-hidden rounded-[1.15rem] shadow-[0_8px_24px_rgba(20,40,32,0.08)] ring-1 ring-black/5 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(20,40,32,0.12)] sm:h-[4.6rem] sm:w-44"
              >
                <Image
                  src={skill.src}
                  alt={skill.name}
                  fill
                  className="object-cover"
                  sizes="176px"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mx-auto h-px w-[min(100%-2rem,64rem)] bg-gradient-to-r from-transparent via-[#ffb8b9] to-transparent" />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-3xl">
          <h2 className="mb-12 text-center font-display text-2xl font-medium tracking-tight">
            <Link href="/photography" className="transition hover:opacity-70">
              Photography
            </Link>
          </h2>
          <div className="relative mx-auto flex h-[240px] max-w-lg items-center justify-center sm:h-[300px] sm:max-w-xl">
            {leftPhoto ? (
              <Link
                href="/photography"
                className="absolute left-[2%] z-0 size-[8.5rem] overflow-hidden rounded-full shadow-[0_10px_30px_rgba(20,40,32,0.14)] ring-4 ring-white transition duration-300 hover:z-20 hover:scale-[1.03] sm:left-[8%] sm:size-44"
              >
                <Image
                  src={leftPhoto.src}
                  alt={leftPhoto.alt}
                  fill
                  className="object-cover"
                  sizes="176px"
                />
              </Link>
            ) : null}
            {centerPhoto ? (
              <Link
                href="/photography"
                className="relative z-10 size-[11.5rem] overflow-hidden rounded-full border-[7px] border-white shadow-[0_16px_40px_rgba(20,40,32,0.16)] transition duration-300 hover:scale-[1.03] sm:size-[13.5rem] sm:border-[9px]"
              >
                <Image
                  src={centerPhoto.src}
                  alt={centerPhoto.alt}
                  fill
                  className="object-cover"
                  sizes="216px"
                />
              </Link>
            ) : null}
            {rightPhoto ? (
              <Link
                href="/photography"
                className="absolute right-[2%] z-0 size-[8.5rem] overflow-hidden rounded-full shadow-[0_10px_30px_rgba(20,40,32,0.14)] ring-4 ring-white transition duration-300 hover:z-20 hover:scale-[1.03] sm:right-[8%] sm:size-44"
              >
                <Image
                  src={rightPhoto.src}
                  alt={rightPhoto.alt}
                  fill
                  className="object-cover"
                  sizes="176px"
                />
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 pb-24 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-3xl items-start gap-8 border-t border-black/5 pt-12 sm:grid-cols-2 sm:gap-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:pt-1.5 sm:text-[1.7rem]">
            Let’s Connect
          </h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
