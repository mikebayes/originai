import HeroNav from "./HeroNav";

/**
 * /services/build hero — quieter than the homepage hero.
 *
 * Layout: copy on the left, abstract gradient strata field on the
 * right (subtle teal/forest-green layered bands with thin teal accent
 * lines and a single pulsing dot). No literal screenshot. The visual
 * is purely atmospheric structure, not illustration.
 */
export default function ServicesBuildHero() {
  return (
    <>
      <HeroNav />
      <section className="wrap s-hero" data-screen-label="Build hero">
        <div className="s-hero-grid">
          <div>
            <div className="s-hero-eyebrow">
              <span className="bar" />AI Software &amp; Systems
            </div>
            <h1 className="s-hero-h1">Consider it shipped.</h1>
            <p className="s-hero-sub">
              We design and build custom AI software, websites, and
              internal systems that move from idea to production quickly
              and cleanly.
            </p>
            <div className="s-hero-actions">
              <a href="/contact" className="pill pill-primary">
                Book a discovery session
                <span className="arrow" aria-hidden="true">→</span>
              </a>
              <a href="/services" className="pill pill-secondary">
                ← Back to services
              </a>
            </div>
          </div>

          {/* Abstract gradient strata visual — replaces the engagement
              diagram aside used on /services. Pure CSS layers. */}
          <aside className="build-hero-visual" aria-label="System architecture motif">
            <div className="bh-field" aria-hidden="true">
              <div className="bh-stratum bh-stratum-1" />
              <div className="bh-stratum bh-stratum-2" />
              <div className="bh-stratum bh-stratum-3" />
              <div className="bh-line bh-line-1" />
              <div className="bh-line bh-line-2" />
              <div className="bh-pulse" />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
