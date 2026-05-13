import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Get started | Origin AI",
  description:
    "Tell us about your AI work. Book a discovery session or write to us first. Origin AI is a Winnipeg-based AI consulting and software development firm.",
  alternates: { canonical: "https://www.originai.ca/contact" },
};

export default function ContactRoute() {
  return (
    <main>
      <ContactPage />
      <Footer />
    </main>
  );
}
