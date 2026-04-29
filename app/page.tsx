import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Framework from "@/components/Framework";
import Services from "@/components/Services";
import Proof from "@/components/Proof";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Problem />
      <Framework />
      <Services />
      <Proof />
      <About />
      <FinalCTA />
    </main>
  );
}
