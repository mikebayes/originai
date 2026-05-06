import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Get started | Origin AI",
  description:
    "Tell us about your AI work. Book a 30-minute discovery session, or write to us first if you'd rather think before you talk. Origin AI is a Winnipeg-based AI consulting and software firm.",
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
