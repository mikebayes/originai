import type { Metadata } from "next";
import TeamPage from "@/components/TeamPage";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Team | Origin AI",
  description:
    "Meet the senior team behind Origin AI, a Winnipeg AI consulting firm. Operators with experience across AI strategy, software delivery, and growth. Senior on every engagement.",
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
