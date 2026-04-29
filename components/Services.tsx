export default function Services() {
  return (
    <section className="stage" data-screen-label="Services">
      <div className="stage-grain" aria-hidden="true" />
      <div className="stage-inner">
        <header className="s-header" data-reveal>
          <div>
            <span className="eyebrow">Our services</span>
            <h2 className="s-h2 display">
              <span>From AI ambition to AI in production.</span>
              <span className="muted"> We cover the full path.</span>
            </h2>
          </div>
          <p className="s-lede">
            Strategy, build, and operations under one team. Engage the slice you need or the full path end to end.
          </p>
        </header>

        <div className="services-grid" data-reveal-stagger>
          {/* Card 1 — Opportunity & Roadmap */}
          <article className="svc">
            <div className="svc-photo cphoto">
              <span className="cphoto-badge">Strategy</span>
              <div className="cphoto-grain" aria-hidden="true" />
              <span className="cphoto-caption"><span className="bar" />Strategy session · placeholder</span>
            </div>
            <div className="svc-body">
              <span className="svc-num">01 · Roadmap</span>
              <h3 className="svc-title">AI Opportunity &amp; Roadmap</h3>
              <p className="svc-promise">We map where AI fits, what to build first, and how to sequence the work.</p>
              <div className="svc-foot">
                <a className="tlink" href="/services#opportunity">Learn more <span className="arrow" aria-hidden="true">→</span></a>
                <span className="anchor"><span className="bar" />Align</span>
              </div>
            </div>
          </article>

          {/* Card 2 — AI Solutions & Development (centerpiece) */}
          <article className="svc centerpiece">
            <span className="svc-centerpiece-tag">Centerpiece</span>
            <div className="svc-photo cphoto">
              <span className="cphoto-badge">Build</span>
              <div className="cphoto-grain" aria-hidden="true" />
              <span className="cphoto-caption"><span className="bar" />Engineering bay · placeholder</span>
            </div>
            <div className="svc-body">
              <span className="svc-num">02 · Solutions</span>
              <h3 className="svc-title">AI Solutions &amp; Development</h3>
              <p className="svc-promise">We design, build, and deploy custom AI solutions that solve real business problems.</p>
              <div className="svc-foot">
                <a className="tlink" href="/services#solutions">Learn more <span className="arrow" aria-hidden="true">→</span></a>
                <span className="anchor"><span className="bar" />Activate</span>
              </div>
            </div>
          </article>

          {/* Card 3 — Managed AI */}
          <article className="svc">
            <div className="svc-photo cphoto">
              <span className="cphoto-badge">Operate</span>
              <div className="cphoto-grain" aria-hidden="true" />
              <span className="cphoto-caption"><span className="bar" />Operations floor · placeholder</span>
            </div>
            <div className="svc-body">
              <span className="svc-num">03 · Managed</span>
              <h3 className="svc-title">Managed AI</h3>
              <p className="svc-promise">We operate, monitor, and improve AI systems so they keep delivering value.</p>
              <div className="svc-foot">
                <a className="tlink" href="/services#managed">Learn more <span className="arrow" aria-hidden="true">→</span></a>
                <span className="anchor"><span className="bar" />Govern</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
