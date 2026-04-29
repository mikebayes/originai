export default function Problem() {
  return (
    <section className="problem" data-screen-label="Problem">
      <div className="problem-grain" aria-hidden="true" />
      <div className="problem-bottom-bleed" aria-hidden="true" />

      <div className="problem-inner">
        <header className="problem-header" data-reveal>
          <div className="left">
            <span className="eyebrow">The problem</span>
            <h2 className="problem-h2 display">
              <span>AI ambition is everywhere.</span>
              <span className="muted"> Working systems aren&rsquo;t.</span>
            </h2>
          </div>
          <p className="problem-lede">
            Most organizations are moving on AI. Few of them have built anything that runs in production, owns a real outcome, and earns its keep.
          </p>
        </header>

        <div className="problem-grid" data-reveal-stagger>
          <article className="card">
            <div className="card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="5" cy="6" r="2" />
                <circle cx="19" cy="5" r="2" />
                <circle cx="6" cy="18" r="2" />
                <circle cx="18" cy="19" r="2" />
                <circle cx="12" cy="12" r="2" />
                <path d="M7 6.5 L10.5 11" strokeDasharray="2 2" />
                <path d="M17 6 L13.5 11" strokeDasharray="2 2" />
                <path d="M7.5 17 L11 13" strokeDasharray="2 2" />
                <path d="M16.5 18 L13 13" strokeDasharray="2 2" />
              </svg>
            </div>
            <h3 className="card-title">Shadow AI across departments.</h3>
            <p className="card-body">Tools are in use everywhere with no shared standards or oversight.</p>
          </article>

          <article className="card">
            <div className="card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12 a7 7 0 0 1 11.5 -5.4" />
                <path d="M19 12 a7 7 0 0 1 -11.5 5.4" strokeDasharray="2 2.5" />
                <polyline points="14 4 16.5 6.6 14 9.2" />
                <polyline points="10 20 7.5 17.4 10 14.8" />
                <line x1="12" y1="11" x2="12" y2="13" />
              </svg>
            </div>
            <h3 className="card-title">Pilots that never become systems.</h3>
            <p className="card-body">Teams experiment, momentum stalls, value never lands.</p>
          </article>

          <article className="card">
            <div className="card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="8.5" />
                <circle cx="12" cy="12" r="5" strokeDasharray="2 2" />
                <circle cx="12" cy="12" r="1.6" />
                <path d="M12 3.5 L12 6" />
                <path d="M3.5 12 L6 12" />
                <path d="M18 12 L20.5 12" />
                <path d="M12 18 L12 20.5" />
              </svg>
            </div>
            <h3 className="card-title">No defined ownership.</h3>
            <p className="card-body">Initiatives drift because no one owns the outcome.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
