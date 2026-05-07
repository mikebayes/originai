/**
 * Mockup graphic for the "Data and integrations" tab in
 * BuildDirections.
 *
 * Redesigned 2026-05-06: previous version was too similar to the Apps
 * dashboard (single line/area chart + side panel). New version is
 * a denser data-ops dashboard with three distinct chart panels and
 * subtle status colors (green/yellow/red dots) so it reads as a real
 * monitoring surface, not just another sales dashboard.
 *
 * Layout: 4 KPI tiles on top, bottom row split into a vertical bar
 * chart (left) + sparkline trend (top-right) + system status grid
 * (bottom-right) — three charts in the bottom row vs. apps' two.
 *
 * 1050×450 viewBox to match the .bp-directions-mockup container's
 * 21:9 aspect-ratio.
 */
export default function MockupDataIntegrations() {
  return (
    <svg
      className="bp-mockup-svg"
      viewBox="0 0 1050 450"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mdiPanelBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#061b14" />
          <stop offset="100%" stopColor="#04140e" />
        </linearGradient>
        <linearGradient id="mdiBarTeal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5DA89C" />
          <stop offset="100%" stopColor="#2c5e54" />
        </linearGradient>
        <linearGradient id="mdiSparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5DA89C" stopOpacity="0.30" />
          <stop offset="100%" stopColor="#5DA89C" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Canvas */}
      <rect width="1050" height="450" fill="#03100b" />

      {/* LEFT SIDEBAR */}
      <rect x="0" y="0" width="170" height="450" fill="#02100a" />
      <line x1="170" y1="0" x2="170" y2="450" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />

      <g transform="translate(20 24)">
        <rect width="6" height="6" rx="1" fill="#5DA89C" />
        <rect x="9" width="6" height="6" rx="1" fill="rgba(93,168,156,0.50)" />
        <rect y="9" width="6" height="6" rx="1" fill="rgba(93,168,156,0.30)" />
        <rect x="9" y="9" width="6" height="6" rx="1" fill="rgba(93,168,156,0.65)" />
        <text x="26" y="13" fontFamily="Inter Tight, sans-serif" fontSize="11" fontWeight="600" fill="#fff">
          Data hub
        </text>
      </g>

      <g fontFamily="Inter, sans-serif" fontSize="9" fontWeight="500">
        <rect x="12" y="68" width="146" height="24" rx="2" fill="rgba(93,168,156,0.10)" />
        <circle cx="22" cy="80" r="2" fill="#5DA89C" />
        <text x="32" y="83" fill="#fff">Overview</text>

        <text x="32" y="113" fill="rgba(255,255,255,0.55)">Connections</text>
        <text x="32" y="139" fill="rgba(255,255,255,0.55)">Pipelines</text>
        <text x="32" y="165" fill="rgba(255,255,255,0.55)">Sync logs</text>
        {/* Alerts row with a small red badge to add the colored dot Mike asked for */}
        <text x="32" y="191" fill="rgba(255,255,255,0.55)">Alerts</text>
        <circle cx="148" cy="188" r="3" fill="#E26A6A" />

        <line x1="20" y1="218" x2="150" y2="218" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
        <text x="22" y="240" fontSize="7.5" letterSpacing="1.4" fill="rgba(255,255,255,0.32)" fontWeight="600">
          STATUS
        </text>
        <g transform="translate(22 258)">
          <circle cx="3" cy="3" r="3" fill="#7fdb96" />
          <circle cx="3" cy="3" r="6" fill="none" stroke="rgba(127,219,150,0.30)" strokeWidth="0.6">
            <animate attributeName="r" values="6;9;6" dur="2.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0;0.4" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <text x="14" y="6" fontSize="9" fill="rgba(255,255,255,0.78)">11 live</text>
        </g>
        <g transform="translate(22 280)">
          <circle cx="3" cy="3" r="3" fill="#E2A93B" />
          <text x="14" y="6" fontSize="9" fill="rgba(255,255,255,0.78)">1 degraded</text>
        </g>
      </g>

      {/* TOP BAR */}
      <rect x="170" y="0" width="880" height="36" fill="#04140e" />
      <line x1="170" y1="36" x2="1050" y2="36" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />

      <circle cx="190" cy="18" r="3" fill="rgba(255,107,107,0.55)" />
      <circle cx="200" cy="18" r="3" fill="rgba(255,214,107,0.55)" />
      <circle cx="210" cy="18" r="3" fill="rgba(127,219,150,0.55)" />

      <text x="240" y="22" fontFamily="Inter, sans-serif" fontSize="9" fill="rgba(255,255,255,0.55)">
        Data hub · 12 connections · Last 90 days
      </text>

      <g transform="translate(800 9)">
        <rect width="160" height="18" rx="9" fill="rgba(255,255,255,0.05)" />
        <circle cx="13" cy="9" r="2" fill="none" stroke="rgba(255,255,255,0.40)" strokeWidth="0.6" />
        <line x1="14.5" y1="10.5" x2="17" y2="13" stroke="rgba(255,255,255,0.40)" strokeWidth="0.6" />
        <text x="22" y="12.5" fontFamily="Inter, sans-serif" fontSize="8" fill="rgba(255,255,255,0.40)">
          Search connections, pipelines...
        </text>
      </g>

      <g transform="translate(986 12)">
        <circle r="10" fill="#1a3329" />
        <circle r="10" fill="none" stroke="rgba(93,168,156,0.55)" strokeWidth="0.6" />
        <text y="3" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="8" fontWeight="600" fill="#5DA89C">
          DH
        </text>
      </g>

      {/* MAIN */}
      <g transform="translate(190 56)">
        <text fontFamily="JetBrains Mono, monospace" fontSize="8.5" letterSpacing="1.6" fill="rgba(93,168,156,0.85)" fontWeight="500">
          DATA INTEGRATIONS
        </text>
        <text y="32" fontFamily="Inter Tight, sans-serif" fontSize="22" fontWeight="500" fill="#fff" letterSpacing="-0.3">
          Systems, talking.
        </text>
        <text x="840" y="32" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="8.5" fill="rgba(255,255,255,0.42)">
          99.97% uptime · live
        </text>

        {/* KPI TILES — 4 across, with a small colored health dot */}
        <g transform="translate(0 56)">
          {[
            { label: "CONNECTED SYSTEMS", value: "12", delta: "▲ 2 this quarter", health: "#7fdb96" },
            { label: "RECORDS SYNCED", value: "4.2M", delta: "▲ 18% vs prev", health: "#7fdb96" },
            { label: "API CALLS / DAY", value: "86k", delta: "▲ 12% vs prev", health: "#7fdb96" },
            { label: "AVG LATENCY", value: "62ms", delta: "▲ 8ms vs prev", health: "#E2A93B" },
          ].map((kpi, i) => (
            <g key={kpi.label} transform={`translate(${i * 214} 0)`}>
              <rect width="200" height="62" rx="2" fill="url(#mdiPanelBg)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
              <text x="14" y="20" fontFamily="JetBrains Mono, monospace" fontSize="7.5" letterSpacing="1.4" fill="rgba(255,255,255,0.50)" fontWeight="500">
                {kpi.label}
              </text>
              <circle cx="186" cy="17" r="3" fill={kpi.health} />
              <text x="14" y="44" fontFamily="Inter Tight, sans-serif" fontSize="22" fontWeight="500" fill="#fff" letterSpacing="-0.3">
                {kpi.value}
              </text>
              <text x="14" y="56" fontFamily="Inter, sans-serif" fontSize="7" fill={kpi.health === "#7fdb96" ? "#5DA89C" : "#E2A93B"}>
                {kpi.delta}
              </text>
            </g>
          ))}
        </g>

        {/* BOTTOM ROW — three panels: bar chart, sparkline trends, status grid */}
        <g transform="translate(0 138)">
          {/* Bar chart card (left, wider) */}
          <rect width="380" height="200" rx="2" fill="url(#mdiPanelBg)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
          <text x="14" y="22" fontFamily="JetBrains Mono, monospace" fontSize="8" letterSpacing="1.4" fill="rgba(255,255,255,0.55)" fontWeight="500">
            RECORDS BY SOURCE / DAY
          </text>

          {/* Bar chart */}
          <g transform="translate(20 42)">
            {/* Y-axis ticks */}
            <text x="-8" y="4" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="6.5" fill="rgba(255,255,255,0.30)">120k</text>
            <text x="-8" y="56" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="6.5" fill="rgba(255,255,255,0.30)">60k</text>
            <text x="-8" y="116" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="6.5" fill="rgba(255,255,255,0.30)">0</text>

            {/* Grid lines */}
            <line x1="0" y1="0" x2="340" y2="0" stroke="rgba(255,255,255,0.04)" />
            <line x1="0" y1="52" x2="340" y2="52" stroke="rgba(255,255,255,0.04)" />
            <line x1="0" y1="112" x2="340" y2="112" stroke="rgba(255,255,255,0.04)" />

            {/* 8 bars at varying heights */}
            {[
              { label: "CRM", height: 90, x: 0 },
              { label: "Billing", height: 78, x: 44 },
              { label: "Email", height: 62, x: 88 },
              { label: "Storage", height: 102, x: 132 },
              { label: "Analytics", height: 48, x: 176 },
              { label: "Auth", height: 72, x: 220 },
              { label: "Webhook", height: 86, x: 264 },
              { label: "Search", height: 58, x: 308 },
            ].map((bar) => (
              <g key={bar.label} transform={`translate(${bar.x} 0)`}>
                <rect
                  x="2"
                  y={112 - bar.height}
                  width="28"
                  height={bar.height}
                  fill="url(#mdiBarTeal)"
                  rx="1"
                />
                <text
                  x="16"
                  y="128"
                  textAnchor="middle"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="6.5"
                  fill="rgba(255,255,255,0.35)"
                  letterSpacing="0.4"
                >
                  {bar.label}
                </text>
              </g>
            ))}

            {/* Highlight bar with brighter color */}
            <rect x="134" y="10" width="28" height="102" fill="#3FDDC9" rx="1" opacity="0.85" />
          </g>

          {/* Right column container — sparkline (top) + status grid (bottom) */}
          {/* Sparkline trend card */}
          <g transform="translate(400 0)">
            <rect width="442" height="92" rx="2" fill="url(#mdiPanelBg)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
            <text x="14" y="22" fontFamily="JetBrains Mono, monospace" fontSize="8" letterSpacing="1.4" fill="rgba(255,255,255,0.55)" fontWeight="500">
              UPTIME · LAST 30 DAYS
            </text>
            <text x="428" y="22" textAnchor="end" fontFamily="Inter Tight, sans-serif" fontSize="14" fontWeight="500" fill="#fff">
              99.97%
            </text>

            {/* Sparkline */}
            <g transform="translate(14 38)">
              <path
                d="M0 30 L20 28 L40 32 L60 26 L80 22 L100 20 L120 14 L140 10 L160 12 L180 8 L200 6 L220 12 L240 18 L260 16 L280 10 L300 8 L320 6 L340 4 L360 8 L380 6 L400 4 L414 4 L414 44 L0 44 Z"
                fill="url(#mdiSparkFill)"
              />
              <path
                d="M0 30 L20 28 L40 32 L60 26 L80 22 L100 20 L120 14 L140 10 L160 12 L180 8 L200 6 L220 12 L240 18 L260 16 L280 10 L300 8 L320 6 L340 4 L360 8 L380 6 L400 4 L414 4"
                stroke="#5DA89C"
                strokeWidth="1.4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Small amber blip showing the one degraded incident */}
              <circle cx="220" cy="12" r="2.4" fill="#E2A93B" />
              <text x="220" y="-3" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="6" fill="#E2A93B">
                D-12
              </text>
              <circle cx="414" cy="4" r="2.6" fill="#5DA89C" />
            </g>
          </g>

          {/* Status grid card (bottom right) */}
          <g transform="translate(400 100)">
            <rect width="442" height="100" rx="2" fill="url(#mdiPanelBg)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
            <text x="14" y="22" fontFamily="JetBrains Mono, monospace" fontSize="8" letterSpacing="1.4" fill="rgba(255,255,255,0.55)" fontWeight="500">
              CONNECTION HEALTH · 12 SYSTEMS
            </text>

            {/* 4x3 grid of system tiles with status dots */}
            {[
              { name: "CRM", status: "ok" },
              { name: "Billing", status: "ok" },
              { name: "Email", status: "ok" },
              { name: "Storage", status: "ok" },
              { name: "Analytics", status: "warn" },
              { name: "Auth", status: "ok" },
              { name: "Webhook", status: "ok" },
              { name: "Search", status: "ok" },
              { name: "Cache", status: "ok" },
              { name: "Logs", status: "ok" },
              { name: "Maps", status: "ok" },
              { name: "S3", status: "ok" },
            ].map((sys, i) => {
              const col = i % 4;
              const row = Math.floor(i / 4);
              const dot =
                sys.status === "ok"
                  ? "#7fdb96"
                  : sys.status === "warn"
                  ? "#E2A93B"
                  : "#E26A6A";
              return (
                <g key={sys.name} transform={`translate(${14 + col * 106} ${36 + row * 22})`}>
                  <rect width="100" height="18" rx="2" fill="rgba(255,255,255,0.018)" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                  <circle cx="9" cy="9" r="3" fill={dot} />
                  <text x="20" y="12" fontFamily="Inter, sans-serif" fontSize="8.5" fontWeight="500" fill="rgba(255,255,255,0.85)">
                    {sys.name}
                  </text>
                </g>
              );
            })}
          </g>
        </g>
      </g>
    </svg>
  );
}
