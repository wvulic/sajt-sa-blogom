import Link from "next/link";
import { getAllPostsMeta } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function HomePage() {
  const recentPosts = getAllPostsMeta().slice(0, 3);

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <section className="mb-16">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Vanja Palić</h1>
        <p className="text-[var(--muted)] text-lg leading-relaxed">
          Dobrodošli na moj blog. Ovde pišem o temama koje me interesuju —
          bez strogog formata i rasporeda, samo iskren tekst.
        </p>
      </section>

      {recentPosts.length > 0 && (
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
            Najnoviji postovi
          </h2>
          <div>
            {recentPosts.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/blog"
              className="text-sm underline underline-offset-4 hover:opacity-60 transition-opacity"
            >
              Svi postovi →
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}
