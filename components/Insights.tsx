export default function Insights() {
  return (
    <section className="stage" data-screen-label="Insights">
      <div className="stage-grain" aria-hidden="true" />
      <div className="stage-inner">
        <header className="s-header" data-reveal>
          <div>
            <span className="eyebrow">Insights</span>
            <h2 className="s-h2 display">
              <span>The latest from Origin.</span>
              <span className="muted"> Field notes from the work.</span>
            </h2>
          </div>
          <p className="s-lede">
            Short, opinionated reads on framing AI problems, building durable systems, and the operations work that makes them stick.
          </p>
        </header>

        <div className="insights-grid" data-reveal-stagger>
          <a className="insight" href="/insights/framing-ai-problems">
            <div className="insight-photo cphoto">
              <span className="insight-tag">Strategy</span>
              <div className="cphoto-grain" aria-hidden="true" />
              <span className="cphoto-caption"><span className="bar" />Cover · placeholder</span>
            </div>
            <div className="insight-body">
              <div className="insight-meta">
                <span>Mar 14</span>
                <span className="sep" aria-hidden="true" />
                <span>2025</span>
              </div>
              <h3 className="insight-title">Why most AI strategies stall before they ship.</h3>
              <div className="insight-foot">
                <span className="author">
                  <span className="author-avatar" aria-hidden="true">MB</span>
                  Mike Bayes
                </span>
                <span className="read-time">6 min read</span>
              </div>
            </div>
          </a>

          <a className="insight" href="/insights/managed-ai">
            <div className="insight-photo cphoto">
              <span className="insight-tag">Operations</span>
              <div className="cphoto-grain" aria-hidden="true" />
              <span className="cphoto-caption"><span className="bar" />Cover · placeholder</span>
            </div>
            <div className="insight-body">
              <div className="insight-meta">
                <span>Feb 27</span>
                <span className="sep" aria-hidden="true" />
                <span>2025</span>
              </div>
              <h3 className="insight-title">The case for managed AI: shipping isn&rsquo;t the finish line.</h3>
              <div className="insight-foot">
                <span className="author">
                  <span className="author-avatar" aria-hidden="true">CB</span>
                  Chad Beauchamp
                </span>
                <span className="read-time">8 min read</span>
              </div>
            </div>
          </a>

          <a className="insight" href="/insights/governance-without-friction">
            <div className="insight-photo cphoto">
              <span className="insight-tag">Governance</span>
              <div className="cphoto-grain" aria-hidden="true" />
              <span className="cphoto-caption"><span className="bar" />Cover · placeholder</span>
            </div>
            <div className="insight-body">
              <div className="insight-meta">
                <span>Feb 10</span>
                <span className="sep" aria-hidden="true" />
                <span>2025</span>
              </div>
              <h3 className="insight-title">Governance without friction: practical guardrails for AI at work.</h3>
              <div className="insight-foot">
                <span className="author">
                  <span className="author-avatar" aria-hidden="true">MB</span>
                  Mike Bayes
                </span>
                <span className="read-time">5 min read</span>
              </div>
            </div>
          </a>
        </div>

        <div className="insights-foot">
          <a className="tlink" href="/insights">View all insights <span className="arrow" aria-hidden="true">→</span></a>
          <span className="meta">Updated monthly · No newsletter spam</span>
        </div>
      </div>
    </section>
  );
}
