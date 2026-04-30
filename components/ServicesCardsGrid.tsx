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
          {/* Build — centerpiece. Visual: a light SaaS-style screenshot
              for a field-ops product. Off-color (coral accent) so it
              doesn't read as Origin's branded teal — looks like a real
              piece of software, not a marketing illustration. */}
          <article className="svc-card svc-card-build">
            <span className="svc-card-num">The work</span>
            <h3 className="svc-card-title">AI Software &amp; Systems</h3>
            <p className="svc-card-promise">
              Custom AI software, built for your business. Replace the
              SaaS stack you&rsquo;ve been duct-taping together with a
              system shaped to how your team actually works.
            </p>
            <div className="svc-card-visual">
              <svg viewBox="0 0 280 165" className="svc-card-svg" aria-hidden="true">
                {/* Card surface */}
                <rect x="0.5" y="0.5" width="279" height="164" rx="6" fill="#F4F2EC" stroke="rgba(0,0,0,0.08)" />
                {/* Top bar */}
                <rect x="0.5" y="0.5" width="279" height="22" fill="#FFFFFF" />
                <rect x="0.5" y="0.5" width="279" height="22" fill="none" stroke="rgba(0,0,0,0.06)" />
                <text x="12" y="15" fill="#1B2024" fontFamily="'Inter Tight', sans-serif" fontSize="9" fontWeight="500">Field Operations</text>
                <circle cx="245" cy="11" r="3" fill="#D85A30" />
                <text x="252" y="14" fill="#888" fontFamily="'Inter', sans-serif" fontSize="7">3</text>
                <text x="265" y="14" textAnchor="end" fill="#888" fontFamily="'Inter', sans-serif" fontSize="7">●</text>

                {/* Stat cards */}
                <rect x="10" y="32" width="84" height="44" rx="4" fill="#FFFFFF" stroke="rgba(0,0,0,0.06)" />
                <text x="20" y="44" fill="#777" fontFamily="'Inter', sans-serif" fontSize="7">Active jobs</text>
                <text x="20" y="62" fill="#1B2024" fontFamily="'Inter Tight', sans-serif" fontSize="14" fontWeight="700">14</text>
                <text x="20" y="72" fill="#D85A30" fontFamily="'Inter', sans-serif" fontSize="6.5">↑ 2 today</text>

                <rect x="98" y="32" width="84" height="44" rx="4" fill="#FFFFFF" stroke="rgba(0,0,0,0.06)" />
                <text x="108" y="44" fill="#777" fontFamily="'Inter', sans-serif" fontSize="7">Revenue today</text>
                <text x="108" y="62" fill="#1B2024" fontFamily="'Inter Tight', sans-serif" fontSize="14" fontWeight="700">$3,250</text>
                <text x="108" y="72" fill="#777" fontFamily="'Inter', sans-serif" fontSize="6.5">vs $2,820 yest.</text>

                <rect x="186" y="32" width="84" height="44" rx="4" fill="#FFFFFF" stroke="rgba(0,0,0,0.06)" />
                <text x="196" y="44" fill="#777" fontFamily="'Inter', sans-serif" fontSize="7">Crew on site</text>
                <text x="196" y="62" fill="#1B2024" fontFamily="'Inter Tight', sans-serif" fontSize="14" fontWeight="700">8/10</text>

                {/* Schedule panel */}
                <rect x="10" y="84" width="260" height="74" rx="4" fill="#FFFFFF" stroke="rgba(0,0,0,0.06)" />
                <text x="20" y="98" fill="#1B2024" fontFamily="'Inter Tight', sans-serif" fontSize="9" fontWeight="500">Today&rsquo;s schedule</text>
                <line x1="20" y1="105" x2="260" y2="105" stroke="rgba(0,0,0,0.08)" />

                <text x="20" y="118" fill="#1B2024" fontFamily="'Inter', sans-serif" fontSize="7.5">09:00  Plumbing inspect · Doe</text>
                <rect x="226" y="113" width="34" height="10" rx="3" fill="rgba(216,90,48,0.15)" />
                <text x="243" y="120" textAnchor="middle" fill="#D85A30" fontFamily="'JetBrains Mono', monospace" fontSize="6" fontWeight="500" letterSpacing="0.08em">LIVE</text>

                <text x="20" y="134" fill="#1B2024" fontFamily="'Inter', sans-serif" fontSize="7.5">11:30  Electrical · Smith Co.</text>
                <text x="260" y="134" textAnchor="end" fill="#888" fontFamily="'JetBrains Mono', monospace" fontSize="6.5">11:30</text>

                <text x="20" y="150" fill="#1B2024" fontFamily="'Inter', sans-serif" fontSize="7.5">14:00  HVAC · Rivers Mech.</text>
                <text x="260" y="150" textAnchor="end" fill="#888" fontFamily="'JetBrains Mono', monospace" fontSize="6.5">14:00</text>
              </svg>
            </div>
            <a href="/services/build" className="svc-card-link">
              Explore what we build <span className="arrow" aria-hidden="true">→</span>
            </a>
          </article>

          {/* Strategy — abstract whiteboard with sticky notes. Avoids
              stock-photo cliches. The varied colors and slight rotations
              feel hand-placed, like an actual workshop artifact. Mike
              may swap this for a real photo later. */}
          <article className="svc-card">
            <span className="svc-card-num">AI roadmap &amp; planning</span>
            <h3 className="svc-card-title">AI Strategy</h3>
            <p className="svc-card-promise">
              Get unstuck before you build. We help leadership pick the
              right AI bets and sequence them properly.
            </p>
            <div className="svc-card-visual">
              <svg viewBox="0 0 280 165" className="svc-card-svg" aria-hidden="true">
                {/* Whiteboard surface */}
                <rect x="0.5" y="0.5" width="279" height="164" rx="6" fill="#F4F2EC" stroke="rgba(0,0,0,0.06)" />
                {/* Subtle grid texture */}
                <line x1="0" y1="42" x2="280" y2="42" stroke="rgba(0,0,0,0.03)" />
                <line x1="0" y1="84" x2="280" y2="84" stroke="rgba(0,0,0,0.03)" />
                <line x1="0" y1="126" x2="280" y2="126" stroke="rgba(0,0,0,0.03)" />
                <line x1="70" y1="0" x2="70" y2="165" stroke="rgba(0,0,0,0.025)" />
                <line x1="140" y1="0" x2="140" y2="165" stroke="rgba(0,0,0,0.025)" />
                <line x1="210" y1="0" x2="210" y2="165" stroke="rgba(0,0,0,0.025)" />

                {/* Yellow sticky — "Where are we losing time?" */}
                <g transform="translate(20, 18) rotate(-3)">
                  <rect width="62" height="56" fill="#FFE680" stroke="rgba(0,0,0,0.10)" strokeWidth="0.5" />
                  <text x="6" y="14" fill="#3a3a1a" fontFamily="'Inter', sans-serif" fontSize="7" fontWeight="500">Where are we</text>
                  <text x="6" y="24" fill="#3a3a1a" fontFamily="'Inter', sans-serif" fontSize="7" fontWeight="500">losing time?</text>
                  <line x1="6" y1="32" x2="48" y2="32" stroke="rgba(58,58,26,0.30)" />
                  <text x="6" y="42" fill="#3a3a1a" fontFamily="'Inter', sans-serif" fontSize="6.5">- Intake</text>
                  <text x="6" y="50" fill="#3a3a1a" fontFamily="'Inter', sans-serif" fontSize="6.5">- Routing</text>
                </g>

                {/* Pink sticky — "Q1 priorities" */}
                <g transform="translate(108, 16) rotate(2)">
                  <rect width="64" height="60" fill="#FFCFD8" stroke="rgba(0,0,0,0.10)" strokeWidth="0.5" />
                  <text x="6" y="14" fill="#5a1a30" fontFamily="'Inter', sans-serif" fontSize="7" fontWeight="500">Q1 priorities</text>
                  <line x1="6" y1="22" x2="50" y2="22" stroke="rgba(90,26,48,0.30)" />
                  <text x="6" y="32" fill="#5a1a30" fontFamily="'Inter', sans-serif" fontSize="6.5">1. Stakeholder</text>
                  <text x="6" y="40" fill="#5a1a30" fontFamily="'Inter', sans-serif" fontSize="6.5">   alignment</text>
                  <text x="6" y="48" fill="#5a1a30" fontFamily="'Inter', sans-serif" fontSize="6.5">2. AI policy</text>
                </g>

                {/* Blue sticky — "Sequence" */}
                <g transform="translate(196, 22) rotate(-2)">
                  <rect width="66" height="52" fill="#B5D4F4" stroke="rgba(0,0,0,0.10)" strokeWidth="0.5" />
                  <text x="6" y="14" fill="#0c3a6a" fontFamily="'Inter', sans-serif" fontSize="7" fontWeight="500">Sequence</text>
                  <line x1="6" y1="22" x2="50" y2="22" stroke="rgba(12,58,106,0.30)" />
                  <text x="6" y="32" fill="#0c3a6a" fontFamily="'Inter', sans-serif" fontSize="6.5">data → model</text>
                  <text x="6" y="40" fill="#0c3a6a" fontFamily="'Inter', sans-serif" fontSize="6.5">→ app</text>
                </g>

                {/* Green sticky — "AI training" */}
                <g transform="translate(38, 92) rotate(1)">
                  <rect width="62" height="56" fill="#C0DD97" stroke="rgba(0,0,0,0.10)" strokeWidth="0.5" />
                  <text x="6" y="14" fill="#1f3d0c" fontFamily="'Inter', sans-serif" fontSize="7" fontWeight="500">AI training</text>
                  <line x1="6" y1="22" x2="50" y2="22" stroke="rgba(31,61,12,0.30)" />
                  <text x="6" y="32" fill="#1f3d0c" fontFamily="'Inter', sans-serif" fontSize="6.5">Roll out to all</text>
                  <text x="6" y="40" fill="#1f3d0c" fontFamily="'Inter', sans-serif" fontSize="6.5">teams by Q2.</text>
                  <text x="6" y="50" fill="#1f3d0c" fontFamily="'Inter', sans-serif" fontSize="6.5">Owner: Sara</text>
                </g>

                {/* White card with workshop note */}
                <g transform="translate(118, 92) rotate(-1)">
                  <rect width="72" height="54" fill="#FFFFFF" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                  <text x="6" y="14" fill="#1B2024" fontFamily="'Inter Tight', sans-serif" fontSize="7" fontWeight="500">Workshop · Mar 15</text>
                  <line x1="6" y1="22" x2="58" y2="22" stroke="rgba(0,0,0,0.10)" />
                  <text x="6" y="32" fill="#444" fontFamily="'Inter', sans-serif" fontSize="6.5">7 attendees</text>
                  <text x="6" y="42" fill="#444" fontFamily="'Inter', sans-serif" fontSize="6.5">4 hrs · workshop</text>
                  <circle cx="64" cy="44" r="3" fill="#3B6D11" />
                </g>

                {/* Yellow sticky bottom-right */}
                <g transform="translate(208, 96) rotate(3)">
                  <rect width="55" height="50" fill="#FFE680" stroke="rgba(0,0,0,0.10)" strokeWidth="0.5" />
                  <text x="6" y="14" fill="#3a3a1a" fontFamily="'Inter', sans-serif" fontSize="7" fontWeight="500">Phase 3</text>
                  <line x1="6" y1="22" x2="42" y2="22" stroke="rgba(58,58,26,0.30)" />
                  <text x="6" y="32" fill="#3a3a1a" fontFamily="'Inter', sans-serif" fontSize="6.5">Brief draft by</text>
                  <text x="6" y="40" fill="#3a3a1a" fontFamily="'Inter', sans-serif" fontSize="6.5">end of month</text>
                </g>
              </svg>
            </div>
            <a href="/services/strategy" className="svc-card-link">
              Learn more <span className="arrow" aria-hidden="true">→</span>
            </a>
          </article>

          {/* Managed — light monitoring dashboard. Same screenshot
              treatment as Build but for system health. Green for healthy
              metrics, coral for warnings, mid-tones for the chart. */}
          <article className="svc-card">
            <span className="svc-card-num">After we ship</span>
            <h3 className="svc-card-title">Managed AI</h3>
            <p className="svc-card-promise">
              We keep building. Continuous development on the AI we
              shipped, on a defined monthly scope.
            </p>
            <div className="svc-card-visual">
              <svg viewBox="0 0 280 165" className="svc-card-svg" aria-hidden="true">
                <rect x="0.5" y="0.5" width="279" height="164" rx="6" fill="#F4F2EC" stroke="rgba(0,0,0,0.08)" />
                {/* Top bar */}
                <rect x="0.5" y="0.5" width="279" height="22" fill="#FFFFFF" />
                <rect x="0.5" y="0.5" width="279" height="22" fill="none" stroke="rgba(0,0,0,0.06)" />
                <text x="12" y="15" fill="#1B2024" fontFamily="'Inter Tight', sans-serif" fontSize="9" fontWeight="500">System monitor</text>
                <circle cx="245" cy="11" r="3" fill="#3B6D11" />
                <text x="265" y="14" textAnchor="end" fill="#3B6D11" fontFamily="'JetBrains Mono', monospace" fontSize="6.5" fontWeight="500" letterSpacing="0.08em">LIVE</text>

                {/* Stat cards */}
                <rect x="10" y="32" width="84" height="44" rx="4" fill="#FFFFFF" stroke="rgba(0,0,0,0.06)" />
                <text x="20" y="44" fill="#777" fontFamily="'Inter', sans-serif" fontSize="7">Uptime</text>
                <text x="20" y="62" fill="#3B6D11" fontFamily="'Inter Tight', sans-serif" fontSize="14" fontWeight="700">99.2%</text>
                <text x="20" y="72" fill="#777" fontFamily="'Inter', sans-serif" fontSize="6.5">Last 30 days</text>

                <rect x="98" y="32" width="84" height="44" rx="4" fill="#FFFFFF" stroke="rgba(0,0,0,0.06)" />
                <text x="108" y="44" fill="#777" fontFamily="'Inter', sans-serif" fontSize="7">Active models</text>
                <text x="108" y="62" fill="#1B2024" fontFamily="'Inter Tight', sans-serif" fontSize="14" fontWeight="700">14</text>
                <text x="108" y="72" fill="#777" fontFamily="'Inter', sans-serif" fontSize="6.5">2 deployed today</text>

                <rect x="186" y="32" width="84" height="44" rx="4" fill="#FFFFFF" stroke="rgba(0,0,0,0.06)" />
                <text x="196" y="44" fill="#777" fontFamily="'Inter', sans-serif" fontSize="7">Avg latency</text>
                <text x="196" y="62" fill="#1B2024" fontFamily="'Inter Tight', sans-serif" fontSize="14" fontWeight="700">1.2s</text>
                <text x="196" y="72" fill="#D85A30" fontFamily="'Inter', sans-serif" fontSize="6.5">↑ 0.3s vs last wk</text>

                {/* Chart panel */}
                <rect x="10" y="84" width="260" height="58" rx="4" fill="#FFFFFF" stroke="rgba(0,0,0,0.06)" />
                <text x="20" y="98" fill="#1B2024" fontFamily="'Inter Tight', sans-serif" fontSize="8" fontWeight="500">Requests · 7 days</text>
                <text x="260" y="98" textAnchor="end" fill="#3B6D11" fontFamily="'Inter', sans-serif" fontSize="7" fontWeight="500">↑ 18%</text>

                <path d="M 22 130 Q 60 126 95 116 T 165 100 T 220 86 L 260 76 L 260 134 L 22 134 Z" fill="rgba(59,109,17,0.12)" />
                <path d="M 22 130 Q 60 126 95 116 T 165 100 T 220 86 L 260 76" stroke="#3B6D11" strokeWidth="1.4" fill="none" strokeLinecap="round" />
                <circle cx="260" cy="76" r="3" fill="#3B6D11" />

                {/* Status row */}
                <circle cx="20" cy="156" r="3" fill="#3B6D11" />
                <text x="28" y="159" fill="#1B2024" fontFamily="'Inter', sans-serif" fontSize="7.5">12 healthy</text>

                <circle cx="98" cy="156" r="3" fill="#D85A30" />
                <text x="106" y="159" fill="#1B2024" fontFamily="'Inter', sans-serif" fontSize="7.5">2 warning</text>

                <circle cx="180" cy="156" r="3" fill="#888" />
                <text x="188" y="159" fill="#888" fontFamily="'Inter', sans-serif" fontSize="7.5">0 critical</text>

                <text x="260" y="159" textAnchor="end" fill="#888" fontFamily="'Inter', sans-serif" fontSize="6.5">14 systems</text>
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
