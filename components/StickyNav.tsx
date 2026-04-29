"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

/**
 * Compact sticky nav.
 * Hidden on the hero, slides in once the viewer scrolls past ~70vh
 * (i.e., the bottom of the hero). Frosted glass background, holds the
 * wordmark, primary nav, and the CTA so it's always one click away.
 */
export default function StickyNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.7;
      setVisible(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`sticky-nav ${visible ? "is-visible" : ""}`}
      aria-hidden={!visible}
    >
      <div className="sticky-nav-inner">
        <a className="sticky-nav-logo" href="/" aria-label="Origin AI home">
          <Logo />
        </a>
        <nav className="sticky-nav-links" aria-label="Primary">
          <a href="/services">Services</a>
          <a href="/approach">Approach</a>
          <a href="/team">Team</a>
          <a href="/insights">Insights</a>
        </nav>
        <a href="/contact" className="pill pill-primary sticky-nav-cta">
          Book a discovery session
          <span className="arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
