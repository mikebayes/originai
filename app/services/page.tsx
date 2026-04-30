import type { Metadata } from "next";
import ServicesHero from "@/components/ServicesHero";
import ServicesCardsGrid from "@/components/ServicesCardsGrid";
import ServicesEngage from "@/components/ServicesEngage";

export const metadata: Metadata = {
  title: "AI Consulting Services in Canada | Origin AI",
  description:
    "AI strategy, custom AI software, and managed AI for businesses across Canada. Origin AI is a Winnipeg-based AI consulting firm.",
  alternates: { canonical: "https://www.originai.ca/services" },
};

/**
 * /services overview page.
 *
 * Hero → three-card services grid → How we engage anchor section →
 * (Proof + Final CTA still to come).
 * The three cards replace the elaborate per-service feature sections. Each
 * card links to its deep /services/{name} page where the depth lives.
 * The engage section anchors the page in humans (photo + statement) before
 * the proof and CTA close it out.
 */
export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesCardsGrid />
      <ServicesEngage />
    </main>
  );
}
