import type { Metadata } from "next";
import ApproachPage from "@/components/ApproachPage";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Approach | Origin AI",
  description:
    "How Origin AI thinks about AI adoption — clarity before tooling, fluency over dependency, and systems that fit the business. Six reinforcing capabilities and the principles that shape our work.",
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
