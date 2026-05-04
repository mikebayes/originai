import type { Metadata } from "next";
import ServicesManagedPage from "@/components/ServicesManagedPage";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Managed AI | Origin AI",
  description:
    "Ongoing development and support for the AI systems we build with you. A defined monthly scope for keeping live AI software, workflows, and tools improving over time.",
  alternates: { canonical: "https://www.originai.ca/services/managed" },
};

export default function ManagedRoute() {
  return (
    <main>
      <ServicesManagedPage />
      <Footer />
    </main>
  );
}
