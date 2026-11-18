import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-xl px-4 py-16 sm:px-6">
      <h1 className="mb-8 text-center font-display text-3xl font-semibold sm:text-4xl">
        Let’s Connect
      </h1>
      <ContactForm />
    </div>
  );
}
