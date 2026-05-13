import type { Metadata } from "next";
import ApproachPage from "@/components/ApproachPage";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Approach | Origin AI",
  description:
    "How a Winnipeg AI consulting firm approaches AI adoption: clarity before tooling, fluency over dependency, and systems that fit the business. The principles that shape every engagement.",
  alternates: { canonical: "https://www.originai.ca/approach" },
};

export default function ApproachRoute() {
  return (
    <main>
      <ApproachPage />
      <Footer />
    </main>
  );
}
