import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid w-full max-w-5xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-8">
      <div>
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Let’s connect
        </h1>
        <p className="mt-4 text-muted-foreground">
          Tell me about a role, a collaboration, or a question. I read every
          note.
        </p>
        <p className="mt-6 text-sm text-muted-foreground">
          Prefer LinkedIn?{" "}
          <a
            href={site.linkedin}
            className="font-medium text-primary underline-offset-4 hover:underline"
            rel="noreferrer"
            target="_blank"
          >
            Send a message there
          </a>
          .
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
