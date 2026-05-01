/**
 * "When custom software makes sense" — qualifier section.
 *
 * Six scenarios in a 2-column grid. Each item has a bold lead
 * statement and a one-sentence elaboration. Helps the buyer
 * self-identify whether this is their problem.
 */
const SCENARIOS = [
  {
    lead: "Your team has bent around the tool.",
    body: "Your process is shaped by what your software allows, not the other way around. People work around it, not with it.",
  },
  {
    lead: "You're stitching systems to do one job.",
    body: "Three SaaS products, two spreadsheets, and a Slack channel for what should be one workflow. Every handoff is a place things go wrong.",
  },
  {
    lead: "Off-the-shelf creates more friction than it removes.",
    body: "You bought a category leader. You only use 30% of it. The 30% you don't use is in the way of the 30% you do.",
  },
  {
    lead: "You want AI inside the work, not next to it.",
    body: "Not a chatbot in the sidebar. AI built into the place where the actual decision happens.",
  },
  {
    lead: "You need speed traditional dev shops can't deliver.",
    body: "What used to be a nine-month project is now a nine-week project. The market shifted. Some teams haven't caught up.",
  },
  {
    lead: "You want to own more of your workflow, data, or IP.",
    body: "When the system you run on is something you bought, you're a tenant. When you built it, you're an owner.",
  },
];

export default function ServicesBuildWhen() {
  return (
    <section
      className="wrap section"
      data-screen-label="When custom makes sense"
    >
      <div className="s-head">
        <div>
          <span className="s-eyebrow">When this fits</span>
          <h2 className="s-h2">
            Custom is the right call{" "}
            <span className="muted">when&hellip;</span>
          </h2>
        </div>
        <p className="s-lede">
          Six signals we hear from buyers who end up working with us.
          If a few of these sound familiar, we&rsquo;re probably a fit.
        </p>
      </div>

      <div className="build-when-grid">
        {SCENARIOS.map((s) => (
          <div className="build-when-item" key={s.lead}>
            <h3 className="build-when-lead">{s.lead}</h3>
            <p className="build-when-body">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
