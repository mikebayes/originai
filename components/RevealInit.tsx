"use client";

import { useEffect } from "react";

/**
 * Initializes scroll-driven reveal animations.
 * Mark elements with `data-reveal` to fade-up on enter viewport.
 * Mark a parent with `data-reveal-stagger` to stagger immediate children.
 *
 * Respects `prefers-reduced-motion` automatically (CSS handles the override).
 */
export default function RevealInit() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const targets = document.querySelectorAll<HTMLElement>(
      "[data-reveal], [data-reveal-stagger]"
    );

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
