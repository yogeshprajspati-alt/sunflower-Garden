import { Navbar } from "@/components/ui/Navbar";
import { SunDust } from "@/components/ui/SunDust";
import { Hero } from "@/components/sections/Hero";
import { CinematicReveal } from "@/components/sections/CinematicReveal";
import { ThirdSection } from "@/components/sections/ThirdSection";
import { BouquetSection } from "@/components/sections/BouquetSection";
import { StarlitSection } from "@/components/sections/StarlitSection";
import { SystemsNominal } from "@/components/sections/SystemsNominal";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <SunDust />
      <Navbar />
      <main>
        <Hero />
        <CinematicReveal />
        <ThirdSection />
        <BouquetSection />
        <StarlitSection />
        <SystemsNominal />
      </main>
      <Footer />
    </>
  );
}
