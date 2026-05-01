/**
 * "What we build" — eight categories grid + selected work thumbnail row.
 *
 * The most important section on the page. Concrete categories with
 * teal accent left lines (matching the Beliefs section convention).
 * Below the grid, a "Selected work" row with placeholder thumbnails
 * until real screenshots are loaded.
 */
const CATEGORIES = [
  {
    title: "AI-enabled websites",
    body: "Customer-facing experiences with AI woven into the surface. Search, copilots, dynamic content, conversation. Not a chatbot bolted on at the corner.",
  },
  {
    title: "Custom business applications",
    body: "End-to-end software built around your operation. Not configurations of someone else's app, not low-code patchwork. Real software shaped to the actual work.",
  },
  {
    title: "Internal workflow systems",
    body: "The unsexy backbone of most companies. Order intake, scheduling, approvals, dispatch. The daily friction nobody markets. We make it faster.",
  },
  {
    title: "SaaS extensions and replacements",
    body: "Some tools you can build on top of. Some you should retire. We help you decide which, then ship whatever the answer is.",
  },
  {
    title: "AI assistants, copilots, and agents",
    body: "Sitting next to people doing real work, taking the cognitive overhead off the routine parts. Where AI actually moves the needle.",
  },
  {
    title: "Data and integration layers",
    body: "Connecting the systems you've already paid for so they actually talk. Where most AI projects quietly die without this layer in place.",
  },
  {
    title: "Customer and employee portals",
    body: "Login-gated experiences for clients, partners, or staff. Tailored to their workflow, not the same dashboard everyone else has.",
  },
  {
    title: "Operational dashboards and decision tools",
    body: "When the business runs on judgment but the data lives in seven places. We pull it together, with AI doing the boring synthesis.",
  },
];

const WORK_THUMBS = [
  { label: "Operations dashboard" },
  { label: "Customer portal" },
  { label: "Internal scheduling tool" },
];

export default function ServicesBuildWhat() {
  return (
    <section className="wrap section" data-screen-label="What we build">
      <div className="s-head">
        <div>
          <span className="s-eyebrow">The work</span>
          <h2 className="s-h2">
            Eight directions,{" "}
            <span className="muted">all custom.</span>
          </h2>
        </div>
        <p className="s-lede">
          Most of what we ship is software shaped to a specific business
          problem. The categories below are how that work tends to show up.
        </p>
      </div>

      <div className="build-what-grid">
        {CATEGORIES.map((cat) => (
          <div className="build-cat" key={cat.title}>
            <h3 className="build-cat-title">{cat.title}</h3>
            <p className="build-cat-body">{cat.body}</p>
          </div>
        ))}
      </div>

      {/* Selected work row — placeholder thumbnails until real
          project screenshots are dropped into public/images/work/. */}
      <div className="build-work-row">
        <span className="wordmark-strip-label">
          <span className="bar" />Selected work
        </span>
        <div className="build-work-thumbs">
          {WORK_THUMBS.map((t) => (
            <div className="build-thumb" key={t.label}>
              <div className="build-thumb-img" aria-hidden="true" />
              <span className="build-thumb-label">{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
