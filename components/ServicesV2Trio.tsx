/**
 * /services V2 trio of service cards.
 *
 * Three equal-width cards in a row. The middle card (Build) is the
 * centerpiece: lifted, teal border, contains an inline operations
 * dashboard mock. The outer two (Strategy and Managed) use real photo
 * treatments for their visuals (Strategy: meeting_table_crop.jpg,
 * Managed: gradient placeholder until a managed photo is supplied).
 *
 * All styling under the .svcs-v2 scope in styles/services-v2.css.
 */
export default function ServicesV2Trio() {
  return (
    <section className="wrap section" data-screen-label="Services trio">
      <div className="s-head">
        <div>
          <span className="s-eyebrow">Strategy, software, and support under one roof.</span>
          <h2 className="s-h2">
            AI services built around{" "}
            <span className="muted">how companies actually adopt AI.</span>
          </h2>
        </div>
        <p className="s-lede">
          We help leadership teams move from AI interest to working capability,
          with strategy, custom software, and ongoing support shaped around your
          workflows, your people, and the way decisions actually get made.
        </p>
      </div>

      <div className="trio">

        {/* Strategy — has-photo treatment using the meeting_table photo */}
        <article className="svc-card" id="strategy">
          <div className="svc-card-visual has-photo strategy-photo">
            <span className="svc-card-badge">Advisory</span>
          </div>
          <div className="svc-card-body">
            <span className="svc-card-num">AI roadmap &amp; planning</span>
            <h3 className="svc-card-title">AI Strategy &amp; Training</h3>
            <p className="svc-card-promise">
              Workshops, advisory, and AI training for leadership teams. We
              help you decide where AI fits, what to build first, and how to
              bring your people along.
            </p>
            <div className="svc-card-foot">
              <a href="/services/strategy" className="tlink">
                Learn more <span className="arrow" aria-hidden="true">→</span>
              </a>
              <span className="svc-card-anchor">/services/strategy</span>
            </div>
          </div>
        </article>

        {/* Build — centerpiece with an inline operations dashboard mock */}
        <article className="svc-card center" id="build">
          <div className="svc-card-visual">
            <span className="svc-card-badge">The work</span>
            <span className="svc-card-tag">In production</span>
            <div className="dash">
              <div className="dash-head">
                <span>Origin · Operations</span>
                <span className="live"><span className="dot" />Live</span>
              </div>
              <div className="dash-q">Where are we losing time this week?</div>
              <div className="dash-a">
                Intake is the bottleneck. 14 hrs/week recoverable by routing
                class X tickets through the new model.
              </div>
              <div className="dash-chart">
                <span className="bar" style={{ height: "30%" }} />
                <span className="bar" style={{ height: "55%" }} />
                <span className="bar" style={{ height: "42%" }} />
                <span className="bar peak" style={{ height: "88%" }} />
                <span className="bar" style={{ height: "65%" }} />
                <span className="bar" style={{ height: "48%" }} />
                <span className="bar" style={{ height: "35%" }} />
              </div>
              <div className="dash-stats">
                <div className="stat">
                  <span className="val">98%</span>
                  <span className="label">Pipeline</span>
                </div>
                <div className="stat">
                  <span className="val">14</span>
                  <span className="label">Models live</span>
                </div>
                <div className="stat">
                  <span className="val">1.2s</span>
                  <span className="label">Latency</span>
                </div>
              </div>
            </div>
          </div>
          <div className="svc-card-body">
            <span className="svc-card-num">Build · The work</span>
            <h3 className="svc-card-title">AI Software &amp; Systems</h3>
            <p className="svc-card-promise">
              Custom AI software, built for your business. Extend, connect, or
              replace the tools you&rsquo;ve been duct-taping together with
              systems shaped to how your team actually works.
            </p>
            <div className="svc-card-foot">
              <a href="/services/build" className="tlink">
                Explore what we build <span className="arrow" aria-hidden="true">→</span>
              </a>
              <span className="svc-card-anchor">/services/build</span>
            </div>
          </div>
        </article>

        {/* Managed — uptime/improvement trend chart visual.
            Matches the original Claude Design "After we ship" card:
            line chart trending up to 99.7%, status caption row at the
            bottom, "30 days" timeframe label in the upper-right. */}
        <article className="svc-card" id="managed">
          <div className="svc-card-visual managed-photo">
            <span className="svc-card-badge">After we ship</span>
            <span className="managed-timeframe">30 days</span>

            <div className="managed-chart-wrap" aria-hidden="true">
              <svg
                className="managed-chart"
                viewBox="0 0 280 130"
                preserveAspectRatio="none"
              >
                {/* Subtle horizontal grid lines for context */}
                <line x1="0" y1="40" x2="280" y2="40" className="managed-grid" />
                <line x1="0" y1="80" x2="280" y2="80" className="managed-grid" />

                {/* Area under the curve */}
                <path
                  className="managed-area"
                  d="M 0 102 C 30 98 50 92 75 84 C 105 76 120 80 145 64 C 175 50 195 56 220 38 L 280 14 L 280 130 L 0 130 Z"
                />

                {/* The trending line on top of the area */}
                <path
                  className="managed-line"
                  d="M 0 102 C 30 98 50 92 75 84 C 105 76 120 80 145 64 C 175 50 195 56 220 38 L 280 14"
                  fill="none"
                />

                {/* Intermediate data points */}
                <circle cx="50" cy="92" r="2.5" className="managed-pt" />
                <circle cx="120" cy="80" r="2.5" className="managed-pt" />
                <circle cx="195" cy="56" r="2.5" className="managed-pt" />
                <circle cx="245" cy="26" r="2.5" className="managed-pt" />

                {/* Peak endpoint with pulsing glow ring */}
                <circle cx="277" cy="14" r="3" className="managed-peak-dot" />
                <circle cx="277" cy="14" r="7" className="managed-peak-ring" />
              </svg>

              {/* Peak value label sitting near the endpoint */}
              <span className="managed-peak-value">99.7%</span>
            </div>

            {/* Bottom caption row */}
            <div className="managed-caption">
              <span className="managed-status">
                <span className="dot" />Live · 14 systems running
              </span>
              <span className="managed-uptime">99.7% uptime</span>
            </div>
          </div>
          <div className="svc-card-body">
            <span className="svc-card-num">After we ship</span>
            <h3 className="svc-card-title">Managed AI</h3>
            <p className="svc-card-promise">
              We keep improving the AI systems we ship through a defined
              monthly scope. New workflows, fixes, optimization, and one team
              accountable for keeping it useful.
            </p>
            <div className="svc-card-foot">
              <a href="/services/managed" className="tlink">
                Learn more <span className="arrow" aria-hidden="true">→</span>
              </a>
              <span className="svc-card-anchor">/services/managed</span>
            </div>
          </div>
        </article>

      </div>
    </section>
  );
}
