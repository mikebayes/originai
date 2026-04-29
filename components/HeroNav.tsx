"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

/**
 * Hero nav.
 * Desktop: logo + primary nav + CTA pill, floating over the photo.
 * Mobile:  logo + hamburger button. Tapping the hamburger slides a
 *          frosted drawer down with the nav items and the CTA inside.
 *
 * The drawer auto-closes once the user scrolls past the hero, since
 * the StickyNav takes over from there.
 */
export default function HeroNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the drawer once the user scrolls (sticky nav will take over)
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 60) setMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the drawer is open
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
    <>
      <nav
        className={`hero-nav ${menuOpen ? "menu-open" : ""}`}
        aria-label="Primary"
      >
        <a
          className="nav-logo"
          href="/"
          aria-label="Origin AI home"
          onClick={closeMenu}
        >
          <Logo />
        </a>
        <div className="nav-links">
          <a href="/services">Services</a>
          <a href="/approach">Approach</a>
          <a href="/team">Team</a>
          <a href="/insights">Insights</a>
        </div>
        <button
          className="hero-nav-hamburger"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="hero-nav-drawer"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="bar" aria-hidden="true" />
          <span className="bar" aria-hidden="true" />
          <span className="bar" aria-hidden="true" />
        </button>
      </nav>

      {/* Mobile slide-down drawer — only shown on mobile, hidden by CSS on desktop */}
      <div
        id="hero-nav-drawer"
        className={`hero-nav-drawer ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <a href="/services" onClick={closeMenu}>Services</a>
        <a href="/approach" onClick={closeMenu}>Approach</a>
        <a href="/team" onClick={closeMenu}>Team</a>
        <a href="/insights" onClick={closeMenu}>Insights</a>
        <a
          href="/contact"
          className="pill pill-primary hero-nav-drawer-cta"
          onClick={closeMenu}
        >
          Book a discovery session
          <span className="arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </>
  );
}
