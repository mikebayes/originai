import type { Metadata } from "next";
import ServicesStrategyPage from "@/components/ServicesStrategyPage";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Roadmap & AI Strategy Consulting | Origin AI",
  description:
    "AI roadmap and AI strategy consulting for Canadian businesses. Origin AI helps leaders identify where AI fits, what to build first, and how to deliver real outcomes.",
  alternates: { canonical: "https://www.originai.ca/services/strategy" },
};

const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.originai.ca/services/strategy#service",
  name: "AI Roadmap & Strategy Consulting",
  description:
    "AI roadmap development and AI strategy consulting for leadership teams identifying where AI fits and what to build first.",
  provider: { "@id": "https://www.originai.ca/#organization" },
  serviceType: "AI Strategy Consulting",
  areaServed: [
    { "@type": "Country", name: "Canada" },
    { "@type": "City", name: "Winnipeg" },
  ],
  url: "https://www.originai.ca/services/strategy",
};

export default function StrategyRoute() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSON_LD) }}
      />
      <ServicesStrategyPage />
      <Footer />
    </main>
  );
}
