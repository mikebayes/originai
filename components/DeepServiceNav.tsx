/**
 * Deep service page navigation — matches the Claude Design spec for
 * /services/build, /services/strategy, /services/managed.
 *
 * Renders inside the .bp-hero-shell so the spec's color overrides
 * (.bp-hero-shell .nav-logo / .nav-links / .nav-links a.active)
 * apply correctly. Uses the spec's `.nav .nav-logo .nav-mark .nav-links`
 * markup rather than the homepage's HeroNav so the active-link
 * underline, the inline "O" mark, and the pill button all match the
 * design exactly.
 *
 * Mobile: spec hides .nav-links a:not(.nav-pill) at <=1024px so the
 * pill stays visible while the rest of the links collapse. The
 * site-wide StickyNav handles the mobile menu drawer once the user
 * scrolls past the hero.
 */
export default function DeepServiceNav() {
  return (
    <header className="wrap nav" data-screen-label="Nav">
      <a className="nav-logo" href="/" aria-label="Origin AI home">
        <span className="nav-mark">O</span>
        <span>Origin AI</span>
      </a>
      <nav className="nav-links">
        <a href="/services" className="active">Services</a>
        <a href="/approach">Approach</a>
        <a href="/team">Team</a>
        <a href="/insights">Insights</a>
        <a href="/contact" className="pill pill-primary nav-pill">
          Book a discovery session
          <span className="arrow" aria-hidden="true">→</span>
        </a>
      </nav>
    </header>
  );
}
