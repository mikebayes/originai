/**
 * Mockup graphic for the "Websites and portals" tab in BuildDirections.
 *
 * Redesigned 2026-05-06: previous version read as a portal dashboard
 * with cards, not a real website. This one looks unmistakably like a
 * marketing landing page — browser chrome at top, a clean site header,
 * a real hero (headline LEFT + abstract product visual RIGHT with a
 * mock UI inside it), a feature row with three small icon+text
 * blocks below, and a footer hint at the bottom.
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
        <linearGradient id="mwpHeroVisual" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0e3F32" />
          <stop offset="100%" stopColor="#03100b" />
        </linearGradient>
        <linearGradient id="mwpInnerCard" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#04140e" />
          <stop offset="100%" stopColor="#03100b" />
        </linearGradient>
        <radialGradient id="mwpHeroGlow" cx="0.7" cy="0.3" r="0.6">
          <stop offset="0%" stopColor="#3FDDC9" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#3FDDC9" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Canvas */}
      <rect width="1050" height="450" fill="#03100b" />

      {/* BROWSER CHROME */}
      <rect x="0" y="0" width="1050" height="28" fill="#02100a" />
      <line x1="0" y1="28" x2="1050" y2="28" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
      <circle cx="18" cy="14" r="3" fill="rgba(255,107,107,0.55)" />
      <circle cx="28" cy="14" r="3" fill="rgba(255,214,107,0.55)" />
      <circle cx="38" cy="14" r="3" fill="rgba(127,219,150,0.55)" />
      <rect x="220" y="5" width="610" height="18" rx="9" fill="rgba(255,255,255,0.04)" />
      <circle cx="234" cy="14" r="2" fill="none" stroke="rgba(127,219,150,0.65)" strokeWidth="0.6" />
      <text x="244" y="17.5" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fill="rgba(255,255,255,0.55)">
        clientco.com
      </text>

      {/* SITE HEADER */}
      <rect x="0" y="28" width="1050" height="44" fill="#03100b" />
      <line x1="0" y1="72" x2="1050" y2="72" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />

      <g transform="translate(56 44)">
        <rect width="6" height="6" rx="1" fill="#5DA89C" />
        <rect x="9" width="6" height="6" rx="1" fill="rgba(93,168,156,0.50)" />
        <rect y="9" width="6" height="6" rx="1" fill="rgba(93,168,156,0.30)" />
        <rect x="9" y="9" width="6" height="6" rx="1" fill="rgba(93,168,156,0.65)" />
        <text x="26" y="13" fontFamily="Inter Tight, sans-serif" fontSize="13" fontWeight="600" fill="#fff">
          ClientCo
        </text>
      </g>

      <g fontFamily="Inter, sans-serif" fontSize="10" fontWeight="500" transform="translate(0 56)">
        <text x="320" y="0" fill="rgba(255,255,255,0.78)">Product</text>
        <text x="380" y="0" fill="rgba(255,255,255,0.78)">Solutions</text>
        <text x="450" y="0" fill="rgba(255,255,255,0.78)">Pricing</text>
        <text x="500" y="0" fill="rgba(255,255,255,0.78)">About</text>
      </g>

      <g transform="translate(900 38)">
        <text x="0" y="14" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="500" fill="rgba(255,255,255,0.78)">
          Sign in
        </text>
      </g>
      <g transform="translate(950 32)">
        <rect width="76" height="24" rx="12" fill="#5DA89C" />
        <text x="38" y="16" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9.5" fontWeight="600" fill="#03100b">
          Get started
        </text>
      </g>

      {/* HERO — headline left + product visual right */}
      <g transform="translate(0 84)">
        <rect width="1050" height="232" fill="rgba(0,0,0,0)" />
        <rect width="1050" height="232" fill="url(#mwpHeroGlow)" />

        {/* Left side — headline + sub + CTAs */}
        <g transform="translate(56 32)">
          <text fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1.6" fill="rgba(93,168,156,0.85)" fontWeight="500">
            INTRODUCING CLIENTCO
          </text>
          <text y="36" fontFamily="Inter Tight, sans-serif" fontSize="32" fontWeight="500" fill="#fff" letterSpacing="-0.6">
            Better software,
          </text>
          <text y="72" fontFamily="Inter Tight, sans-serif" fontSize="32" fontWeight="500" fill="#fff" letterSpacing="-0.6">
            shaped around{" "}
            <tspan fill="rgba(255,255,255,0.50)">your team.</tspan>
          </text>
          <text y="106" fontFamily="Inter, sans-serif" fontSize="11.5" fill="rgba(255,255,255,0.65)">
            A clearer way to manage projects, customers, and the work
          </text>
          <text y="124" fontFamily="Inter, sans-serif" fontSize="11.5" fill="rgba(255,255,255,0.65)">
            that moves the business forward — built around how you actually work.
          </text>

          {/* CTAs */}
          <g transform="translate(0 144)">
            <rect width="118" height="34" rx="17" fill="#5DA89C" />
            <text x="59" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#03100b">
              Book a demo →
            </text>
          </g>
          <g transform="translate(132 144)">
            <rect width="100" height="34" rx="17" fill="rgba(0,0,0,0)" stroke="rgba(255,255,255,0.30)" strokeWidth="0.6" />
            <text x="50" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="500" fill="rgba(255,255,255,0.85)">
              Sign in
            </text>
          </g>
        </g>

        {/* Right side — abstract product visual (a small UI surface inside a frame) */}
        <g transform="translate(580 28)">
          {/* Outer device-like frame */}
          <rect
            x="0"
            y="0"
            width="408"
            height="180"
            rx="6"
            fill="url(#mwpHeroVisual)"
            stroke="rgba(93,168,156,0.30)"
            strokeWidth="0.6"
          />
          {/* Inner browser bar */}
          <rect x="0" y="0" width="408" height="18" rx="6" fill="#02100a" />
          <circle cx="10" cy="9" r="2" fill="rgba(255,107,107,0.55)" />
          <circle cx="18" cy="9" r="2" fill="rgba(255,214,107,0.55)" />
          <circle cx="26" cy="9" r="2" fill="rgba(127,219,150,0.55)" />

          {/* Inner content — abstract dashboard preview */}
          <g transform="translate(20 32)">
            <text fontFamily="JetBrains Mono, monospace" fontSize="7" letterSpacing="1.2" fill="rgba(93,168,156,0.85)" fontWeight="500">
              OVERVIEW
            </text>
            <text y="20" fontFamily="Inter Tight, sans-serif" fontSize="14" fontWeight="500" fill="#fff" letterSpacing="-0.2">
              Today at a glance
            </text>

            {/* Mini KPIs */}
            <g transform="translate(0 32)">
              {[
                { label: "JOBS", value: "42" },
                { label: "REVENUE", value: "$18k" },
                { label: "PENDING", value: "6" },
              ].map((m, i) => (
                <g key={m.label} transform={`translate(${i * 124} 0)`}>
                  <rect width="116" height="44" rx="2" fill="url(#mwpInnerCard)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                  <text x="10" y="14" fontFamily="JetBrains Mono, monospace" fontSize="6" letterSpacing="1.2" fill="rgba(255,255,255,0.45)" fontWeight="500">
                    {m.label}
                  </text>
                  <text x="10" y="32" fontFamily="Inter Tight, sans-serif" fontSize="14" fontWeight="500" fill="#fff" letterSpacing="-0.2">
                    {m.value}
                  </text>
                </g>
              ))}
            </g>

            {/* Mini chart strip below */}
            <g transform="translate(0 88)">
              <rect width="368" height="50" rx="2" fill="url(#mwpInnerCard)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
              {/* Sparkline */}
              <path
                d="M14 36 L42 32 L70 28 L98 30 L126 22 L154 24 L182 18 L210 22 L238 14 L266 16 L294 10 L322 12 L354 6"
                stroke="#5DA89C"
                strokeWidth="1.4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="354" cy="6" r="2.5" fill="#3FDDC9" />
            </g>
          </g>
        </g>
      </g>

      {/* FEATURE ROW below hero */}
      <g transform="translate(0 332)">
        <line x1="56" y1="0" x2="994" y2="0" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />

        <g transform="translate(56 24)">
          {[
            {
              title: "Built around your work",
              body: "Configurable, not generic. Shaped around how your team actually operates.",
            },
            {
              title: "Self-serve where it matters",
              body: "Customers, partners, and staff get the right view without filing a ticket.",
            },
            {
              title: "Fast, secure, integrated",
              body: "Modern stack, single sign-on, and connections to the systems you already use.",
            },
          ].map((feat, i) => (
            <g key={feat.title} transform={`translate(${i * 320} 0)`}>
              {/* Tiny icon */}
              <g stroke="#5DA89C" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                {i === 0 && (
                  <>
                    <rect x="0" y="0" width="14" height="14" rx="1.5" />
                    <line x1="0" y1="5" x2="14" y2="5" />
                    <line x1="3" y1="9" x2="9" y2="9" />
                  </>
                )}
                {i === 1 && (
                  <>
                    <circle cx="7" cy="7" r="6" />
                    <path d="M3 7 L6 10 L11 4" />
                  </>
                )}
                {i === 2 && (
                  <>
                    <circle cx="3" cy="7" r="2" fill="#5DA89C" />
                    <circle cx="11" cy="3" r="2" fill="#5DA89C" />
                    <circle cx="11" cy="11" r="2" fill="#5DA89C" />
                    <line x1="4.5" y1="6" x2="9.5" y2="3.5" />
                    <line x1="4.5" y1="8" x2="9.5" y2="10.5" />
                  </>
                )}
              </g>

              <text y="34" fontFamily="Inter Tight, sans-serif" fontSize="12" fontWeight="500" fill="#fff" letterSpacing="-0.2">
                {feat.title}
              </text>
              <text y="52" fontFamily="Inter, sans-serif" fontSize="9" fill="rgba(255,255,255,0.55)">
                {feat.body.split(".")[0] + "."}
              </text>
              <text y="66" fontFamily="Inter, sans-serif" fontSize="9" fill="rgba(255,255,255,0.55)">
                {feat.body.split(".").slice(1).join(".").trim()}
              </text>
            </g>
          ))}
        </g>
      </g>

      {/* Footer hint */}
      <g transform="translate(0 426)">
        <line x1="56" y1="0" x2="994" y2="0" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
        <text x="56" y="16" fontFamily="Inter, sans-serif" fontSize="8" fill="rgba(255,255,255,0.35)">
          © 2026 ClientCo · Privacy · Terms
        </text>
        <text x="994" y="16" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="8" fill="rgba(255,255,255,0.35)">
          Built by Origin AI
        </text>
      </g>
    </svg>
  );
}
