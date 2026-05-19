import { getAllPostsMeta } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const posts = getAllPostsMeta();

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight mb-10">Blog</h1>
      {posts.length === 0 ? (
        <p className="text-[var(--muted)]">Nema još postova.</p>
      ) : (
        <div>
          {posts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      )}
    </main>
  );
}
