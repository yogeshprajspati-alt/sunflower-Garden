"use client";

import { useState, useEffect, useMemo } from "react";
import { PRACHI_100_THINGS, ReasonItem } from "@/lib/prachi100";
import { X, MagnifyingGlass, Sparkle, Heart, Crown, ShieldCheck } from "@phosphor-icons/react";

interface Prachi100ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type CategoryFilter = "all" | "cute" | "savage" | "caring" | "special";

const CATEGORY_TABS: { id: CategoryFilter; label: string; icon: string }[] = [
  { id: "all", label: "All 100", icon: "✨" },
  { id: "cute", label: "Cute & Nakhre", icon: "🎀" },
  { id: "savage", label: "Savage & Queen", icon: "👑" },
  { id: "caring", label: "Caring & Sweet", icon: "🥹" },
  { id: "special", label: "Unique & Rare", icon: "🌟" },
];

const categoryBadgeStyles: Record<ReasonItem["category"], { bg: string; text: string; border: string; label: string }> = {
  cute: {
    bg: "bg-pink-500/10",
    text: "text-pink-300",
    border: "border-pink-500/25",
    label: "Cute & Nakhre 🎀",
  },
  savage: {
    bg: "bg-amber-500/10",
    text: "text-amber-300",
    border: "border-amber-500/25",
    label: "Savage & Queen 👑",
  },
  caring: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-300",
    border: "border-emerald-500/25",
    label: "Caring & Pure 🥹",
  },
  special: {
    bg: "bg-purple-500/10",
    text: "text-purple-300",
    border: "border-purple-500/25",
    label: "Unique & Rare ✨",
  },
};

export function Prachi100Modal({ isOpen, onClose }: Prachi100ModalProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Lock scroll when modal is open and handle Escape key
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

  const filteredItems = useMemo(() => {
    return PRACHI_100_THINGS.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.text.toLowerCase().includes(q) ||
        String(item.id).includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="prachi-100-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-fadeIn"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#080706]/85 backdrop-blur-2xl transition-opacity duration-300"
      />

      {/* Modal Dialog Window */}
      <div className="relative z-10 flex flex-col h-full max-h-[92vh] w-full max-w-5xl rounded-3xl border border-amber-400/25 bg-[#0e0b08]/95 shadow-[0_25px_80px_-15px_rgba(0,0,0,0.9),0_0_50px_-10px_rgba(251,191,36,0.18)] overflow-hidden">
        {/* Top Header */}
        <div className="relative border-b border-amber-400/15 bg-gradient-to-r from-amber-950/40 via-[#0e0b08] to-amber-950/40 px-6 py-5 sm:px-8 sm:py-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-300">
                <Sparkle size={12} weight="fill" className="text-amber-400 animate-pulse" />
                <span>The Complete Collection &bull; 100/100</span>
              </div>
              <h2
                id="prachi-100-title"
                className="mt-2 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground"
              >
                100 Things About <span className="gold-gradient-text italic">Prachi</span> 😭🎀❤️
              </h2>
              <p className="mt-1 font-sans text-xs sm:text-sm text-zinc-400">
                Deepak&apos;s personal unfiltered list &mdash; har ek baat 100% real, cute aur sach h!
              </p>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-400/20 bg-amber-400/5 text-zinc-400 hover:text-amber-200 hover:border-amber-400/50 hover:bg-amber-400/15 transition-all duration-200 active:scale-95"
              aria-label="Close modal"
            >
              <X size={18} weight="bold" />
            </button>
          </div>

          {/* Search bar & Category filters */}
          <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <MagnifyingGlass
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-400/60"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search reasons (e.g. smile, gussa, cuteness, queen)..."
                className="w-full rounded-full border border-amber-400/20 bg-black/40 pl-9 pr-4 py-2 font-sans text-xs sm:text-sm text-amber-100 placeholder:text-zinc-500 focus:border-amber-400/60 focus:outline-none focus:ring-1 focus:ring-amber-400/50 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-amber-200"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Categories filter pills */}
            <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              {CATEGORY_TABS.map((tab) => {
                const count =
                  tab.id === "all"
                    ? PRACHI_100_THINGS.length
                    : PRACHI_100_THINGS.filter((i) => i.category === tab.id).length;
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveCategory(tab.id)}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-sans text-[11px] font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-amber-400/25 border border-amber-300/50 text-amber-200 shadow-[0_0_15px_rgba(251,191,36,0.25)]"
                        : "bg-white/5 border border-white/10 text-zinc-400 hover:border-amber-400/20 hover:text-zinc-200"
                    }`}
                  >
                    <span>{tab.icon}</span>
                    <span>{tab.label}</span>
                    <span className="text-[10px] opacity-60">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Scrollable Reasons List */}
        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 space-y-3 custom-scrollbar">
          {filteredItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center text-zinc-400">
              <span className="text-3xl mb-2">🔍</span>
              <p className="font-serif italic text-base text-amber-200/90">
                No matching reason found for &ldquo;{searchQuery}&rdquo;
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="mt-3 text-xs uppercase tracking-wider text-amber-300 underline underline-offset-4"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredItems.map((item) => {
                const badge = categoryBadgeStyles[item.category];
                const isFinalOne = item.id === 100;

                return (
                  <div
                    key={item.id}
                    className={`group relative flex flex-col justify-between rounded-2xl border p-4 sm:p-5 transition-all duration-200 hover:scale-[1.01] ${
                      isFinalOne
                        ? "md:col-span-2 border-amber-400/60 bg-gradient-to-r from-amber-500/15 via-amber-400/10 to-amber-500/15 shadow-[0_0_35px_rgba(251,191,36,0.2)]"
                        : "border-amber-400/15 bg-white/[0.03] hover:border-amber-400/35 hover:bg-white/[0.05]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <span
                        className={`font-mono text-xs font-bold tracking-wider ${
                          isFinalOne
                            ? "gold-gradient-text text-sm"
                            : "text-amber-400/80"
                        }`}
                      >
                        #{String(item.id).padStart(2, "0")}
                      </span>

                      <span
                        className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 font-sans text-[10px] font-medium tracking-wide ${badge.bg} ${badge.text} ${badge.border}`}
                      >
                        {badge.label}
                      </span>
                    </div>

                    <p
                      className={`font-serif leading-relaxed ${
                        isFinalOne
                          ? "text-base sm:text-lg font-medium text-amber-100"
                          : "text-sm sm:text-[15px] text-zinc-200 group-hover:text-amber-50"
                      }`}
                    >
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Bottom Bar */}
        <div className="border-t border-amber-400/15 bg-[#0a0806] px-6 py-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-sans text-xs text-zinc-400">
            <Heart size={14} weight="fill" className="text-amber-400" />
            <span>Dedicated with all love by Deepak to Prachi 🎀🌻</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] text-amber-400/70">
              Showing {filteredItems.length} of {PRACHI_100_THINGS.length} reasons
            </span>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-amber-400/30 bg-amber-400/15 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-amber-200 hover:bg-amber-400/25 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

