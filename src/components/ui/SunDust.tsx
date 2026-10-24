"use client";

import { useMemo } from "react";

export function SunDust() {
  // Generate a deterministic set of dust specks so hydration is consistent
  const particles = useMemo(() => {
    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      left: `${(i * 17 + 7) % 100}%`,
      top: `${(i * 23 + 13) % 100}%`,
      size: `${2 + (i % 3) * 1.5}px`,
      duration: `${14 + (i % 7) * 3}s`,
      delay: `${-(i % 10) * 1.8}s`,
      opacity: 0.15 + (i % 4) * 0.12,
    }));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-20 overflow-hidden"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="sun-particle absolute rounded-full bg-amber-300"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            boxShadow: "0 0 10px 2px rgba(251, 191, 36, 0.6)",
            animation: `floatParticle ${p.duration} ease-in-out infinite alternate`,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

