/**
 * Services overview — three-card grid.
 *
 * Replaces the elaborate per-service feature sections with a simpler
 * three-card layout. Each card has eyebrow, title, short body copy,
 * and a link to its deep service page. Build is the centerpiece (slight
 * forest green tint, accent border) but the three sit as siblings in a
 * 3-column grid rather than a featured-left asymmetric layout.
 *
 * Visual placeholder boxes inside each card mark where small per-service
 * mockups will eventually live. Keeping them as placeholders for now so
 * the structural change can be reviewed before the visuals are designed.
 */
export default function ServicesCardsGrid() {
  return (
    <section className="svc-cards-section" data-screen-label="Services cards">
      <div className="svc-cards-inner">
        <header className="svc-cards-header" data-reveal>
          <h2 className="svc-cards-h2 display">
            <span>Three services.</span>
            <span className="muted"> Pick what your team needs.</span>
          </h2>
          <p className="svc-cards-sub">
            Build is the centerpiece. Strategy and Managed sit alongside.
          </p>
        </header>

        <div className="svc-cards-grid" data-reveal-stagger>
          {/* Build — centerpiece, forest green tint + accent border */}
          <article className="svc-card svc-card-build">
            <span className="svc-card-num">The work</span>
            <h3 className="svc-card-title">AI Software &amp; Systems</h3>
            <p className="svc-card-promise">
              Custom AI software, built for your business. Replace the
              SaaS stack you&rsquo;ve been duct-taping together with a
              system shaped to how your team actually works.
            </p>
            <div className="svc-card-placeholder">[ visual placeholder ]</div>
            <a href="/services/build" className="svc-card-link">
              Explore what we build <span className="arrow" aria-hidden="true">→</span>
            </a>
          </article>

          {/* Strategy */}
          <article className="svc-card">
            <span className="svc-card-num">AI roadmap &amp; planning</span>
            <h3 className="svc-card-title">AI Strategy</h3>
            <p className="svc-card-promise">
              Get unstuck before you build. We help leadership pick the
              right AI bets and sequence them properly.
            </p>
            <div className="svc-card-placeholder">[ visual placeholder ]</div>
            <a href="/services/strategy" className="svc-card-link">
              Learn more <span className="arrow" aria-hidden="true">→</span>
            </a>
          </article>

          {/* Managed */}
          <article className="svc-card">
            <span className="svc-card-num">After we ship</span>
            <h3 className="svc-card-title">Managed AI</h3>
            <p className="svc-card-promise">
              We keep building. Continuous development on the AI we
              shipped, on a defined monthly scope.
            </p>
            <div className="svc-card-placeholder">[ visual placeholder ]</div>
            <a href="/services/managed" className="svc-card-link">
              Learn more <span className="arrow" aria-hidden="true">→</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
