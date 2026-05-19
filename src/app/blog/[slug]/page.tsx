import Link from "next/link";
import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return { title: post.title };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  const formatted = new Date(post.date).toLocaleDateString("sr-RS", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="max-w-2xl mx-auto px-6 pt-32 pb-16">
      <Link
        href="/blog"
        className="text-sm text-[var(--muted)] hover:opacity-60 transition-opacity mb-10 inline-block"
      >
        ← Blog
      </Link>
      <article>
        <header className="mb-10">
          <time className="text-sm text-[var(--muted)]">{formatted}</time>
          <h1 className="text-3xl font-bold tracking-tight mt-2">{post.title}</h1>
        </header>
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </main>
  );
}
