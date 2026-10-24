"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SpeakerHigh, SpeakerSlash } from "@phosphor-icons/react";

const DEFAULT_SRC = "/music/background.mp3";
const DEFAULT_LOOP = true;
const DEFAULT_VOLUME = 1;

function getSafeAudioVolume() {
  return Math.min(1, Math.max(0, DEFAULT_VOLUME));
}

export function BackgroundMusic({
  src = DEFAULT_SRC,
  loop = DEFAULT_LOOP,
  defaultMuted = false,
}: {
  src?: string;
  loop?: boolean;
  defaultMuted?: boolean;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const startedRef = useRef(false);

  const [isMuted, setIsMuted] = useState(defaultMuted);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSrcAvailable, setIsSrcAvailable] = useState(true);

  const volume = useMemo(() => getSafeAudioVolume(), []);
  const stopStartListeners = useRef<(() => void) | null>(null);

  const stopAndReset = useCallback(() => {
    const el = audioRef.current;
    if (!el) return;
    try {
      el.pause();
      el.currentTime = 0;
      setIsPlaying(false);
    } catch {
      // ignore
    }
  }, []);

  const start = useCallback(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    try {
      if (!audioRef.current) {
        const el = new Audio(src);

        el.addEventListener(
          "error",
          () => {
            setIsSrcAvailable(false);
            setIsPlaying(false);
            try {
              el.pause();
            } catch {
              // ignore
            }
          },
          { once: true }
        );

        el.addEventListener("play", () => setIsPlaying(true));
        el.addEventListener("pause", () => setIsPlaying(false));

        el.loop = loop;
        el.preload = "auto";
        el.volume = volume;
        el.muted = isMuted;
        audioRef.current = el;
      } else {
        audioRef.current.loop = loop;
        audioRef.current.volume = volume;
        audioRef.current.muted = isMuted;
      }

      const playPromise = audioRef.current.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          // autoplay restriction handler
        });
      }
    } catch {
      // swallow
    }
  }, [isMuted, loop, src, volume]);

  const onFirstGesture = useCallback(() => {
    start();
    const stop = stopStartListeners.current;
    stop?.();
    stopStartListeners.current = null;
  }, [start]);

  useEffect(() => {
    const events: Array<keyof DocumentEventMap> = [
      "pointerdown",
      "touchstart",
      "click",
    ];

    const handlers = events.map((eventName) => {
      const handler = () => onFirstGesture();
      document.addEventListener(eventName, handler, {
        passive: true,
        once: true,
      });
      return () => document.removeEventListener(eventName, handler);
    });

    stopStartListeners.current = () => {
      for (const cleanup of handlers) cleanup();
    };

    return () => {
      stopStartListeners.current?.();
      stopStartListeners.current = null;
    };
  }, [onFirstGesture]);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    try {
      el.muted = isMuted;
    } catch {
      // ignore
    }
  }, [isMuted]);

  useEffect(() => {
    const onVisibility = () => {
      const el = audioRef.current;
      if (!el) return;
      if (document.visibilityState === "hidden") {
        try {
          el.pause();
        } catch {
          // ignore
        }
      } else {
        if (startedRef.current && !isMuted) {
          try {
            void el.play().catch(() => {});
          } catch {
            // ignore
          }
        }
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [isMuted]);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-end px-6 md:px-10">
      <button
        type="button"
        disabled={!isSrcAvailable}
        aria-label={
          !isSrcAvailable
            ? "Melody unavailable"
            : isMuted
              ? "Unmute background melody"
              : "Mute background melody"
        }
        className="pointer-events-auto group relative flex items-center gap-3 select-none rounded-full border border-amber-400/20 bg-black/50 px-4 py-2.5 font-sans text-[11px] font-medium tracking-[0.18em] text-amber-100/90 shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:border-amber-300/40 hover:bg-black/70 hover:shadow-[0_0_25px_-5px_rgba(251,191,36,0.35)] active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-50"
        onClick={() => {
          if (!isSrcAvailable) return;

          const nextMuted = !isMuted;
          setIsMuted(nextMuted);

          const el = audioRef.current;
          if (!startedRef.current || !el) return;

          if (!nextMuted) {
            try {
              void el.play().catch(() => {});
            } catch {}
          } else {
            try {
              el.pause();
            } catch {}
            stopAndReset();
          }
        }}
      >
        {/* Animated Equalizer Waveform or Icon */}
        <span className="flex items-center gap-0.5 h-3.5">
          <span
            className={`w-0.5 rounded-full bg-amber-400 transition-all duration-300 ${
              !isMuted && isPlaying
                ? "animate-[bounce_0.8s_ease-in-out_infinite] h-3.5"
                : "h-1 bg-zinc-500"
            }`}
          />
          <span
            className={`w-0.5 rounded-full bg-amber-300 transition-all duration-300 ${
              !isMuted && isPlaying
                ? "animate-[bounce_1.1s_ease-in-out_infinite_0.2s] h-3"
                : "h-2 bg-zinc-500"
            }`}
          />
          <span
            className={`w-0.5 rounded-full bg-amber-200 transition-all duration-300 ${
              !isMuted && isPlaying
                ? "animate-[bounce_0.9s_ease-in-out_infinite_0.4s] h-4"
                : "h-1.5 bg-zinc-500"
            }`}
          />
        </span>

        <span className="flex items-center gap-1.5">
          {!isMuted ? (
            <SpeakerHigh size={14} className="text-amber-300" weight="bold" />
          ) : (
            <SpeakerSlash size={14} className="text-zinc-400" />
          )}
          <span className="uppercase text-[10px] tracking-[0.2em] opacity-90 group-hover:opacity-100 transition-opacity">
            {!isSrcAvailable ? "Unavailable" : isMuted ? "Melody Off" : "Melody On"}
          </span>
        </span>
      </button>
    </div>
  );
}
