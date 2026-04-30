/**
 * Services hero "system view".
 *
 * Visual concept: three connected nodes (Strategy, Build, Managed) showing
 * how the services relate to each other rather than three boxes in a row.
 * Build is the visual centerpiece (largest, brightest), Strategy sits
 * upper-left as the "before" feeder, Managed sits lower-right as the
 * "after" extender. Soft dashed flow lines connect them.
 *
 * Each node carries a tiny preview of the visual language already used
 * on the homepage Services cards (mini roadmap, UI mockup hint, sparkline)
 * so the asset language compounds rather than being reinvented.
 *
 * Pure SVG, no JS. Atmospheric glow comes from the parent CSS layer.
 */
export default function ServicesHeroSystemView() {
  return (
    <svg
      className="sys-view"
      viewBox="0 0 600 500"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      {/* ─── Flow lines connecting the nodes (drawn first so nodes overlay them) ─── */}
      {/* Strategy → Build (curving from bottom-right of Strategy to top-left of Build) */}
      <path
        className="sys-flow"
        d="M 220 140 C 270 150, 250 200, 290 230"
        fill="none"
      />
      {/* Build → Managed (curving from bottom-right of Build to top-left of Managed) */}
      <path
        className="sys-flow"
        d="M 510 360 C 510 400, 470 410, 430 410"
        fill="none"
      />
      {/* Tiny arrowheads on each flow line */}
      <polygon className="sys-flow-arrow" points="285,225 295,228 290,237" />
      <polygon className="sys-flow-arrow" points="430,405 432,415 422,413" />

      {/* ─── STRATEGY NODE (upper-left, smaller) ─── */}
      <g transform="translate(40, 50)">
        <rect className="sys-node-bg" width="200" height="120" rx="14" />
        <text className="sys-node-label" x="18" y="32">Strategy</text>
        <text className="sys-node-tag" x="18" y="50">BEFORE YOU BUILD</text>
        {/* Mini roadmap inside */}
        <line x1="22" y1="92" x2="178" y2="92" className="sys-mini-track" />
        <g className="sys-mini-done">
          <circle cx="22" cy="92" r="6" />
          <path d="M 19 92 L 21.5 94.5 L 25 90.5" />
        </g>
        <g className="sys-mini-done">
          <circle cx="68" cy="92" r="6" />
          <path d="M 65 92 L 67.5 94.5 L 71 90.5" />
        </g>
        <circle cx="115" cy="92" r="7" className="sys-mini-active" />
        <circle cx="160" cy="92" r="6" className="sys-mini-future" />
      </g>

      {/* ─── BUILD NODE (center-right, largest, the centerpiece) ─── */}
      <g transform="translate(280, 180)">
        {/* Subtle teal halo behind the build node */}
        <rect
          className="sys-node-halo"
          x="-10" y="-10"
          width="260" height="200"
          rx="22"
        />
        <rect className="sys-node-bg sys-node-bg-build" width="240" height="180" rx="14" />
        <text className="sys-node-label sys-node-label-build" x="18" y="36">Build</text>
        <text className="sys-node-tag sys-node-tag-build" x="18" y="54">THE WORK</text>

        {/* Stylized AI software mockup hint inside */}
        {/* Window dots */}
        <circle cx="218" cy="32" r="3" className="sys-app-dot" />
        <circle cx="208" cy="32" r="3" className="sys-app-dot" />
        <circle cx="198" cy="32" r="3" className="sys-app-dot" />
        {/* Chat-like rows, with the active row in teal */}
        <rect className="sys-app-row" x="18" y="78" width="160" height="22" rx="4" />
        <rect className="sys-app-row sys-app-row-accent" x="18" y="108" width="200" height="28" rx="4" />
        <rect className="sys-app-row" x="18" y="144" width="140" height="22" rx="4" />
      </g>

      {/* ─── MANAGED NODE (lower-right, smaller) ─── */}
      <g transform="translate(220, 380)">
        <rect className="sys-node-bg" width="200" height="100" rx="14" />
        <text className="sys-node-label" x="18" y="32">Managed</text>
        <text className="sys-node-tag" x="18" y="50">AFTER WE SHIP</text>
        {/* Mini sparkline inside */}
        <path
          className="sys-mini-line"
          d="M 22 80 Q 60 78, 90 70 T 145 58 L 170 50"
          fill="none"
        />
        <circle cx="50" cy="79" r="2" className="sys-mini-pt" />
        <circle cx="100" cy="68" r="2" className="sys-mini-pt" />
        <circle cx="140" cy="58" r="2" className="sys-mini-pt" />
        <circle cx="170" cy="50" r="4" className="sys-mini-pulse" />
      </g>
    </svg>
  );
}
