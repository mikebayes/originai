/**
 * Mockup graphic for the "Websites and portals" tab in BuildDirections.
 *
 * Different visual language from the admin dashboards (Apps + Data
 * mockups) — this one reads as a customer-facing client portal with
 * a browser-style top bar, a site header (logo + nav + user), a
 * welcome hero with a status row, and a 2-row card grid showing the
 * kind of self-serve content a portal usually contains (recent
 * activity, documents, quick actions).
 *
 * 1050×450 viewBox to match the .bp-directions-mockup container's
 * 21:9 aspect-ratio.
 */
export default function MockupWebsitesPortals() {
  return (
    <svg
      className="bp-mockup-svg"
      viewBox="0 0 1050 450"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mwpPanelBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#061b14" />
          <stop offset="100%" stopColor="#04140e" />
        </linearGradient>
        <linearGradient id="mwpHero" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0c2d22" />
          <stop offset="100%" stopColor="#03100b" />
        </linearGradient>
      </defs>

      {/* Canvas */}
      <rect width="1050" height="450" fill="#03100b" />

      {/* BROWSER CHROME */}
      <rect x="0" y="0" width="1050" height="32" fill="#02100a" />
      <line x1="0" y1="32" x2="1050" y2="32" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
      <circle cx="20" cy="16" r="3.5" fill="rgba(255,107,107,0.55)" />
      <circle cx="32" cy="16" r="3.5" fill="rgba(255,214,107,0.55)" />
      <circle cx="44" cy="16" r="3.5" fill="rgba(127,219,150,0.55)" />
      {/* URL bar */}
      <rect x="240" y="6" width="570" height="20" rx="10" fill="rgba(255,255,255,0.04)" />
      <circle cx="254" cy="16" r="2.5" fill="none" stroke="rgba(93,168,156,0.65)" strokeWidth="0.6" />
      <text x="263" y="19.5" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="rgba(255,255,255,0.55)">
        portal.client.example.com / dashboard
      </text>

      {/* SITE HEADER */}
      <rect x="0" y="32" width="1050" height="56" fill="#04140e" />
      <line x1="0" y1="88" x2="1050" y2="88" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />

      {/* Logo */}
      <g transform="translate(56 56)">
        <rect width="6" height="6" rx="1" fill="#5DA89C" />
        <rect x="9" width="6" height="6" rx="1" fill="rgba(93,168,156,0.50)" />
        <rect y="9" width="6" height="6" rx="1" fill="rgba(93,168,156,0.30)" />
        <rect x="9" y="9" width="6" height="6" rx="1" fill="rgba(93,168,156,0.65)" />
        <text x="26" y="13" fontFamily="Inter Tight, sans-serif" fontSize="13" fontWeight="600" fill="#fff">
          Client portal
        </text>
      </g>

      {/* Nav links */}
      <g fontFamily="Inter, sans-serif" fontSize="10" fontWeight="500" transform="translate(0 64)">
        <text x="220" y="0" fill="#fff">Dashboard</text>
        <line x1="220" y1="14" x2="276" y2="14" stroke="#5DA89C" strokeWidth="1.2" />
        <text x="296" y="0" fill="rgba(255,255,255,0.55)">Documents</text>
        <text x="376" y="0" fill="rgba(255,255,255,0.55)">Requests</text>
        <text x="448" y="0" fill="rgba(255,255,255,0.55)">Billing</text>
        <text x="510" y="0" fill="rgba(255,255,255,0.55)">Account</text>
      </g>

      {/* CTA + user */}
      <g transform="translate(820 48)">
        <rect width="100" height="24" rx="12" fill="rgba(93,168,156,0.10)" stroke="rgba(93,168,156,0.45)" strokeWidth="0.6" />
        <text x="50" y="16" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9.5" fontWeight="500" fill="#5DA89C">
          New request
        </text>
      </g>
      <g transform="translate(956 60)">
        <circle r="13" fill="#1a3329" />
        <circle r="13" fill="none" stroke="rgba(93,168,156,0.55)" strokeWidth="0.6" />
        <text y="3" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="10" fontWeight="600" fill="#5DA89C">
          AT
        </text>
      </g>

      {/* MAIN CONTENT */}
      <g transform="translate(56 112)">
        {/* Hero */}
        <rect width="938" height="100" rx="3" fill="url(#mwpHero)" stroke="rgba(93,168,156,0.18)" strokeWidth="0.5" />
        <g transform="translate(28 26)">
          <text fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1.6" fill="rgba(93,168,156,0.85)" fontWeight="500">
            WELCOME BACK
          </text>
          <text y="34" fontFamily="Inter Tight, sans-serif" fontSize="22" fontWeight="500" fill="#fff" letterSpacing="-0.3">
            Hi Alex. Here&rsquo;s what&rsquo;s happening on your account.
          </text>
          <text y="58" fontFamily="Inter, sans-serif" fontSize="10" fill="rgba(255,255,255,0.62)">
            3 active requests · 2 documents pending review · Next call on Thursday
          </text>
        </g>
        {/* Hero action chip */}
        <g transform="translate(820 32)">
          <rect width="100" height="36" rx="3" fill="#5DA89C" />
          <text x="50" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#03100b">
            Open dashboard
          </text>
        </g>

        {/* CARD ROW — 3 cards */}
        <g transform="translate(0 124)">
          {/* Card 1 — Recent activity */}
          <g>
            <rect width="306" height="200" rx="2" fill="url(#mwpPanelBg)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
            <text x="20" y="26" fontFamily="JetBrains Mono, monospace" fontSize="8" letterSpacing="1.4" fill="rgba(255,255,255,0.55)" fontWeight="500">
              RECENT ACTIVITY
            </text>
            {/* Activity rows */}
            {[
              { type: "check", title: "Q3 review completed", time: "2h ago", color: "#5DA89C" },
              { type: "doc", title: "New document shared", time: "yesterday", color: "rgba(255,255,255,0.50)" },
              { type: "msg", title: "Message from your team", time: "yesterday", color: "rgba(255,255,255,0.50)" },
              { type: "req", title: "Request #4821 updated", time: "2d ago", color: "rgba(255,255,255,0.50)" },
            ].map((row, i) => (
              <g key={i} transform={`translate(20 ${52 + i * 32})`}>
                <circle cx="6" cy="6" r="3" fill={row.color} />
                <text x="20" y="9" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="500" fill="#fff">
                  {row.title}
                </text>
                <text x="20" y="22" fontFamily="Inter, sans-serif" fontSize="8" fill="rgba(255,255,255,0.45)">
                  {row.time}
                </text>
              </g>
            ))}
          </g>

          {/* Card 2 — Documents */}
          <g transform="translate(316 0)">
            <rect width="306" height="200" rx="2" fill="url(#mwpPanelBg)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
            <text x="20" y="26" fontFamily="JetBrains Mono, monospace" fontSize="8" letterSpacing="1.4" fill="rgba(255,255,255,0.55)" fontWeight="500">
              DOCUMENTS
            </text>
            {/* File rows */}
            {[
              { name: "Engagement summary", type: "PDF", size: "1.2 MB" },
              { name: "Project plan v3", type: "DOCX", size: "248 KB" },
              { name: "Sprint review notes", type: "PDF", size: "412 KB" },
              { name: "Brand guide draft", type: "PDF", size: "3.4 MB" },
            ].map((f, i) => (
              <g key={f.name} transform={`translate(20 ${52 + i * 32})`}>
                <rect width="22" height="14" rx="1" fill="rgba(93,168,156,0.10)" stroke="rgba(93,168,156,0.40)" strokeWidth="0.5" />
                <text x="11" y="10" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="6.5" fontWeight="600" fill="#5DA89C">
                  {f.type}
                </text>
                <text x="32" y="9" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="500" fill="#fff">
                  {f.name}
                </text>
                <text x="266" y="11" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="8" fill="rgba(255,255,255,0.45)">
                  {f.size}
                </text>
              </g>
            ))}
          </g>

          {/* Card 3 — Quick actions */}
          <g transform="translate(632 0)">
            <rect width="306" height="200" rx="2" fill="url(#mwpPanelBg)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
            <text x="20" y="26" fontFamily="JetBrains Mono, monospace" fontSize="8" letterSpacing="1.4" fill="rgba(255,255,255,0.55)" fontWeight="500">
              QUICK ACTIONS
            </text>
            {/* Action buttons in a 2x2 grid */}
            {[
              { label: "Submit request" },
              { label: "Upload doc" },
              { label: "Pay invoice" },
              { label: "Book a call" },
            ].map((a, i) => {
              const col = i % 2;
              const row = Math.floor(i / 2);
              return (
                <g key={a.label} transform={`translate(${20 + col * 134} ${50 + row * 64})`}>
                  <rect
                    width="124"
                    height="54"
                    rx="2"
                    fill="rgba(93,168,156,0.04)"
                    stroke="rgba(93,168,156,0.18)"
                    strokeWidth="0.5"
                  />
                  {/* Small leading dot */}
                  <circle cx="14" cy="20" r="3" fill="#5DA89C" />
                  <text x="14" y="40" fontFamily="Inter, sans-serif" fontSize="9.5" fontWeight="500" fill="#fff">
                    {a.label}
                  </text>
                  {/* arrow */}
                  <text
                    x="106"
                    y="32"
                    fontFamily="Inter, sans-serif"
                    fontSize="11"
                    fill="rgba(93,168,156,0.65)"
                  >
                    →
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
