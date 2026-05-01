/**
 * "What you get" — deliverables for the Build engagement.
 *
 * Six items in a 2-column grid. Each has a teal checkmark, a bold
 * title, and a one-sentence body. Output-focused: what actually
 * lands when we ship. No "runbooks" word per Mike's direction.
 */
const ITEMS = [
  {
    title: "Production-ready software.",
    body: "Live, deployed, in your stack, used by real people on day one.",
  },
  {
    title: "Clean UX and working interfaces.",
    body: "Designed for the people using it, not for a screenshot in a deck.",
  },
  {
    title: "Integrations with what you already run.",
    body: "The new system talks to your CRM, your data warehouse, your auth layer, whatever's already there. We don't build islands.",
  },
  {
    title: "AI features where they earn their place.",
    body: "Used where they actually move the work forward. Not pasted on.",
  },
  {
    title: "Launch support.",
    body: "The first weeks after go-live are when most software falls over. We're there for them.",
  },
  {
    title: "Trained users and ownership transfer.",
    body: "Your team knows how it works, how to maintain it, and where the seams are.",
  },
];

export default function ServicesBuildDeliverables() {
  return (
    <section className="wrap section" data-screen-label="What you get">
      <div className="s-head">
        <div>
          <span className="s-eyebrow">Outputs</span>
          <h2 className="s-h2">
            What lands{" "}
            <span className="muted">when we ship.</span>
          </h2>
        </div>
        <p className="s-lede">
          Tangible deliverables at the end of every engagement, not
          deliverable theater.
        </p>
      </div>

      <div className="build-deliver-grid">
        {ITEMS.map((it) => (
          <div className="build-deliver-item" key={it.title}>
            <span className="build-deliver-check" aria-hidden="true">
              <svg viewBox="0 0 12 12" fill="none">
                <path
                  d="M2.5 6.2 L4.7 8.4 L9.3 3.6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div className="build-deliver-text">
              <span className="build-deliver-title">{it.title}</span>
              <p className="build-deliver-body">{it.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
