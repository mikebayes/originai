# Origin AI — Homepage Sections (Design Handoff)

Eight sections of the new Origin AI homepage, each as its own standalone HTML file.
Built against the brand tokens defined in `styles/hero.css`.

## Files

| File | Section | Notes |
|---|---|---|
| `Hero.html` | 1 — Hero | Asymmetric, photo right two-thirds, pill CTAs left. Uses `assets/hero.jpg`. |
| `Problem.html` | 2 — The problem | Three glass cards on atmospheric backdrop, asymmetric heights. |
| `Problem-Mobile.html` | 2 — Mobile pass | 393px viewport adaptation of section 2. |
| `Framework.html` | 3 — Align / Govern / Activate | Forest-green panel, three pillars with line icons. |
| `Services.html` | 4 — Services | Three cards, AI Solutions & Development centerpiece. |
| `Proof.html` | 5 — Proof | Wordmark row + two testimonials. |
| `About.html` | 6 — About teaser | Three teaser cards (Team / Approach / Principles). |
| `Insights.html` | 7 — Insights | Three article cards + "View all insights →". |
| `Final-CTA.html` | 8 — Final CTA + Footer | Forest-green CTA panel + three-column footer. |

## Stylesheets (`styles/`)

- `hero.css` — **token layer** (CSS custom properties, type, pill button styles). Loaded by every section.
- `sections.css` — shared section primitives: stage, header, cinematic photo placeholder, teal link.
- `framework.css` — section 3
- `services.css` — section 4
- `proof.css` — section 5
- `about.css` — section 6
- `insights.css` — section 7
- `cta-footer.css` — section 8
- `problem.css` — section 2

## Image placeholders

`Hero.html` is the only file using a real photo (`assets/hero.jpg`). Every other photo in the
deck is rendered as a desaturated CSS gradient with a mono caption — these are intentional
placeholders, ready to be swapped for real cinematic imagery. Look for `.cphoto` /
`.cphoto-caption` markers in the HTML.

## Fonts

Loaded from Google Fonts CDN: Inter, Inter Tight, JetBrains Mono.

## Tokens

All color, type, and spacing tokens live as CSS custom properties at the top of `styles/hero.css`.
Brand palette: true black background, teal accent (`--accent: #3FDDC9`), forest green for feature
panels (`#134836`).
