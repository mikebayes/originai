import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
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
  knowsAbout: [
    "AI consulting",
    "Custom AI software",
    "AI software development",
    "AI strategy",
    "AI roadmap",
    "Agentic AI",
    "AI agents",
    "Managed AI",
  ],
  sameAs: ["https://www.linkedin.com/company/origin-ai-tech"],
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
        {/* Structured data: ProfessionalService schema with NAP and service area.
            Helps Google associate Origin AI with Winnipeg, Canada, and our service
            categories for local pack and AI consulting rankings. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
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
