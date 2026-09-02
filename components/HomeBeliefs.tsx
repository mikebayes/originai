/**
 * Homepage beliefs section, condensed.
 *
 * The live version is a two-column layout: photograph left, three
 * expanded beliefs right, plus top and bottom curve SVGs. The photograph
 * has moved up into the new who-we-are section, so this is now text-led.
 *
 * Changes from live:
 *   - photograph and its treatment stack removed
 *   - the two curve SVGs removed (they were framing the photo layout)
 *   - three beliefs render as a horizontal row rather than a stacked list
 *   - expansion copy trimmed to one line each
 *   - "Our beliefs" eyebrow and the "Said out loud" split dropped
 *
 * The three claims themselves are unchanged. This section should support
 * the page, not compete with the explanatory section above it.
 */
export default function HomeBeliefs() {
  return (
    <section className="dh-beliefs" data-screen-label="Beliefs">
      <div className="dh-beliefs-inner">
        <header className="dh-beliefs-head" data-reveal>
          <span className="dh-rule" aria-hidden="true" />
          <h2 className="dh-beliefs-h2 display">
            How we think about AI work.
          </h2>
          <p className="dh-beliefs-lede">
            AI adoption works when people stay accountable, systems fit the
            business, and improvement continues after launch.
          </p>
        </header>

        <ol className="dh-beliefs-row" data-reveal-stagger>
          <li className="dh-belief">
            <h3>AI executes. People decide.</h3>
            <p>
              The AI does the work it is good at. Your team holds the judgment
              and the call.
            </p>
          </li>

          <li className="dh-belief">
            <h3>Stop paying for software that almost fits.</h3>
            <p>
              Systems shaped to how you work, instead of a template your team
              has to bend around.
            </p>
          </li>

          <li className="dh-belief">
            <h3>We own the outcome, not the deliverable.</h3>
            <p>
              Done means it is running. If it does not produce the result, we
              are not finished.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
