export default function Services() {
  return (
    <section className="stage" data-screen-label="Services">
      <div className="stage-grain" aria-hidden="true" />
      <div className="stage-inner">
        <header className="s-header" data-reveal>
          <div>
            <span className="eyebrow">Our services</span>
            <h2 className="s-h2 display">
              <span>Build is the work.</span>
              <span className="muted"> Strategy and operations sit on either side.</span>
            </h2>
          </div>
          <p className="s-lede">
            Three ways in. Pick the one you need. We don&rsquo;t require a discovery
            session before you can buy a build, and we don&rsquo;t pretend a build
            ends when the code ships.
          </p>
        </header>

        {/* Asymmetric featured-left layout: Build occupies the left column,
            Strategy and Managed AI stack on the right as supporting cards. */}
        <div className="services-grid svc-grid-featured-left" data-reveal-stagger>

          {/* Featured: AI Software & Systems (Build) — left column, full height */}
          <article className="svc svc-featured">
            <div className="svc-photo svc-photo-aurora">
              {/* Layered visual: deep gradient base + drifting teal aurora +
                  faint network of nodes/connections + film grain. No literal
                  imagery, just an atmospheric "system being built" field. */}
              <div className="aurora-base" aria-hidden="true" />
              <div className="aurora-ribbon" aria-hidden="true" />
              <svg
                className="aurora-network"
                viewBox="0 0 400 240"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden="true"
              >
                <g className="aurora-lines">
                  <path d="M 60 50 L 180 105" />
                  <path d="M 180 105 L 320 60" />
                  <path d="M 60 50 L 100 175" />
                  <path d="M 180 105 L 215 195" />
                  <path d="M 320 60 L 355 175" />
                  <path d="M 215 195 L 355 175" />
                  <path d="M 100 175 L 215 195" />
                  <path d="M 180 105 L 100 175" />
                </g>
                <g className="aurora-nodes">
                  <circle cx="60"  cy="50"  r="3" />
                  <circle cx="180" cy="105" r="4" className="aurora-node-pulse" />
                  <circle cx="320" cy="60"  r="3" />
                  <circle cx="100" cy="175" r="3" />
                  <circle cx="215" cy="195" r="3" />
                  <circle cx="355" cy="175" r="3" />
                </g>
              </svg>
              <div className="aurora-noise" aria-hidden="true" />
              <span className="cphoto-badge">Build</span>
            </div>
            <div className="svc-body">
              <span className="svc-num">The work</span>
              <h3 className="svc-title">AI Software &amp; Systems</h3>
              <p className="svc-promise">
                Custom AI software, built for your business. Replace the SaaS stack
                you&rsquo;ve been duct-taping together with a system shaped to how
                your team actually works.
              </p>
              <div className="svc-foot">
                <a className="tlink" href="/services#solutions">Start a build conversation <span className="arrow" aria-hidden="true">→</span></a>
              </div>
            </div>
          </article>

          {/* Supporting: AI Strategy — right column, top */}
          <article className="svc svc-supporting">
            <div className="svc-body">
              <span className="svc-num">Before you build</span>
              <h3 className="svc-title">AI Strategy</h3>
              <p className="svc-promise">
                Get unstuck before you build. We help leadership pick the right
                AI bets and sequence them properly.
              </p>
              <div className="svc-foot">
                <a className="tlink" href="/services#strategy">Learn more <span className="arrow" aria-hidden="true">→</span></a>
              </div>
            </div>
          </article>

          {/* Supporting: Managed AI — right column, bottom */}
          <article className="svc svc-supporting">
            <div className="svc-body">
              <span className="svc-num">After we ship</span>
              <h3 className="svc-title">Managed AI</h3>
              <p className="svc-promise">
                We keep building. Continuous development on the AI we shipped,
                on a defined monthly scope.
              </p>
              <div className="svc-foot">
                <a className="tlink" href="/services#managed">Learn more <span className="arrow" aria-hidden="true">→</span></a>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}
