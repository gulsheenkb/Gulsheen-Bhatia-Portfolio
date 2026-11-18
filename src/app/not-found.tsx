import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] w-full max-w-xl flex-col items-start justify-center gap-4 px-4 py-20 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        404
      </p>
      <h1 className="font-display text-4xl font-semibold tracking-tight">
        This page isn’t here
      </h1>
      <p className="text-muted-foreground">
        The link may be old, or the project moved. Head back to work or home.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button asChild>
          <Link href="/">Home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/work">Work</Link>
        </Button>
      </div>
    </div>
  );
}
