/**
 * Services overview — Build feature section.
 *
 * Layout: stacked. Full-bleed architecture-diagram visual at the top,
 * centered copy column below. Build is the centerpiece service so it
 * leads the body of the /services overview page and gets the most
 * substantial visual treatment.
 *
 * Visual: a "what we build" architecture diagram showing data sources
 * flowing into an AI core, then out to multiple application surfaces.
 * Distinct from the homepage's chat-style UI mockup and from the small
 * Data/Model/App architecture inside the hero's system view diagram.
 */
export default function ServicesBuildFeature() {
  return (
    <section className="svc-build-feature" data-screen-label="Build feature">
      <div className="svc-build-inner">
        {/* Full-bleed architecture diagram. SVG shows three data sources
            on the left flowing into an AI core in the middle, with
            three application outputs on the right. Soft teal flow lines
            connect them. */}
        <div className="svc-build-visual" data-reveal>
          <svg
            className="svc-build-arch"
            viewBox="0 0 970 360"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            {/* Reusable arrowhead marker for flow lines */}
            <defs>
              <marker
                id="svc-build-arrow"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="5"
                markerHeight="5"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(63, 221, 201, 0.7)" />
              </marker>
            </defs>

            {/* ─── Data sources (left column) ─── */}
            <text className="svc-build-col-label" x="120" y="40" textAnchor="middle">DATA SOURCES</text>
            <g transform="translate(40, 70)">
              <rect className="svc-build-card" width="160" height="56" rx="10" />
              <text className="svc-build-card-title" x="16" y="22">Documents</text>
              <line x1="16" y1="34" x2="100" y2="34" className="svc-build-card-bar" />
              <line x1="16" y1="42" x2="80" y2="42" className="svc-build-card-bar" />
            </g>
            <g transform="translate(40, 152)">
              <rect className="svc-build-card" width="160" height="56" rx="10" />
              <text className="svc-build-card-title" x="16" y="22">Database</text>
              <rect x="16" y="32" width="20" height="12" rx="2" className="svc-build-card-bar-fill" />
              <rect x="40" y="32" width="20" height="12" rx="2" className="svc-build-card-bar-fill" />
              <rect x="64" y="32" width="20" height="12" rx="2" className="svc-build-card-bar-fill" />
              <rect x="88" y="32" width="20" height="12" rx="2" className="svc-build-card-bar-fill" />
            </g>
            <g transform="translate(40, 234)">
              <rect className="svc-build-card" width="160" height="56" rx="10" />
              <text className="svc-build-card-title" x="16" y="22">APIs &amp; events</text>
              <circle cx="22" cy="40" r="4" className="svc-build-card-dot" />
              <line x1="30" y1="40" x2="80" y2="40" className="svc-build-card-bar" />
              <circle cx="86" cy="40" r="4" className="svc-build-card-dot" />
              <line x1="94" y1="40" x2="140" y2="40" className="svc-build-card-bar" />
            </g>

            {/* ─── Flow lines: data → AI core ─── */}
            <path className="svc-build-flow" d="M 200 98 C 280 98, 320 160, 410 160" markerEnd="url(#svc-build-arrow)" />
            <path className="svc-build-flow" d="M 200 180 L 410 180" markerEnd="url(#svc-build-arrow)" />
            <path className="svc-build-flow" d="M 200 262 C 280 262, 320 200, 410 200" markerEnd="url(#svc-build-arrow)" />

            {/* ─── AI Core (center) ─── */}
            <text className="svc-build-col-label" x="490" y="40" textAnchor="middle">AI CORE</text>
            <g transform="translate(410, 70)">
              {/* Outer halo */}
              <rect className="svc-build-core-halo" x="-12" y="-12" width="184" height="244" rx="20" />
              <rect className="svc-build-core-bg" width="160" height="220" rx="14" />
              <text className="svc-build-core-title" x="20" y="32">Reasoning &amp; memory</text>
              <text className="svc-build-core-sub" x="20" y="50">PRODUCTION MODELS</text>

              {/* Concentric core indicator */}
              <circle cx="80" cy="118" r="32" className="svc-build-core-ring-3" />
              <circle cx="80" cy="118" r="22" className="svc-build-core-ring-2" />
              <circle cx="80" cy="118" r="14" className="svc-build-core-ring-1" />
              <circle cx="80" cy="118" r="5" className="svc-build-core-dot" />

              {/* Sub-component pills along the bottom */}
              <rect className="svc-build-core-pill" x="16" y="180" width="44" height="20" rx="10" />
              <text className="svc-build-core-pill-text" x="38" y="194" textAnchor="middle">Embed</text>

              <rect className="svc-build-core-pill" x="64" y="180" width="44" height="20" rx="10" />
              <text className="svc-build-core-pill-text" x="86" y="194" textAnchor="middle">Tools</text>

              <rect className="svc-build-core-pill" x="112" y="180" width="44" height="20" rx="10" />
              <text className="svc-build-core-pill-text" x="134" y="194" textAnchor="middle">Memory</text>
            </g>

            {/* ─── Flow lines: AI core → applications ─── */}
            <path className="svc-build-flow" d="M 590 160 C 670 160, 700 100, 770 100" markerEnd="url(#svc-build-arrow)" />
            <path className="svc-build-flow" d="M 590 180 L 770 180" markerEnd="url(#svc-build-arrow)" />
            <path className="svc-build-flow" d="M 590 200 C 670 200, 700 260, 770 260" markerEnd="url(#svc-build-arrow)" />

            {/* ─── Applications (right column) ─── */}
            <text className="svc-build-col-label" x="850" y="40" textAnchor="middle">APPLICATIONS</text>
            <g transform="translate(770, 70)">
              <rect className="svc-build-card" width="160" height="56" rx="10" />
              <text className="svc-build-card-title" x="16" y="22">Internal tools</text>
              {/* Window dots */}
              <circle cx="120" cy="20" r="2.5" className="svc-build-card-dot" />
              <circle cx="128" cy="20" r="2.5" className="svc-build-card-dot" />
              <circle cx="136" cy="20" r="2.5" className="svc-build-card-dot" />
              <line x1="16" y1="36" x2="100" y2="36" className="svc-build-card-bar" />
              <line x1="16" y1="44" x2="80" y2="44" className="svc-build-card-bar" />
            </g>
            <g transform="translate(770, 152)">
              <rect className="svc-build-card" width="160" height="56" rx="10" />
              <text className="svc-build-card-title" x="16" y="22">Agentic workflows</text>
              {/* Mini task list */}
              <circle cx="20" cy="38" r="3" className="svc-build-card-task-done" />
              <line x1="28" y1="38" x2="80" y2="38" className="svc-build-card-bar" />
              <circle cx="20" cy="48" r="3" className="svc-build-card-task-active" />
              <line x1="28" y1="48" x2="100" y2="48" className="svc-build-card-bar" />
            </g>
            <g transform="translate(770, 234)">
              <rect className="svc-build-card" width="160" height="56" rx="10" />
              <text className="svc-build-card-title" x="16" y="22">Insights &amp; ops</text>
              {/* Mini sparkline */}
              <path
                className="svc-build-card-sparkline"
                d="M 16 46 Q 40 44, 56 38 T 96 30 L 130 24"
                fill="none"
              />
              <circle cx="130" cy="24" r="3" className="svc-build-card-sparkline-dot" />
            </g>
          </svg>
        </div>

        {/* Copy column, centered below the visual */}
        <div className="svc-build-copy" data-reveal>
          <span className="eyebrow svc-build-eyebrow">AI Software &amp; Systems</span>
          <h2 className="svc-build-h2 display">Modern software, designed to fit.</h2>
          <p className="svc-build-lede">
            We build AI software shaped to how your team actually works.
            Production systems that ship, run, and earn their keep.
            Not SaaS templates you bend yourselves around.
          </p>
          <ul className="svc-build-list">
            <li>Internal AI tools that replace brittle SaaS stacks</li>
            <li>AI agents for repetitive operational work</li>
            <li>Document-aware AI for industry-specific data</li>
            <li>AI integrations on top of existing platforms</li>
          </ul>
          <a href="/services/build" className="tlink svc-build-link">
            Explore what we build <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
