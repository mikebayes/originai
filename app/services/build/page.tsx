import type { Metadata } from "next";
import ServicesBuildPage from "@/components/ServicesBuildPage";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Software & Systems | Origin AI",
  description:
    "Custom AI software, internal systems, and AI-enabled websites built for mid-market businesses. Origin AI ships production-grade software in weeks, not months.",
  alternates: { canonical: "https://www.originai.ca/services/build" },
};

export default function BuildRoute() {
  return (
    <main>
      <ServicesBuildPage />
      <Footer />
    </main>
  );
}
