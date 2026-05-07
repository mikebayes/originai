/**
 * Mockup graphic for the "AI assistants and agents" tab in
 * BuildDirections.
 *
 * Split-pane work surface — left side is a structured "case" or
 * "ticket" view (the kind of work AI gets embedded into), right side
 * is the AI assistant panel with conversational messages, suggested
 * actions, and a draft block. Different visual language from the
 * dashboards (Apps + Data) and from the portal mockup so all four
 * tabs read as distinct kinds of software.
 *
 * 1050×450 viewBox to match the .bp-directions-mockup container's
 * 21:9 aspect-ratio.
 */
export default function MockupAIAssistant() {
  return (
    <svg
      className="bp-mockup-svg"
      viewBox="0 0 1050 450"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="maaPanelBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#061b14" />
          <stop offset="100%" stopColor="#04140e" />
        </linearGradient>
        <linearGradient id="maaAssistantBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0a2d22" />
          <stop offset="100%" stopColor="#04140e" />
        </linearGradient>
      </defs>

      {/* Canvas */}
      <rect width="1050" height="450" fill="#03100b" />

      {/* TOP BAR */}
      <rect x="0" y="0" width="1050" height="36" fill="#02100a" />
      <line x1="0" y1="36" x2="1050" y2="36" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />

      <circle cx="20" cy="18" r="3" fill="rgba(255,107,107,0.55)" />
      <circle cx="30" cy="18" r="3" fill="rgba(255,214,107,0.55)" />
      <circle cx="40" cy="18" r="3" fill="rgba(127,219,150,0.55)" />

      {/* Logo + breadcrumb */}
      <g transform="translate(70 10)">
        <rect width="6" height="6" rx="1" fill="#5DA89C" />
        <rect x="9" width="6" height="6" rx="1" fill="rgba(93,168,156,0.50)" />
        <rect y="9" width="6" height="6" rx="1" fill="rgba(93,168,156,0.30)" />
        <rect x="9" y="9" width="6" height="6" rx="1" fill="rgba(93,168,156,0.65)" />
      </g>
      <text x="98" y="22" fontFamily="Inter, sans-serif" fontSize="9" fill="rgba(255,255,255,0.55)">
        Service desk · Cases · #4821
      </text>

      <g transform="translate(986 12)">
        <circle r="10" fill="#1a3329" />
        <circle r="10" fill="none" stroke="rgba(93,168,156,0.55)" strokeWidth="0.6" />
        <text y="3" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="8" fontWeight="600" fill="#5DA89C">
          AT
        </text>
      </g>

      {/* LEFT — case/work view */}
      <g transform="translate(40 56)">
        {/* Case header */}
        <text fontFamily="JetBrains Mono, monospace" fontSize="8" letterSpacing="1.6" fill="rgba(93,168,156,0.85)" fontWeight="500">
          CASE #4821 · OPEN
        </text>
        <text y="26" fontFamily="Inter Tight, sans-serif" fontSize="20" fontWeight="500" fill="#fff" letterSpacing="-0.3">
          Connector failing on nightly sync
        </text>

        {/* Meta row */}
        <g transform="translate(0 44)" fontFamily="Inter, sans-serif" fontSize="9" fill="rgba(255,255,255,0.55)">
          <text>Reporter</text>
          <text x="0" y="14" fill="#fff">Sarah K.</text>
          <g transform="translate(110 0)">
            <text>Priority</text>
            <text x="0" y="14" fill="#E2A93B">High</text>
          </g>
          <g transform="translate(220 0)">
            <text>Assigned</text>
            <text x="0" y="14" fill="#fff">Field team</text>
          </g>
          <g transform="translate(360 0)">
            <text>Updated</text>
            <text x="0" y="14" fill="#fff">12 min ago</text>
          </g>
        </g>

        {/* Description card */}
        <g transform="translate(0 92)">
          <rect width="540" height="152" rx="2" fill="url(#maaPanelBg)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
          <text x="18" y="22" fontFamily="JetBrains Mono, monospace" fontSize="7.5" letterSpacing="1.4" fill="rgba(255,255,255,0.55)" fontWeight="500">
            DESCRIPTION
          </text>
          {/* Body lines (rendered as varying-width bars to suggest text) */}
          {[
            { width: 480, y: 42 },
            { width: 460, y: 58 },
            { width: 380, y: 74 },
            { width: 0, y: 90 },
            { width: 440, y: 102 },
            { width: 320, y: 118 },
          ].map((line, i) => (
            <rect
              key={i}
              x="18"
              y={line.y - 4}
              width={line.width}
              height="6"
              rx="1"
              fill={line.width > 0 ? "rgba(255,255,255,0.55)" : "transparent"}
            />
          ))}
        </g>

        {/* Related items */}
        <g transform="translate(0 256)">
          <text fontFamily="JetBrains Mono, monospace" fontSize="8" letterSpacing="1.4" fill="rgba(255,255,255,0.55)" fontWeight="500">
            RELATED
          </text>
          {[
            "KB-104 · Connector retry behavior",
            "Case #4209 · Similar timeout pattern",
            "Runbook · Sync-failure response",
          ].map((label, i) => (
            <g key={label} transform={`translate(0 ${20 + i * 22})`}>
              <rect x="0" y="0" width="540" height="18" rx="1" fill="rgba(255,255,255,0.018)" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
              <circle cx="14" cy="9" r="2" fill="rgba(93,168,156,0.65)" />
              <text x="24" y="12" fontFamily="Inter, sans-serif" fontSize="9" fill="rgba(255,255,255,0.78)">
                {label}
              </text>
              <text x="528" y="12" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="rgba(93,168,156,0.65)">
                ↗
              </text>
            </g>
          ))}
        </g>
      </g>

      {/* DIVIDER */}
      <line x1="610" y1="40" x2="610" y2="446" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />

      {/* RIGHT — AI assistant panel */}
      <g transform="translate(625 56)">
        <rect x="-5" y="-12" width="395" height="402" rx="3" fill="url(#maaAssistantBg)" stroke="rgba(93,168,156,0.18)" strokeWidth="0.5" />

        {/* AI panel header */}
        <g>
          <g transform="translate(8 0)">
            <circle r="6" fill="#5DA89C" />
            <circle r="9" fill="none" stroke="rgba(93,168,156,0.30)" strokeWidth="0.8">
              <animate attributeName="r" values="9;13;9" dur="2.6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0;0.5" dur="2.6s" repeatCount="indefinite" />
            </circle>
            {/* Sparkle inside dot */}
            <path d="M-2.5 0 L2.5 0 M0 -2.5 L0 2.5 M-1.7 -1.7 L1.7 1.7 M1.7 -1.7 L-1.7 1.7" stroke="#03100b" strokeWidth="0.7" strokeLinecap="round" />
          </g>
          <text x="22" y="4" fontFamily="Inter Tight, sans-serif" fontSize="11" fontWeight="600" fill="#fff">
            Assistant
          </text>
          <text x="22" y="16" fontFamily="Inter, sans-serif" fontSize="8" fill="rgba(255,255,255,0.50)">
            Reading case #4821 + 3 related
          </text>
        </g>

        {/* Suggested actions */}
        <g transform="translate(0 38)">
          <text fontFamily="JetBrains Mono, monospace" fontSize="7.5" letterSpacing="1.4" fill="rgba(255,255,255,0.50)" fontWeight="500">
            SUGGESTED
          </text>
          {[
            "Summarize this case",
            "Draft a status reply",
            "Open the runbook step 3",
          ].map((action, i) => (
            <g key={action} transform={`translate(0 ${16 + i * 32})`}>
              <rect width="380" height="26" rx="2" fill="rgba(93,168,156,0.06)" stroke="rgba(93,168,156,0.20)" strokeWidth="0.5" />
              {/* Sparkle leading icon */}
              <g transform="translate(14 13)" stroke="#5DA89C" strokeWidth="0.9" strokeLinecap="round" fill="none">
                <path d="M0 -4 L0 4 M-4 0 L4 0" />
                <path d="M-2.8 -2.8 L2.8 2.8 M2.8 -2.8 L-2.8 2.8" strokeOpacity="0.5" />
              </g>
              <text x="28" y="17" fontFamily="Inter, sans-serif" fontSize="9.5" fontWeight="500" fill="#fff">
                {action}
              </text>
              <text x="370" y="17" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(93,168,156,0.65)">
                →
              </text>
            </g>
          ))}
        </g>

        {/* Conversation thread */}
        <g transform="translate(0 156)">
          <text fontFamily="JetBrains Mono, monospace" fontSize="7.5" letterSpacing="1.4" fill="rgba(255,255,255,0.50)" fontWeight="500">
            THREAD
          </text>

          {/* User question */}
          <g transform="translate(0 16)">
            <rect width="380" height="38" rx="2" fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
            <text x="14" y="14" fontFamily="JetBrains Mono, monospace" fontSize="6.5" letterSpacing="1.2" fill="rgba(255,255,255,0.45)" fontWeight="500">
              YOU
            </text>
            <text x="14" y="28" fontFamily="Inter, sans-serif" fontSize="9" fill="rgba(255,255,255,0.85)">
              What changed since the last sync?
            </text>
          </g>

          {/* Assistant reply */}
          <g transform="translate(0 64)">
            <rect width="380" height="92" rx="2" fill="rgba(93,168,156,0.05)" stroke="rgba(93,168,156,0.18)" strokeWidth="0.5" />
            <g transform="translate(14 14)">
              <circle r="3.5" fill="#5DA89C" />
              <text x="10" y="2" fontFamily="JetBrains Mono, monospace" fontSize="6.5" letterSpacing="1.2" fill="#5DA89C" fontWeight="600">
                ASSISTANT
              </text>
            </g>
            {/* Body lines */}
            {[
              { width: 340, y: 38 },
              { width: 320, y: 50 },
              { width: 280, y: 62 },
              { width: 200, y: 74 },
            ].map((line, i) => (
              <rect
                key={i}
                x="14"
                y={line.y - 4}
                width={line.width}
                height="5"
                rx="1"
                fill="rgba(255,255,255,0.55)"
              />
            ))}
          </g>
        </g>

        {/* Input box at bottom */}
        <g transform="translate(0 360)">
          <rect width="380" height="30" rx="15" fill="rgba(255,255,255,0.04)" stroke="rgba(93,168,156,0.30)" strokeWidth="0.6" />
          <text x="18" y="20" fontFamily="Inter, sans-serif" fontSize="9" fill="rgba(255,255,255,0.45)">
            Ask the assistant...
          </text>
          {/* Send button */}
          <g transform="translate(348 15)">
            <circle r="11" fill="#5DA89C" />
            <text y="3" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#03100b">
              ↑
            </text>
          </g>
        </g>
      </g>
    </svg>
  );
}
