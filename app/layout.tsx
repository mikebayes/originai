import type { Metadata } from "next";

// Brand tokens and base typography (defines :root + html/body + .display + .mono + .pill)
import "../styles/hero.css";
// Shared section primitives (.stage, .s-header, .s-h2, .s-lede, .cphoto, .tlink)
import "../styles/sections.css";
// Per-section styles (each scoped by unique class names, no conflicts)
import "../styles/problem.css";
import "../styles/framework.css";
import "../styles/services.css";
import "../styles/proof.css";
import "../styles/about.css";
import "../styles/insights.css";
import "../styles/cta-footer.css";
// Dynamic motion: reveal animations, sticky nav, scroll indicator, hover, continuity
import "../styles/dynamics.css";

// Global resets (loaded last so they don't get overridden)
import "./globals.css";

import StickyNav from "@/components/StickyNav";
import RevealInit from "@/components/RevealInit";

export const metadata: Metadata = {
  title: "Origin AI — Turning AI ambition into working systems.",
  description:
    "Strategy, development, and AI solutions that deliver measurable business outcomes.",
  metadataBase: new URL("https://www.originai.ca"),
  openGraph: {
    title: "Origin AI — Turning AI ambition into working systems.",
    description:
      "Strategy, development, and AI solutions that deliver measurable business outcomes.",
    url: "https://www.originai.ca",
    siteName: "Origin AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Origin AI — Turning AI ambition into working systems.",
    description:
      "Strategy, development, and AI solutions that deliver measurable business outcomes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Inter+Tight:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StickyNav />
        {children}
        <RevealInit />
      </body>
    </html>
  );
}
