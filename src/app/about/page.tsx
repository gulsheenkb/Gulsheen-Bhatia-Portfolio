import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <article className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-full">
          <Image
            src="/images/NKKuBY6BDu9VaLCFPsWze8Vjk.png"
            alt="Gulsheen Bhatia"
            width={660}
            height={864}
            className="h-auto w-full"
            priority
          />
        </div>
        <div className="min-w-0">
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            HELLO
          </h1>
          <div className="mt-6 space-y-5 text-base leading-relaxed sm:text-lg">
            <p>
              I’m Gulsheen Kaur Bhatia, a UX designer at Tapestry and a
              graduate of Wilfrid Laurier University’s User Experience Design
              program. For the past eight months, I’ve worked on digital
              experiences across the Coach and Kate Spade brands, using design
              to solve real problems and make technology easier for people to
              use.
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
        </div>
      </div>
      <div className="mx-auto mt-16 w-full max-w-xl">
        <h2 className="mb-8 text-center font-display text-3xl font-semibold">
          Let’s Connect
        </h2>
        <ContactForm />
      </div>
    </article>
  );
}
