import type { Metadata } from "next";
import ServicesBuildHero from "@/components/ServicesBuildHero";
import ServicesBuildManifesto from "@/components/ServicesBuildManifesto";
import ServicesBuildWhat from "@/components/ServicesBuildWhat";
import ServicesBuildWhen from "@/components/ServicesBuildWhen";
import ServicesBuildDeliverables from "@/components/ServicesBuildDeliverables";
import ServicesBuildScenarios from "@/components/ServicesBuildScenarios";
import ServicesBuildFAQ from "@/components/ServicesBuildFAQ";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "AI Software & Systems | Origin AI",
  description:
    "Custom AI software, internal systems, and AI-enabled websites built for mid-market businesses. Origin AI ships production-grade software in weeks, not months.",
  alternates: { canonical: "https://www.originai.ca/services/build" },
};

export default function ServicesBuildPage() {
  return (
    <main>
      <div className="svcs-v2 svcs-build">
        <ServicesBuildHero />
        <ServicesBuildManifesto />
        <ServicesBuildWhat />
        <ServicesBuildWhen />
        <ServicesBuildDeliverables />
        <ServicesBuildScenarios />
        <ServicesBuildFAQ />
      </div>
      <FinalCTA />
    </main>
  );
}
