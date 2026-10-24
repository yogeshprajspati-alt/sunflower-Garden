"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Sparkle } from "@phosphor-icons/react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "border-b border-amber-400/15 bg-black/60 backdrop-blur-2xl py-3.5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-serif text-[15px] tracking-wide text-foreground transition-opacity hover:opacity-90"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-400/15 border border-amber-300/30 text-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.5)] transition-transform duration-300 group-hover:scale-110">
            🌻
          </span>
          <span className="font-medium tracking-tight">
            Amazing <span className="text-amber-300 font-semibold italic">Prachii</span>
          </span>
          <span className="hidden sm:inline-block text-[10px] font-sans uppercase tracking-[0.25em] text-amber-200/50 pl-1">
            &bull; Sunflower Garden
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <a
            href="#sanctuary"
            className="font-sans text-[11px] uppercase tracking-[0.25em] text-zinc-400 transition-colors hover:text-amber-300"
          >
            Sanctuary
          </a>
          <a
            href="#horizon"
            className="font-sans text-[11px] uppercase tracking-[0.25em] text-zinc-400 transition-colors hover:text-amber-300"
          >
            Horizon
          </a>
          <a
            href="#bloom"
            className="font-sans text-[11px] uppercase tracking-[0.25em] text-zinc-400 transition-colors hover:text-amber-300"
          >
            Bloom
          </a>
          <a
            href="#bouquet"
            className="font-sans text-[11px] uppercase tracking-[0.25em] text-zinc-400 transition-colors hover:text-amber-300"
          >
            Bouquet
          </a>
          <a
            href="#starlight"
            className="font-sans text-[11px] uppercase tracking-[0.25em] text-zinc-400 transition-colors hover:text-amber-300"
          >
            Starlight
          </a>
          <a
            href="#letter"
            className="font-sans text-[11px] uppercase tracking-[0.25em] text-amber-200/80 transition-colors hover:text-amber-300"
          >
            The Letter
          </a>
        </nav>

        <a
          href="#letter"
          className="group inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-4 py-2 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-amber-200 backdrop-blur-md transition-all duration-300 hover:border-amber-300/50 hover:bg-amber-400/20 active:translate-y-[1px] shadow-[0_0_20px_-5px_rgba(251,191,36,0.3)]"
        >
          <Sparkle size={13} weight="fill" className="text-amber-300 animate-pulse" />
          <span>The Letter</span>
          <ArrowUpRight
            size={12}
            weight="bold"
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </header>
  );
}
