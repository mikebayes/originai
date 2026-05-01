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
          <span className="s-eyebrow">Three services. One team.</span>
          <h2 className="s-h2">
            AI services built around{" "}
            <span className="muted">how your business actually works.</span>
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
              help you pick the right AI bets and get your people confident
              putting them to work.
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
              Custom AI software, built for your business. Replace the SaaS
              stack you&rsquo;ve been duct-taping together with a system shaped
              to how your team actually works.
            </p>
            <div className="svc-card-foot">
              <a href="/services/build" className="tlink">
                Explore what we build <span className="arrow" aria-hidden="true">→</span>
              </a>
              <span className="svc-card-anchor">/services/build</span>
            </div>
          </div>
        </article>

        {/* Managed — has-photo treatment (placeholder gradient for now) */}
        <article className="svc-card" id="managed">
          <div className="svc-card-visual has-photo managed-photo">
            <span className="svc-card-badge">After we ship</span>
          </div>
          <div className="svc-card-body">
            <span className="svc-card-num">After we ship</span>
            <h3 className="svc-card-title">Managed AI</h3>
            <p className="svc-card-promise">
              We keep building. Continuous development on the AI we shipped, on
              a defined monthly scope. One team. One accountability line.
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
