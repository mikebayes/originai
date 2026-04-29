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
              {/* Aurora gradient field acts as the backdrop. Floating UI
                  mockup on top reads as "the kind of AI software we build". */}
              <div className="aurora-base" aria-hidden="true" />
              <div className="aurora-ribbon" aria-hidden="true" />
              <div className="aurora-noise" aria-hidden="true" />

              {/* Stylized AI software mockup. Designed-looking, not a literal
                  screenshot of any real product. Communicates "AI software"
                  immediately and visibly. */}
              <div className="ui-mockup" aria-hidden="true">
                <div className="ui-titlebar">
                  <span className="ui-dot ui-dot-r" />
                  <span className="ui-dot ui-dot-y" />
                  <span className="ui-dot ui-dot-g" />
                  <span className="ui-title">Origin · Operations</span>
                </div>
                <div className="ui-body">
                  <div className="ui-chat">
                    <div className="ui-msg ui-msg-user">
                      <div className="ui-msg-content">
                        Where are we losing time this week?
                      </div>
                    </div>
                    <div className="ui-msg ui-msg-ai">
                      <div className="ui-msg-avatar" />
                      <div className="ui-msg-content">
                        <div className="ui-msg-text">
                          Intake is the bottleneck. <span className="ui-accent">14 hours/week</span>{" "}
                          recoverable by routing class&nbsp;X tickets through the new model.
                          <span className="ui-msg-cursor" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ui-stats">
                    <div className="ui-stat">
                      <span className="ui-stat-dot" />
                      <div className="ui-stat-content">
                        <span className="ui-stat-label">Pipeline</span>
                        <span className="ui-stat-value">98%</span>
                      </div>
                    </div>
                    <div className="ui-stat">
                      <span className="ui-stat-dot ui-stat-dot-pulse" />
                      <div className="ui-stat-content">
                        <span className="ui-stat-label">Models</span>
                        <span className="ui-stat-value">14 live</span>
                      </div>
                    </div>
                    <div className="ui-stat">
                      <span className="ui-stat-dot" />
                      <div className="ui-stat-content">
                        <span className="ui-stat-label">Latency</span>
                        <span className="ui-stat-value">1.2s</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

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
