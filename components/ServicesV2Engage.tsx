/**
 * /services V2 "How we engage" phase rail.
 *
 * Forest-green tinted full-bleed section with a 4-block engagement
 * model (Discover / Define / Build / Operate). Each block has a
 * marker, name, body, and a "You leave with" deliverables list.
 *
 * The blocks wrap to two columns at 1100px and a single column at 900px
 * (rules in services-v2.css). Copy updated per Mike's direction —
 * presentation kept mostly as-is, with copy tightened to feel like an
 * operating model rather than a SaaS-template timeline.
 */
export default function ServicesV2Engage() {
  return (
    <section className="engage" id="engage" data-screen-label="How we engage">
      <div className="wrap engage-inner">
        <div className="s-head">
          <div>
            <span className="s-eyebrow">How we engage</span>
            <h2 className="s-h2">
              Most work starts with a decision,{" "}
              <span className="muted">not a system.</span>
            </h2>
          </div>
          <p className="s-lede">
            We work with your leadership team to identify where AI will create
            value, what to build first, and what to leave alone. From there,
            we move quickly into systems that fit how your business actually
            operates.
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
              pressure-test the assumptions already forming around AI.
            </p>
            <div className="phase-deliver">
              <span className="label">You leave with</span>
              <span className="item">Leadership alignment</span>
              <span className="item">Workflow and pain point map</span>
              <span className="item">Ranked AI use cases</span>
            </div>
          </div>

          <div className="phase">
            <div className="phase-marker">
              <span className="phase-dot" />
              <span className="phase-num">Define</span>
              <span className="phase-duration">2–3 weeks</span>
            </div>
            <h3 className="phase-name">Choose the first build.</h3>
            <p className="phase-body">
              We narrow the work to one or two systems with a clear owner, a
              defined outcome, and a budget that matches the value. This is
              where strategy becomes a working brief your team can actually
              act on.
            </p>
            <div className="phase-deliver">
              <span className="label">You leave with</span>
              <span className="item">Sequenced roadmap</span>
              <span className="item">Build brief</span>
              <span className="item">Success metrics and ownership</span>
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
              Our senior team ships the system end to end: data, models, app,
              integrations, and the parts a SaaS template can&rsquo;t cover.
              You get production-grade software, not a notebook handed off to
              your IT team.
            </p>
            <div className="phase-deliver">
              <span className="label">You leave with</span>
              <span className="item">Live production system</span>
              <span className="item">Trained users</span>
              <span className="item">Launch support</span>
            </div>
          </div>

          <div className="phase">
            <div className="phase-marker">
              <span className="phase-dot" />
              <span className="phase-num">Operate</span>
              <span className="phase-duration">Monthly</span>
            </div>
            <h3 className="phase-name">Keep improving.</h3>
            <p className="phase-body">
              After launch, we stay close. Continuous development on a defined
              monthly scope: fixes, optimization, new workflows, and the next
              high-value use case. The system gets better the longer it runs.
            </p>
            <div className="phase-deliver">
              <span className="label">You leave with</span>
              <span className="item">Monitoring and support</span>
              <span className="item">Monthly improvement scope</span>
              <span className="item">A team that knows the system</span>
            </div>
          </div>

        </div>

        <div className="engage-foot">
          <p>
            Most engagements start with a discovery session. Some clients move
            through the full path with us. Some need one focused piece. Either
            way, the team you meet early is the team that stays accountable.
          </p>
          <a href="/contact" className="pill pill-primary">
            Book a discovery session<span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
