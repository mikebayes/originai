import type { Metadata } from "next";
import InsightsIndex from "@/components/InsightsIndex";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Insights | Origin AI",
  description:
    "Short, opinionated reads on framing AI problems, building durable systems, and the operations work that makes them stick. From the Origin AI team in Winnipeg.",
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
