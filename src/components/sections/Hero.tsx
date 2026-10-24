"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { DIALOGUES, FRAME_COUNT, HERO_TEXT_FADE_END, framePath } from "@/lib/hero";
import { Sparkle } from "@phosphor-icons/react";

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const heroTextRef = useRef<HTMLDivElement | null>(null);
  const bigLeftTextRef = useRef<HTMLDivElement | null>(null);
  const progressFillRef = useRef<HTMLDivElement | null>(null);
  const radianceReadoutRef = useRef<HTMLSpanElement | null>(null);

  const framesRef = useRef<HTMLImageElement[]>([]);
  const tickingRef = useRef(false);
  const loadedRef = useRef(false);
  const lastFrameRef = useRef(-1);
  const prevVisibleIdsRef = useRef("");

  const [loadProgress, setLoadProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());

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
      // Screen is wider than image (desktop/laptop) -> fit to height
      drawH = ch;
      drawW = ch * imgRatio;
    } else {
      // Screen is taller than image (mobile portrait) -> fit to width
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

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = framePath(i);
      img.onload = () => {
        if (cancelled) return;
        loadedCount++;
        setLoadProgress(loadedCount / FRAME_COUNT);
        if (loadedCount === 1) {
          drawFrame(0);
          setLoaded(true);
        }
        if (loadedCount >= 10) {
          loadedRef.current = true;
          setLoaded(true);
        }
        if (loadedCount === FRAME_COUNT) {
          loadedRef.current = true;
          setLoaded(true);
        }
        // Refresh frame if current active frame just finished downloading
        if (Math.abs(lastFrameRef.current - (i - 1)) <= 2) {
          drawFrame(lastFrameRef.current);
        }
      };
      img.onerror = () => {
        if (cancelled) return;
        loadedCount++;
        setLoadProgress(loadedCount / FRAME_COUNT);
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
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(1, 1);
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
          FRAME_COUNT - 1,
          Math.floor(frameProgress * FRAME_COUNT),
        );
        if (frameIndex !== lastFrameRef.current) {
          lastFrameRef.current = frameIndex;
          drawFrame(frameIndex);
        }

        if (heroTextRef.current) {
          const opacity = Math.max(0, 1 - progress / HERO_TEXT_FADE_END);
          heroTextRef.current.style.opacity = String(opacity);
          heroTextRef.current.style.transform = `translateY(${(1 - opacity) * 16}px)`;
        }

        if (bigLeftTextRef.current) {
          const op = Math.min(1, Math.max(0, (progress - 0.1) / 0.08));
          bigLeftTextRef.current.style.opacity = String(op);
          bigLeftTextRef.current.style.transform = `translateY(${(1 - op) * 16}px)`;
        }

        if (progressFillRef.current) {
          progressFillRef.current.style.transform = `scaleX(${progress})`;
        }

        if (radianceReadoutRef.current) {
          const val = Math.min(100, Math.round(frameProgress * 100));
          radianceReadoutRef.current.textContent = `${val}%`;
        }

        const newVisible = new Set<string>();
        for (const d of DIALOGUES) {
          if (progress >= d.show && progress <= d.hide) newVisible.add(d.id);
        }
        const newIds = [...newVisible].sort().join(",");
        if (newIds !== prevVisibleIdsRef.current) {
          prevVisibleIdsRef.current = newIds;
          setVisibleCards(newVisible);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [drawFrame]);

  return (
    <section id="sanctuary" ref={sectionRef} className="scroll-animation relative">
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

        {/* Top Indicators */}
        <div className="pointer-events-none absolute left-6 top-20 z-10 flex items-center gap-3 md:left-12 md:top-24">
          <span className="flex h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.9)]" />
          <span className="font-sans text-[11px] uppercase tracking-[0.32em] text-amber-200/70">
            Chapter I &mdash; The Sunflower Sanctuary
          </span>
        </div>

        <div className="pointer-events-none absolute right-6 top-20 z-10 flex items-center gap-3 md:right-12 md:top-24">
          <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-zinc-400">
            Radiance Index
          </span>
          <span
            ref={radianceReadoutRef}
            className="font-sans text-[11px] uppercase tracking-[0.2em] text-amber-300 font-semibold"
          >
            0%
          </span>
          <Sparkle size={13} weight="fill" className="text-amber-400 animate-pulse" />
        </div>

        {/* Hero Opening Typography (left-aligned) */}
        <div
          ref={heroTextRef}
          className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-start gap-4 px-6 pb-24 md:left-8 md:right-auto md:max-w-[480px] md:pb-28"
          style={{ transition: "opacity 80ms linear, transform 80ms linear" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-3.5 py-1 text-[11px] font-sans tracking-[0.2em] uppercase text-amber-200 backdrop-blur-md">
            <span>🌻 For Prachii</span>
          </div>

          <h1 className="font-serif text-4xl font-semibold leading-[1.0] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            The Sunflower Garden &bull;
            <br />
            <span className="gold-gradient-text italic font-normal">Prachii.</span>
          </h1>

          <p className="font-sans text-sm leading-relaxed text-zinc-300/90 md:text-base">
            A calm space dedicated to quiet strength, genuine kindness, and natural grace.
            Scroll gently to step through the garden.
          </p>

          <div className="mt-1 flex items-center gap-2 text-xs font-sans uppercase tracking-[0.22em] text-amber-300/80">
            <span>Scroll down &darr;</span>
          </div>
        </div>

        {/* Big Editorial Text on Scroll (left side) */}
        <div
          ref={bigLeftTextRef}
          className="pointer-events-none absolute bottom-24 left-6 z-10 hidden max-w-[420px] flex-col gap-4 md:flex md:bottom-28 md:left-12"
          style={{ opacity: 0, transition: "opacity 80ms linear, transform 80ms linear" }}
        >
          <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-amber-300/80">
            Observation &bull; 01
          </span>
          <h2 className="font-serif font-semibold leading-[0.9] tracking-tight text-foreground text-[clamp(2.8rem,5.5vw,5rem)]">
            Quiet &
            <br />
            <span className="gold-gradient-text italic font-normal">Radiant</span>
          </h2>
          <p className="font-sans text-[13px] leading-relaxed tracking-wide text-zinc-400">
            Natural warmth that speaks for itself without needing to prove anything.
          </p>
        </div>

        {/* Desktop Dialogue Cards (right side, completely outside central image area) */}
        {DIALOGUES.map((d, i) => {
          const visible = visibleCards.has(d.id);
          const position =
            i === 0
              ? "top-[20%] right-6 lg:right-12 xl:right-16"
              : i === 1
              ? "top-1/2 -translate-y-1/2 right-6 lg:right-12 xl:right-16"
              : i === 2
              ? "top-[48%] -translate-y-1/2 right-6 lg:right-12 xl:right-16"
              : "bottom-24 right-6 lg:right-12 xl:right-16";
          return (
            <div
              key={d.id}
              className={`pointer-events-none absolute ${position} z-20 hidden w-[380px] xl:w-[420px] max-w-[32vw] md:block`}
            >
              <figure
                className={`card-surface pointer-events-auto p-6 xl:p-8 rounded-3xl border border-amber-300/20 bg-[#0c0a07]/80 backdrop-blur-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.85),0_0_30px_-5px_rgba(251,191,36,0.12)] ${
                  visible ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-sans text-[10px] xl:text-[11px] font-medium uppercase tracking-[0.22em] text-amber-300">
                    {d.badge}
                  </span>
                  <div className="h-1.5 w-1.5 rounded-full bg-amber-400/80 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                </div>
                <blockquote className="font-serif text-lg xl:text-[20px] font-normal leading-[1.65] tracking-wide text-amber-50/95 italic">
                  &ldquo;{d.quote}&rdquo;
                </blockquote>
                <p className="font-sans text-[12px] xl:text-[13px] leading-relaxed text-zinc-400 pt-2.5">
                  {d.subnote}
                </p>
                <div className="h-px bg-white/10 mt-3.5 mb-3" />
                <figcaption className="flex items-center justify-between">
                  <span className="font-sans text-[11px] tracking-wider uppercase text-amber-300/80 font-medium">
                    {d.speaker}
                  </span>
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                    Reflection
                  </span>
                </figcaption>
              </figure>
            </div>
          );
        })}

        {/* Mobile Dialogue Cards (bottom position so flowers above remain completely visible) */}
        <div className="pointer-events-none absolute inset-x-4 bottom-20 z-20 flex flex-col gap-3 md:hidden">
          {DIALOGUES.map((d) => {
            const visible = visibleCards.has(d.id);
            if (!visible) return null;
            return (
              <figure
                key={d.id}
                className="card-surface pointer-events-auto p-5 rounded-2xl border border-amber-300/20 bg-[#0c0a07]/90 backdrop-blur-2xl transition-all duration-500 ease-out translate-y-0 opacity-100 scale-100 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-sans font-medium uppercase tracking-wider text-amber-300">
                    {d.badge}
                  </span>
                  <div className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
                </div>
                <blockquote className="font-serif text-[15px] font-normal leading-relaxed text-amber-50/95 italic">
                  &ldquo;{d.quote}&rdquo;
                </blockquote>
                <p className="font-sans text-[11px] text-zinc-400 pt-1.5">
                  {d.subnote}
                </p>
                <div className="h-px bg-white/10 mt-2.5 mb-2" />
                <figcaption className="flex items-center justify-between">
                  <span className="font-sans text-[10px] uppercase tracking-wider text-amber-300/80">
                    {d.speaker}
                  </span>
                  <span className="font-sans text-[9px] uppercase tracking-wider text-zinc-500">
                    Reflection
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>

        {/* Bottom Progress Tracker */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10">
          <div className="mx-6 mb-3 h-0.5 bg-white/10 md:mx-12">
            <div
              ref={progressFillRef}
              className="h-full origin-left bg-gradient-to-r from-amber-400 to-amber-200"
              style={{ transform: "scaleX(0)", transition: "transform 80ms linear" }}
            />
          </div>
          <div className="mx-6 flex items-center justify-between pb-4 font-sans text-[10px] uppercase tracking-[0.28em] text-amber-200/60 md:mx-12">
            <span>CHAPTER 01 &bull; SANCTUARY</span>
            <span className="hidden sm:inline">Prachii is a PEARL 🫧🦪</span>
            <span>Scroll &darr;</span>
          </div>
        </div>

        {/* Loading overlay */}
        {!loaded && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-6 bg-[#080706] px-6">
            <div className="text-4xl animate-bounce">🌻</div>
            <span className="font-serif italic text-amber-200 text-xl tracking-wide">
              Welcoming You to The Golden Garden...
            </span>
            <div className="h-1 w-64 rounded-full bg-white/10 overflow-hidden md:w-80">
              <div
                className="h-full bg-gradient-to-r from-amber-500 via-amber-300 to-amber-100 transition-[width] duration-300 ease-out"
                style={{ width: `${Math.round(loadProgress * 100)}%` }}
              />
            </div>
            <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-amber-300/70">
              {Math.round(loadProgress * 100)}% &bull; Curating Sunshine
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
