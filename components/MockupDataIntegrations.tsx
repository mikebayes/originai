/**
 * Mockup graphic for the "Data and integrations" tab in
 * BuildDirections.
 *
 * Admin-style dashboard (same shell pattern as MockupBusinessApp so
 * the two cards feel like part of the same system) but the content
 * is integration-focused: connection KPIs at top, stacked area
 * chart of data throughput by source on the left, system health
 * list on the right with status dots.
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
        <linearGradient id="mdiArea1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5DA89C" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#5DA89C" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="mdiArea2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3FDDC9" stopOpacity="0.30" />
          <stop offset="100%" stopColor="#3FDDC9" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Canvas */}
      <rect width="1050" height="450" fill="#03100b" />

      {/* LEFT SIDEBAR */}
      <rect x="0" y="0" width="170" height="450" fill="#02100a" />
      <line x1="170" y1="0" x2="170" y2="450" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />

      {/* Logo */}
      <g transform="translate(20 24)">
        <rect width="6" height="6" rx="1" fill="#5DA89C" />
        <rect x="9" width="6" height="6" rx="1" fill="rgba(93,168,156,0.50)" />
        <rect y="9" width="6" height="6" rx="1" fill="rgba(93,168,156,0.30)" />
        <rect x="9" y="9" width="6" height="6" rx="1" fill="rgba(93,168,156,0.65)" />
        <text x="26" y="13" fontFamily="Inter Tight, sans-serif" fontSize="11" fontWeight="600" fill="#fff">
          Data hub
        </text>
      </g>

      {/* Nav items */}
      <g fontFamily="Inter, sans-serif" fontSize="9" fontWeight="500">
        <rect x="12" y="68" width="146" height="24" rx="2" fill="rgba(93,168,156,0.10)" />
        <circle cx="22" cy="80" r="2" fill="#5DA89C" />
        <text x="32" y="83" fill="#fff">Overview</text>

        <text x="32" y="113" fill="rgba(255,255,255,0.55)">Connections</text>
        <text x="32" y="139" fill="rgba(255,255,255,0.55)">Pipelines</text>
        <text x="32" y="165" fill="rgba(255,255,255,0.55)">Sync logs</text>
        <text x="32" y="191" fill="rgba(255,255,255,0.55)">Schemas</text>
        <text x="32" y="217" fill="rgba(255,255,255,0.55)">Alerts</text>

        <line x1="20" y1="240" x2="150" y2="240" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
        <text x="22" y="262" fontSize="7.5" letterSpacing="1.4" fill="rgba(255,255,255,0.32)" fontWeight="600">
          STATUS
        </text>
        <g transform="translate(22 280)">
          <circle cx="3" cy="3" r="3" fill="#5DA89C" />
          <circle cx="3" cy="3" r="6" fill="none" stroke="rgba(93,168,156,0.30)" strokeWidth="0.6">
            <animate attributeName="r" values="6;9;6" dur="2.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0;0.4" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <text x="14" y="6" fontSize="9" fill="rgba(255,255,255,0.78)">All systems live</text>
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

        {/* KPI TILES */}
        <g transform="translate(0 56)">
          {[
            { label: "CONNECTED SYSTEMS", value: "12", delta: "▲ 2 this quarter" },
            { label: "RECORDS SYNCED", value: "4.2M", delta: "▲ 18% vs prev" },
            { label: "API CALLS / DAY", value: "86k", delta: "▲ 12% vs prev" },
            { label: "UPTIME", value: "99.97%", delta: "▲ 0.04 pts" },
          ].map((kpi, i) => (
            <g key={kpi.label} transform={`translate(${i * 214} 0)`}>
              <rect width="200" height="62" rx="2" fill="url(#mdiPanelBg)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
              <text x="14" y="20" fontFamily="JetBrains Mono, monospace" fontSize="7.5" letterSpacing="1.4" fill="rgba(255,255,255,0.50)" fontWeight="500">
                {kpi.label}
              </text>
              <text x="14" y="44" fontFamily="Inter Tight, sans-serif" fontSize="22" fontWeight="500" fill="#fff" letterSpacing="-0.3">
                {kpi.value}
              </text>
              <text x="14" y="56" fontFamily="Inter, sans-serif" fontSize="7" fill="#5DA89C">
                {kpi.delta}
              </text>
            </g>
          ))}
        </g>

        {/* BOTTOM ROW */}
        <g transform="translate(0 138)">
          {/* Stacked area chart card */}
          <rect width="540" height="200" rx="2" fill="url(#mdiPanelBg)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
          <text x="14" y="22" fontFamily="JetBrains Mono, monospace" fontSize="8" letterSpacing="1.4" fill="rgba(255,255,255,0.55)" fontWeight="500">
            DATA THROUGHPUT BY SOURCE
          </text>

          <g transform="translate(380 16)" fontFamily="Inter, sans-serif" fontSize="7" fill="rgba(255,255,255,0.55)">
            <circle cx="0" cy="0" r="2" fill="#5DA89C" />
            <text x="6" y="2.5">CRM</text>
            <g transform="translate(45 0)">
              <circle r="2" fill="#3FDDC9" />
              <text x="6" y="2.5">Billing</text>
            </g>
            <g transform="translate(95 0)">
              <circle r="2" fill="rgba(255,255,255,0.40)" />
              <text x="6" y="2.5">Other</text>
            </g>
          </g>

          <g transform="translate(14 36)">
            {/* Grid lines */}
            <line x1="0" y1="20" x2="510" y2="20" stroke="rgba(255,255,255,0.04)" />
            <line x1="0" y1="60" x2="510" y2="60" stroke="rgba(255,255,255,0.04)" />
            <line x1="0" y1="100" x2="510" y2="100" stroke="rgba(255,255,255,0.04)" />
            <line x1="0" y1="140" x2="510" y2="140" stroke="rgba(255,255,255,0.04)" />

            {/* Stacked area: bottom layer (CRM, biggest), middle (Billing), top (Other) */}
            {/* Bottom: CRM area */}
            <path
              d="M0 110 L51 100 L102 90 L153 95 L204 75 L255 70 L306 60 L357 50 L408 45 L459 35 L510 30 L510 152 L0 152 Z"
              fill="url(#mdiArea1)"
            />
            <path
              d="M0 110 L51 100 L102 90 L153 95 L204 75 L255 70 L306 60 L357 50 L408 45 L459 35 L510 30"
              stroke="#5DA89C"
              strokeWidth="1.4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Middle: Billing area (offset above CRM) */}
            <path
              d="M0 80 L51 75 L102 65 L153 70 L204 55 L255 50 L306 45 L357 35 L408 32 L459 22 L510 20 L510 30 L459 35 L408 45 L357 50 L306 60 L255 70 L204 75 L153 95 L102 90 L51 100 L0 110 Z"
              fill="url(#mdiArea2)"
            />
            <path
              d="M0 80 L51 75 L102 65 L153 70 L204 55 L255 50 L306 45 L357 35 L408 32 L459 22 L510 20"
              stroke="#3FDDC9"
              strokeWidth="1.2"
              fill="none"
              strokeOpacity="0.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Endpoint */}
            <circle cx="510" cy="20" r="3" fill="#3FDDC9" />
            <circle cx="510" cy="30" r="2.5" fill="#5DA89C" />

            <g fontFamily="JetBrains Mono, monospace" fontSize="6.5" fill="rgba(255,255,255,0.35)" letterSpacing="0.5">
              <text x="0" y="166">D-90</text>
              <text x="100" y="166">D-72</text>
              <text x="200" y="166">D-54</text>
              <text x="300" y="166">D-36</text>
              <text x="400" y="166">D-18</text>
              <text x="490" y="166">TODAY</text>
            </g>
          </g>

          {/* System health list card */}
          <g transform="translate(560 0)">
            <rect width="282" height="200" rx="2" fill="url(#mdiPanelBg)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
            <text x="14" y="22" fontFamily="JetBrains Mono, monospace" fontSize="8" letterSpacing="1.4" fill="rgba(255,255,255,0.55)" fontWeight="500">
              CONNECTION HEALTH
            </text>

            {/* Connection rows */}
            {[
              { name: "CRM", status: "ok", latency: "42ms" },
              { name: "Billing", status: "ok", latency: "38ms" },
              { name: "Email", status: "ok", latency: "120ms" },
              { name: "Storage", status: "ok", latency: "18ms" },
              { name: "Analytics", status: "warn", latency: "340ms" },
              { name: "Webhook out", status: "ok", latency: "55ms" },
            ].map((conn, i) => {
              const dotColor =
                conn.status === "ok"
                  ? "#5DA89C"
                  : conn.status === "warn"
                  ? "#E2A93B"
                  : "#E26A6A";
              return (
                <g key={conn.name} transform={`translate(14 ${44 + i * 24})`}>
                  <circle cx="3" cy="6" r="3" fill={dotColor} />
                  <text x="14" y="9" fontFamily="Inter, sans-serif" fontSize="9" fill="rgba(255,255,255,0.85)" fontWeight="500">
                    {conn.name}
                  </text>
                  <text
                    x="254"
                    y="9"
                    textAnchor="end"
                    fontFamily="JetBrains Mono, monospace"
                    fontSize="8"
                    fill="rgba(255,255,255,0.50)"
                  >
                    {conn.latency}
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
