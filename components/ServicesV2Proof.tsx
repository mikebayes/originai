/**
 * /services V2 proof — featured Doug Darling testimonial + selected
 * client wordmark strip.
 *
 * The Tripwire client logo isn't in our public assets yet, so the proof
 * row uses just the engagement label + avatar + name + role until a
 * real logo is supplied (see notes on tripwire.png in the design files).
 */
export default function ServicesV2Proof() {
  return (
    <section className="wrap section" data-screen-label="Proof">
      <div className="s-head">
        <div>
          <span className="s-eyebrow">Proof</span>
          <h2 className="s-h2">
            Companies betting{" "}
            <span className="muted">their AI on us.</span>
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
          <div className="proof-engagement">
            <span className="label">Engagement</span>
            <span className="value">Strategy + Build</span>
          </div>
          {/* Tripwire logo placeholder — once we have tripwire.png in
              public/images we can swap this for the proper image element. */}
          <div className="proof-client">
            <span
              style={{
                fontFamily: "'Inter Tight', sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                letterSpacing: "0.02em",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              Tripwire Media Group
            </span>
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

      <div className="wordmark-strip">
        <span className="wordmark-strip-label">
          <span className="bar" />Selected clients
        </span>
        <div className="wordmark-row">
          <span className="wordmark">Tripwire Media Group</span>
          <span className="wordmark">Direct Focus</span>
          <span className="wordmark">Thor Plumbing &amp; Heating</span>
          <span className="wordmark">Equipco Ltd.</span>
        </div>
      </div>
    </section>
  );
}
