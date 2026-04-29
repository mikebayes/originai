// Reusable check icon for the principles ticker
function Check() {
  return (
    <svg
      className="check"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="3,8.5 6.5,12 13,4.5" />
    </svg>
  );
}

const PRINCIPLES = [
  "Senior on the work",
  "We own the outcome",
  "Build over advise",
  "Custom beats configured",
  "Production over pilots",
  "No offshore handoffs",
  "One accountability line",
  "Plain language, plain results",
  "Disciplined delivery",
  "Humans hold the judgment",
];

export default function About() {
  return (
    <section className="stage" data-screen-label="About">
      <div className="stage-grain" aria-hidden="true" />
      <div className="stage-inner">
        <header className="s-header about-header" data-reveal>
          <div>
            <span className="eyebrow">Who we are</span>
            <h2 className="s-h2 display">
              <span>A small senior team</span>
              <span className="muted"> that builds, strategizes, and operates AI systems with you.</span>
            </h2>
          </div>
          <p className="about-sub">
            We&rsquo;re not a tool reseller, we&rsquo;re not a generic consultancy, and we don&rsquo;t hand off the build. We&rsquo;re the team that owns the outcome end to end.
          </p>
        </header>

        <div className="about-grid about-grid-two" data-reveal-stagger>
          {/* Card 1 — The Team */}
          <article className="about-card">
            <span className="about-num">The Team</span>
            <div className="about-visual">
              <div className="about-portraits">
                <span
                  className="portrait portrait-photo p-mike"
                  role="img"
                  aria-label="Mike Bayes"
                />
                <span
                  className="portrait portrait-photo p-chad"
                  role="img"
                  aria-label="Chad Beauchamp"
                />
                <span className="portrait p-3" aria-hidden="true">+</span>
                <span className="portrait-count"><strong>Senior</strong>operators &amp; builders</span>
              </div>
            </div>
            <h3 className="about-title">The people behind every engagement.</h3>
            <p className="about-body">A small senior team. Strategy, engineering, and operations under one roof. No offshore handoffs, no junior bench to staff up.</p>
            <div className="about-foot">
              <a className="tlink" href="/team">Meet the team <span className="arrow" aria-hidden="true">→</span></a>
            </div>
          </article>

          {/* Card 2 — Principles */}
          <article className="about-card">
            <span className="about-num">Principles</span>
            <div className="about-visual">
              <div className="principles-scroller" aria-label="Origin AI principles">
                <div className="principles-track">
                  {PRINCIPLES.map((p) => (
                    <span key={p} className="principle-pill">
                      <Check />
                      {p}
                    </span>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {PRINCIPLES.map((p) => (
                    <span key={`dup-${p}`} className="principle-pill" aria-hidden="true">
                      <Check />
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <h3 className="about-title">How we operate.</h3>
            <p className="about-body">Standards we keep ourselves to. What we&rsquo;ll do, what we won&rsquo;t, and how we make the call when it&rsquo;s a coin toss.</p>
            <div className="about-foot">
              <a className="tlink" href="/principles">How we operate <span className="arrow" aria-hidden="true">→</span></a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
