export default function Proof() {
  return (
    <section className="stage" data-screen-label="Proof">
      <div className="stage-grain" aria-hidden="true" />
      <div className="stage-inner">
        <header className="s-header" data-reveal>
          <div>
            <span className="eyebrow">Proof</span>
            <h2 className="s-h2 display">
              <span>Companies betting</span>
              <span className="muted"> their AI on us.</span>
            </h2>
          </div>
          <p className="s-lede">
            From operations floors to executive teams, a sample of the work and the people behind it.
          </p>
        </header>

        {/* Client logo row — each logo sits inside a white "chip" card so
            the original brand colors render naturally on a dark page. */}
        <div className="proof-marks" aria-label="Selected clients" data-reveal>
          <span className="proof-marks-label"><span className="bar" />Selected clients</span>
          <div className="proof-marks-row">
            <div className="client-logo-card">
              <img src="/logos/clients/tripwire.png" alt="Tripwire Media Group" />
            </div>
            <div className="client-logo-card">
              <img src="/logos/clients/direct-focus.jpg" alt="Direct Focus" />
            </div>
            <div className="client-logo-card">
              <img src="/logos/clients/thor.png" alt="Thor Plumbing &amp; Heating" />
            </div>
            <div className="client-logo-card">
              <img src="/logos/clients/equipco.png" alt="Equipco Ltd." />
            </div>
          </div>
        </div>

        {/* Two testimonials */}
        <div className="testimonials" data-reveal-stagger>
          <figure className="testimonial">
            <blockquote className="t-quote">
              Origin shifted the way our team thinks. They taught us how to frame problems in a way that unlocks better solutions. <span className="accent">That shift alone has changed how we operate.</span>
            </blockquote>
            <figcaption className="t-attr">
              <span className="t-avatar" aria-hidden="true">DD</span>
              <span className="t-meta">
                <span className="t-name">Doug Darling</span>
                <span className="t-role">CEO, Tripwire Media Group</span>
              </span>
            </figcaption>
          </figure>

          <figure className="testimonial">
            <blockquote className="t-quote">
              After two workshops with Origin, our team felt noticeably more confident using AI. <span className="accent">The mindset shift paid off immediately</span>, with staff identifying and building valuable use cases on their own.
            </blockquote>
            <figcaption className="t-attr">
              <span className="t-avatar" aria-hidden="true">KN</span>
              <span className="t-meta">
                <span className="t-name">Keith Nyman</span>
                <span className="t-role">VP Operations, Direct Focus</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
