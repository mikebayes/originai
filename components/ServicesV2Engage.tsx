/**
 * /services V2 "How we engage" phase rail.
 *
 * Replaces the V1 photo+anchor "What that means in practice" treatment.
 * This is a forest-green tinted full-bleed section with a 4-column
 * timeline of phases (Discover / Frame / Build / Operate), each with a
 * marker, name, body, and a "You leave with" deliverables list.
 *
 * The phase rail wraps around to two columns at 1100px and a single
 * column at 900px (rules already live in services-v2.css).
 */
export default function ServicesV2Engage() {
  return (
    <section className="engage" id="engage" data-screen-label="How we engage">
      <div className="wrap engage-inner">
        <div className="s-head">
          <div>
            <span className="s-eyebrow">How we engage</span>
            <h2 className="s-h2">
              Most of our work starts with a decision,{" "}
              <span className="muted">not a system.</span>
            </h2>
          </div>
          <p className="s-lede">
            We work with your leadership team to identify where AI will actually
            create value, what to build first, and what to ignore. From there,
            we move quickly into designing and deploying systems that fit how
            your business operates.
          </p>
        </div>

        <div className="phase-rail">

          <div className="phase">
            <div className="phase-marker">
              <span className="phase-dot" />
              <span className="phase-num">Discover</span>
              <span className="phase-duration">1–2 weeks</span>
            </div>
            <h3 className="phase-name">Map the work.</h3>
            <p className="phase-body">
              A short engagement with leadership and operators. We map the
              workflows, surface where time and judgment are leaking, and
              pressure-test the assumptions you&rsquo;re already making about AI.
            </p>
            <div className="phase-deliver">
              <span className="label">You leave with</span>
              <span className="item">Mapped workflow &amp; pain points</span>
              <span className="item">Candidate AI use cases, ranked</span>
              <span className="item">Honest read on readiness</span>
            </div>
          </div>

          <div className="phase">
            <div className="phase-marker">
              <span className="phase-dot" />
              <span className="phase-num">Frame</span>
              <span className="phase-duration">2–3 weeks</span>
            </div>
            <h3 className="phase-name">Pick the bet.</h3>
            <p className="phase-body">
              We pick the bet. One or two systems with a clear owner, a defined
              outcome, and a budget that matches the value. No 40-page strategy
              decks, just a working brief your team can actually act on.
            </p>
            <div className="phase-deliver">
              <span className="label">You leave with</span>
              <span className="item">Sequenced AI roadmap</span>
              <span className="item">Build brief &amp; success metrics</span>
              <span className="item">Defined ownership &amp; guardrails</span>
            </div>
          </div>

          <div className="phase">
            <div className="phase-marker">
              <span className="phase-dot" />
              <span className="phase-num">Build</span>
              <span className="phase-duration">6–14 weeks</span>
            </div>
            <h3 className="phase-name">Ship the system.</h3>
            <p className="phase-body">
              Senior engineers ship the system end to end: data, models, app,
              integrations, the parts a SaaS template can&rsquo;t cover. You
              get production-grade software, not a notebook handed off to your
              IT team.
            </p>
            <div className="phase-deliver">
              <span className="label">You leave with</span>
              <span className="item">Production AI system, live</span>
              <span className="item">Trained users on the floor</span>
              <span className="item">Runbook &amp; ownership transfer</span>
            </div>
          </div>

          <div className="phase">
            <div className="phase-marker">
              <span className="phase-dot" />
              <span className="phase-num">Operate</span>
              <span className="phase-duration">Monthly</span>
            </div>
            <h3 className="phase-name">Keep building.</h3>
            <p className="phase-body">
              After we ship, we stay on. Continuous development on a defined
              monthly scope: model drift, new workflows, new bets. The system
              gets better the longer it runs.
            </p>
            <div className="phase-deliver">
              <span className="label">You leave with</span>
              <span className="item">Monitored &amp; supported system</span>
              <span className="item">Monthly improvement scope</span>
              <span className="item">A team you can call</span>
            </div>
          </div>

        </div>

        <div className="engage-foot">
          <p>
            Most engagements start with a discovery session. Some clients run
            all four phases with us. Some pick one. Either way, the team you
            talk to in week one is the team that ships.
          </p>
          <a href="/contact" className="pill pill-primary">
            Book a discovery session<span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
