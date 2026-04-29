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
              <span className="muted"> that strategizes, builds, and operates AI systems with you.</span>
            </h2>
          </div>
          <p className="about-sub">
            We&rsquo;re not a tool reseller, we&rsquo;re not a generic consultancy, and we don&rsquo;t hand off the build. We&rsquo;re the team that owns the outcome end to end.
          </p>
        </header>

        <div className="about-grid" data-reveal-stagger>
          {/* Card 1 — The Team */}
          <article className="about-card">
            <span className="about-num">01 · The Team</span>
            <div className="about-visual">
              <div className="about-portraits">
                <span className="portrait p-1">MB</span>
                <span className="portrait p-2">CB</span>
                <span className="portrait p-3">+</span>
                <span className="portrait-count"><strong>Senior</strong>operators &amp; builders</span>
              </div>
            </div>
            <h3 className="about-title">The people behind every engagement.</h3>
            <p className="about-body">A small senior team, strategy, engineering, and operations under one roof. No offshore handoffs, no junior bench to staff up.</p>
            <div className="about-foot">
              <a className="tlink" href="/team">Meet the team <span className="arrow" aria-hidden="true">→</span></a>
            </div>
          </article>

          {/* Card 2 — Approach */}
          <article className="about-card">
            <span className="about-num">02 · Approach</span>
            <div className="about-visual">
              <div className="about-flow">
                <div className="step"><span className="dot" /><span className="label">Step 01</span><span className="word">Frame</span></div>
                <span className="connector" />
                <div className="step"><span className="dot" /><span className="label">Step 02</span><span className="word">Build</span></div>
                <span className="connector" />
                <div className="step"><span className="dot" /><span className="label">Step 03</span><span className="word">Operate</span></div>
              </div>
            </div>
            <h3 className="about-title">How we work, end to end.</h3>
            <p className="about-body">We frame the problem with leadership, build the system with your team, then stay on to run and improve it. One team, one accountability line.</p>
            <div className="about-foot">
              <a className="tlink" href="/approach">How we work <span className="arrow" aria-hidden="true">→</span></a>
            </div>
          </article>

          {/* Card 3 — Principles */}
          <article className="about-card">
            <span className="about-num">03 · Principles</span>
            <div className="about-visual">
              <div className="principles-scroller" aria-label="Origin AI principles">
                <div className="principles-track">
                  <span className="principle-pill">
                    <svg className="check" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3,8.5 6.5,12 13,4.5" /></svg>
                    Outcomes over outputs
                  </span>
                  <span className="principle-pill">
                    <svg className="check" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3,8.5 6.5,12 13,4.5" /></svg>
                    Disciplined delivery
                  </span>
                  <span className="principle-pill">
                    <svg className="check" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3,8.5 6.5,12 13,4.5" /></svg>
                    Senior on the work
                  </span>
                  <span className="principle-pill">
                    <svg className="check" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3,8.5 6.5,12 13,4.5" /></svg>
                    Honest tradeoffs
                  </span>
                  {/* Duplicate set for seamless loop */}
                  <span className="principle-pill" aria-hidden="true">
                    <svg className="check" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3,8.5 6.5,12 13,4.5" /></svg>
                    Outcomes over outputs
                  </span>
                  <span className="principle-pill" aria-hidden="true">
                    <svg className="check" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3,8.5 6.5,12 13,4.5" /></svg>
                    Disciplined delivery
                  </span>
                  <span className="principle-pill" aria-hidden="true">
                    <svg className="check" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3,8.5 6.5,12 13,4.5" /></svg>
                    Senior on the work
                  </span>
                  <span className="principle-pill" aria-hidden="true">
                    <svg className="check" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3,8.5 6.5,12 13,4.5" /></svg>
                    Honest tradeoffs
                  </span>
                </div>
              </div>
            </div>
            <h3 className="about-title">What we believe.</h3>
            <p className="about-body">A short list of non-negotiables that decide what we take on, how we build, and when we say no.</p>
            <div className="about-foot">
              <a className="tlink" href="/principles">What we believe <span className="arrow" aria-hidden="true">→</span></a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
