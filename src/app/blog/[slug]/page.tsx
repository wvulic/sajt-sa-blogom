import Link from "next/link";
import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import ShareButtons from "@/components/ShareButtons";
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
    <main>
      {/* Hero sekcija */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "66.67vh" }}
      >
        {/* Slika ili fallback pozadina */}
        {post.coverImage ? (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${post.coverImage})` }}
          />
        ) : (
          <div className="absolute inset-0 bg-neutral-800" />
        )}

        {/* Tamni overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Naslov */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <h1 className="text-white text-3xl md:text-5xl font-bold tracking-tight text-center leading-tight max-w-3xl">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Sadržaj posta */}
      <div className="max-w-2xl mx-auto px-6 pt-12 pb-16">
        <Link
          href="/blog"
          className="text-sm text-[var(--muted)] hover:opacity-60 transition-opacity mb-10 inline-block"
        >
          ← Blog
        </Link>
        <article>
          <header className="mb-10">
            <time className="text-sm text-[var(--muted)]">{formatted}</time>
          </header>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
          <ShareButtons title={post.title} />
        </article>
      </div>
    </main>
  );
}
