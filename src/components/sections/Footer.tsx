import { ArrowUp, Heart, Sparkle } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-amber-400/10 bg-[#080706] px-6 py-14 md:px-12 md:py-18 relative overflow-hidden"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-12">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5 font-serif text-sm font-semibold tracking-wide text-foreground">
              <span
                aria-hidden
                className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-400/20 text-amber-300 text-xs shadow-[0_0_12px_rgba(251,191,36,0.6)]"
              >
                🌻
              </span>
              <span>Crafted by Deepak &mdash; for the most Hard Working, Soft Hearted, Bholi Bhali Masoom Prachiiiee.</span>
            </div>

            <p className="max-w-[46ch] font-sans text-sm leading-relaxed text-zinc-400">
              Life ka koi bhi phase &mdash; result ki chinta mat karna, bas khush raho tum.
              Bhaad me jaaye sab kuch, you are forever worthy of every happiness. 🌻✨
            </p>

            <div className="flex items-center gap-2 pt-1 font-serif italic text-xs text-amber-300">
              <Sparkle size={13} weight="fill" className="text-amber-400" />
              <span>&ldquo;Prachi kabhi galti nhi karti &mdash; wo to perfect h guys 👉👈❤️&rdquo;</span>
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-4 sm:grid-cols-3">
            {[
              ["Prachi", "Sabse Unique 🌸"],
              ["Personality", "Apni Dhun Ki Malik 👑"],
              ["Bond", "Besties Forever 💛"],
              ["Poem", "7 Bands Dedicated 📜"],
              ["100 Reasons", "10/10 + 1 Bonus 🎀"],
              ["Deepak's Rule", "Zero Blame Ever 👉👈"],
            ].map(([name, note]) => (
              <div
                key={name}
                className="group flex flex-col gap-1 select-none"
              >
                <span className="font-serif text-[14px] font-medium text-foreground transition-colors group-hover:text-amber-300">
                  {name}
                </span>
                <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                  {note}
                </span>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-amber-400/10 pt-6 font-sans text-[11px] uppercase tracking-[0.25em] text-amber-200/60 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <span>SUNFLOWER GARDEN &bull; JARDIN SOLAIRE</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="text-amber-300/80">FOR PRACHIIIEE</span>
          </div>

          <a
            href="#sanctuary"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-amber-400/20 bg-amber-400/5 px-4 py-1.5 text-[10px] tracking-widest text-amber-200 transition-all hover:bg-amber-400/15"
          >
            <span>Back to Dawn</span>
            <ArrowUp size={11} weight="bold" className="transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
