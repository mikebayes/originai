import type { Metadata } from "next";
import InsightsIndex from "@/components/InsightsIndex";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Insights | Origin AI",
  description:
    "Short reads on AI strategy, adoption, and what to build. Field notes from Origin AI, a Winnipeg AI consulting firm. Written by the team, not a content team.",
  alternates: { canonical: "https://www.originai.ca/insights" },
};

export default function InsightsRoute() {
  return (
    <main>
      <InsightsIndex />
      <Footer />
    </main>
  );
}
