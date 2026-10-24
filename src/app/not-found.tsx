import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#080706] px-6 text-center text-foreground">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-400/15 border border-amber-300/30 text-3xl shadow-[0_0_25px_rgba(251,191,36,0.5)] mb-6">
        🌻
      </div>
      <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-amber-300 mb-2">
        The Sunflower Garden
      </span>
      <h1 className="font-serif text-4xl font-semibold md:text-5xl text-foreground mb-4">
        Ye Rasta Garden Me Nahi Jata
      </h1>
      <p className="max-w-[420px] font-sans text-sm text-zinc-400 mb-8 leading-relaxed">
        Lagta hai URL me koi galti ho gayi. Sunflower Garden dekhne ke liye seedha main page par chaliye.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/15 px-6 py-3 font-sans text-xs uppercase tracking-[0.22em] text-amber-200 transition-all hover:bg-amber-400/25 shadow-[0_0_20px_-5px_rgba(251,191,36,0.3)]"
      >
        <ArrowLeft size={14} weight="bold" />
        <span>Garden Par Wapas Chalein</span>
      </Link>
    </div>
  );
}

