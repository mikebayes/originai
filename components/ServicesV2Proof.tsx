/**
 * /services V2 Customer Spotlight (was Proof).
 *
 * Reframed from a broad "proof" claim to a customer spotlight:
 *   - Eyebrow: Customer Spotlight
 *   - H2: How leaders are putting AI to work.
 *   - Featured Tripwire spotlight: small premium logo card + the
 *     Doug Darling quote + engagement label "AI Strategy + Training".
 *   - Selected Clients row underneath using real client logos
 *     (Tripwire, Direct Focus, Thor, Equipco). Same logo set used on
 *     the homepage Proof section so the brand reads consistently.
 *
 * The Tripwire logo intentionally appears in BOTH the spotlight chip
 * and the Selected Clients row. Per Mike's direction this is OK; both
 * placements serve different purposes (one anchors the testimonial,
 * the other rounds out the client roster).
 */
export default function ServicesV2Proof() {
  return (
    <section className="wrap section" data-screen-label="Customer Spotlight">
      <div className="s-head">
        <div>
          <span className="s-eyebrow">Customer Spotlight</span>
          <h2 className="s-h2">
            How leaders are{" "}
            <span className="muted">putting AI to work.</span>
          </h2>
        </div>
        <p className="s-lede">
          From operations floors to executive teams, a sample of the work and
          the people behind it.
        </p>
      </div>

      <div className="proof-feature">
        <div className="proof-quote-col">
          <span className="proof-mark">&ldquo;</span>
          <p className="proof-quote">
            Origin{" "}
            <span className="accent">shifted the way our team thinks.</span>{" "}
            They taught us how to frame problems in a way that unlocks better
            solutions. That shift alone has changed how we operate.
          </p>
        </div>
        <div className="proof-attr-col">
          {/* Real Tripwire logo as a small premium chip — same client-logo-card
              treatment the homepage Proof section uses, sized down for the
              spotlight context via .spotlight-logo class. */}
          <div className="proof-client">
            <div className="client-logo-card spotlight-logo">
              <img
                src="/logos/clients/tripwire.png"
                alt="Tripwire Media Group"
              />
            </div>
          </div>
          <div className="proof-engagement">
            <span className="label">Engagement</span>
            <span className="value">AI Strategy + Training</span>
          </div>
          <div className="proof-attr">
            <div className="proof-avatar">
              <img
                src="/images/testimonial-doug-darling.png"
                alt="Doug Darling"
              />
            </div>
            <div className="meta">
              <span className="name">Doug Darling</span>
              <span className="role">CEO, Tripwire Media Group</span>
              <a
                href="https://www.tripwiremedia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="site"
              >
                tripwiremedia.com ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Clients row — real logos, same chip treatment as the
          homepage Proof section. ClickLogiq and AAA omitted because the
          assets aren't in /logos/clients/ yet. */}
      <div className="wordmark-strip">
        <span className="wordmark-strip-label">
          <span className="bar" />Selected clients
        </span>
        <div className="wordmark-row">
          <div className="client-logo-card">
            <img src="/logos/clients/tripwire.png" alt="Tripwire Media Group" />
          </div>
          <div className="client-logo-card">
            <img src="/logos/clients/direct-focus.jpg" alt="Direct Focus" />
          </div>
          <div className="client-logo-card">
            <img src="/logos/clients/thor.png" alt="Thor Plumbing &amp; Heating" />
          </div>
          <div className="client-logo-card">
            <img src="/logos/clients/equipco.png" alt="Equipco Ltd." />
          </div>
        </div>
      </div>
    </section>
  );
}
