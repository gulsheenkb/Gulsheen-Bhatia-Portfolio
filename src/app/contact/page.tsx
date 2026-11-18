import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid w-full max-w-3xl gap-8 px-4 py-16 sm:grid-cols-2 sm:gap-16 sm:px-6">
      <h1 className="font-display text-3xl font-semibold sm:pt-2 sm:text-4xl">
        Let’s Connect
      </h1>
      <ContactForm />
    </div>
  );
}
