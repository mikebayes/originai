/**
 * Services overview — three-card grid.
 *
 * Replaces the elaborate per-service feature sections with a simpler
 * three-card layout. Each card has eyebrow, title, short body copy,
 * and a link to its deep service page. Build is the centerpiece (slight
 * forest green tint, accent border) but the three sit as siblings in a
 * 3-column grid rather than a featured-left asymmetric layout.
 *
 * Visual placeholder boxes inside each card mark where small per-service
 * mockups will eventually live. Keeping them as placeholders for now so
 * the structural change can be reviewed before the visuals are designed.
 */
export default function ServicesCardsGrid() {
  return (
    <section className="svc-cards-section" data-screen-label="Services cards">
      <div className="svc-cards-inner">
        <header className="svc-cards-header" data-reveal>
          <h2 className="svc-cards-h2 display">
            <span>Three services.</span>
            <span className="muted"> Pick what your team needs.</span>
          </h2>
          <p className="svc-cards-sub">
            Build is the centerpiece. Strategy and Managed sit alongside.
          </p>
        </header>

        <div className="svc-cards-grid" data-reveal-stagger>
          {/* Build — centerpiece, forest green tint + accent border.
              Visual: a service-trade dispatch view with three jobs. Reads
              as real operational software, not generic AI prompts. */}
          <article className="svc-card svc-card-build">
            <span className="svc-card-num">The work</span>
            <h3 className="svc-card-title">AI Software &amp; Systems</h3>
            <p className="svc-card-promise">
              Custom AI software, built for your business. Replace the
              SaaS stack you&rsquo;ve been duct-taping together with a
              system shaped to how your team actually works.
            </p>
            <div className="svc-card-visual">
              <svg viewBox="0 0 280 150" className="svc-card-svg" aria-hidden="true">
                {/* Frame */}
                <rect x="0.5" y="0.5" width="279" height="149" rx="8" fill="rgba(15, 22, 22, 0.55)" stroke="rgba(255, 255, 255, 0.10)" />
                {/* Window dots */}
                <circle cx="12" cy="12" r="2.2" fill="rgba(255, 120, 110, 0.55)" />
                <circle cx="20" cy="12" r="2.2" fill="rgba(255, 200, 100, 0.55)" />
                <circle cx="28" cy="12" r="2.2" fill="rgba(120, 200, 140, 0.55)" />
                <text x="268" y="14" textAnchor="end" fill="rgba(255, 255, 255, 0.45)" fontFamily="'JetBrains Mono', monospace" fontSize="7" letterSpacing="0.10em">TODAY · 6 JOBS</text>

                {/* Job 1: in progress (teal accent) */}
                <rect x="10" y="28" width="260" height="32" rx="5" fill="rgba(93, 168, 156, 0.10)" stroke="rgba(93, 168, 156, 0.40)" />
                <text x="20" y="42" fill="rgba(255, 255, 255, 0.92)" fontFamily="'Inter', sans-serif" fontSize="9" fontWeight="500">09:00  Home plumbing inspection</text>
                <text x="20" y="53" fill="rgba(255, 255, 255, 0.55)" fontFamily="'Inter', sans-serif" fontSize="7.5">Doe Plumbing · 1124 Maple St</text>
                <circle cx="258" cy="44" r="3" fill="rgba(93, 168, 156, 0.85)" />

                {/* Job 2: scheduled */}
                <rect x="10" y="66" width="260" height="32" rx="5" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.10)" />
                <text x="20" y="80" fill="rgba(255, 255, 255, 0.92)" fontFamily="'Inter', sans-serif" fontSize="9" fontWeight="500">11:30  Electrical service call</text>
                <text x="20" y="91" fill="rgba(255, 255, 255, 0.55)" fontFamily="'Inter', sans-serif" fontSize="7.5">Smith Electric · 22 Birch Lane</text>
                <circle cx="258" cy="82" r="3" fill="rgba(255, 200, 100, 0.7)" />

                {/* Job 3: scheduled */}
                <rect x="10" y="104" width="260" height="32" rx="5" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.10)" />
                <text x="20" y="118" fill="rgba(255, 255, 255, 0.92)" fontFamily="'Inter', sans-serif" fontSize="9" fontWeight="500">14:00  HVAC commissioning</text>
                <text x="20" y="129" fill="rgba(255, 255, 255, 0.55)" fontFamily="'Inter', sans-serif" fontSize="7.5">Rivers Mechanical · 89 Pine</text>
                <circle cx="258" cy="120" r="3" fill="rgba(255, 255, 255, 0.30)" />
              </svg>
            </div>
            <a href="/services/build" className="svc-card-link">
              Explore what we build <span className="arrow" aria-hidden="true">→</span>
            </a>
          </article>

          {/* Strategy — workshop with people + roadmap. Brings in the
              human element Mike asked for. People silhouettes around a
              table on the left, phase plan on the right. */}
          <article className="svc-card">
            <span className="svc-card-num">AI roadmap &amp; planning</span>
            <h3 className="svc-card-title">AI Strategy</h3>
            <p className="svc-card-promise">
              Get unstuck before you build. We help leadership pick the
              right AI bets and sequence them properly.
            </p>
            <div className="svc-card-visual">
              <svg viewBox="0 0 280 150" className="svc-card-svg" aria-hidden="true">
                <rect x="0.5" y="0.5" width="279" height="149" rx="8" fill="rgba(15, 22, 22, 0.55)" stroke="rgba(255, 255, 255, 0.10)" />

                {/* Workshop section: people around a table (left half) */}
                <text x="14" y="18" fill="rgba(255, 255, 255, 0.45)" fontFamily="'JetBrains Mono', monospace" fontSize="7" letterSpacing="0.10em">WORKSHOP</text>

                {/* Table (ellipse) */}
                <ellipse cx="60" cy="85" rx="32" ry="14" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(255, 255, 255, 0.10)" strokeWidth="0.5" />

                {/* Person 1 (top) */}
                <circle cx="60" cy="48" r="8" fill="rgba(93, 168, 156, 0.55)" />
                <path d="M 50 68 Q 50 58 60 58 Q 70 58 70 68 Z" fill="rgba(93, 168, 156, 0.55)" />

                {/* Person 2 (bottom-left) */}
                <circle cx="22" cy="100" r="8" fill="rgba(93, 168, 156, 0.45)" />
                <path d="M 12 120 Q 12 110 22 110 Q 32 110 32 120 Z" fill="rgba(93, 168, 156, 0.45)" />

                {/* Person 3 (bottom-right) */}
                <circle cx="98" cy="100" r="8" fill="rgba(93, 168, 156, 0.65)" />
                <path d="M 88 120 Q 88 110 98 110 Q 108 110 108 120 Z" fill="rgba(93, 168, 156, 0.65)" />

                {/* Divider */}
                <line x1="135" y1="20" x2="135" y2="130" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="0.5" />

                {/* Phase plan (right half) */}
                <text x="148" y="18" fill="rgba(255, 255, 255, 0.45)" fontFamily="'JetBrains Mono', monospace" fontSize="7" letterSpacing="0.10em">PHASE PLAN</text>

                {/* Phase 1: done */}
                <rect x="148" y="32" width="11" height="11" rx="2" fill="rgba(93, 168, 156, 0.10)" stroke="rgba(93, 168, 156, 0.55)" strokeWidth="0.6" />
                <path d="M 150.5 38 L 153 40 L 157 36" stroke="rgba(93, 168, 156, 1)" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <text x="166" y="42" fill="rgba(255, 255, 255, 0.55)" fontFamily="'Inter', sans-serif" fontSize="9">Discovery</text>

                {/* Phase 2: done */}
                <rect x="148" y="55" width="11" height="11" rx="2" fill="rgba(93, 168, 156, 0.10)" stroke="rgba(93, 168, 156, 0.55)" strokeWidth="0.6" />
                <path d="M 150.5 61 L 153 63 L 157 59" stroke="rgba(93, 168, 156, 1)" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <text x="166" y="65" fill="rgba(255, 255, 255, 0.55)" fontFamily="'Inter', sans-serif" fontSize="9">Workshops</text>

                {/* Phase 3: active */}
                <rect x="148" y="78" width="12" height="12" rx="2" fill="rgba(93, 168, 156, 0.85)" />
                <text x="166" y="88" fill="rgba(255, 255, 255, 0.95)" fontFamily="'Inter', sans-serif" fontSize="9" fontWeight="500">Roadmap</text>

                {/* Phase 4: pending */}
                <rect x="148" y="101" width="11" height="11" rx="2" fill="none" stroke="rgba(255, 255, 255, 0.20)" strokeWidth="0.8" />
                <text x="166" y="111" fill="rgba(255, 255, 255, 0.40)" fontFamily="'Inter', sans-serif" fontSize="9">Brief</text>
              </svg>
            </div>
            <a href="/services/strategy" className="svc-card-link">
              Learn more <span className="arrow" aria-hidden="true">→</span>
            </a>
          </article>

          {/* Managed — system health dashboard with multi-color status.
              Reads as a real ops dashboard, with green / amber / gray
              status indicators bringing color variety in. */}
          <article className="svc-card">
            <span className="svc-card-num">After we ship</span>
            <h3 className="svc-card-title">Managed AI</h3>
            <p className="svc-card-promise">
              We keep building. Continuous development on the AI we
              shipped, on a defined monthly scope.
            </p>
            <div className="svc-card-visual">
              <svg viewBox="0 0 280 150" className="svc-card-svg" aria-hidden="true">
                <rect x="0.5" y="0.5" width="279" height="149" rx="8" fill="rgba(15, 22, 22, 0.55)" stroke="rgba(255, 255, 255, 0.10)" />

                {/* Header */}
                <text x="12" y="16" fill="rgba(255, 255, 255, 0.92)" fontFamily="'Inter Tight', sans-serif" fontSize="10" fontWeight="500">System health</text>
                <circle cx="261" cy="13" r="3" fill="rgba(120, 200, 140, 0.85)" />
                <text x="255" y="15" textAnchor="end" fill="rgba(120, 200, 140, 0.85)" fontFamily="'JetBrains Mono', monospace" fontSize="7" letterSpacing="0.10em" fontWeight="500">LIVE</text>

                {/* Three stat cards */}
                <rect x="10" y="26" width="80" height="34" rx="4" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(255, 255, 255, 0.08)" />
                <text x="50" y="44" textAnchor="middle" fill="rgba(120, 200, 140, 0.95)" fontFamily="'Inter Tight', sans-serif" fontSize="14" fontWeight="500">99%</text>
                <text x="50" y="55" textAnchor="middle" fill="rgba(255, 255, 255, 0.45)" fontFamily="'JetBrains Mono', monospace" fontSize="6.5" letterSpacing="0.12em">UPTIME</text>

                <rect x="100" y="26" width="80" height="34" rx="4" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(255, 255, 255, 0.08)" />
                <text x="140" y="44" textAnchor="middle" fill="rgba(255, 255, 255, 0.92)" fontFamily="'Inter Tight', sans-serif" fontSize="14" fontWeight="500">14</text>
                <text x="140" y="55" textAnchor="middle" fill="rgba(255, 255, 255, 0.45)" fontFamily="'JetBrains Mono', monospace" fontSize="6.5" letterSpacing="0.12em">SYSTEMS</text>

                <rect x="190" y="26" width="80" height="34" rx="4" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(255, 255, 255, 0.08)" />
                <text x="230" y="44" textAnchor="middle" fill="rgba(255, 200, 100, 0.95)" fontFamily="'Inter Tight', sans-serif" fontSize="14" fontWeight="500">2</text>
                <text x="230" y="55" textAnchor="middle" fill="rgba(255, 255, 255, 0.45)" fontFamily="'JetBrains Mono', monospace" fontSize="6.5" letterSpacing="0.12em">ALERTS</text>

                {/* Sparkline panel */}
                <rect x="10" y="68" width="260" height="42" rx="4" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(255, 255, 255, 0.08)" />
                <text x="20" y="80" fill="rgba(255, 255, 255, 0.45)" fontFamily="'JetBrains Mono', monospace" fontSize="6.5" letterSpacing="0.12em">REQUESTS · 7D</text>
                <path d="M 20 102 Q 60 100 95 92 T 165 80 T 230 70 L 260 64 L 260 105 L 20 105 Z" fill="rgba(93, 168, 156, 0.10)" />
                <path d="M 20 102 Q 60 100 95 92 T 165 80 T 230 70 L 260 64" stroke="rgba(93, 168, 156, 0.85)" strokeWidth="1.4" fill="none" strokeLinecap="round" />
                <circle cx="260" cy="64" r="3" fill="rgba(93, 168, 156, 1)" />

                {/* Status row */}
                <circle cx="20" cy="128" r="3" fill="rgba(120, 200, 140, 0.85)" />
                <text x="28" y="131" fill="rgba(255, 255, 255, 0.85)" fontFamily="'Inter', sans-serif" fontSize="8.5">12 healthy</text>

                <circle cx="115" cy="128" r="3" fill="rgba(255, 200, 100, 0.85)" />
                <text x="123" y="131" fill="rgba(255, 255, 255, 0.85)" fontFamily="'Inter', sans-serif" fontSize="8.5">2 warning</text>

                <circle cx="210" cy="128" r="3" fill="rgba(255, 255, 255, 0.30)" />
                <text x="218" y="131" fill="rgba(255, 255, 255, 0.55)" fontFamily="'Inter', sans-serif" fontSize="8.5">0 critical</text>
              </svg>
            </div>
            <a href="/services/managed" className="svc-card-link">
              Learn more <span className="arrow" aria-hidden="true">→</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
