import Link from "next/link";
import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-cream">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. Product designer in{" "}
          {site.location}.
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
          <Link href="/work" className="hover:text-primary">
            Work
          </Link>
          <Link href="/about" className="hover:text-primary">
            About
          </Link>
          <a
            href={site.linkedin}
            className="hover:text-primary"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <Link href="/contact" className="hover:text-primary">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
