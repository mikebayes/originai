import type { Metadata } from "next";
import ServicesStrategyPage from "@/components/ServicesStrategyPage";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "AI Strategy & Training | Origin AI",
  description:
    "Leadership sessions, AI training, readiness assessments, and use case discovery for mid-market companies adopting AI. Get clear on where AI fits, then move toward implementation.",
  alternates: { canonical: "https://www.originai.ca/services/strategy" },
};

export default function StrategyRoute() {
  return (
    <main>
      <ServicesStrategyPage />
      <FinalCTA />
    </main>
  );
}
