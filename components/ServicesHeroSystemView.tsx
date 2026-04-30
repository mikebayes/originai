/**
 * Services hero "system view" — v2.
 *
 * Visual concept: three connected nodes (Strategy, Build, Managed) arranged
 * to communicate "Build is the work, Strategy and Managed sit on either side."
 * Build is the visual centerpiece (largest, accent border, halo).
 *
 * v2 changes vs v1:
 *  - Managed pulled down for clearer breathing room from Build
 *  - Strategy enhanced: phase numbers above the roadmap nodes turn abstract
 *    dots into a recognizable phased plan view
 *  - Build replaced its chat-row mockup with a system architecture sketch
 *    (Data → Model → App), clearly portraying "we build connected systems"
 *    without copying the homepage's app UI mockup
 *  - Managed expanded from a single sparkline to a mini monitoring dashboard
 *    with sparkline + uptime / systems / latency stats
 *
 * Pure SVG, no JS. Atmospheric glow comes from the parent CSS layer.
 */
export default function ServicesHeroSystemView() {
  return (
    <svg
      className="sys-view"
      viewBox="0 0 600 540"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      {/* Reusable arrowhead marker for flow lines.
          orient="auto" rotates the arrow to match the path direction. */}
      <defs>
        <marker
          id="sys-flow-arrow"
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

      {/* ─── FLOW LINES (drawn first so node shapes overlay them) ─── */}
      {/* Strategy → Build: exits Strategy upper-right, swoops down into Build top-left */}
      <path
        className="sys-flow"
        d="M 240 125 C 285 125, 285 195, 305 195"
        fill="none"
        markerEnd="url(#sys-flow-arrow)"
      />
      {/* Build → Managed: exits Build bottom-left, drops and curves left into Managed top */}
      <path
        className="sys-flow"
        d="M 345 355 C 345 395, 320 405, 305 410"
        fill="none"
        markerEnd="url(#sys-flow-arrow)"
      />

      {/* ─── STRATEGY NODE (upper-left) ─── */}
      <g transform="translate(40, 50)">
        <rect className="sys-node-bg" width="200" height="130" rx="14" />
        <text className="sys-node-label" x="18" y="32">Strategy</text>
        <text className="sys-node-tag" x="18" y="50">BEFORE YOU BUILD</text>

        {/* Phase numbers above each roadmap node turn it into a real plan view */}
        <text className="sys-phase-label" x="22" y="80" textAnchor="middle">01</text>
        <text className="sys-phase-label" x="68" y="80" textAnchor="middle">02</text>
        <text className="sys-phase-label sys-phase-label-active" x="115" y="80" textAnchor="middle">03</text>
        <text className="sys-phase-label sys-phase-label-future" x="160" y="80" textAnchor="middle">04</text>

        {/* Roadmap track + nodes */}
        <line x1="22" y1="100" x2="178" y2="100" className="sys-mini-track" />
        <g className="sys-mini-done">
          <circle cx="22" cy="100" r="6" />
          <path d="M 19 100 L 21.5 102.5 L 25 98.5" />
        </g>
        <g className="sys-mini-done">
          <circle cx="68" cy="100" r="6" />
          <path d="M 65 100 L 67.5 102.5 L 71 98.5" />
        </g>
        <circle cx="115" cy="100" r="7" className="sys-mini-active" />
        <circle cx="160" cy="100" r="6" className="sys-mini-future" />

        {/* Caption under the roadmap clarifies what's shown */}
        <text className="sys-mini-caption" x="22" y="120">Phase 3 of 4</text>
      </g>

      {/* ─── BUILD NODE (center, the centerpiece) ─── */}
      <g transform="translate(305, 165)">
        {/* Subtle teal halo behind the build node */}
        <rect
          className="sys-node-halo"
          x="-10"
          y="-10"
          width="270"
          height="210"
          rx="22"
        />
        <rect className="sys-node-bg sys-node-bg-build" width="250" height="190" rx="14" />
        <text className="sys-node-label sys-node-label-build" x="18" y="36">Build</text>
        <text className="sys-node-tag sys-node-tag-build" x="18" y="54">THE WORK</text>

        {/* Window dots */}
        <circle cx="226" cy="32" r="3" className="sys-app-dot" />
        <circle cx="216" cy="32" r="3" className="sys-app-dot" />
        <circle cx="206" cy="32" r="3" className="sys-app-dot" />

        {/* ─── System architecture sketch: Data → Model → App ─── */}
        {/* This replaces the original chat-row hint. Reads as "we build
            connected production AI systems" without copying the homepage's
            literal app UI mockup. */}

        {/* Connector lines + arrowheads between the three architecture boxes */}
        <line x1="80" y1="125" x2="96" y2="125" className="sys-arch-conn" />
        <polygon className="sys-arch-arrow" points="92,121 100,125 92,129" />
        <line x1="156" y1="125" x2="172" y2="125" className="sys-arch-conn" />
        <polygon className="sys-arch-arrow" points="168,121 176,125 168,129" />

        {/* Box 1: Data — small box with thin "record" lines inside */}
        <rect className="sys-arch-box" x="18" y="100" width="62" height="50" rx="6" />
        <text className="sys-arch-label" x="49" y="114" textAnchor="middle">DATA</text>
        <line x1="26" y1="125" x2="72" y2="125" className="sys-arch-detail" />
        <line x1="26" y1="131" x2="60" y2="131" className="sys-arch-detail" />
        <line x1="26" y1="137" x2="68" y2="137" className="sys-arch-detail" />
        <line x1="26" y1="143" x2="55" y2="143" className="sys-arch-detail" />

        {/* Box 2: Model — highlighted teal centerpiece, with a "core" indicator */}
        <rect className="sys-arch-box sys-arch-box-accent" x="96" y="92" width="60" height="66" rx="6" />
        <text className="sys-arch-label sys-arch-label-accent" x="126" y="108" textAnchor="middle">MODEL</text>
        <circle cx="126" cy="132" r="11" className="sys-arch-core-ring" />
        <circle cx="126" cy="132" r="6" className="sys-arch-core-mid" />
        <circle cx="126" cy="132" r="2.5" className="sys-arch-core-dot" />

        {/* Box 3: App — small box with stylized UI element bars */}
        <rect className="sys-arch-box" x="172" y="100" width="62" height="50" rx="6" />
        <text className="sys-arch-label" x="203" y="114" textAnchor="middle">APP</text>
        <rect x="180" y="124" width="46" height="3" rx="1" className="sys-arch-detail-bar" />
        <rect x="180" y="132" width="34" height="3" rx="1" className="sys-arch-detail-bar" />
        <rect x="180" y="140" width="42" height="3" rx="1" className="sys-arch-detail-bar" />

        {/* Caption under the architecture, parallel to Strategy's phase caption */}
        <text className="sys-mini-caption" x="18" y="178">Production AI system</text>
      </g>

      {/* ─── MANAGED NODE (lower, pulled down for breathing room) ─── */}
      <g transform="translate(220, 410)">
        <rect className="sys-node-bg" width="240" height="115" rx="14" />
        <text className="sys-node-label" x="18" y="32">Managed</text>
        <text className="sys-node-tag" x="18" y="50">AFTER WE SHIP</text>

        {/* Live status pulse in the upper-right */}
        <circle cx="218" cy="32" r="3" className="sys-managed-status" />
        <text className="sys-managed-status-label" x="208" y="35" textAnchor="end">LIVE</text>

        {/* Mini monitoring dashboard: sparkline above, stats below */}
        {/* Sparkline area fill */}
        <path
          className="sys-mini-area"
          d="M 18 78 Q 60 76, 90 68 T 145 56 L 200 48 L 200 84 L 18 84 Z"
        />
        {/* Sparkline line */}
        <path
          className="sys-mini-line"
          d="M 18 78 Q 60 76, 90 68 T 145 56 L 200 48"
          fill="none"
        />
        <circle cx="50" cy="77" r="2" className="sys-mini-pt" />
        <circle cx="100" cy="66" r="2" className="sys-mini-pt" />
        <circle cx="150" cy="56" r="2" className="sys-mini-pt" />
        <circle cx="200" cy="48" r="4" className="sys-mini-pulse" />

        {/* Stats row (3 cells: uptime, systems, latency) — reads as a real monitor */}
        <line x1="18" y1="92" x2="222" y2="92" className="sys-stat-divider" />
        <g transform="translate(18, 0)">
          <text className="sys-stat-value" x="0" y="106">99%</text>
          <text className="sys-stat-label" x="0" y="118">UPTIME</text>
        </g>
        <g transform="translate(86, 0)">
          <text className="sys-stat-value" x="0" y="106">14</text>
          <text className="sys-stat-label" x="0" y="118">SYSTEMS</text>
        </g>
        <g transform="translate(154, 0)">
          <text className="sys-stat-value" x="0" y="106">1.2s</text>
          <text className="sys-stat-label" x="0" y="118">AVG</text>
        </g>
      </g>
    </svg>
  );
}
