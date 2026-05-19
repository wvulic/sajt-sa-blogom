import Link from "next/link";
import { getAllPostsMeta } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function HomePage() {
  const recentPosts = getAllPostsMeta().slice(0, 4);
  const leftPosts = recentPosts.filter((_, i) => i % 2 === 0);
  const rightPosts = recentPosts.filter((_, i) => i % 2 === 1);

  return (
    <>
      {/* Hero */}
      <section className="hero-section relative h-screen overflow-hidden flex flex-col">
        {/* Video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover object-top brightness-75"
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Main content */}
        <div className="relative flex-1 max-w-7xl mx-auto w-full px-8 flex items-center">
          {/* Large heading — left */}
          <h1 className="hero-heading font-bold leading-none tracking-tighter select-none text-white">
            Pišem
            <br />
            da
            <br />
            mislim.
          </h1>

          {/* Subtitle — right, aligned to bottom of heading area */}
          <div className="absolute right-8 bottom-1/3 max-w-xs">
            <p className="text-lg leading-relaxed mb-6 text-white/90">
              Lični blog Vanje Palića.
              <br />
              Misli, zapažanja i teme
              <br />
              koje me interesuju.
            </p>
            <Link
              href="/blog"
              className="text-sm text-white border-b border-white/70 pb-0.5 hover:opacity-50 transition-opacity"
            >
              Čitaj blog
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative max-w-7xl mx-auto w-full px-8 pb-8 flex items-end justify-between">
          <span className="text-sm text-white/60 tracking-widest">Scroll</span>
          <span className="scroll-dot" />
        </div>
      </section>

      {/* Recent posts — editorial grid */}
      {recentPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-8 py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 lg:gap-24 items-start">

            {/* Left: intro text */}
            <div className="lg:pt-4">
              <p className="text-xl leading-relaxed mb-8 max-w-sm">
                Pišem bez strogog rasporeda — kada imam nešto da kažem.
                Teme variraju, ton ostaje isti.
              </p>
              <Link
                href="/blog"
                className="text-sm border-b border-[var(--foreground)] pb-0.5 hover:opacity-50 transition-opacity"
              >
                Svi postovi
              </Link>
            </div>

            {/* Right: staggered 2-col card grid */}
            <div className="grid grid-cols-2 gap-0">
              {/* Left column */}
              <div className="flex flex-col">
                {leftPosts.map((post) => (
                  <PostCard key={post.slug} {...post} />
                ))}
              </div>
              {/* Right column — offset down */}
              <div className="flex flex-col mt-16">
                {rightPosts.map((post) => (
                  <PostCard key={post.slug} {...post} />
                ))}
              </div>
            </div>

          </div>
        </section>
      )}
    </>
  );
}
