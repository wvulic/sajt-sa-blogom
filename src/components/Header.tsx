"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <div className="text-sm font-semibold tracking-widest uppercase">
          Vanja Palić
        </div>
        <nav className="flex items-center gap-10">
          <Link href="/" className="text-sm hover:opacity-50 transition-opacity">
            Početna
          </Link>
          <Link href="/blog" className="text-sm hover:opacity-50 transition-opacity">
            Blog
          </Link>
          <Link href="/o-meni" className="text-sm hover:opacity-50 transition-opacity">
            O meni
          </Link>
        </nav>
      </div>
    </header>
  );
}
