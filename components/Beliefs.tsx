export default function Beliefs() {
  return (
    <section className="beliefs" data-screen-label="Beliefs">
      {/* Top curve — same gentle convex bump pattern as the old Framework section
          had, so the seam between Problem and Beliefs reads as a soft transition. */}
      <svg
        className="beliefs-curve beliefs-curve-top"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M 0 0 L 0 80 Q 720 -8 1440 80 L 1440 0 Z" fill="#050a0c" />
        <path
          d="M 0 80 Q 720 -8 1440 80"
          stroke="rgba(93,168,156,0.18)"
          strokeWidth="0.6"
          fill="none"
        />
      </svg>

      <div className="beliefs-grain" aria-hidden="true" />

      <div className="beliefs-inner">
        <header className="beliefs-header" data-reveal>
          <span className="eyebrow">Our beliefs</span>
          <h2 className="beliefs-h2 display">
            <span>What we believe.</span>
            <span className="muted"> Said out loud.</span>
          </h2>
          <p className="beliefs-lede">
            Three opinions that decide what work we take on, how we build,
            and what we&rsquo;ll never do.
          </p>
        </header>

        <div className="beliefs-grid">

          {/* Editorial photograph — humans at work. Anchors the section
              and balances the otherwise tech-led visual language of the page. */}
          <figure className="beliefs-photo" data-reveal>
            <div className="beliefs-photo-frame">
              <div className="beliefs-photo-img" aria-hidden="true" />
              <div className="beliefs-photo-grain" aria-hidden="true" />
              <div className="beliefs-photo-vignette" aria-hidden="true" />
            </div>
          </figure>

          {/* Three beliefs, stacked editorially */}
          <ol className="beliefs-list" data-reveal-stagger>

            <li className="belief">
              <span className="belief-num">01</span>
              <h3 className="belief-claim">
                AI executes. People decide.
              </h3>
              <p className="belief-expand">
                We build the line between them. The AI does the work it&rsquo;s
                good at. Your team holds the judgment, the context, and the call.
              </p>
            </li>

            <li className="belief">
              <span className="belief-num">02</span>
              <h3 className="belief-claim">
                Stop paying for software that almost fits.
              </h3>
              <p className="belief-expand">
                Custom AI software shaped to how you actually work, instead
                of a SaaS template you have to bend your team around.
              </p>
            </li>

            <li className="belief">
              <span className="belief-num">03</span>
              <h3 className="belief-claim">
                We own the outcome, not the deliverable.
              </h3>
              <p className="belief-expand">
                Done means it&rsquo;s running. If it doesn&rsquo;t produce the
                result it was built for, we&rsquo;re not finished.
              </p>
            </li>

          </ol>
        </div>
      </div>

      <svg
        className="beliefs-curve beliefs-curve-bottom"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M 0 0 Q 720 88 1440 0 L 1440 80 L 0 80 Z" fill="#050a0c" />
        <path
          d="M 0 0 Q 720 88 1440 0"
          stroke="rgba(93,168,156,0.14)"
          strokeWidth="0.6"
          fill="none"
        />
      </svg>
    </section>
  );
}
