/**
 * InsightCover — generative abstract cover for an article.
 *
 * Each article gets a deterministic cover based on its category +
 * slug. Category sets the palette. Slug hash picks one of three
 * motifs (concentric, angular, grid-path). Same article = same
 * cover, every build. New articles get covers automatically.
 *
 * No images, no asset pipeline, no manual design work per post.
 * The visual identity comes from the system, not stock photography.
 *
 * Pure SVG. Server-renderable. No hooks, no client JS.
 */

interface CoverProps {
  category: string;
  /** Stable seed for variant selection. Usually the article slug. */
  seed: string;
  /** Aspect ratio. featured = 5:4, card = 16:9. */
  aspect?: "featured" | "card";
  className?: string;
}

interface Palette {
  bg: string;
  accent: string;
  accentSoft: string;
}

const PALETTES: Record<string, Palette> = {
  Adoption: { bg: "#162421", accent: "#5DA89C", accentSoft: "#7BC8B8" },
  Build:    { bg: "#1e1a16", accent: "#c5a47e", accentSoft: "#dbbf9b" },
  Strategy: { bg: "#1a1a22", accent: "#968560", accentSoft: "#b8a684" },
  Managed:  { bg: "#141c1a", accent: "#5DA89C", accentSoft: "#88c3b6" },
  Notes:    { bg: "#16161a", accent: "#a8a8a8", accentSoft: "#cfcfcf" },
};

function seedHash(seed: string): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h << 5) - h + seed.charCodeAt(i);
    h |= 0; // force int32
  }
  return Math.abs(h);
}

const DIMS = {
  featured: { w: 500, h: 400, labelY: 374 },
  card:     { w: 600, h: 340, labelY: 318 },
};

export default function InsightCover({
  category,
  seed,
  aspect = "card",
  className,
}: CoverProps) {
  const palette = PALETTES[category] ?? PALETTES.Adoption;
  const hash = seedHash(seed);
  const variant = hash % 3;
  const dims = DIMS[aspect];

  // Stable per-instance unique ID for gradient defs (avoids
  // collisions when multiple covers render on one page).
  const uid = `c${hash}`;

  // Two-digit "issue number" label, derived from the same hash so
  // the cover and label are stable per article.
  const idLabel = String(hash % 99).padStart(2, "0");
  const label = `${category.toUpperCase()} · ${idLabel}`;

  const commonProps = {
    viewBox: `0 0 ${dims.w} ${dims.h}`,
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid slice" as const,
    className,
    "aria-hidden": true as const,
  };

  if (variant === 0) {
    // MOTIF A — concentric circles + arc path
    const cx = dims.w * 0.32;
    const cy = dims.h * 0.35;
    return (
      <svg {...commonProps}>
        <defs>
          <radialGradient id={`${uid}-a`} cx="0.3" cy="0.3" r="0.9">
            <stop offset="0%" stopColor={palette.accent} stopOpacity="0.55" />
            <stop offset="100%" stopColor={palette.accent} stopOpacity="0" />
          </radialGradient>
          <radialGradient id={`${uid}-b`} cx="0.75" cy="0.7" r="0.7">
            <stop offset="0%" stopColor={palette.accentSoft} stopOpacity="0.32" />
            <stop offset="100%" stopColor={palette.accentSoft} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width={dims.w} height={dims.h} fill={palette.bg} />
        <circle
          cx={cx}
          cy={cy}
          r={Math.min(dims.w, dims.h) * 0.58}
          fill={`url(#${uid}-a)`}
        />
        <circle
          cx={dims.w * 0.76}
          cy={dims.h * 0.7}
          r={Math.min(dims.w, dims.h) * 0.48}
          fill={`url(#${uid}-b)`}
        />
        <g stroke="rgba(245,240,228,0.12)" strokeWidth="1" fill="none">
          <circle cx={cx} cy={cy} r="60" />
          <circle cx={cx} cy={cy} r="110" />
          <circle cx={cx} cy={cy} r="170" />
        </g>
        <path
          d={`M${dims.w * 0.2} ${dims.h * 0.82} Q${dims.w * 0.5} ${
            dims.h * 0.5
          } ${dims.w * 0.84} ${dims.h * 0.82}`}
          stroke={palette.accent}
          strokeOpacity="0.55"
          strokeWidth="1.4"
          fill="none"
        />
        <circle cx={cx} cy={cy} r="5" fill={palette.accent} />
        <circle cx={dims.w * 0.84} cy={dims.h * 0.82} r="5" fill={palette.accent} />
        <text
          x="24"
          y={dims.labelY}
          fontFamily="JetBrains Mono, ui-monospace, monospace"
          fontSize="11"
          fill="rgba(245,240,228,0.42)"
          letterSpacing="2"
        >
          {label}
        </text>
      </svg>
    );
  }

  if (variant === 1) {
    // MOTIF B — angular polygon + horizontal rules
    return (
      <svg {...commonProps}>
        <defs>
          <linearGradient id={`${uid}-warm`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={palette.accent} stopOpacity="0.45" />
            <stop offset="100%" stopColor={palette.accent} stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width={dims.w} height={dims.h} fill={palette.bg} />
        <polygon
          points={`0,${dims.h} ${dims.w * 0.4},${dims.h * 0.22} ${
            dims.w * 0.6
          },${dims.h * 0.6} ${dims.w},${dims.h * 0.36} ${dims.w},${dims.h}`}
          fill={`url(#${uid}-warm)`}
        />
        <g stroke="rgba(245,240,228,0.14)" strokeWidth="1" fill="none">
          <line x1="0" y1={dims.h * 0.58} x2={dims.w} y2={dims.h * 0.58} />
          <line x1="0" y1={dims.h * 0.7} x2={dims.w} y2={dims.h * 0.7} />
          <line x1="0" y1={dims.h * 0.82} x2={dims.w} y2={dims.h * 0.82} />
        </g>
        <circle cx={dims.w * 0.4} cy={dims.h * 0.22} r="6" fill={palette.accent} />
        <circle cx={dims.w * 0.6} cy={dims.h * 0.6} r="6" fill={palette.accent} />
        <circle cx={dims.w * 0.97} cy={dims.h * 0.36} r="6" fill={palette.accent} />
        <text
          x="24"
          y={dims.labelY}
          fontFamily="JetBrains Mono, ui-monospace, monospace"
          fontSize="11"
          fill="rgba(245,240,228,0.4)"
          letterSpacing="2"
        >
          {label}
        </text>
      </svg>
    );
  }

  // MOTIF C — grid + step path
  return (
    <svg {...commonProps}>
      <defs>
        <radialGradient id={`${uid}-rad`} cx="0.6" cy="0.4" r="0.85">
          <stop offset="0%" stopColor={palette.accent} stopOpacity="0.36" />
          <stop offset="100%" stopColor={palette.accent} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width={dims.w} height={dims.h} fill={palette.bg} />
      <rect width={dims.w} height={dims.h} fill={`url(#${uid}-rad)`} />
      <g stroke="rgba(245,240,228,0.08)" strokeWidth="1" fill="none">
        <line x1={dims.w * 0.16} y1="0" x2={dims.w * 0.16} y2={dims.h} />
        <line x1={dims.w * 0.33} y1="0" x2={dims.w * 0.33} y2={dims.h} />
        <line x1={dims.w * 0.5} y1="0" x2={dims.w * 0.5} y2={dims.h} />
        <line x1={dims.w * 0.67} y1="0" x2={dims.w * 0.67} y2={dims.h} />
        <line x1={dims.w * 0.83} y1="0" x2={dims.w * 0.83} y2={dims.h} />
        <line x1="0" y1={dims.h * 0.3} x2={dims.w} y2={dims.h * 0.3} />
        <line x1="0" y1={dims.h * 0.6} x2={dims.w} y2={dims.h * 0.6} />
      </g>
      <path
        d={`M${dims.w * 0.16} ${dims.h * 0.66} L${dims.w * 0.33} ${
          dims.h * 0.66
        } L${dims.w * 0.33} ${dims.h * 0.42} L${dims.w * 0.67} ${
          dims.h * 0.42
        } L${dims.w * 0.67} ${dims.h * 0.3} L${dims.w * 0.83} ${
          dims.h * 0.3
        }`}
        stroke={palette.accent}
        strokeOpacity="0.6"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <circle
        cx={dims.w * 0.16}
        cy={dims.h * 0.66}
        r="5"
        fill={palette.accent}
      />
      <circle cx={dims.w * 0.83} cy={dims.h * 0.3} r="5" fill={palette.accent} />
      <text
        x="24"
        y={dims.labelY}
        fontFamily="JetBrains Mono, ui-monospace, monospace"
        fontSize="11"
        fill="rgba(245,240,228,0.4)"
        letterSpacing="2"
      >
        {label}
      </text>
    </svg>
  );
}
