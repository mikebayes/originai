/**
 * "The software market changed" — manifesto beat for the Build page.
 *
 * Single editorial column. Big two-tone H2, two body paragraphs, then
 * a thin teal accent rule as the section's exit punctuation.
 */
export default function ServicesBuildManifesto() {
  return (
    <section
      className="wrap section build-manifesto"
      data-screen-label="The software market changed"
    >
      <div className="manifesto-block">
        <h2 className="build-manifesto-h2">
          Custom software used to take months.{" "}
          <span className="muted">Now it doesn&rsquo;t have to.</span>
        </h2>
        <div className="build-manifesto-body">
          <p>
            For most of the last twenty years, building custom software has
            been the privilege of teams with deep budgets and patience.
            Everyone else got SaaS. Some of it fit. Most of it almost fit.
            So companies bent around the tool, exported to spreadsheets,
            paid for half-features they didn&rsquo;t use, and shipped the
            gap as more process.
          </p>
          <p>
            AI-assisted development changes the math. The same systems that
            used to take six months now take six weeks. Smaller teams can
            ship serious software. Mid-market companies can have tools that
            fit how they actually work, not tools they had to twist into
            shape. The economics of custom finally favor the work.
          </p>
        </div>
        <div className="build-manifesto-rule" aria-hidden="true" />
      </div>
    </section>
  );
}
