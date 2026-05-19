import Link from "next/link";
import { getAllPostsMeta } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function HomePage() {
  const recentPosts = getAllPostsMeta().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="hero-section relative h-screen overflow-hidden flex flex-col">
        {/* Background */}
        <div className="hero-bg absolute inset-0" />

        {/* Main content */}
        <div className="relative flex-1 max-w-7xl mx-auto w-full px-8 flex items-center">
          {/* Large heading — left */}
          <h1 className="hero-heading font-bold leading-none tracking-tighter select-none">
            Pišem
            <br />
            da
            <br />
            mislim.
          </h1>

          {/* Subtitle — right, aligned to bottom of heading area */}
          <div className="absolute right-8 bottom-1/3 max-w-xs">
            <p className="text-lg leading-relaxed mb-6 text-[var(--foreground)]">
              Lični blog Vanje Palića.
              <br />
              Misli, zapažanja i teme
              <br />
              koje me interesuju.
            </p>
            <Link
              href="/blog"
              className="text-sm border-b border-[var(--foreground)] pb-0.5 hover:opacity-50 transition-opacity"
            >
              Čitaj blog
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative max-w-7xl mx-auto w-full px-8 pb-8 flex items-end justify-between">
          <span className="text-sm text-[var(--muted)] tracking-widest">Scroll</span>
          <span className="scroll-dot" />
        </div>
      </section>

      {/* Recent posts */}
      {recentPosts.length > 0 && (
        <section className="max-w-2xl mx-auto px-6 py-24">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--muted)] mb-8">
            Najnoviji postovi
          </h2>
          <div>
            {recentPosts.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/blog"
              className="text-sm underline underline-offset-4 hover:opacity-60 transition-opacity"
            >
              Svi postovi →
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
