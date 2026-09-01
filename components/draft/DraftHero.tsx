import HeroNav from "../HeroNav";
import HeroPhotoLayer from "../HeroPhotoLayer";
import ScrollIndicator from "../ScrollIndicator";

/**
 * DRAFT homepage hero.
 *
 * Identical to components/Hero.tsx except for one refined subheadline.
 * Kept as a separate file so the live homepage hero is untouched.
 *
 * Preserved exactly: the hero photo layer, the grade / scrim / vignette /
 * grain stack, the teal dot-and-hairline mark, the H1, both CTAs, the
 * corner caption, and the scroll indicator.
 *
 * Subheadline change: the live version reads "AI software, strategy, and
 * operations, focused on measurable business outcomes." The draft names
 * the three service categories a buyer actually searches for (AI
 * consulting, training, workflow development) and lands on everyday
 * work, which is where the rest of the page now points.
 *
 * Earlier draft wording was "turn AI interest into working systems."
 * That framed the outcome as a system; "make AI part of everyday work"
 * frames it as adoption, matching the section below and the services.
 *
 * Deliberately excluded: "senior team" and any location language. Both
 * are carried elsewhere on the page and in the footer.
 */
export default function DraftHero() {
  return (
    <section className="hero" data-screen-label="Hero">
      <HeroPhotoLayer />
      <div className="hero-grade" aria-hidden="true" />
      <div className="hero-scrim" aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />

      <HeroNav />

      <div className="hero-content">
        <div className="hero-copy">
          <span className="hero-mark" aria-hidden="true">
            <span className="hero-mark-dot" />
            <span className="hero-mark-line" />
          </span>
          <h1 className="h1 display">We build the AI your business runs on.</h1>
          <p className="sub">
            AI consulting, training, and workflow development for
            organizations ready to make AI part of everyday work.
          </p>
          <div className="cta-stack">
            <a href="/contact" className="pill pill-primary">
              Book a discovery session
              <span className="arrow" aria-hidden="true">→</span>
            </a>
            <a href="/services" className="pill pill-secondary">
              See our services
            </a>
          </div>
        </div>
      </div>

      <div className="hero-corner-right">
        <span className="dot" aria-hidden="true" />
        <span>Now booking · Q2 engagements</span>
      </div>

      <ScrollIndicator />
    </section>
  );
}
