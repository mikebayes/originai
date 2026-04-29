"use client";

import { useEffect, useRef } from "react";

/**
 * Hero photo layer with scroll-locked parallax.
 *
 * The outer `.hero-photo-wrap` is the element we transform on scroll.
 * The inner `.hero-photo` keeps its ken-burns animation independently
 * (CSS keyframes drive scale; JS drives translateY on the wrapper).
 *
 * Photo moves at ~35% of the page scroll rate, so as the viewer scrolls
 * down, the photo lags behind, creating real depth instead of a static
 * backdrop.
 */
export default function HeroPhotoLayer() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    if (typeof window !== "undefined") {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (reduce.matches) return;
    }

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        // Cap parallax at +320px so the photo doesn't drift indefinitely
        const offset = Math.min(y * 0.35, 320);
        el.style.transform = `translate3d(0, ${offset}px, 0)`;
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={wrapRef} className="hero-photo-wrap" aria-hidden="true">
      <div className="hero-photo" />
    </div>
  );
}
