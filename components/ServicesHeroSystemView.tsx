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
      viewBox="0 0 600 570"
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
        d="M 345 355 C 345 395, 315 410, 290 415"
        fill="none"
        markerEnd="url(#sys-flow-arrow)"
      />

      {/* ─── STRATEGY NODE (upper-left) ─── */}
      {/* Box height bumped to 200 to fit the strategy deliverables checklist.
          The list replaces the abstract phased roadmap with concrete,
          recognizable strategy work items (Leadership alignment, AI workshops,
          AI policy, AI governance) with progress states (some done, one active,
          one pending). Reads as "humans doing real strategy work" rather than
          a software automation flow. */}
      <g transform="translate(40, 50)">
        <rect className="sys-node-bg" width="200" height="200" rx="14" />
        <text className="sys-node-label" x="18" y="32">Strategy</text>
        <text className="sys-node-tag" x="18" y="50">AI ROADMAP &amp; PLANNING</text>

        {/* Two-person icon in the top-right corner. Humanizes the Strategy
            card so it doesn't read as a pure software/automation play.
            Strategy work happens with the client's leadership team, and
            this small visual signal carries that meaning. */}
        <g transform="translate(160, 18)">
          {/* Back person (smaller, dimmer, behind) */}
          <circle cx="15" cy="4" r="2.5" className="sys-person-back" />
          <path
            d="M 11 13 Q 11 8.5 15 8.5 Q 19 8.5 19 13 Z"
            className="sys-person-back"
          />
          {/* Front person (larger, brighter, in front) */}
          <circle cx="7" cy="5" r="3.5" className="sys-person-front" />
          <path
            d="M 1 14 Q 1 9 7 9 Q 13 9 13 14 Z"
            className="sys-person-front"
          />
        </g>

        {/* Strategy deliverables checklist — done, done, active, pending */}
        <g transform="translate(18, 80)">
          {/* Item 1: done */}
          <g transform="translate(0, 0)">
            <circle cx="6" cy="6" r="5.5" className="sys-task-done-circle" />
            <path d="M 3 6 L 5.5 8.3 L 9 4.7" className="sys-task-check" />
            <text className="sys-task-label sys-task-label-done" x="20" y="10">Leadership alignment</text>
          </g>
          {/* Item 2: done */}
          <g transform="translate(0, 26)">
            <circle cx="6" cy="6" r="5.5" className="sys-task-done-circle" />
            <path d="M 3 6 L 5.5 8.3 L 9 4.7" className="sys-task-check" />
            <text className="sys-task-label sys-task-label-done" x="20" y="10">AI workshops &amp; training</text>
          </g>
          {/* Item 3: active (pulsing teal dot, brighter label) */}
          <g transform="translate(0, 52)">
            <circle cx="6" cy="6" r="6" className="sys-task-active-circle" />
            <text className="sys-task-label sys-task-label-active" x="20" y="10">AI policy</text>
          </g>
          {/* Item 4: pending */}
          <g transform="translate(0, 78)">
            <circle cx="6" cy="6" r="5.5" className="sys-task-pending-circle" />
            <text className="sys-task-label sys-task-label-pending" x="20" y="10">AI governance</text>
          </g>
        </g>
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

      {/* ─── MANAGED NODE (lower-left) ─── */}
      {/* Sits more toward the lower-left now, with Strategy upper-left
          and Build the right-side centerpiece. Box is 150 tall with the
          sparkline and stats shifted +20 internally for breathing room. */}
      <g transform="translate(200, 415)">
        <rect className="sys-node-bg" width="240" height="150" rx="14" />
        <text className="sys-node-label" x="18" y="32">Managed</text>
        <text className="sys-node-tag" x="18" y="50">AFTER WE SHIP</text>

        {/* Live status pulse in the upper-right */}
        <circle cx="218" cy="32" r="3" className="sys-managed-status" />
        <text className="sys-managed-status-label" x="208" y="35" textAnchor="end">LIVE</text>

        {/* Mini monitoring dashboard: sparkline above, stats below */}
        {/* Sparkline area fill */}
        <path
          className="sys-mini-area"
          d="M 18 98 Q 60 96, 90 88 T 145 76 L 200 68 L 200 104 L 18 104 Z"
        />
        {/* Sparkline line */}
        <path
          className="sys-mini-line"
          d="M 18 98 Q 60 96, 90 88 T 145 76 L 200 68"
          fill="none"
        />
        <circle cx="50" cy="97" r="2" className="sys-mini-pt" />
        <circle cx="100" cy="86" r="2" className="sys-mini-pt" />
        <circle cx="150" cy="76" r="2" className="sys-mini-pt" />
        <circle cx="200" cy="68" r="4" className="sys-mini-pulse" />

        {/* Stats row (3 cells: uptime, systems, latency) — reads as a real monitor */}
        <line x1="18" y1="112" x2="222" y2="112" className="sys-stat-divider" />
        <g transform="translate(18, 0)">
          <text className="sys-stat-value" x="0" y="126">99%</text>
          <text className="sys-stat-label" x="0" y="138">UPTIME</text>
        </g>
        <g transform="translate(86, 0)">
          <text className="sys-stat-value" x="0" y="126">14</text>
          <text className="sys-stat-label" x="0" y="138">SYSTEMS</text>
        </g>
        <g transform="translate(154, 0)">
          <text className="sys-stat-value" x="0" y="126">1.2s</text>
          <text className="sys-stat-label" x="0" y="138">AVG</text>
        </g>
      </g>
    </svg>
  );
}
