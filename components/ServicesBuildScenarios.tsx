/**
 * "Where this work tends to show up" — five scenario blocks.
 *
 * Vertical numbered list (01-05) with hairline rules between. Reads
 * as editorial, not as case study cards. Stand-ins for real proof
 * until we have a deeper proof bench to draw from.
 */
const SCENARIOS = [
  {
    num: "01",
    title: "Replacing a duct-taped workflow.",
    body: "A team uses three apps and two spreadsheets to do one job. We replace it with one system that does the actual job, in one place, with AI taking over the parts that don't need a human.",
  },
  {
    num: "02",
    title: "Building an AI-powered customer experience.",
    body: "A website or portal where customers can ask, search, decide, and act in their own words. Conversation, not forms.",
  },
  {
    num: "03",
    title: "Creating an internal decision system.",
    body: "When the business runs on judgment from people scattered across teams but the data lives in seven systems. We bring it together with AI doing the synthesis, leaving the decision to the human.",
  },
  {
    num: "04",
    title: "Launching a tailored internal app faster than expected.",
    body: "Sometimes the right answer is a small, focused tool you'd never find on the SaaS shelf. Six weeks, not six months. Still production-grade.",
  },
  {
    num: "05",
    title: "Extending or replacing software that no longer fits.",
    body: "You've outgrown a tool, or it never quite fit, but ripping it out feels expensive. We assess the build-vs-extend tradeoff honestly, then ship whatever's right.",
  },
];

export default function ServicesBuildScenarios() {
  return (
    <section
      className="wrap section"
      data-screen-label="Where this work shows up"
    >
      <div className="s-head">
        <div>
          <span className="s-eyebrow">Patterns of the work</span>
          <h2 className="s-h2">
            Where this work{" "}
            <span className="muted">tends to show up.</span>
          </h2>
        </div>
        <p className="s-lede">
          Real shapes of engagements we see often. Not case studies, not
          yet, but the patterns are real.
        </p>
      </div>

      <div className="build-scenarios">
        {SCENARIOS.map((s) => (
          <div className="build-scenario" key={s.num}>
            <span className="build-scenario-num">{s.num}</span>
            <div className="build-scenario-body">
              <h3 className="build-scenario-title">{s.title}</h3>
              <p className="build-scenario-text">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
