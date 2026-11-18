import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] border-[6px] border-blush-strong bg-secondary lg:max-w-none">
          <Image
            src="/images/NKKuBY6BDu9VaLCFPsWze8Vjk.png"
            alt="Graduation portrait of Gulsheen Bhatia"
            width={660}
            height={864}
            className="h-auto w-full"
            priority
          />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            About me
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Hello
          </h1>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              I’m Gulsheen Kaur Bhatia, a UX designer at Tapestry and a
              graduate of Wilfrid Laurier University’s User Experience Design
              program. For the past eight months I’ve worked on digital
              experiences across the Coach and Kate Spade brands, using design
              to solve real problems and make technology easier to use.
            </p>
            <p>
              I was born in the US, raised in Delhi, and moved to Canada four
              years ago. Adjusting to each new place taught me adaptability and
              resilience, and I bring both to my design process and my work
              with cross-functional teams.
            </p>
            <p>
              I’m creative, organized, and collaborative, and I’m driven to
              build meaningful experiences through user research, wireframing,
              and prototyping. Outside of work, I love experimenting in the
              kitchen, where my creativity finds a different outlet.
            </p>
            <p>
              I’m excited to keep learning and to collaborate with fellow
              designers on user-friendly solutions that make an impact.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">Let’s connect</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={site.linkedin} rel="noreferrer" target="_blank">
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
