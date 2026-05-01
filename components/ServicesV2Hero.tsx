/**
 * /services V2 hero — left-side copy + right-side engagement-model diagram.
 *
 * Replaces the V1 hero (which used the SVG system view). The diagram aside
 * is now a tabular three-row card showing Strategy / Build / Managed with
 * Decide / Ship / Run tags. Build is the centerpiece (forest green tinted).
 *
 * All styling lives in styles/services-v2.css under the .svcs-v2 scope.
 */
export default function ServicesV2Hero() {
  return (
    <section className="wrap s-hero" data-screen-label="Services hero">
      <div className="s-hero-grid">
        <div>
          <div className="s-hero-eyebrow">
            <span className="bar" />Services
          </div>
          <h1 className="s-hero-h1">
            From AI ambition <span className="muted">to working systems.</span>
          </h1>
          <p className="s-hero-sub">
            Modern software and end-to-end AI services. Designed, built, and run
            by senior development teams in Winnipeg.
          </p>
          <div className="s-hero-actions">
            <a href="/contact" className="pill pill-primary">
              Book a discovery session<span className="arrow" aria-hidden="true">→</span>
            </a>
            <a href="#engage" className="pill pill-secondary">
              How we engage
            </a>
          </div>
        </div>

        {/* Right rail — three-service strategy/build/operate card */}
        <aside className="svc-diagram" aria-label="Three services">
          <div className="svc-diagram-head">
            <span className="svc-diagram-title">Origin · Engagement model</span>
            <span className="svc-diagram-status">
              <span className="dot" />Q2 booking
            </span>
          </div>
          <div className="svc-rows">
            <div className="svc-row">
              <span className="svc-row-num">Strategy</span>
              <span className="svc-row-name">AI roadmap &amp; training</span>
              <span className="svc-row-tag">Decide</span>
            </div>
            <div className="svc-row center">
              <span className="svc-row-num">Build</span>
              <span className="svc-row-name">AI software &amp; systems</span>
              <span className="svc-row-tag">Ship</span>
            </div>
            <div className="svc-row">
              <span className="svc-row-num">Managed</span>
              <span className="svc-row-name">Continuous development</span>
              <span className="svc-row-tag">Run</span>
            </div>
          </div>
          <div className="svc-diagram-foot">
            <span>Senior team · Winnipeg</span>
            <span>One accountability line</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
