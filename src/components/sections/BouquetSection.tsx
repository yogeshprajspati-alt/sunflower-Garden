"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { BOUQUET_BEATS, BOUQUET_FRAME_COUNT, bouquetFramePath } from "@/lib/bouquet";
import { Sparkle, ArrowDown } from "@phosphor-icons/react";
import { PrachiPoemModal } from "@/components/ui/PrachiPoemModal";

export function BouquetSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const h2TitleRef = useRef<HTMLHeadingElement | null>(null);
  const outroRef = useRef<HTMLDivElement | null>(null);
  const progressFillRef = useRef<HTMLDivElement | null>(null);
  const seqReadoutRef = useRef<HTMLSpanElement | null>(null);

  const framesRef = useRef<HTMLImageElement[]>([]);
  const tickingRef = useRef(false);
  const loadedRef = useRef(false);
  const lastFrameRef = useRef(-1);
  const prevVisibleIdsRef = useRef("");

  const [loadProgress, setLoadProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [visibleBeats, setVisibleBeats] = useState<Set<string>>(new Set());
  const [isPoemOpen, setIsPoemOpen] = useState(false);

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const imgs = framesRef.current;
    if (!imgs || imgs.length === 0) return;

    // Find requested frame or the closest loaded frame so the screen NEVER freezes or blanks
    let img = imgs[index];
    if (!img || !img.complete || !img.naturalWidth) {
      for (let offset = 1; offset < imgs.length; offset++) {
        const prev = imgs[index - offset];
        if (prev && prev.complete && prev.naturalWidth) {
          img = prev;
          break;
        }
        const next = imgs[index + offset];
        if (next && next.complete && next.naturalWidth) {
          img = next;
          break;
        }
      }
    }
    if (!img || !img.complete || !img.naturalWidth) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = cw / ch;

    let drawW: number;
    let drawH: number;

    // "contain" sizing: ensure 100% of the image is shown without ANY cropping
    if (canvasRatio > imgRatio) {
      drawH = ch;
      drawW = ch * imgRatio;
    } else {
      drawW = cw;
      drawH = cw / imgRatio;
    }

    const drawX = (cw - drawW) / 2;
    const drawY = (ch - drawH) / 2;

    ctx.clearRect(0, 0, cw, ch);

    // If screen is wider, softly draw ambient cover in the background for atmosphere
    if (canvasRatio > imgRatio) {
      const coverW = cw;
      const coverH = cw / imgRatio;
      const coverX = 0;
      const coverY = (ch - coverH) / 2;
      ctx.save();
      ctx.globalAlpha = 0.15;
      ctx.drawImage(img, coverX, coverY, coverW, coverH);
      ctx.restore();
    }

    // Draw the FULL, completely uncropped foreground image with subtle ambient shadow
    ctx.save();
    ctx.shadowColor = "rgba(0, 0, 0, 0.75)";
    ctx.shadowBlur = 30;
    ctx.drawImage(img, drawX, drawY, drawW, drawH);
    ctx.restore();
  }, []);

  useEffect(() => {
    let cancelled = false;
    let loadedCount = 0;
    const imgs: HTMLImageElement[] = [];

    for (let i = 1; i <= BOUQUET_FRAME_COUNT; i++) {
      const img = new Image();
      img.src = bouquetFramePath(i);
      img.onload = () => {
        if (cancelled) return;
        loadedCount++;
        setLoadProgress(loadedCount / BOUQUET_FRAME_COUNT);
        if (loadedCount === 1) {
          drawFrame(0);
          setLoaded(true);
        }
        if (loadedCount >= 10) {
          loadedRef.current = true;
          setLoaded(true);
        }
        if (loadedCount === BOUQUET_FRAME_COUNT) {
          loadedRef.current = true;
          setLoaded(true);
        }
        if (Math.abs(lastFrameRef.current - (i - 1)) <= 2) {
          drawFrame(lastFrameRef.current);
        }
      };
      img.onerror = () => {
        if (cancelled) return;
        loadedCount++;
        setLoadProgress(loadedCount / BOUQUET_FRAME_COUNT);
        if (loadedCount >= 10) {
          loadedRef.current = true;
          setLoaded(true);
        }
      };
      imgs.push(img);
    }
    framesRef.current = imgs;

    return () => {
      cancelled = true;
    };
  }, [drawFrame]);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    drawFrame(lastFrameRef.current >= 0 ? lastFrameRef.current : 0);
  }, [drawFrame]);

  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [resizeCanvas]);

  useEffect(() => {
    if (!loaded) return;
    drawFrame(0);
    lastFrameRef.current = 0;
  }, [loaded, drawFrame]);

  useEffect(() => {
    const handleScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;

      requestAnimationFrame(() => {
        tickingRef.current = false;
        const section = sectionRef.current;
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const scrollable = section.offsetHeight - window.innerHeight;
        const progress =
          scrollable <= 0
            ? 0
            : Math.min(1, Math.max(0, -rect.top / scrollable));

        // Complete all 200 frames across 0% to 75% of scroll travel.
        // The remaining 25% holds the completed 200th frame firmly pinned so it NEVER moves up prematurely!
        const frameProgress = Math.min(1, Math.max(0, progress / 0.75));
        const frameIndex = Math.min(
          BOUQUET_FRAME_COUNT - 1,
          Math.floor(frameProgress * BOUQUET_FRAME_COUNT),
        );
        if (frameIndex !== lastFrameRef.current) {
          lastFrameRef.current = frameIndex;
          drawFrame(frameIndex);
        }

        if (h2TitleRef.current) {
          const op = Math.min(1, Math.max(0, (progress - 0.45) / 0.15));
          h2TitleRef.current.style.opacity = String(op);
          h2TitleRef.current.style.transform = `translateY(${(1 - op) * 10}px)`;
        }

        if (outroRef.current) {
          const op = Math.min(1, Math.max(0, (progress - 0.88) / 0.08));
          outroRef.current.style.opacity = String(op);
          outroRef.current.style.transform = `translateY(${(1 - op) * 14}px)`;
        }

        if (progressFillRef.current) {
          progressFillRef.current.style.transform = `scaleX(${progress})`;
        }

        if (seqReadoutRef.current) {
          const n = Math.min(BOUQUET_FRAME_COUNT, frameIndex + 1);
          seqReadoutRef.current.textContent =
            `BOUQUET ${String(n).padStart(3, "0")} / ${BOUQUET_FRAME_COUNT}`;
        }

        const newVisible = new Set<string>();
        for (const b of BOUQUET_BEATS) {
          if (progress >= b.show && progress <= b.hide) newVisible.add(b.id);
        }
        const newIds = [...newVisible].sort().join(",");
        if (newIds !== prevVisibleIdsRef.current) {
          prevVisibleIdsRef.current = newIds;
          setVisibleBeats(newVisible);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [drawFrame]);

  return (
    <section
      ref={sectionRef}
      id="bouquet"
      className="scroll-animation relative border-t border-amber-400/10 bg-background"
    >
      <div
        className="sticky top-0 h-screen h-[100dvh] min-h-[100dvh] w-full overflow-hidden bg-background"
        style={{ willChange: "transform", transform: "translateZ(0)" }}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          style={{ willChange: "contents", transform: "translateZ(0)" }}
        />

        {/* Minimal edge fades to keep navbar and bottom progress clear without darkening the image */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#080706]/75 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080706]/75 to-transparent z-10" />

        {/* Top Badges */}
        <div className="pointer-events-none absolute left-6 top-20 z-10 flex items-center gap-3 md:left-12 md:top-24">
          <span className="flex h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.9)]" />
          <span className="font-sans text-[11px] uppercase tracking-[0.32em] text-amber-200/70">
            Chapter IV &mdash; Appreciation & Warmth
          </span>
        </div>

        <div className="pointer-events-none absolute right-6 top-20 z-10 flex items-center gap-3 md:right-12 md:top-24">
          <span
            ref={seqReadoutRef}
            className="font-sans text-[11px] uppercase tracking-[0.22em] text-amber-300 font-medium"
          >
            BOUQUET 001 / {BOUQUET_FRAME_COUNT}
          </span>
          <Sparkle size={13} weight="fill" className="text-amber-400 animate-pulse" />
        </div>

        {/* Top-Right Headline Typography on Desktop */}
        <div className="pointer-events-none absolute right-6 top-28 z-10 flex max-w-[440px] flex-col items-end gap-3 text-right md:right-12 xl:right-16 md:top-32">
          <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-amber-300/80">
            Observation &bull; 04 &bull; Ek Nazm
          </span>
          <h2
            ref={h2TitleRef}
            className="font-serif text-3xl font-semibold leading-[0.98] tracking-tight text-foreground md:text-5xl lg:text-6xl"
            style={{ opacity: 0, transition: "opacity 240ms ease-out, transform 240ms ease-out" }}
          >
            Sunflower &
            <br />
            <span className="gold-gradient-text italic font-normal">Ek Khas Nazm.</span>
          </h2>
          <p className="font-sans text-xs leading-relaxed text-zinc-400 md:text-sm">
            Phool toh khilte hain har daali, par tumhari baat hai sabse niraali, Prachi 🌻❤️
          </p>

          {/* Deepak's sweet note */}
          <div className="pointer-events-auto rounded-2xl border border-amber-400/25 bg-[#0c0a07]/85 p-3.5 backdrop-blur-md text-right max-w-[360px] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.7)]">
            <p className="font-serif italic text-[12px] sm:text-[13px] text-amber-100/90 leading-relaxed">
              &ldquo;dekho me poet to nhi hu, to isss imperfect ladke ki imperfect poem h for the miss perfect kamiyan ho sakti h to ...... 🙈❤️&rdquo;
            </p>
            <span className="font-sans text-[10px] uppercase tracking-wider text-amber-400/80 block mt-1.5 font-medium">
              &mdash; Deepak&apos;s note
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsPoemOpen(true)}
            className="pointer-events-auto mt-1 inline-flex items-center gap-2 rounded-full border border-amber-400/35 bg-amber-400/15 px-4 py-2 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-200 backdrop-blur-md transition-all duration-300 hover:border-amber-300 hover:bg-amber-400/25 hover:shadow-[0_0_20px_rgba(251,191,36,0.35)] active:scale-95"
          >
            <Sparkle size={13} weight="fill" className="text-amber-400 animate-pulse" />
            <span>Puri Poem Padhein (All 7 Bands) 📜✨</span>
          </button>
        </div>

        {/* Desktop Beat Cards (left side) */}
        {BOUQUET_BEATS.map((b, i) => {
          const visible = visibleBeats.has(b.id);
          const position =
            i === 0
              ? "top-[18%] left-6 lg:left-12 xl:left-16"
              : i === 1
              ? "top-1/2 -translate-y-1/2 left-6 lg:left-12 xl:left-16"
              : i === 2
              ? "top-[48%] -translate-y-1/2 left-6 lg:left-12 xl:left-16"
              : "bottom-24 left-6 lg:left-12 xl:left-16";
          return (
            <div
              key={b.id}
              className={`pointer-events-none absolute ${position} z-20 hidden w-[400px] xl:w-[440px] max-w-[34vw] md:block`}
            >
              <figure
                className={`card-surface pointer-events-auto p-6 xl:p-7 rounded-3xl border border-amber-300/20 bg-[#0c0a07]/85 backdrop-blur-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.85),0_0_30px_-5px_rgba(251,191,36,0.12)] ${
                  visible ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-sans text-[10px] xl:text-[11px] font-medium uppercase tracking-[0.22em] text-amber-300">
                    {b.badge}
                  </span>
                  <div className="h-1.5 w-1.5 rounded-full bg-amber-400/80 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                </div>
                <blockquote className="whitespace-pre-line font-serif text-[15px] xl:text-[16px] font-normal leading-[1.7] tracking-wide text-amber-50/95 italic">
                  &ldquo;{b.quote}&rdquo;
                </blockquote>
                <p className="font-sans text-[12px] xl:text-[13px] leading-relaxed text-zinc-400 pt-2.5">
                  {b.subnote}
                </p>
                <div className="h-px bg-white/10 mt-3.5 mb-3" />
                <figcaption className="flex items-center justify-between">
                  <span className="font-sans text-[11px] tracking-wider uppercase text-amber-300/80 font-medium">
                    {b.speaker}
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsPoemOpen(true)}
                    className="inline-flex items-center gap-1 font-sans text-[10px] uppercase tracking-[0.18em] text-amber-300/90 hover:text-amber-100 transition-colors"
                  >
                    <span>Full Nazm</span>
                    <Sparkle size={10} weight="fill" />
                  </button>
                </figcaption>
              </figure>
            </div>
          );
        })}

        {/* Mobile Beat Cards (bottom position) */}
        <div className="pointer-events-none absolute inset-x-4 bottom-20 z-20 flex flex-col gap-3 md:hidden">
          {BOUQUET_BEATS.map((b) => {
            const visible = visibleBeats.has(b.id);
            if (!visible) return null;
            return (
              <figure
                key={b.id}
                className="card-surface pointer-events-auto p-5 rounded-2xl border border-amber-300/20 bg-[#0c0a07]/90 backdrop-blur-2xl transition-all duration-500 ease-out translate-y-0 opacity-100 scale-100 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-sans font-medium uppercase tracking-wider text-amber-300">
                    {b.badge}
                  </span>
                  <div className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
                </div>
                <blockquote className="whitespace-pre-line font-serif text-[14px] font-normal leading-relaxed text-amber-50/95 italic">
                  &ldquo;{b.quote}&rdquo;
                </blockquote>
                <p className="font-sans text-[11px] text-zinc-400 pt-1.5">
                  {b.subnote}
                </p>
                <div className="h-px bg-white/10 mt-2.5 mb-2" />
                <figcaption className="flex items-center justify-between">
                  <span className="font-sans text-[10px] uppercase tracking-wider text-amber-300/80">
                    {b.speaker}
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsPoemOpen(true)}
                    className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-amber-300 underline underline-offset-2"
                  >
                    <span>Open Full Poem</span>
                    <Sparkle size={10} weight="fill" />
                  </button>
                </figcaption>
              </figure>
            );
          })}
        </div>

        {/* Outro Transition Pill */}
        <div
          ref={outroRef}
          className="pointer-events-none absolute bottom-24 right-6 z-10 flex flex-col items-end gap-3 md:bottom-28 md:right-12 xl:right-16"
          style={{ opacity: 0, transition: "opacity 80ms linear, transform 80ms linear" }}
        >
          <span className="font-serif italic text-xs tracking-wide text-amber-300">
            Next &mdash; The Starlit Bloom
          </span>
          <a
            href="#starlight"
            className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-5 py-2.5 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-amber-200 backdrop-blur-md transition-all duration-300 hover:border-amber-300/50 hover:bg-amber-400/20 active:translate-y-[1px] shadow-[0_0_20px_-5px_rgba(251,191,36,0.3)]"
          >
            <span>The Starlit Night</span>
            <ArrowDown size={13} weight="bold" />
          </a>
        </div>

        {/* Bottom Progress Bar */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10">
          <div className="mx-6 mb-3 h-0.5 bg-white/10 md:mx-12">
            <div
              ref={progressFillRef}
              className="h-full origin-left bg-gradient-to-r from-amber-400 to-amber-200"
              style={{ transform: "scaleX(0)", transition: "transform 80ms linear" }}
            />
          </div>
          <div className="mx-6 flex items-center justify-between pb-4 font-sans text-[10px] uppercase tracking-[0.28em] text-amber-200/60 md:mx-12">
            <span>CHAPTER 04 &bull; THE BOUQUET</span>
            <span className="hidden sm:inline">APPRECIATION &bull; PRACHII</span>
            <span>Scroll &darr;</span>
          </div>
        </div>

        {/* Loading overlay */}
        {!loaded && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-6 bg-[#080706] px-6">
            <div className="text-4xl animate-bounce">💐</div>
            <span className="font-serif italic text-amber-200 text-xl tracking-wide">
              Arranging The Golden Sunflowers...
            </span>
            <div className="h-1 w-64 rounded-full bg-white/10 overflow-hidden md:w-80">
              <div
                className="h-full bg-gradient-to-r from-amber-500 via-amber-300 to-amber-100 transition-[width] duration-300 ease-out"
                style={{ width: `${Math.round(loadProgress * 100)}%` }}
              />
            </div>
            <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-amber-300/70">
              {Math.round(loadProgress * 100)}% &bull; Tying The Ribbon
            </p>
          </div>
        )}
      </div>

      <PrachiPoemModal
        isOpen={isPoemOpen}
        onClose={() => setIsPoemOpen(false)}
      />
    </section>
  );
}
