"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

/**
 * Compact sticky nav.
 * Hidden on the hero, slides in once the viewer scrolls past ~70vh
 * (i.e., the bottom of the hero). Frosted glass background.
 *
 * Desktop: logo + primary nav + CTA pill.
 * Mobile:  logo + hamburger that toggles a slide-down drawer
 *          with the nav items and the CTA inside.
 */
export default function StickyNav() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.7;
      setVisible(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-close the drawer if the sticky nav scrolls back out of view
  useEffect(() => {
    if (!visible) setMenuOpen(false);
  }, [visible]);

  // Lock body scroll while drawer is open on mobile
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div
      className={`sticky-nav ${visible ? "is-visible" : ""} ${menuOpen ? "menu-open" : ""}`}
      aria-hidden={!visible}
    >
      <div className="sticky-nav-inner">
        <a
          className="sticky-nav-logo"
          href="/"
          aria-label="Origin AI home"
          onClick={closeMenu}
        >
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
        <button
          className="sticky-nav-hamburger"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="sticky-nav-drawer"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="bar" aria-hidden="true" />
          <span className="bar" aria-hidden="true" />
          <span className="bar" aria-hidden="true" />
        </button>
      </div>

      {/* Mobile drawer — slides down from below the nav bar */}
      <div
        id="sticky-nav-drawer"
        className="sticky-nav-drawer"
        aria-hidden={!menuOpen}
      >
        <a href="/services" onClick={closeMenu}>Services</a>
        <a href="/approach" onClick={closeMenu}>Approach</a>
        <a href="/team" onClick={closeMenu}>Team</a>
        <a href="/insights" onClick={closeMenu}>Insights</a>
        <a
          href="/contact"
          className="pill pill-primary sticky-nav-drawer-cta"
          onClick={closeMenu}
        >
          Book a discovery session
          <span className="arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
