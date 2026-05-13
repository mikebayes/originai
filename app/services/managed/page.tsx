import type { Metadata } from "next";
import ServicesManagedPage from "@/components/ServicesManagedPage";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Managed AI | Origin AI",
  description:
    "Origin AI manages and improves the AI systems we build with you. A defined monthly scope keeps AI software, workflows, and integrations live and improving.",
  alternates: { canonical: "https://www.originai.ca/services/managed" },
};

const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.originai.ca/services/managed#service",
  name: "Managed AI",
  description:
    "Ongoing development and support for AI systems Origin AI builds with clients. Defined monthly scope keeping AI software, workflows, and integrations live and improving.",
  provider: { "@id": "https://www.originai.ca/#organization" },
  serviceType: "Managed AI Services",
  areaServed: [
    { "@type": "Country", name: "Canada" },
    { "@type": "City", name: "Winnipeg" },
  ],
  url: "https://www.originai.ca/services/managed",
};

export default function ManagedRoute() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSON_LD) }}
      />
      <ServicesManagedPage />
      <Footer />
    </main>
  );
}
