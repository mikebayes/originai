import type { Metadata } from "next";
import TeamPage from "@/components/TeamPage";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Team | Origin AI",
  description:
    "Origin AI is led by a small senior team of business, technology, and marketing operators. Backed by Web Wizards' delivery capability — strategy from Origin, delivery depth from Web Wizards, one connected team.",
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
