import type { Metadata } from "next";
import ServicesV2Hero from "@/components/ServicesV2Hero";
import ServicesV2Trio from "@/components/ServicesV2Trio";
import ServicesV2Engage from "@/components/ServicesV2Engage";
import ServicesV2Proof from "@/components/ServicesV2Proof";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "AI Consulting Services in Canada | Origin AI",
  description:
    "AI strategy, custom AI software, and managed AI for businesses across Canada. Origin AI is a Winnipeg-based AI consulting firm.",
  alternates: { canonical: "https://www.originai.ca/services" },
};

/**
 * /services page — V2 redesign.
 *
 * Built off claude_design_files/Services V2/. Sections:
 *   1. Hero with engagement-model diagram aside
 *   2. Trio of service cards (Build centerpiece with operations dashboard)
 *   3. How we engage — phase rail (Discover / Frame / Build / Operate)
 *   4. Proof — featured Doug Darling testimonial + selected clients strip
 *   5. Final CTA + Footer (reused from homepage via FinalCTA component,
 *      so the bottom of the page stays consistent across the site)
 *
 * The four V2 sections are wrapped in a .svcs-v2 div so the V2 stylesheet
 * (which is scoped under that class) can take effect without leaking into
 * any other route. The site-wide StickyNav comes from app/layout.tsx and
 * the FinalCTA + footer are unscoped so they stay visually consistent
 * with the homepage.
 */
export default function ServicesPage() {
  return (
    <main>
      <div className="svcs-v2">
        <ServicesV2Hero />
        <ServicesV2Trio />
        <ServicesV2Engage />
        <ServicesV2Proof />
      </div>
      <FinalCTA />
    </main>
  );
}
