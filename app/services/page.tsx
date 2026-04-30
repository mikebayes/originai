import type { Metadata } from "next";
import ServicesHero from "@/components/ServicesHero";

export const metadata: Metadata = {
  title: "AI Consulting Services in Canada | Origin AI",
  description:
    "AI strategy, custom AI software, and managed AI for businesses across Canada. Origin AI is a Winnipeg-based AI consulting firm.",
  alternates: { canonical: "https://www.originai.ca/services" },
};

/**
 * /services overview page.
 *
 * SCAFFOLD STATE — only the hero is implemented + a transition placeholder
 * into the first section, so the design approach can be reviewed before the
 * full page is built. Subsequent sections (statement, three feature blocks,
 * how-we-engage, CTA) come after design approval.
 */
export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />

      {/* PLACEHOLDER first section. Just enough visual to show the
          transition from hero into body content. Real content lands
          after the design approach is approved. */}
      <section className="services-next-placeholder" aria-label="First section placeholder">
        <div className="services-next-inner">
          <span className="services-next-tag">First section starts here</span>
          <p className="services-next-note">
            (Placeholder. Real content for the &ldquo;how the three services work
            together&rdquo; section lands once the hero design is approved.)
          </p>
        </div>
      </section>
    </main>
  );
}
