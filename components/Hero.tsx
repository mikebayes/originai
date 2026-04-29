import HeroNav from "./HeroNav";
import HeroPhotoLayer from "./HeroPhotoLayer";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section className="hero" data-screen-label="Hero">
      {/* Photo + treatment stack (z-index 0–4) */}
      <HeroPhotoLayer />
      <div className="hero-grade" aria-hidden="true" />
      <div className="hero-scrim" aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />

      {/* Floating nav (no background bar) — desktop links + CTA, mobile hamburger drawer */}
      <HeroNav />

      {/* Copy block, upper-left third */}
      <div className="hero-content">
        <div className="hero-copy">
          {/* Graphic mark — teal dot + fading hairline. Replaces a marketing eyebrow,
              keeps the teal accent for visual separation between the photo and the H1. */}
          <span className="hero-mark" aria-hidden="true">
            <span className="hero-mark-dot" />
            <span className="hero-mark-line" />
          </span>
          <h1 className="h1 display">
            <span>Turning AI ambition</span>
            <span className="into"> into </span>
            <span>working systems.</span>
          </h1>
          <p className="sub">
            Strategy, development, and AI solutions that deliver measurable business outcomes.
          </p>
          <div className="cta-stack">
            <a href="#contact" className="pill pill-primary">
              Book a discovery session
              <span className="arrow" aria-hidden="true">→</span>
            </a>
            <a href="#services" className="pill pill-secondary">
              See our services
            </a>
          </div>
        </div>
      </div>

      {/* Corner mono caption — anchors the photo composition */}
      <div className="hero-corner-right">
        <span className="dot" aria-hidden="true" />
        <span>Now booking · Q2 engagements</span>
      </div>

      {/* Scroll-to-explore indicator, fades on first scroll */}
      <ScrollIndicator />
    </section>
  );
}
