import type { Metadata } from "next";
import TeamPage from "@/components/TeamPage";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Team | Origin AI",
  description:
    "Origin AI is led by a small senior team of business, technology, and marketing operators bringing experience across AI strategy, software delivery, and growth. Senior on every engagement.",
  alternates: { canonical: "https://www.originai.ca/team" },
};

export default function TeamRoute() {
  return (
    <main>
      <TeamPage />
      <Footer />
    </main>
  );
}
