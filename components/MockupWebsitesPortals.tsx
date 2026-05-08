/**
 * Mockup graphic for the "Websites and portals" tab in BuildDirections.
 *
 * Redesigned 2026-05-06 (v3): the dark "ClientCo" SaaS landing page
 * blended too cleanly into the rest of the Origin AI dark interface.
 * Mike asked for a generic ecommerce/product site on a lighter
 * palette so the visual contrast immediately reads as "this is a
 * different website we built."
 *
 * Brand shown is "Larkspur" — a placeholder boutique pantry / specialty
 * goods brand. Cream palette, serif wordmark, warm earth accents
 * (terracotta + sage). Layout: browser chrome, light site header
 * with cart, hero with serif headline left + product photo placeholder
 * right, three featured product cards below, footer hint.
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
        <linearGradient id="mwpHeroProduct" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d8c8a6" />
          <stop offset="100%" stopColor="#a08762" />
        </linearGradient>
        <linearGradient id="mwpBottle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3d4f3e" />
          <stop offset="100%" stopColor="#212a22" />
        </linearGradient>
        <linearGradient id="mwpJar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c5a47e" />
          <stop offset="100%" stopColor="#8a6c4a" />
        </linearGradient>
        <linearGradient id="mwpBox" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8d8b8" />
          <stop offset="100%" stopColor="#b8a075" />
        </linearGradient>
      </defs>

      {/* CANVAS — warm cream background */}
      <rect width="1050" height="450" fill="#f1ebde" />

      {/* BROWSER CHROME */}
      <rect x="0" y="0" width="1050" height="26" fill="#e6dfcf" />
      <line x1="0" y1="26" x2="1050" y2="26" stroke="rgba(42,38,31,0.08)" strokeWidth="0.5" />
      <circle cx="18" cy="13" r="3" fill="#cf8076" />
      <circle cx="28" cy="13" r="3" fill="#d4ad62" />
      <circle cx="38" cy="13" r="3" fill="#88a978" />
      <rect x="220" y="4" width="610" height="18" rx="9" fill="rgba(42,38,31,0.06)" />
      <circle cx="234" cy="13" r="2" fill="none" stroke="rgba(42,38,31,0.45)" strokeWidth="0.6" />
      <text x="244" y="16.5" fontFamily="Georgia, serif" fontSize="7.5" fill="rgba(42,38,31,0.65)" fontStyle="italic">
        larkspur.co
      </text>

      {/* SITE HEADER */}
      <rect x="0" y="26" width="1050" height="50" fill="#f1ebde" />
      <line x1="0" y1="76" x2="1050" y2="76" stroke="rgba(42,38,31,0.10)" strokeWidth="0.5" />

      {/* Wordmark — serif, characterful */}
      <text
        x="56"
        y="56"
        fontFamily="Georgia, serif"
        fontSize="22"
        fontStyle="italic"
        fontWeight="400"
        fill="#2a261f"
        letterSpacing="0.5"
      >
        Larkspur
      </text>

      {/* Nav links */}
      <g
        fontFamily="Inter, sans-serif"
        fontSize="10.5"
        fontWeight="400"
        fill="#2a261f"
        transform="translate(0 56)"
      >
        <text x="540">Shop</text>
        <text x="588">Story</text>
        <text x="640">Journal</text>
        <text x="700">Stockists</text>
      </g>

      {/* Right side — cart + account */}
      <g transform="translate(890 44)">
        <rect width="76" height="22" rx="11" fill="rgba(42,38,31,0.06)" />
        <text
          x="38"
          y="15"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontSize="9.5"
          fill="#2a261f"
          fontWeight="500"
        >
          Account
        </text>
      </g>
      {/* Cart icon + counter */}
      <g transform="translate(978 44)">
        <rect width="48" height="22" rx="11" fill="#2a261f" />
        <g transform="translate(12 6)" stroke="#f1ebde" strokeWidth="0.9" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M0 2 L2 2 L4 8 L11 8 L13 3 L4 3" />
          <circle cx="5.5" cy="10" r="0.8" fill="#f1ebde" />
          <circle cx="10" cy="10" r="0.8" fill="#f1ebde" />
        </g>
        <text x="34" y="15" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="500" fill="#f1ebde">
          2
        </text>
      </g>

      {/* HERO — serif headline left, product image right */}
      <g transform="translate(0 76)">
        {/* Hero band background — slightly different cream tone */}
        <rect width="1050" height="200" fill="#ebe2d0" />

        {/* Left side — copy */}
        <g transform="translate(56 36)">
          <text
            fontFamily="Inter, sans-serif"
            fontSize="9"
            letterSpacing="2"
            fill="#8a6c4a"
            fontWeight="500"
          >
            NEW · ESSENTIAL PANTRY
          </text>
          <text
            y="38"
            fontFamily="Georgia, serif"
            fontSize="30"
            fontStyle="italic"
            fontWeight="400"
            fill="#2a261f"
          >
            Small batch.
          </text>
          <text
            y="68"
            fontFamily="Georgia, serif"
            fontSize="30"
            fontStyle="italic"
            fontWeight="400"
            fill="#2a261f"
          >
            <tspan fill="#8a6c4a">Honest ingredients.</tspan>
          </text>
          <text
            y="98"
            fontFamily="Inter, sans-serif"
            fontSize="11"
            fill="rgba(42,38,31,0.72)"
          >
            Cold-pressed olive oils, single-origin honey, and pantry
          </text>
          <text
            y="115"
            fontFamily="Inter, sans-serif"
            fontSize="11"
            fill="rgba(42,38,31,0.72)"
          >
            staples worth keeping on the counter.
          </text>

          {/* CTAs */}
          <g transform="translate(0 134)">
            <rect width="118" height="32" rx="16" fill="#c5704a" />
            <text
              x="59"
              y="20"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="10"
              fontWeight="600"
              fill="#fff"
              letterSpacing="0.5"
            >
              SHOP THE COLLECTION
            </text>
          </g>
          <g transform="translate(132 134)">
            <text
              x="0"
              y="20"
              fontFamily="Georgia, serif"
              fontSize="11"
              fontStyle="italic"
              fill="#2a261f"
            >
              Read our story →
            </text>
          </g>
        </g>

        {/* Right side — product photograph placeholder */}
        <g transform="translate(620 16)">
          {/* Photo frame */}
          <rect width="380" height="170" rx="3" fill="url(#mwpHeroProduct)" />
          {/* Soft highlight gradient overlay (suggests photographic light) */}
          <rect width="380" height="170" rx="3" fill="url(#mwpHeroProduct)" opacity="0.5" />

          {/* Bottle silhouette — center-anchored hero product */}
          <g transform="translate(190 30)">
            <path
              d="M -8 0 L -8 14 L -14 22 L -14 116 Q -14 124 -6 124 L 6 124 Q 14 124 14 116 L 14 22 L 8 14 L 8 0 Z"
              fill="url(#mwpBottle)"
              stroke="rgba(42,38,31,0.20)"
              strokeWidth="0.5"
            />
            {/* Bottle label */}
            <rect x="-12" y="56" width="24" height="44" fill="#f1ebde" rx="1" />
            <line x1="-9" y1="68" x2="9" y2="68" stroke="#8a6c4a" strokeWidth="0.5" />
            <text
              x="0"
              y="76"
              textAnchor="middle"
              fontFamily="Georgia, serif"
              fontSize="4.5"
              fontStyle="italic"
              fill="#2a261f"
            >
              Larkspur
            </text>
            <text
              x="0"
              y="84"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="2.6"
              letterSpacing="0.4"
              fill="rgba(42,38,31,0.55)"
              fontWeight="500"
            >
              EXTRA VIRGIN
            </text>
            <text
              x="0"
              y="89"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="2.6"
              letterSpacing="0.4"
              fill="rgba(42,38,31,0.55)"
              fontWeight="500"
            >
              OLIVE OIL
            </text>
            <line x1="-9" y1="94" x2="9" y2="94" stroke="#8a6c4a" strokeWidth="0.5" />
          </g>

          {/* Small product chip / price tag */}
          <g transform="translate(290 124)">
            <rect width="74" height="28" rx="14" fill="#fff" stroke="rgba(42,38,31,0.14)" strokeWidth="0.5" />
            <text
              x="14"
              y="18"
              fontFamily="Inter, sans-serif"
              fontSize="9"
              fontWeight="500"
              fill="#2a261f"
            >
              $34
            </text>
            <text
              x="34"
              y="18"
              fontFamily="Inter, sans-serif"
              fontSize="8"
              fill="rgba(42,38,31,0.50)"
            >
              500 mL
            </text>
          </g>
        </g>
      </g>

      {/* FEATURED PRODUCTS ROW */}
      <g transform="translate(0 296)">
        <text
          x="56"
          y="22"
          fontFamily="Inter, sans-serif"
          fontSize="9"
          letterSpacing="2"
          fill="#8a6c4a"
          fontWeight="500"
        >
          THIS MONTH&rsquo;S SHELF
        </text>
        <text
          x="994"
          y="22"
          textAnchor="end"
          fontFamily="Georgia, serif"
          fontSize="11"
          fontStyle="italic"
          fill="#2a261f"
        >
          See all →
        </text>

        {/* 3 product cards */}
        {[
          {
            name: "Single-origin honey",
            meta: "Wildflower · 340 g",
            price: "$22",
            grad: "url(#mwpJar)",
            x: 56,
          },
          {
            name: "Aged balsamic",
            meta: "12 year · 250 mL",
            price: "$48",
            grad: "url(#mwpBottle)",
            x: 372,
          },
          {
            name: "Hand-milled flake salt",
            meta: "Cold sea · 200 g",
            price: "$18",
            grad: "url(#mwpBox)",
            x: 688,
          },
        ].map((p) => (
          <g key={p.name} transform={`translate(${p.x} 36)`}>
            {/* Product photo */}
            <rect width="306" height="86" rx="3" fill="#e0d4ba" />
            <rect width="306" height="86" rx="3" fill={p.grad} opacity="0.55" />
            {/* Subtle product silhouette inside card */}
            <rect x="138" y="22" width="30" height="48" rx="3" fill={p.grad} stroke="rgba(42,38,31,0.18)" strokeWidth="0.5" />
            <rect x="143" y="40" width="20" height="20" fill="#f1ebde" opacity="0.85" />

            {/* Title + meta + price */}
            <text
              x="0"
              y="106"
              fontFamily="Georgia, serif"
              fontSize="13"
              fontWeight="400"
              fill="#2a261f"
            >
              {p.name}
            </text>
            <text
              x="0"
              y="121"
              fontFamily="Inter, sans-serif"
              fontSize="9"
              fill="rgba(42,38,31,0.55)"
            >
              {p.meta}
            </text>
            <text
              x="306"
              y="121"
              textAnchor="end"
              fontFamily="Inter, sans-serif"
              fontSize="10"
              fontWeight="600"
              fill="#2a261f"
            >
              {p.price}
            </text>
          </g>
        ))}
      </g>

      {/* FOOTER HINT */}
      <g transform="translate(0 432)">
        <line x1="56" y1="0" x2="994" y2="0" stroke="rgba(42,38,31,0.10)" strokeWidth="0.5" />
        <text
          x="56"
          y="14"
          fontFamily="Inter, sans-serif"
          fontSize="8"
          fill="rgba(42,38,31,0.50)"
        >
          © 2026 Larkspur Pantry · Privacy · Stockists · Newsletter
        </text>
        <text
          x="994"
          y="14"
          textAnchor="end"
          fontFamily="Inter, sans-serif"
          fontSize="8"
          fontStyle="italic"
          fill="rgba(42,38,31,0.50)"
        >
          Built by Origin AI
        </text>
      </g>
    </svg>
  );
}
