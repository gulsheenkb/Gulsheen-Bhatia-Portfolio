import { PortfolioImage as Image } from "@/components/portfolio-image";
import Link from "next/link";
import type { CaseBlock, CaseImage, Project } from "@/lib/content";
import { getNextProject } from "@/lib/content";

function Shot({
  image,
  className = "",
}: {
  image: CaseImage;
  className?: string;
}) {
  return (
    <Image
      src={image.src}
      alt={image.alt || ""}
      width={image.width}
      height={image.height}
      className={`h-auto w-full ${className}`}
      sizes="(max-width: 1100px) 100vw, 1100px"
    />
  );
}

function Copy({
  heading,
  paragraphs,
  items,
}: {
  heading?: string;
  paragraphs?: string[];
  items?: { title?: string; body: string }[];
}) {
  return (
    <div className="max-w-[46rem] space-y-3 text-[15px] leading-relaxed text-[#2b2b2b] sm:text-base">
      {heading ? (
        <h2 className="font-display text-lg font-semibold sm:text-xl">
          {heading}
        </h2>
      ) : null}
      {items?.map((item) => (
        <p key={`${item.title ?? ""}${item.body.slice(0, 32)}`}>
          {item.title ? (
            <strong className="font-semibold">{item.title}</strong>
          ) : null}
          {item.title && item.body ? " " : null}
          {item.body}
        </p>
      ))}
      {paragraphs?.map((p) => (
        <p key={p.slice(0, 48)}>{p}</p>
      ))}
    </div>
  );
}

function BlockView({ block }: { block: CaseBlock }) {
  if (block.type === "prose") {
    return <Copy {...block} />;
  }

  if (block.type === "quote") {
    return (
      <blockquote className="border-l-4 border-[#2b2b2b] bg-[#f8ece8] px-5 py-4 text-[15px] leading-relaxed text-[#2b2b2b] sm:text-base">
        {block.text}
      </blockquote>
    );
  }

  if (block.type === "image") {
    const align =
      block.align === "center"
        ? "mx-auto"
        : block.align === "right"
          ? "ml-auto"
          : "";
    const width = block.maxWidth ? { maxWidth: block.maxWidth } : undefined;
    return (
      <div className={align} style={width}>
        <Shot image={block.image} />
      </div>
    );
  }

  if (block.type === "row") {
    const cols =
      block.images.length >= 3
        ? "sm:grid-cols-3"
        : block.images.length === 2
          ? "sm:grid-cols-2"
          : "grid-cols-1";
    return (
      <div className={`grid grid-cols-1 items-center gap-4 ${cols} sm:gap-6`}>
        {block.images.map((image) => (
          <Shot key={image.src} image={image} />
        ))}
      </div>
    );
  }

  if (block.type === "split") {
    const copy = <Copy {...block.copy} />;
    const pics = (
      <div
        className={
          block.images.length > 1
            ? "grid grid-cols-2 items-start gap-3 sm:gap-4"
            : ""
        }
      >
        {block.images.map((image) => (
          <Shot key={image.src} image={image} />
        ))}
      </div>
    );
    return (
      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-10">
        {block.copySide === "right" ? (
          <>
            {pics}
            {copy}
          </>
        ) : (
          <>
            {copy}
            {pics}
          </>
        )}
      </div>
    );
  }

  if (block.type === "trio") {
    return (
      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
        <Copy {...block.left} />
        <div className="flex justify-center">
          {block.center.map((image) => (
            <Shot key={image.src} image={image} className="max-w-[220px]" />
          ))}
        </div>
        <div className="space-y-4">
          <Copy {...block.right} />
          {block.rightImages?.map((image) => (
            <Shot key={image.src} image={image} />
          ))}
        </div>
      </div>
    );
  }

  if (block.type === "grid") {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {block.images.map((image) => (
          <Shot key={image.src} image={image} />
        ))}
      </div>
    );
  }

  return null;
}

export function CaseStudy({ project }: { project: Project }) {
  const next = getNextProject(project.slug);

  return (
    <article>
      <header className="bg-[#f7ebe8] px-4 py-12 text-center sm:py-16">
        <h1 className="font-display text-2xl font-medium tracking-[0.22em] text-[#1b1b1b] sm:text-3xl md:text-4xl">
          {project.pageTitle}
        </h1>
      </header>
      <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-10 px-4 py-12 sm:gap-14 sm:px-8 sm:py-16">
        {project.blocks.map((block, i) => (
          <BlockView key={i} block={block} />
        ))}
      </div>
      {next ? (
        <nav className="border-t border-border px-4 py-10 sm:px-8">
          <Link
            href={next.href}
            className="mx-auto flex w-full max-w-[1100px] items-center justify-between gap-6 rounded-2xl bg-[#f7ebe8] px-5 py-5 transition hover:bg-[#f3e0dc] sm:px-8"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Next project
              </p>
              <p className="mt-1 font-display text-xl font-semibold sm:text-2xl">
                {next.cardTitle ?? next.title}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {next.cardBlurb ?? next.subtitle}
              </p>
            </div>
            <span className="shrink-0 text-2xl" aria-hidden>
              →
            </span>
          </Link>
        </nav>
      ) : null}
    </article>
  );
}
