/**
 * DRAFT homepage services section.
 *
 * Rewritten from the asymmetric featured-left layout (one large Build
 * card with the aurora field and review dashboard, two smaller support
 * cards) into four equal-weight cards.
 *
 * Why: the old layout gave AI Software & Systems roughly three times the
 * visual weight of the other lanes, which read build-first. The rest of
 * the site now presents Origin as helping organizations move from AI
 * interest to adoption across four services, and the homepage needs to
 * match that.
 *
 * Layout: 2x2 on desktop rather than 4-across. At the site's 1240px
 * content width, four columns leaves roughly 280px per card, which is
 * too narrow for a title, body, and CTA without crowding.
 *
 * Making the cards related but not identical: each carries a small
 * system-like SVG mark drawn in muted teal hairlines. No AI icons, no
 * dashboards, no decorative widgets. The Workflow card's mark is the
 * only nod to the old product visual, reduced to a few nodes and
 * connectors.
 *
 * Two-tone heading treatment is used once, on the section H2 only.
 */

/* ── Card marks. Hairline geometry, no icons. ─────────────────────── */

/* Leadership: four points converging on one. Alignment. */
function MarkAlign() {
  return (
    <svg viewBox="0 0 64 40" fill="none" aria-hidden="true">
      <circle cx="6" cy="8" r="2" className="dh-mk-dot" />
      <circle cx="6" cy="20" r="2" className="dh-mk-dot" />
      <circle cx="6" cy="32" r="2" className="dh-mk-dot" />
      <path d="M8 8 L32 20" className="dh-mk-line" />
      <path d="M8 20 L32 20" className="dh-mk-line" />
      <path d="M8 32 L32 20" className="dh-mk-line" />
      <circle cx="35" cy="20" r="3" className="dh-mk-node" />
      <path d="M38 20 L58 20" className="dh-mk-line-strong" />
    </svg>
  );
}

/* Team: a roster of rows gaining definition left to right. */
function MarkRoster() {
  return (
    <svg viewBox="0 0 64 40" fill="none" aria-hidden="true">
      <path d="M4 8 L26 8" className="dh-mk-line" />
      <path d="M30 8 L48 8" className="dh-mk-line-strong" />
      <path d="M4 20 L20 20" className="dh-mk-line" />
      <path d="M24 20 L54 20" className="dh-mk-line-strong" />
      <path d="M4 32 L32 32" className="dh-mk-line" />
      <path d="M36 32 L44 32" className="dh-mk-line-strong" />
      <circle cx="58" cy="8" r="2" className="dh-mk-dot" />
      <circle cx="58" cy="20" r="2" className="dh-mk-dot" />
      <circle cx="48" cy="32" r="2" className="dh-mk-dot" />
    </svg>
  );
}

/* Workflow: nodes and connectors. The reduced trace of the old mock. */
function MarkFlow() {
  return (
    <svg viewBox="0 0 64 40" fill="none" aria-hidden="true">
      <rect x="4" y="14" width="12" height="12" rx="2" className="dh-mk-box" />
      <path d="M16 20 L26 20" className="dh-mk-line-strong" />
      <rect x="26" y="6" width="12" height="10" rx="2" className="dh-mk-box" />
      <rect x="26" y="24" width="12" height="10" rx="2" className="dh-mk-box" />
      <path d="M38 11 L48 20" className="dh-mk-line" />
      <path d="M38 29 L48 20" className="dh-mk-line" />
      <circle cx="52" cy="20" r="3.5" className="dh-mk-node" />
    </svg>
  );
}

/* Managed: a stepped line continuing past the frame. Ongoing. */
function MarkSteps() {
  return (
    <svg viewBox="0 0 64 40" fill="none" aria-hidden="true">
      <path
        d="M4 32 L16 32 L16 24 L28 24 L28 16 L40 16 L40 10 L52 10"
        className="dh-mk-line-strong"
      />
      <circle cx="16" cy="32" r="1.8" className="dh-mk-dot" />
      <circle cx="28" cy="24" r="1.8" className="dh-mk-dot" />
      <circle cx="40" cy="16" r="1.8" className="dh-mk-dot" />
      <circle cx="52" cy="10" r="3" className="dh-mk-node" />
      <path d="M56 10 L62 10" className="dh-mk-line" strokeDasharray="2 3" />
    </svg>
  );
}

const SERVICES = [
  {
    num: "01",
    label: "Leadership",
    title: "Leadership AI Enablement",
    body: "Clarify where AI belongs, what matters, and what should move first.",
    href: "/services/strategy",
    cta: "Explore leadership enablement",
    Mark: MarkAlign,
  },
  {
    num: "02",
    label: "Team",
    title: "Team AI Training",
    body: "Build team fluency around real roles, tasks, examples, and responsible use.",
    href: "/services/ai-training",
    cta: "Explore team training",
    Mark: MarkRoster,
  },
  {
    num: "03",
    label: "Workflows",
    title: "AI Workflow Development",
    body: "Turn high-value opportunities into focused AI tools, assistants, automations, integrations, or internal systems.",
    href: "/services/build",
    cta: "Explore workflow development",
    Mark: MarkFlow,
  },
  {
    num: "04",
    label: "Improvement",
    title: "Managed AI Improvement",
    body: "Keep live AI systems, workflows, standards, and adoption efforts improving as the business learns what works.",
    href: "/services/managed",
    cta: "Explore managed improvement",
    Mark: MarkSteps,
  },
];

export default function DraftServices() {
  return (
    <section className="dh-svcs" data-screen-label="Services">
      <div className="dh-svcs-grain" aria-hidden="true" />

      <div className="dh-svcs-inner">
        <header className="dh-svcs-head" data-reveal>
          <span className="dh-rule" aria-hidden="true" />
          <h2 className="dh-svcs-h2 display">
            Our AI services. Four ways to move from{" "}
            <span className="muted">interest to adoption.</span>
          </h2>
          <p className="dh-svcs-lede">
            Start with the need in front of you. Leadership enablement, team
            training, workflow development, and managed improvement can stand
            alone or work together.
          </p>
        </header>

        <div className="dh-svcs-grid" data-reveal-stagger>
          {SERVICES.map(({ num, label, title, body, href, cta, Mark }) => (
            <a key={num} href={href} className="dh-svc">
              <div className="dh-svc-top">
                <span className="dh-svc-num">{num}</span>
                <span className="dh-svc-label">{label}</span>
              </div>

              <div className="dh-svc-mark" aria-hidden="true">
                <Mark />
              </div>

              <h3 className="dh-svc-title">{title}</h3>
              <p className="dh-svc-body">{body}</p>

              <span className="dh-svc-cta">
                {cta}
                <span className="dh-svc-arrow" aria-hidden="true">
                  →
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
