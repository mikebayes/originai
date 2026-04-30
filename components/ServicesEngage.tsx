/**
 * "How we engage" anchor section on /services.
 *
 * Editorial photo-led pattern, mirroring the Beliefs section from the
 * homepage: a single big landscape photo on the left anchors the
 * section while the copy stack lives on the right. Goal: humanize the
 * page after the (necessarily abstract) cards section, and reinforce
 * Origin's roots as a consulting and training firm by showing actual
 * humans doing actual engagement work.
 *
 * Uses the same <img> + object-fit pattern as the Strategy card photo
 * so the centering math is unambiguous.
 */
export default function ServicesEngage() {
  return (
    <section className="stage" data-screen-label="How we engage">
      <div className="stage-grain" aria-hidden="true" />
      <div className="stage-inner">

        <div className="engage-grid" data-reveal>

          {/* Anchor photo — close-up of a working session, hands and
              notebooks in frame. Communicates "we're in the room with
              you, taking notes, doing the work" without faces, which
              keeps the photo evergreen and editorial. */}
          <figure className="engage-photo">
            <div className="engage-photo-frame">
              <img
                className="engage-photo-img"
                src="/images/engagement_session.jpg"
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
              {/* Subtle vignette layer to focus the eye toward center
                  and tie the photo back to the page's dark backdrop. */}
              <div className="engage-photo-vignette" aria-hidden="true" />
            </div>
          </figure>

          {/* Copy column — eyebrow, headline, body. Single statement
              section, no list of principles, no cards. The photo + the
              statement do the work together. */}
          <div className="engage-copy">
            <span className="eyebrow">How we engage</span>
            <h2 className="engage-h2 display">
              Most of our work starts with a decision, not a system.
            </h2>
            <p className="engage-body">
              We work with your leadership team to identify where AI will
              actually create value, what to build first, and what to ignore.
              From there, we move quickly into designing and deploying systems
              that fit how your business operates.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
