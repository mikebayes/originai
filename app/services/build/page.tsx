import type { Metadata } from "next";
import ServicesBuildPage from "@/components/ServicesBuildPage";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Software Development & AI Agents | Origin AI",
  description:
    "Custom AI software, AI agents, and operational AI systems for Canadian businesses. Origin AI is a Winnipeg-based AI development company.",
  alternates: { canonical: "https://www.originai.ca/services/build" },
};

const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.originai.ca/services/build#service",
  name: "AI Software Development",
  description:
    "Custom AI software, AI agents, and operational AI systems built by senior engineers for Canadian businesses.",
  provider: { "@id": "https://www.originai.ca/#organization" },
  serviceType: "AI Software Development",
  areaServed: [
    { "@type": "Country", name: "Canada" },
    { "@type": "City", name: "Winnipeg" },
  ],
  url: "https://www.originai.ca/services/build",
};

export default function BuildRoute() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSON_LD) }}
      />
      <ServicesBuildPage />
      <Footer />
    </main>
  );
}
