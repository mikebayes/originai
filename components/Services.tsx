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
                      <div className="ui-msg-bubble">
                        <div className="ui-msg-content">
                          <div className="ui-msg-text">
                            Intake is the bottleneck. <span className="ui-accent">14 hours/week</span>{" "}
                            recoverable by routing class&nbsp;X tickets through the new model.
                            <span className="ui-msg-cursor" />
                          </div>
                        </div>
                        {/* Light "result card" attached to the AI reply — looks like a
                            generated data artifact, breaks up the dark palette. */}
                        <div className="ui-card-preview">
                          <div className="ui-card-head">
                            <span className="ui-card-title">Time recoverable by class</span>
                            <span className="ui-card-meta">7d</span>
                          </div>
                          <svg className="ui-card-chart" viewBox="0 0 200 56" preserveAspectRatio="none">
                            <rect x="2"   y="30" width="28" height="26" rx="2" />
                            <rect x="36"  y="38" width="28" height="18" rx="2" />
                            <rect x="70"  y="6"  width="28" height="50" rx="2" className="ui-card-bar-accent" />
                            <rect x="104" y="34" width="28" height="22" rx="2" />
                            <rect x="138" y="22" width="28" height="34" rx="2" />
                            <rect x="172" y="44" width="26" height="12" rx="2" />
                          </svg>
                          <div className="ui-card-foot">
                            <span className="ui-card-stat">
                              <span className="ui-card-stat-label">Recovered</span>
                              <span className="ui-card-stat-value">14h</span>
                            </span>
                            <span className="ui-card-divider" />
                            <span className="ui-card-stat">
                              <span className="ui-card-stat-label">Class</span>
                              <span className="ui-card-stat-value">X · Intake</span>
                            </span>
                          </div>
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
              <span className="svc-num">AI roadmap &amp; planning</span>
              <h3 className="svc-title">AI Strategy</h3>
              <p className="svc-promise">
                Get unstuck before you build. We help leadership pick the right
                AI bets and sequence them properly.
              </p>
              {/* Mini roadmap: four phase milestones, two done, current
                  active, one future. Reads as "we plan and sequence". */}
              <div className="svc-photo svc-photo-mini svc-photo-roadmap">
                <svg className="mini-roadmap" viewBox="0 0 300 50" aria-hidden="true">
                  <line x1="22" y1="25" x2="278" y2="25" className="mini-track" />
                  <g className="mini-node-done">
                    <circle cx="22" cy="25" r="7" />
                    <path d="M18.5 25 L21.5 28 L26 22" />
                  </g>
                  <g className="mini-node-done">
                    <circle cx="107" cy="25" r="7" />
                    <path d="M103.5 25 L106.5 28 L111 22" />
                  </g>
                  <circle cx="192" cy="25" r="8" className="mini-node-active" />
                  <circle cx="278" cy="25" r="7" className="mini-node-future" />
                </svg>
                <span className="mini-caption"><span className="bar" />Phased roadmap</span>
              </div>
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
              {/* Mini monitoring sparkline trending up, ending in a pulsing
                  teal dot. Reads as "live, ongoing, improving". */}
              <div className="svc-photo svc-photo-mini svc-photo-monitor">
                <svg className="mini-sparkline" viewBox="0 0 300 60" preserveAspectRatio="none" aria-hidden="true">
                  <path className="mini-area" d="M 0 42 Q 60 46 95 32 T 175 22 T 250 14 L 300 8 L 300 60 L 0 60 Z" />
                  <path className="mini-line" d="M 0 42 Q 60 46 95 32 T 175 22 T 250 14 L 300 8" />
                  <circle cx="50"  cy="44" r="2" className="mini-point" />
                  <circle cx="120" cy="28" r="2" className="mini-point" />
                  <circle cx="195" cy="20" r="2" className="mini-point" />
                  <circle cx="260" cy="12" r="2" className="mini-point" />
                  <circle cx="294" cy="9"  r="4.5" className="mini-pulse" />
                </svg>
                <span className="mini-caption"><span className="bar" />Live · 14 systems running</span>
              </div>
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
