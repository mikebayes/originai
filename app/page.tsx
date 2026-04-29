import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Beliefs from "@/components/Beliefs";
import Services from "@/components/Services";
import Proof from "@/components/Proof";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Problem />
      <Beliefs />
      <Services />
      <Proof />
      <About />
      <FinalCTA />
    </main>
  );
}
