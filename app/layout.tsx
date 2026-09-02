import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Self-hosted fonts via next/font. Eliminates the render-blocking
// Google Fonts request and exposes each font as a CSS variable so the
// existing stylesheets can reference them without a round trip to
// fonts.googleapis.com on every page load.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
  display: "swap",
});
const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter-tight",
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// Brand tokens and base typography (defines :root + html/body + .display + .mono + .pill)
import "../styles/hero.css";
// Shared section primitives (.stage, .s-header, .s-h2, .s-lede, .cphoto, .tlink)
import "../styles/sections.css";
// Per-section styles (each scoped by unique class names, no conflicts)
import "../styles/problem.css";
import "../styles/framework.css";
import "../styles/beliefs.css";
import "../styles/services.css";
import "../styles/proof.css";
import "../styles/about.css";
import "../styles/insights.css";
import "../styles/cta-footer.css";
import "../styles/services-page.css";
// Services V2 page redesign. Scoped under .svcs-v2 so it only affects /services.
import "../styles/services-v2.css";
import "../styles/services-deep.css";
// Deep service page: /services/build (AI Software & Systems).
import "../styles/services-build.css";
// Dynamic motion: reveal animations, sticky nav, scroll indicator, hover, continuity
import "../styles/dynamics.css";
// Homepage styles. Every selector is gated on .home-v2, which the
// homepage carries, so other routes are unaffected.
import "../styles/home-v2.css";

// Global resets (loaded last so they don't get overridden)
import "./globals.css";

import StickyNav from "@/components/StickyNav";
import RevealInit from "@/components/RevealInit";

const SEO_TITLE = "AI Consulting & Custom AI Software in Winnipeg | Origin AI";
const SEO_DESCRIPTION =
  "Origin AI is a Canadian AI consulting firm in Winnipeg. We build custom AI software, lead AI strategy, and run AI systems for businesses across Canada.";
const SITE_URL = "https://www.originai.ca";

// Google Analytics 4 measurement ID. Loaded site-wide via next/script.
const GA_MEASUREMENT_ID = "G-4WMTNEFV3C";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: SEO_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    url: SITE_URL,
    siteName: "Origin AI",
    type: "website",
    locale: "en_CA",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Origin AI — AI Consulting & Custom AI Software in Winnipeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
};

// LocalBusiness / ProfessionalService JSON-LD.
// Provides structured data so Google can associate the page with our service area
// (Canada), location (Winnipeg), and the things we do (AI consulting, AI software,
// AI strategy, agentic AI). This is the single most important on-page signal for
// local pack rankings.
const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: "Origin AI",
  alternateName: "Origin AI Inc.",
  description:
    "AI consulting firm in Winnipeg, Canada. Custom AI software, AI strategy, and managed AI for businesses across Canada.",
  url: SITE_URL,
  telephone: "+1-204-515-1415",
  email: "info@originai.ca",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Winnipeg",
    addressRegion: "MB",
    addressCountry: "CA",
  },
  areaServed: [
    { "@type": "Country", name: "Canada" },
    { "@type": "AdministrativeArea", name: "Manitoba" },
    { "@type": "City", name: "Winnipeg" },
  ],
  // Aligned to the four-part service model (leadership enablement, team
  // training, workflow development, managed improvement).
  //
  // Removed: "AI roadmap" (the positioning moved away from roadmap
  // language), "Agentic AI" and "AI agents" (high volume but they attract
  // the wrong audience and no page targets them).
  //
  // Added: "AI training" and "AI workflow development" (both are now
  // real services), and "AI adoption" (the through-line of the site).
  // "Managed AI" widened to "Managed AI services", which is the phrase
  // people actually search.
  knowsAbout: [
    "AI consulting",
    "AI training",
    "Custom AI software",
    "AI software development",
    "AI workflow development",
    "AI strategy",
    "AI adoption",
    "Managed AI services",
  ],
  sameAs: ["https://www.linkedin.com/company/origin-ai-tech"],
};

// WebSite JSON-LD.
// Google's site-name feature reads `name` from this specific schema type
// to decide what to display above the search result title (instead of the
// raw domain). The ProfessionalService schema above carries the local SEO
// signals; this one is purely for branded display in SERPs.
// Reference: https://developers.google.com/search/docs/appearance/site-names
const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Origin AI",
  alternateName: "Origin AI Inc.",
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Structured data: ProfessionalService schema with NAP and service area.
            Helps Google associate Origin AI with Winnipeg, Canada, and our service
            categories for local pack and AI consulting rankings. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
        />
        {/* WebSite schema: tells Google to use "Origin AI" as the site name in
            search results instead of the raw domain. Takes several weeks to
            propagate after first deploy. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSON_LD) }}
        />
      </head>
      <body>
        {/* Google Analytics 4. afterInteractive strategy defers script load
            until after page interactivity so analytics never blocks paint. */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>

        <StickyNav />
        {children}
        <RevealInit />

        {/* Vercel Analytics: page views reported to the Vercel project
            dashboard. Free, ad-blocker-resistant. */}
        <Analytics />

        {/* Vercel Speed Insights: Core Web Vitals (LCP, INP, CLS) tracked
            from real user sessions. Shows performance trends and slow
            pages in the Vercel dashboard. */}
        <SpeedInsights />
      </body>
    </html>
  );
}
