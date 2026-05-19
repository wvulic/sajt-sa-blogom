import Link from "next/link";
import type { PostMeta } from "@/types/post";

export default function PostCard({ title, date, excerpt, slug }: PostMeta) {
  const formatted = new Date(date).toLocaleDateString("sr-RS", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="py-6 border-b border-[var(--border)] last:border-0">
      <time className="text-sm text-[var(--muted)]">{formatted}</time>
      <h2 className="mt-1 mb-2 text-xl font-semibold leading-snug">
        <Link href={`/blog/${slug}`} className="hover:opacity-60 transition-opacity">
          {title}
        </Link>
      </h2>
      <p className="text-[var(--muted)] text-sm leading-relaxed">{excerpt}</p>
    </article>
  );
}
