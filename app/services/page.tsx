import type { Metadata } from "next";
import ServicesHero from "@/components/ServicesHero";
import ServicesBuildFeature from "@/components/ServicesBuildFeature";

export const metadata: Metadata = {
  title: "AI Consulting Services in Canada | Origin AI",
  description:
    "AI strategy, custom AI software, and managed AI for businesses across Canada. Origin AI is a Winnipeg-based AI consulting firm.",
  alternates: { canonical: "https://www.originai.ca/services" },
};

/**
 * /services overview page.
 *
 * Body sections lined up: Build (centerpiece, stacked layout) →
 * Strategy (2-col) → Managed (2-col mirrored) → How we engage → Final CTA.
 * Currently building one at a time so we can iterate visually.
 */
export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesBuildFeature />

      {/* Strategy and Managed feature sections, How we engage, and the
          final CTA come next. Placeholder removed since the Build feature
          section now follows the hero. */}
    </main>
  );
}
