"use client";

import { useEffect } from "react";
import { PRACHI_POEM_STANZAS } from "@/lib/bouquet";
import { X, Sparkle, Heart } from "@phosphor-icons/react";

interface PrachiPoemModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrachiPoemModal({ isOpen, onClose }: PrachiPoemModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="prachi-poem-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-fadeIn"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#080706]/85 backdrop-blur-2xl transition-opacity duration-300"
      />

      {/* Modal Dialog Window */}
      <div className="relative z-10 flex flex-col h-full max-h-[92vh] w-full max-w-4xl rounded-3xl border border-amber-400/30 bg-[#0d0a07]/95 shadow-[0_25px_80px_-15px_rgba(0,0,0,0.9),0_0_50px_-10px_rgba(251,191,36,0.22)] overflow-hidden">
        {/* Top Header */}
        <div className="relative border-b border-amber-400/15 bg-gradient-to-r from-amber-950/40 via-[#0d0a07] to-amber-950/40 px-6 py-6 sm:px-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-300">
                <Sparkle size={12} weight="fill" className="text-amber-400 animate-pulse" />
                <span>Special Poem &bull; Ek Khaas Nazm</span>
              </div>
              <h2
                id="prachi-poem-title"
                className="mt-2 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground"
              >
                Sunflower Aur <span className="gold-gradient-text italic">Prachi</span> 🌻❤️
              </h2>
              <p className="mt-1 font-sans text-xs sm:text-sm text-zinc-400">
                &ldquo;Par tumhari baat hi kuch aur hai, Prachi...&rdquo; &mdash; Deepak
              </p>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-400/20 bg-amber-400/5 text-zinc-400 hover:text-amber-200 hover:border-amber-400/50 hover:bg-amber-400/15 transition-all duration-200 active:scale-95"
              aria-label="Close poem modal"
            >
              <X size={18} weight="bold" />
            </button>
          </div>
        </div>

        {/* Scrollable Poem Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-10 space-y-6 custom-scrollbar">
          {/* Deepak's personal disclaimer note */}
          <div className="rounded-2xl border border-amber-400/25 bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 p-4 sm:p-5 text-center backdrop-blur-sm">
            <span className="text-2xl mb-1 inline-block">💌</span>
            <p className="font-serif italic text-sm sm:text-base text-amber-100/95 leading-relaxed max-w-lg mx-auto">
              &ldquo;dekho me poet to nhi hu, to isss imperfect ladke ki imperfect poem h for the miss perfect kamiyan ho sakti h to ...... 🙈❤️&rdquo;
            </p>
            <span className="mt-1.5 block font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-amber-300/80 font-medium">
              A beautiful note by Deepak
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PRACHI_POEM_STANZAS.map((stanza) => {
              const isHighlight = stanza.stanza === 4 || stanza.stanza === 7;
              return (
                <div
                  key={stanza.stanza}
                  className={`group relative rounded-2xl border p-5 sm:p-6 transition-all duration-300 hover:scale-[1.01] ${
                    isHighlight
                      ? "border-amber-400/50 bg-gradient-to-br from-amber-500/15 via-[#120e0a] to-amber-500/10 shadow-[0_0_25px_rgba(251,191,36,0.15)]"
                      : "border-amber-400/15 bg-white/[0.025] hover:border-amber-400/35 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3.5 border-b border-white/5 pb-2.5">
                    <span className="font-mono text-xs uppercase tracking-widest text-amber-400/80 font-semibold">
                      Band #{stanza.stanza}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/20 bg-amber-400/10 px-2.5 py-0.5 font-sans text-[10px] font-medium text-amber-200">
                      {stanza.badge}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    {stanza.lines.map((line, idx) => (
                      <p
                        key={idx}
                        className={`font-serif text-base sm:text-[17px] leading-[1.65] tracking-wide ${
                          isHighlight
                            ? "text-amber-100 font-medium italic"
                            : "text-zinc-200/95 italic group-hover:text-amber-50"
                        }`}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Emotional closing dedication card */}
          <div className="rounded-2xl border border-amber-400/30 bg-amber-500/10 p-6 sm:p-8 text-center backdrop-blur-md">
            <span className="text-3xl mb-2 inline-block">🌻✨</span>
            <p className="font-serif italic text-lg sm:text-xl text-amber-100 leading-relaxed max-w-xl mx-auto">
              &ldquo;Khushiyon se bhari rahe har subah, aur hansi se sajti rahe har ek raah. Sunflower ki tarah hamesha khilti raho, Prachi!&rdquo; 💛
            </p>
            <p className="mt-3 font-sans text-xs uppercase tracking-[0.25em] text-amber-300/80">
              with brain &mdash; Deepak
            </p>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="border-t border-amber-400/15 bg-[#0a0806] px-6 py-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-sans text-xs text-zinc-400">
            <Heart size={14} weight="fill" className="text-amber-400" />
            <span>7 Bands &bull; Deepak ki nazm just for Prachi</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-amber-400/30 bg-amber-400/15 px-5 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-amber-200 hover:bg-amber-400/25 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

