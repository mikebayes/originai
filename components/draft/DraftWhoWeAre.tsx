/**
 * DRAFT homepage: "who we are / what we do" section.
 *
 * Replaces the live Problem section ("AI ambition is everywhere. Working
 * systems aren't.") which read as category commentary rather than an
 * answer to the three questions a first-time visitor actually has: who
 * are these guys, what do they do, why would I work with them.
 *
 * Structure: copy left, human photograph right, three capability points
 * beneath the copy. Each point links to its service page so the section
 * doubles as a route into the site.
 *
 * The photograph is /images/beliefs_anchor.jpg, moved up from the Beliefs
 * section where it sat below the fold. It is the only image on the page
 * besides the hero, and it carries the human credibility this section
 * needs. Beliefs is text-led in the draft as a result.
 */
export default function DraftWhoWeAre() {
  return (
    <section className="dh-who" data-screen-label="Who we are">
      <div className="dh-who-grain" aria-hidden="true" />

      <div className="dh-who-inner">
        <div className="dh-who-grid">
          {/* Copy column */}
          <div className="dh-who-copy" data-reveal>
            <span className="hero-mark dh-who-mark" aria-hidden="true">
              <span className="hero-mark-dot" />
              <span className="hero-mark-line" />
            </span>

            <h2 className="dh-who-h2 display">
              A senior team helping organizations{" "}
              <span className="muted">put AI to work.</span>
            </h2>

            <p className="dh-who-lede">
              Origin helps leaders and teams decide where AI fits, build the
              systems that support it, and keep improving what goes live.
            </p>

            {/* Three capability points, each a route into the site. */}
            <ul className="dh-caps" aria-label="What we do">
              <li className="dh-cap">
                <a href="/services/strategy">
                  <span className="dh-cap-num">01</span>
                  <span className="dh-cap-body">
                    <span className="dh-cap-title">
                      AI strategy and leadership enablement
                    </span>
                    <span className="dh-cap-desc">
                      Get leadership aligned on where AI belongs, what matters,
                      and what should move first.
                    </span>
                  </span>
                  <span className="dh-cap-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </li>

              <li className="dh-cap">
                <a href="/services/build">
                  <span className="dh-cap-num">02</span>
                  <span className="dh-cap-body">
                    <span className="dh-cap-title">
                      Custom AI software and workflow systems
                    </span>
                    <span className="dh-cap-desc">
                      Build the tools, automations, and integrations that fit
                      how your team actually works.
                    </span>
                  </span>
                  <span className="dh-cap-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </li>

              <li className="dh-cap">
                <a href="/services/managed">
                  <span className="dh-cap-num">03</span>
                  <span className="dh-cap-body">
                    <span className="dh-cap-title">
                      Managed AI improvement after launch
                    </span>
                    <span className="dh-cap-desc">
                      Keep what is live supported, refined, and expanded as the
                      business learns what works.
                    </span>
                  </span>
                  <span className="dh-cap-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Photograph column. Same treatment stack the Beliefs section
              used: framed image, grain, vignette. */}
          <figure className="dh-who-photo" data-reveal>
            <div className="dh-who-photo-frame">
              <div className="dh-who-photo-img" aria-hidden="true" />
              <div className="dh-who-photo-grain" aria-hidden="true" />
              <div className="dh-who-photo-vignette" aria-hidden="true" />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
