/**
 * Mockup graphic for the "Custom business applications" tab in
 * BuildDirections (services/build page).
 *
 * Generic operations dashboard inside a designed app shell:
 * left sidebar with nav, top bar with title + search + avatar, main
 * area with eyebrow + headline + 4 KPI tiles + chart card + segment
 * card. Reads as any custom internal business app — deliberately
 * unbranded so prospects project their own use case onto it.
 *
 * SVG viewBox is 1050×450 (21:9) to match the .bp-directions-mockup
 * container's aspect-ratio. preserveAspectRatio="xMidYMid meet" so it
 * scales cleanly inside the dashed-frame wrapper.
 */
export default function MockupBusinessApp() {
  return (
    <svg
      className="bp-mockup-svg"
      viewBox="0 0 1050 450"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mbaChartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5DA89C" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#5DA89C" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="mbaPanelBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#061b14" />
          <stop offset="100%" stopColor="#04140e" />
        </linearGradient>
      </defs>

      {/* Whole canvas background */}
      <rect width="1050" height="450" fill="#03100b" />

      {/* LEFT SIDEBAR */}
      <rect x="0" y="0" width="170" height="450" fill="#02100a" />
      <line
        x1="170"
        y1="0"
        x2="170"
        y2="450"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="0.5"
      />

      {/* Logo block */}
      <g transform="translate(20 24)">
        <rect width="6" height="6" rx="1" fill="#5DA89C" />
        <rect x="9" width="6" height="6" rx="1" fill="rgba(93,168,156,0.50)" />
        <rect y="9" width="6" height="6" rx="1" fill="rgba(93,168,156,0.30)" />
        <rect x="9" y="9" width="6" height="6" rx="1" fill="rgba(93,168,156,0.65)" />
        <text
          x="26"
          y="13"
          fontFamily="Inter Tight, sans-serif"
          fontSize="11"
          fontWeight="600"
          fill="#fff"
        >
          Operations
        </text>
      </g>

      {/* Nav items */}
      <g fontFamily="Inter, sans-serif" fontSize="9" fontWeight="500">
        {/* Active item: subtle pill bg + teal dot + bright text */}
        <rect
          x="12"
          y="68"
          width="146"
          height="24"
          rx="2"
          fill="rgba(93,168,156,0.10)"
        />
        <circle cx="22" cy="80" r="2" fill="#5DA89C" />
        <text x="32" y="83" fill="#fff">Overview</text>

        <text x="32" y="113" fill="rgba(255,255,255,0.55)">Schedule</text>
        <text x="32" y="139" fill="rgba(255,255,255,0.55)">Jobs</text>
        <text x="32" y="165" fill="rgba(255,255,255,0.55)">Approvals</text>
        <text x="32" y="191" fill="rgba(255,255,255,0.55)">Customers</text>
        <text x="32" y="217" fill="rgba(255,255,255,0.55)">Reports</text>

        {/* Section divider */}
        <line
          x1="20"
          y1="240"
          x2="150"
          y2="240"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="0.5"
        />

        <text
          x="22"
          y="262"
          fontSize="7.5"
          letterSpacing="1.4"
          fill="rgba(255,255,255,0.32)"
          fontWeight="600"
        >
          ACCOUNT
        </text>

        {/* User row */}
        <g transform="translate(20 282)">
          <circle cx="6" cy="6" r="6" fill="#1a3329" />
          <circle
            cx="6"
            cy="6"
            r="6"
            fill="none"
            stroke="rgba(93,168,156,0.45)"
            strokeWidth="0.6"
          />
          <text
            x="18"
            y="9"
            fontSize="9"
            fill="rgba(255,255,255,0.65)"
          >
            Field team
          </text>
        </g>
      </g>

      {/* TOP BAR */}
      <rect
        x="170"
        y="0"
        width="880"
        height="36"
        fill="#04140e"
      />
      <line
        x1="170"
        y1="36"
        x2="1050"
        y2="36"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="0.5"
      />

      {/* Window dots — small playful detail */}
      <circle cx="190" cy="18" r="3" fill="rgba(255,107,107,0.55)" />
      <circle cx="200" cy="18" r="3" fill="rgba(255,214,107,0.55)" />
      <circle cx="210" cy="18" r="3" fill="rgba(127,219,150,0.55)" />

      {/* Crumb path */}
      <text
        x="240"
        y="22"
        fontFamily="Inter, sans-serif"
        fontSize="9"
        fill="rgba(255,255,255,0.55)"
      >
        Operations · Q3 · All locations
      </text>

      {/* Search box */}
      <g transform="translate(800 9)">
        <rect width="160" height="18" rx="9" fill="rgba(255,255,255,0.05)" />
        <circle cx="13" cy="9" r="2" fill="none" stroke="rgba(255,255,255,0.40)" strokeWidth="0.6" />
        <line x1="14.5" y1="10.5" x2="17" y2="13" stroke="rgba(255,255,255,0.40)" strokeWidth="0.6" />
        <text
          x="22"
          y="12.5"
          fontFamily="Inter, sans-serif"
          fontSize="8"
          fill="rgba(255,255,255,0.40)"
        >
          Search jobs, customers...
        </text>
      </g>

      {/* Avatar */}
      <g transform="translate(986 12)">
        <circle r="10" fill="#1a3329" />
        <circle
          r="10"
          fill="none"
          stroke="rgba(93,168,156,0.55)"
          strokeWidth="0.6"
        />
        <text
          y="3"
          textAnchor="middle"
          fontFamily="Inter Tight, sans-serif"
          fontSize="8"
          fontWeight="600"
          fill="#5DA89C"
        >
          OP
        </text>
      </g>

      {/* MAIN CONTENT */}
      <g transform="translate(190 56)">
        {/* Eyebrow */}
        <text
          fontFamily="JetBrains Mono, monospace"
          fontSize="8.5"
          letterSpacing="1.6"
          fill="rgba(93,168,156,0.85)"
          fontWeight="500"
        >
          OPERATIONS DASHBOARD
        </text>

        {/* H1 */}
        <text
          y="32"
          fontFamily="Inter Tight, sans-serif"
          fontSize="22"
          fontWeight="500"
          fill="#fff"
          letterSpacing="-0.3"
        >
          Everything in one view.
        </text>

        {/* Period label */}
        <text
          x="840"
          y="32"
          textAnchor="end"
          fontFamily="Inter, sans-serif"
          fontSize="8.5"
          fill="rgba(255,255,255,0.42)"
        >
          Last 90 days · compared prev.
        </text>

        {/* KPI TILES — 4 across */}
        <g transform="translate(0 56)">
          {[
            { label: "ACTIVE JOBS", value: "1,284", delta: "▲ 32% vs prev" },
            { label: "REVENUE BOOKED", value: "$684k", delta: "▲ 41% vs prev" },
            { label: "TIME TO CLOSE", value: "14d", delta: "▼ 18% lower" },
            { label: "UTILIZATION", value: "87%", delta: "▲ 4 pts" },
          ].map((kpi, i) => (
            <g key={kpi.label} transform={`translate(${i * 214} 0)`}>
              <rect
                width="200"
                height="62"
                rx="2"
                fill="url(#mbaPanelBg)"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="0.5"
              />
              <text
                x="14"
                y="20"
                fontFamily="JetBrains Mono, monospace"
                fontSize="7.5"
                letterSpacing="1.4"
                fill="rgba(255,255,255,0.50)"
                fontWeight="500"
              >
                {kpi.label}
              </text>
              <text
                x="14"
                y="44"
                fontFamily="Inter Tight, sans-serif"
                fontSize="22"
                fontWeight="500"
                fill="#fff"
                letterSpacing="-0.3"
              >
                {kpi.value}
              </text>
              <text
                x="14"
                y="56"
                fontFamily="Inter, sans-serif"
                fontSize="7"
                fill="#5DA89C"
              >
                {kpi.delta}
              </text>
            </g>
          ))}
        </g>

        {/* BOTTOM ROW — chart card + segment card */}
        <g transform="translate(0 138)">
          {/* Chart card */}
          <rect
            width="540"
            height="200"
            rx="2"
            fill="url(#mbaPanelBg)"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="0.5"
          />
          <text
            x="14"
            y="22"
            fontFamily="JetBrains Mono, monospace"
            fontSize="8"
            letterSpacing="1.4"
            fill="rgba(255,255,255,0.55)"
            fontWeight="500"
          >
            JOBS COMPLETED BY WEEK
          </text>

          {/* Legend pills (top-right of chart) */}
          <g transform="translate(380 16)" fontFamily="Inter, sans-serif" fontSize="7" fill="rgba(255,255,255,0.55)">
            <circle cx="0" cy="0" r="2" fill="#5DA89C" />
            <text x="6" y="2.5">Completed</text>
            <g transform="translate(70 0)">
              <circle r="2" fill="rgba(255,255,255,0.35)" />
              <text x="6" y="2.5">Forecast</text>
            </g>
            <g transform="translate(130 0)">
              <circle r="2" fill="rgba(63,221,201,0.65)" />
              <text x="6" y="2.5">Target</text>
            </g>
          </g>

          {/* Chart plot area */}
          <g transform="translate(14 36)">
            {/* Faint horizontal grid lines */}
            <line x1="0" y1="20" x2="510" y2="20" stroke="rgba(255,255,255,0.04)" />
            <line x1="0" y1="60" x2="510" y2="60" stroke="rgba(255,255,255,0.04)" />
            <line x1="0" y1="100" x2="510" y2="100" stroke="rgba(255,255,255,0.04)" />
            <line x1="0" y1="140" x2="510" y2="140" stroke="rgba(255,255,255,0.04)" />

            {/* Area fill */}
            <path
              d="M0 130 L51 122 L102 105 L153 110 L204 80 L255 72 L306 60 L357 42 L408 50 L459 28 L510 18 L510 152 L0 152 Z"
              fill="url(#mbaChartFill)"
            />

            {/* Line */}
            <path
              d="M0 130 L51 122 L102 105 L153 110 L204 80 L255 72 L306 60 L357 42 L408 50 L459 28 L510 18"
              stroke="#5DA89C"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* End point dot */}
            <circle cx="510" cy="18" r="3" fill="#5DA89C" />
            <circle cx="510" cy="18" r="6" fill="none" stroke="#5DA89C" strokeOpacity="0.30" />

            {/* X-axis labels */}
            <g
              fontFamily="JetBrains Mono, monospace"
              fontSize="6.5"
              fill="rgba(255,255,255,0.35)"
              letterSpacing="0.5"
            >
              <text x="0" y="166">WK1</text>
              <text x="100" y="166">WK3</text>
              <text x="200" y="166">WK5</text>
              <text x="300" y="166">WK7</text>
              <text x="400" y="166">WK9</text>
              <text x="488" y="166">WK11</text>
            </g>
          </g>

          {/* Segment / mix card */}
          <g transform="translate(560 0)">
            <rect
              width="282"
              height="200"
              rx="2"
              fill="url(#mbaPanelBg)"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="0.5"
            />
            <text
              x="14"
              y="22"
              fontFamily="JetBrains Mono, monospace"
              fontSize="8"
              letterSpacing="1.4"
              fill="rgba(255,255,255,0.55)"
              fontWeight="500"
            >
              JOB MIX
            </text>

            {/* Donut chart. Circumference = 2*PI*38 ≈ 238.76 */}
            <g transform="translate(72 110)">
              {/* Background ring */}
              <circle r="38" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="14" />

              {/* Segment 1 — 40% recurring (teal solid) */}
              <circle
                r="38"
                fill="none"
                stroke="#5DA89C"
                strokeWidth="14"
                strokeDasharray="95.5 238.76"
                strokeDashoffset="0"
                transform="rotate(-90)"
              />
              {/* Segment 2 — 30% new (bright teal) */}
              <circle
                r="38"
                fill="none"
                stroke="#3FDDC9"
                strokeWidth="14"
                strokeDasharray="71.6 238.76"
                strokeDashoffset="-95.5"
                transform="rotate(-90)"
                opacity="0.75"
              />
              {/* Segment 3 — 20% repair (muted) */}
              <circle
                r="38"
                fill="none"
                stroke="rgba(255,255,255,0.30)"
                strokeWidth="14"
                strokeDasharray="47.7 238.76"
                strokeDashoffset="-167.1"
                transform="rotate(-90)"
              />
              {/* Segment 4 — 10% other (dim) */}
              <circle
                r="38"
                fill="none"
                stroke="rgba(255,255,255,0.14)"
                strokeWidth="14"
                strokeDasharray="23.9 238.76"
                strokeDashoffset="-214.8"
                transform="rotate(-90)"
              />
            </g>

            {/* Legend */}
            <g
              transform="translate(150 64)"
              fontFamily="Inter, sans-serif"
              fontSize="8"
              fill="rgba(255,255,255,0.74)"
            >
              {[
                { label: "Recurring", val: "40%", color: "#5DA89C", opacity: 1 },
                { label: "New", val: "30%", color: "#3FDDC9", opacity: 0.75 },
                { label: "Repair", val: "20%", color: "rgba(255,255,255,0.30)", opacity: 1 },
                { label: "Other", val: "10%", color: "rgba(255,255,255,0.14)", opacity: 1 },
              ].map((seg, i) => (
                <g key={seg.label} transform={`translate(0 ${i * 22})`}>
                  <circle cx="0" cy="0" r="3" fill={seg.color} opacity={seg.opacity} />
                  <text x="10" y="3">{seg.label}</text>
                  <text x="116" y="3" textAnchor="end" fill="#fff" fontWeight="500">
                    {seg.val}
                  </text>
                </g>
              ))}
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
