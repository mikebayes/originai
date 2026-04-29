# Origin AI — Website

Marketing website for Origin AI. Next.js 15 (App Router) + TypeScript + vanilla CSS, deployed to Vercel.

## Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: vanilla CSS in `styles/`, brand tokens defined as CSS custom properties at the top of `styles/hero.css`
- **Fonts**: Inter, Inter Tight, JetBrains Mono via Google Fonts (loaded in `app/layout.tsx`)
- **Hosting**: Vercel

## Project structure

```
.
├── app/
│   ├── layout.tsx        Root layout, loads fonts, imports all section CSS
│   ├── page.tsx          Homepage, assembles 8 section components
│   └── globals.css       Resets only; tokens live in styles/hero.css
├── components/
│   ├── Hero.tsx          Section 1 — cinematic full-bleed hero
│   ├── Problem.tsx       Section 2 — three problem cards
│   ├── Framework.tsx     Section 3 — Align / Govern / Activate panel
│   ├── Services.tsx      Section 4 — three service cards (Solutions is centerpiece)
│   ├── Proof.tsx         Section 5 — client wordmarks + 2 testimonials
│   ├── About.tsx         Section 6 — Team / Approach / Principles teasers
│   ├── Insights.tsx      Section 7 — three article cards
│   └── FinalCTA.tsx      Section 8 — final CTA panel + sitewide footer
├── styles/               Vanilla CSS, one file per section
├── public/
│   └── images/
│       └── main_hero.jpg The cinematic hero photograph
├── docs/                 Brand guide, homepage plan, sitemap, audit
├── assets/               Source assets (logos, original images)
└── claude_design_files/  Original Claude Design HTML/CSS reference
```

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Brand tokens

All color tokens live as CSS custom properties at the top of `styles/hero.css`:

```css
:root {
  --bg: #000000;
  --bg-elevated: #0F0F0F;
  --bg-feature: #134836;
  --accent: #3FDDC9;
  --accent-hover: #5DEAD8;
  --ink: #FFFFFF;
  --ink-muted: #A8A8A8;
  --ink-subtle: #6B6B6B;
  --border: #1E1E1E;
}
```

## Notes

- The Claude Design output (`claude_design_files/`) is preserved as a reference. Each section here was ported into a React component with the original CSS attached.
- Service / About / Insights cards use a CSS-rendered `cphoto` placeholder for imagery. Real photography drops in by replacing the placeholder with a real `<img>` or background-image.
- The hero photograph is loaded as a CSS background in `styles/hero.css`. To swap, replace `public/images/main_hero.jpg`.
- Logo files are PNGs in `assets/logos/`. Vectorize to SVG before production.

## Deployment

Push to GitHub. Vercel will auto-deploy on push to `main`.
