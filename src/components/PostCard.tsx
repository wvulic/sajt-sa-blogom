import Link from "next/link";
import type { PostMeta } from "@/types/post";

export default function PostCard({ title, date, excerpt, slug }: PostMeta) {
  const d = new Date(date);
  const day = d.getDate().toString().padStart(2, "0");
  const month = d.toLocaleDateString("sr-RS", { month: "long" });
  const year = d.getFullYear();

  return (
    <Link
      href={`/blog/${slug}`}
      className="group block border border-[var(--border)] p-8 hover:border-[var(--foreground)] transition-colors duration-300"
    >
      <div className="flex flex-col min-h-52">
        {/* Large red day number */}
        <div
          className="text-[clamp(64px,8vw,110px)] font-bold leading-none tracking-tighter"
          style={{ color: "var(--accent)" }}
        >
          {day}
        </div>

        <div className="flex-1 min-h-8" />

        {/* Date label */}
        <p className="text-sm text-[var(--muted)] mb-3">
          {month} {year}
        </p>

        {/* Title */}
        <h2 className="text-base font-semibold leading-snug group-hover:opacity-60 transition-opacity">
          {title}
        </h2>

        {/* Excerpt */}
        <p className="text-sm text-[var(--muted)] mt-2 leading-relaxed line-clamp-2">
          {excerpt}
        </p>
      </div>
    </Link>
  );
}
