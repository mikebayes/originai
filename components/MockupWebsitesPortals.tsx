/**
 * Mockup graphic for the "Websites and portals" tab in BuildDirections.
 *
 * v4 (2026-05-06): the ecommerce mockup excluded the portal half of
 * the section title, and the cream palette landed too far from
 * Origin's visual language. Rebuilt as a boutique advisory firm
 * ("Halton") which naturally has BOTH a public marketing site AND
 * a client portal — both are shown together in one composition.
 *
 * Hero: text left + an embedded portal preview right (dark-themed
 * dashboard glimpse showing "Welcome back, Eleanor" + portfolio
 * summary). Visually communicates "websites AND portals" without
 * needing a separate section.
 *
 * Palette: dark sage (#2d3d35) page bg with warm cream text and a
 * brass accent. Halfway between Origin's near-black and the Larkspur
 * cream — keeps a green spirit but visibly lighter than the Origin
 * interface so the mockup still reads as a separate brand.
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
        <linearGradient id="mwpPortalBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1c2a23" />
          <stop offset="100%" stopColor="#11181a" />
        </linearGradient>
        <linearGradient id="mwpPortalLine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c5a47e" stopOpacity="0.40" />
          <stop offset="100%" stopColor="#c5a47e" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="mwpHeroGlow" cx="0.7" cy="0.3" r="0.6">
          <stop offset="0%" stopColor="#c5a47e" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#c5a47e" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* CANVAS — sage page background */}
      <rect width="1050" height="450" fill="#2d3d35" />

      {/* BROWSER CHROME */}
      <rect x="0" y="0" width="1050" height="26" fill="#1f2b25" />
      <line x1="0" y1="26" x2="1050" y2="26" stroke="rgba(244,240,230,0.06)" strokeWidth="0.5" />
      <circle cx="18" cy="13" r="3" fill="#cf8076" />
      <circle cx="28" cy="13" r="3" fill="#d4ad62" />
      <circle cx="38" cy="13" r="3" fill="#88a978" />
      <rect x="220" y="4" width="610" height="18" rx="9" fill="rgba(244,240,230,0.05)" />
      <circle cx="234" cy="13" r="2" fill="none" stroke="rgba(244,240,230,0.40)" strokeWidth="0.6" />
      <text x="244" y="16.5" fontFamily="Georgia, serif" fontSize="7.5" fontStyle="italic" fill="rgba(244,240,230,0.65)">
        halton.co
      </text>

      {/* SITE HEADER */}
      <rect x="0" y="26" width="1050" height="50" fill="#2d3d35" />
      <line x1="0" y1="76" x2="1050" y2="76" stroke="rgba(244,240,230,0.10)" strokeWidth="0.5" />

      {/* Wordmark */}
      <g transform="translate(56 44)">
        <text
          fontFamily="Georgia, serif"
          fontSize="20"
          fontWeight="400"
          fill="#f4f0e6"
          letterSpacing="2"
        >
          HALTON
        </text>
        <line x1="0" y1="6" x2="92" y2="6" stroke="#c5a47e" strokeWidth="0.6" opacity="0.5" />
      </g>

      {/* Nav links */}
      <g
        fontFamily="Inter, sans-serif"
        fontSize="10.5"
        fontWeight="400"
        fill="rgba(244,240,230,0.78)"
        transform="translate(0 56)"
      >
        <text x="540">Approach</text>
        <text x="608">People</text>
        <text x="660">Insights</text>
      </g>

      {/* Right side — Client portal CTA */}
      <g transform="translate(740 50)">
        <text
          x="0"
          y="0"
          fontFamily="Inter, sans-serif"
          fontSize="10"
          fontWeight="500"
          fill="rgba(244,240,230,0.88)"
        >
          Client portal
        </text>
        <text
          x="74"
          y="0"
          fontFamily="Inter, sans-serif"
          fontSize="10"
          fontWeight="400"
          fill="#c5a47e"
        >
          →
        </text>
      </g>
      <g transform="translate(910 38)">
        <rect width="92" height="24" rx="12" fill="transparent" stroke="rgba(244,240,230,0.30)" strokeWidth="0.6" />
        <text
          x="46"
          y="16"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontSize="10"
          fontWeight="500"
          fill="#f4f0e6"
        >
          Sign in
        </text>
      </g>

      {/* HERO — text left, portal preview right */}
      <g transform="translate(0 76)">
        <rect width="1050" height="248" fill="#2d3d35" />
        <rect width="1050" height="248" fill="url(#mwpHeroGlow)" />

        {/* Left side — copy */}
        <g transform="translate(56 38)">
          <text
            fontFamily="Inter, sans-serif"
            fontSize="9"
            letterSpacing="2"
            fill="#c5a47e"
            fontWeight="500"
          >
            PRIVATE ADVISORY
          </text>
          <text
            y="40"
            fontFamily="Georgia, serif"
            fontSize="32"
            fontWeight="400"
            fill="#f4f0e6"
            letterSpacing="-0.4"
          >
            Considered counsel.
          </text>
          <text
            y="72"
            fontFamily="Georgia, serif"
            fontSize="32"
            fontStyle="italic"
            fontWeight="400"
            fill="rgba(244,240,230,0.65)"
            letterSpacing="-0.4"
          >
            Quiet outcomes.
          </text>
          <text
            y="106"
            fontFamily="Inter, sans-serif"
            fontSize="11"
            fill="rgba(244,240,230,0.72)"
          >
            We work with a small number of families and founders on the
          </text>
          <text
            y="123"
            fontFamily="Inter, sans-serif"
            fontSize="11"
            fill="rgba(244,240,230,0.72)"
          >
            decisions that compound. Patient capital, careful counsel.
          </text>

          {/* CTAs */}
          <g transform="translate(0 144)">
            <rect width="158" height="34" rx="17" fill="#c5a47e" />
            <text
              x="79"
              y="22"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="11"
              fontWeight="600"
              fill="#1f2b25"
              letterSpacing="0.3"
            >
              Begin a conversation
            </text>
          </g>
          <g transform="translate(170 144)">
            <rect width="118" height="34" rx="17" fill="transparent" stroke="rgba(244,240,230,0.35)" strokeWidth="0.6" />
            <text
              x="59"
              y="22"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="10.5"
              fontWeight="500"
              fill="#f4f0e6"
            >
              Sign in to portal →
            </text>
          </g>

          {/* Trust line */}
          <g transform="translate(0 200)" fontFamily="Inter, sans-serif" fontSize="9" fill="rgba(244,240,230,0.50)">
            <text>Limited engagements · 24 family offices · Established 2014</text>
          </g>
        </g>

        {/* Right side — embedded portal preview */}
        <g transform="translate(620 22)">
          {/* Portal frame — looks like a logged-in dashboard */}
          <rect
            width="380"
            height="200"
            rx="4"
            fill="url(#mwpPortalBg)"
            stroke="rgba(197,164,126,0.30)"
            strokeWidth="0.6"
          />

          {/* Portal top bar */}
          <rect width="380" height="22" rx="4" fill="#11181a" />
          <rect y="18" width="380" height="4" fill="#11181a" />
          <line x1="0" y1="22" x2="380" y2="22" stroke="rgba(244,240,230,0.06)" strokeWidth="0.4" />
          <text x="14" y="14" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="1.5" fill="#c5a47e" fontWeight="500">
            CLIENT PORTAL
          </text>
          <text x="248" y="14" fontFamily="Inter, sans-serif" fontSize="7" fill="rgba(244,240,230,0.45)">
            Q3 statement
          </text>
          <text x="305" y="14" fontFamily="Inter, sans-serif" fontSize="7" fill="rgba(244,240,230,0.45)">
            Documents
          </text>
          <circle cx="362" cy="11" r="6" fill="#2d3d35" />
          <circle cx="362" cy="11" r="6" fill="none" stroke="#c5a47e" strokeWidth="0.5" />
          <text
            x="362"
            y="14"
            textAnchor="middle"
            fontFamily="Georgia, serif"
            fontSize="7"
            fontStyle="italic"
            fill="#c5a47e"
          >
            E
          </text>

          {/* Portal welcome */}
          <g transform="translate(20 38)">
            <text fontFamily="Inter, sans-serif" fontSize="7.5" letterSpacing="1.2" fill="rgba(244,240,230,0.50)" fontWeight="500">
              WELCOME BACK
            </text>
            <text y="20" fontFamily="Georgia, serif" fontSize="16" fontStyle="italic" fill="#f4f0e6">
              Eleanor Whitmore
            </text>
          </g>

          {/* Portfolio summary card */}
          <g transform="translate(20 76)">
            <rect width="160" height="86" rx="3" fill="rgba(244,240,230,0.025)" stroke="rgba(244,240,230,0.08)" strokeWidth="0.5" />
            <text x="14" y="20" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="1.2" fill="rgba(244,240,230,0.50)" fontWeight="500">
              NET POSITION
            </text>
            <text x="14" y="44" fontFamily="Georgia, serif" fontSize="20" fill="#f4f0e6">
              $14.2M
            </text>
            <text x="14" y="60" fontFamily="Inter, sans-serif" fontSize="7" fill="#88a978">
              ▲ 6.8% YTD · vs. benchmark +1.2
            </text>
            {/* Small sparkline */}
            <path
              d="M14 76 L30 72 L46 74 L62 68 L78 64 L94 60 L110 56 L126 50 L142 44"
              stroke="#c5a47e"
              strokeWidth="0.9"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          {/* Holdings card */}
          <g transform="translate(192 76)">
            <rect width="168" height="86" rx="3" fill="rgba(244,240,230,0.025)" stroke="rgba(244,240,230,0.08)" strokeWidth="0.5" />
            <text x="14" y="20" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="1.2" fill="rgba(244,240,230,0.50)" fontWeight="500">
              ALLOCATION
            </text>
            {[
              { name: "Equities", pct: "52%", w: 80 },
              { name: "Fixed income", pct: "24%", w: 36 },
              { name: "Private", pct: "16%", w: 24 },
              { name: "Cash", pct: "8%", w: 12 },
            ].map((row, i) => (
              <g key={row.name} transform={`translate(14 ${30 + i * 12})`}>
                <text fontFamily="Inter, sans-serif" fontSize="7" fill="rgba(244,240,230,0.78)">
                  {row.name}
                </text>
                <rect x="80" y="-5" width={row.w} height="3" rx="1" fill="#c5a47e" opacity={0.85 - i * 0.18} />
                <text x="148" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="7" fontWeight="500" fill="#f4f0e6">
                  {row.pct}
                </text>
              </g>
            ))}
          </g>

          {/* Recent docs row */}
          <g transform="translate(20 174)">
            <rect width="340" height="14" rx="2" fill="rgba(244,240,230,0.018)" stroke="rgba(244,240,230,0.06)" strokeWidth="0.5" />
            <circle cx="10" cy="7" r="2" fill="#c5a47e" />
            <text x="20" y="10" fontFamily="Inter, sans-serif" fontSize="7" fill="rgba(244,240,230,0.78)" fontWeight="500">
              Q3 review
            </text>
            <text x="74" y="10" fontFamily="Inter, sans-serif" fontSize="6.5" fill="rgba(244,240,230,0.45)">
              new · 2h ago
            </text>
            <text x="324" y="10" textAnchor="end" fontFamily="Georgia, serif" fontSize="7" fontStyle="italic" fill="#c5a47e">
              Open →
            </text>
          </g>
        </g>
      </g>

      {/* LOWER BAND — three small cards: approach / people / insights */}
      <g transform="translate(0 340)">
        <line x1="56" y1="0" x2="994" y2="0" stroke="rgba(244,240,230,0.08)" strokeWidth="0.5" />

        <g transform="translate(56 24)">
          {[
            {
              eyebrow: "APPROACH",
              title: "Patient capital. Quiet judgment.",
              body: "We hold concentrated, considered positions. Time horizons measured in years.",
            },
            {
              eyebrow: "PEOPLE",
              title: "Senior partners. Direct contact.",
              body: "No intermediaries. Every engagement is led by a partner who is on the work.",
            },
            {
              eyebrow: "INSIGHTS",
              title: "Q3 letter — On staying invested.",
              body: "Our latest note on the year ahead, the noise, and the case for restraint.",
            },
          ].map((col, i) => (
            <g key={col.eyebrow} transform={`translate(${i * 320} 0)`}>
              <text
                fontFamily="Inter, sans-serif"
                fontSize="8"
                letterSpacing="1.6"
                fill="#c5a47e"
                fontWeight="500"
              >
                {col.eyebrow}
              </text>
              <text
                y="22"
                fontFamily="Georgia, serif"
                fontSize="13"
                fontWeight="400"
                fill="#f4f0e6"
              >
                {col.title}
              </text>
              <text
                y="44"
                fontFamily="Inter, sans-serif"
                fontSize="9"
                fill="rgba(244,240,230,0.62)"
              >
                {col.body.split(".")[0] + "."}
              </text>
              <text
                y="58"
                fontFamily="Inter, sans-serif"
                fontSize="9"
                fill="rgba(244,240,230,0.62)"
              >
                {col.body.split(".").slice(1).join(".").trim()}
              </text>
              <text
                y="80"
                fontFamily="Georgia, serif"
                fontSize="10"
                fontStyle="italic"
                fill="#c5a47e"
              >
                Read →
              </text>
            </g>
          ))}
        </g>
      </g>

      {/* FOOTER HINT */}
      <g transform="translate(0 432)">
        <text
          x="56"
          y="14"
          fontFamily="Inter, sans-serif"
          fontSize="8"
          fill="rgba(244,240,230,0.45)"
        >
          © 2026 Halton Advisory · Privacy · Disclosures
        </text>
        <text
          x="994"
          y="14"
          textAnchor="end"
          fontFamily="Inter, sans-serif"
          fontSize="8"
          fontStyle="italic"
          fill="rgba(244,240,230,0.45)"
        >
          Built by Origin AI
        </text>
      </g>
    </svg>
  );
}
