export default function Framework() {
  return (
    <section className="framework" data-screen-label="Framework">
      {/* Top curve: gentle convex bump that breaks the rectangular boundary
          where Problem meets Framework. Filled with the problem section's
          dark color, with a subtle teal hairline along the arc. */}
      <svg
        className="framework-curve framework-curve-top"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M 0 0 L 0 80 Q 720 -8 1440 80 L 1440 0 Z" fill="#050a0c" />
        <path
          d="M 0 80 Q 720 -8 1440 80"
          stroke="rgba(93,168,156,0.18)"
          strokeWidth="0.6"
          fill="none"
        />
      </svg>

      <div className="framework-grain" aria-hidden="true" />

      <div className="framework-inner">
        <header className="framework-header" data-reveal>
          <div>
            <span className="eyebrow">Our framework</span>
            <h2 className="framework-h2 display">
              <span>Align. Govern. Activate.</span>
              <br />
              <span className="muted">The structure behind every engagement.</span>
            </h2>
          </div>
          <p className="framework-lede">
            Three pillars that move strategy into systems and keep them running once they&rsquo;re live.
          </p>
        </header>

        <div className="framework-panel" data-reveal>
          <div className="pillars" data-reveal-stagger>
            <div className="pillar">
              <div className="pillar-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="24" cy="24" r="18" />
                  <circle cx="24" cy="24" r="2" fill="currentColor" stroke="none" />
                  <polygon points="24,10 28,24 24,38 20,24" fill="rgba(93,168,156,0.18)" />
                  <line x1="24" y1="6" x2="24" y2="9" />
                  <line x1="24" y1="39" x2="24" y2="42" />
                  <line x1="6" y1="24" x2="9" y2="24" />
                  <line x1="39" y1="24" x2="42" y2="24" />
                </svg>
              </div>
              <h3 className="pillar-name">Align</h3>
              <p className="pillar-body">Build the roadmap.</p>
            </div>

            <div className="pillar">
              <div className="pillar-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M24 5 L40 11 V24 C40 33 33 40 24 43 C15 40 8 33 8 24 V11 Z" fill="rgba(93,168,156,0.10)" />
                  <polyline points="17,24 22,29 32,18" />
                </svg>
              </div>
              <h3 className="pillar-name">Govern</h3>
              <p className="pillar-body">Hold the line.</p>
            </div>

            <div className="pillar">
              <div className="pillar-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="22" cy="26" r="14" />
                  <circle cx="22" cy="26" r="8" />
                  <circle cx="22" cy="26" r="2.4" fill="currentColor" stroke="none" />
                  <line x1="22" y1="26" x2="40" y2="8" />
                  <polyline points="34,8 40,8 40,14" />
                </svg>
              </div>
              <h3 className="pillar-name">Activate</h3>
              <p className="pillar-body">Ship the systems.</p>
            </div>
          </div>

          <div className="framework-foot">
            <p>This structure underpins every engagement we lead.</p>
            <a className="tlink" href="/approach">
              Explore our approach <span className="arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom curve: mirror of the top, breaks the boundary into Services. */}
      <svg
        className="framework-curve framework-curve-bottom"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M 0 0 Q 720 88 1440 0 L 1440 80 L 0 80 Z" fill="#050a0c" />
        <path
          d="M 0 0 Q 720 88 1440 0"
          stroke="rgba(93,168,156,0.14)"
          strokeWidth="0.6"
          fill="none"
        />
      </svg>
    </section>
  );
}
