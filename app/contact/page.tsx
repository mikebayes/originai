import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";
import Footer from "@/components/Footer";
import { pageOpenGraph } from "@/lib/open-graph";

const title = "Get started | Origin AI";
const description =
  "Tell us about your AI work. Book a discovery session or write to us first. Origin AI is a Winnipeg-based AI consulting and software development firm.";
const canonical = "https://www.originai.ca/contact";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: pageOpenGraph(title, description, canonical),
};

export default function ContactRoute() {
  return (
    <main>
      <ContactPage />
      <Footer />
    </main>
  );
}
