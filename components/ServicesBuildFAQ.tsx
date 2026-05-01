/**
 * Build page FAQ — practical questions about Origin's Build engagement.
 *
 * Native HTML <details>/<summary> for accessibility and zero-JS
 * accordion behavior. First item open by default.
 */
const FAQ = [
  {
    q: "Who owns the code?",
    a: "You do. Source code, IP, and ongoing rights to the system live with you. We don't gate access or hold leverage.",
    open: true,
  },
  {
    q: "Do we have to replace our current software?",
    a: "Usually not. Most engagements extend or sit alongside what you already run. We help you make that call, we don't pre-decide it.",
  },
  {
    q: "Can you build on top of tools we already use?",
    a: "Yes. Salesforce, HubSpot, NetSuite, internal databases. The system we ship integrates with what's there.",
  },
  {
    q: "What happens after launch?",
    a: "You can take it from there, or we keep going on a defined monthly scope under our Managed AI service. Either way, the team you worked with is the team that supports it.",
  },
  {
    q: "How quickly can something be built?",
    a: "Smaller scoped builds: four to eight weeks. Mid-size systems: eight to fourteen. Larger or more integrated platforms: longer, but rarely the nine-plus months traditional dev shops quote.",
  },
];

export default function ServicesBuildFAQ() {
  return (
    <section className="wrap section" data-screen-label="Build FAQ">
      <div className="s-head">
        <div>
          <span className="s-eyebrow">Common questions</span>
          <h2 className="s-h2">
            Practical questions,{" "}
            <span className="muted">answered.</span>
          </h2>
        </div>
        <p className="s-lede">
          What buyers ask before they sign. Honest takes on the parts of
          a build engagement that usually go unwritten.
        </p>
      </div>

      <div className="build-faq">
        {FAQ.map((item, i) => (
          <details
            className="build-faq-item"
            key={i}
            open={item.open}
          >
            <summary className="build-faq-summary">
              <span>{item.q}</span>
              <span className="build-faq-toggle" aria-hidden="true" />
            </summary>
            <p className="build-faq-body">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
