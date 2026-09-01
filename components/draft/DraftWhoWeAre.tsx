/**
 * DRAFT homepage: the first section after the hero.
 *
 * Replaces the live Problem section ("AI ambition is everywhere. Working
 * systems aren't.") which read as category commentary rather than an
 * answer to the three questions a first-time visitor actually has: who
 * are these guys, what do they do, why would I work with them.
 *
 * Leads with what Origin does, not with who Origin is. The previous
 * heading ("A senior team, close to the AI work.") spent the page's best
 * position on a credibility claim, and "close to the AI work" was too
 * abstract to tell a first-time visitor anything. The heading and lede
 * now name the surfaces AI gets applied to. Seniority is still carried
 * by the About section and the team page, where it is evidenced.
 *
 * Structure is unchanged: copy left, human photograph right, three
 * capability points beneath the copy. Each point links to its service
 * page so the section doubles as a route into the site.
 *
 * The photograph is /images/beliefs_anchor.jpg, moved up from the Beliefs
 * section where it sat below the fold. It is the only image on the page
 * besides the hero, and it carries the human credibility this section
 * needs. Beliefs is text-led in the draft as a result.
 *
 * Sizing: the photo is held at 75% of its column and centred on both
 * axes at desktop (see .dh-who-photo in styles/draft-home.css). At full
 * column width it outweighed the copy; the section reads better with the
 * copy carrying the message and the image supplying atmosphere.
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

            {/* Two-tone treatment retained from the previous heading so
                the section's visual language is unchanged. */}
            <h2 className="dh-who-h2 display">
              Make AI useful{" "}
              <span className="muted">where the work actually happens.</span>
            </h2>

            <p className="dh-who-lede">
              Origin helps leaders and teams find where AI can help, train
              around real work, and turn the right opportunities into useful
              tools and workflows.
            </p>

            {/* Three rows, deliberately not cards. The full services card
                grid appears immediately below this section.

                Managed AI Improvement is deliberately absent here. This
                list now tracks the arc the photograph shows, leaders and
                teams working through where AI helps, so it runs align,
                train, build. Managed sits after launch and is covered by
                the services grid below. */}
            <ul className="dh-caps" aria-label="What we do">
              <li className="dh-cap">
                <a href="/services/strategy">
                  <span className="dh-cap-num">01</span>
                  <span className="dh-cap-body">
                    <span className="dh-cap-title">
                      Leadership AI Enablement
                    </span>
                    <span className="dh-cap-desc">
                      Decide where AI fits and what moves first.
                    </span>
                  </span>
                  <span className="dh-cap-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </li>

              {/* TODO (launch blocker for this link, NOT draft-scoped):
                  /services/ai-training does not exist yet. This link 404s
                  until that route ships. Same TODO already tracked in
                  app/draft/services/page.tsx and the build page. */}
              <li className="dh-cap">
                <a href="/services/ai-training">
                  <span className="dh-cap-num">02</span>
                  <span className="dh-cap-body">
                    <span className="dh-cap-title">Team AI Training</span>
                    <span className="dh-cap-desc">
                      Build capability around real roles, tasks, and examples.
                    </span>
                  </span>
                  <span className="dh-cap-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </li>

              <li className="dh-cap">
                <a href="/services/build">
                  <span className="dh-cap-num">03</span>
                  <span className="dh-cap-body">
                    <span className="dh-cap-title">
                      AI Workflow Development
                    </span>
                    <span className="dh-cap-desc">
                      Turn the right opportunities into usable tools and
                      workflows.
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
