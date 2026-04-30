import HeroNav from "./HeroNav";
import ServicesHeroSystemView from "./ServicesHeroSystemView";

/**
 * Services overview hero.
 *
 * Different visual approach from the homepage hero (no cinematic photo).
 * The hero is "demonstration-led": copy on the left states what the page
 * is about, and a system-view diagram on the right shows how the three
 * services relate as parts of one connected whole.
 *
 * The diagram reuses visual language already established on the homepage
 * Services section (mini roadmap, UI mockup hint, sparkline) so the brand
 * feels coherent rather than a different design language per page.
 */
export default function ServicesHero() {
  return (
    <section className="services-hero" data-screen-label="Services hero">
      {/* Atmospheric backdrop: dark base + subtle teal radial glow + grain.
          Replaces the homepage's cinematic photo with a brand-coherent
          treatment that still feels visually anchored. */}
      <div className="services-hero-bg" aria-hidden="true">
        <div className="services-hero-glow" />
        <div className="services-hero-grain" />
      </div>

      {/* Floating nav (no background bar) — same component as homepage,
          mobile hamburger drawer included. */}
      <HeroNav />

      <div className="services-hero-inner">
        <div className="services-hero-copy">
          <span className="services-hero-mark" aria-hidden="true">
            <span className="services-hero-mark-dot" />
            <span className="services-hero-mark-line" />
          </span>
          <span className="eyebrow services-hero-eyebrow">Services</span>
          <h1 className="services-hero-h1 display">
            Modern Software.<br />End-to-End<br />AI Services.
          </h1>
          <p className="services-hero-sub">
            Designed, built, and run by senior development teams.
          </p>
          <div className="services-hero-cta">
            <a href="/contact" className="pill pill-primary">
              Book a discovery session
              <span className="arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="services-hero-visual">
          <ServicesHeroSystemView />
        </div>
      </div>
    </section>
  );
}
