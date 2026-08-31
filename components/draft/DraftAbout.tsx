/**
 * DRAFT homepage "who we are" section, repositioned to avoid repeating
 * the new explanatory section near the top of the page.
 *
 * The live version opens "A small senior team that builds, strategizes,
 * and operates AI systems with you." The draft's who-we-are section now
 * makes that claim near the hero, so repeating it here would read as
 * filler. This section shifts to the thing the earlier section does not
 * cover: who you actually deal with, and how the team operates.
 *
 * The two cards (team portraits, principles ticker) are preserved from
 * the live component. Copy is tightened and reframed.
 */

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

export default function DraftAbout() {
  return (
    <section className="stage" data-screen-label="About">
      <div className="stage-grain" aria-hidden="true" />
      <div className="stage-inner">
        <header className="s-header about-header" data-reveal>
          <div>
            <span className="eyebrow">Who you work with</span>
            <h2 className="s-h2 display">
              <span>The people you meet</span>
              <span className="muted">
                {" "}
                are the people doing the work.
              </span>
            </h2>
          </div>
          <p className="about-sub">
            No offshore handoffs, no junior bench, no account manager between
            you and the team. One accountability line from the first
            conversation through to what is running in production.
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
                <span className="portrait p-3" aria-hidden="true">
                  +
                </span>
                <span className="portrait-count">
                  <strong>Senior</strong>operators &amp; builders
                </span>
              </div>
            </div>
            <h3 className="about-title">Three partners, close to the work.</h3>
            <p className="about-body">
              Business, technology, and marketing operators based in Winnipeg.
              Strategy, engineering, and delivery under one roof.
            </p>
            <div className="about-foot">
              <a className="tlink" href="/team">
                Meet the team{" "}
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </article>

          {/* Card 2 — Principles */}
          <article className="about-card">
            <span className="about-num">Principles</span>
            <div className="about-visual">
              <div
                className="principles-scroller"
                aria-label="Origin AI principles"
              >
                <div className="principles-track">
                  {PRINCIPLES.map((p) => (
                    <span key={p} className="principle-pill">
                      <Check />
                      {p}
                    </span>
                  ))}
                  {PRINCIPLES.map((p) => (
                    <span
                      key={`dup-${p}`}
                      className="principle-pill"
                      aria-hidden="true"
                    >
                      <Check />
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <h3 className="about-title">How we operate.</h3>
            <p className="about-body">
              The standards we hold ourselves to. What we will do, what we
              will not, and how we decide when it is close.
            </p>
            <div className="about-foot">
              <a className="tlink" href="/approach">
                How we operate{" "}
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
