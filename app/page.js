import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import LegalSolutions from "@/components/home/LegalSolutions";
import OurProcess from "@/components/home/OurProcess";
import OurMission from "@/components/home/OurMission";
import Resources from "@/components/home/Resources";
import BeginJourney from "@/components/home/BeginJourney";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="space-y-0">
      <Navbar />
      <HeroSection />
      <LegalSolutions />
      <OurProcess />
      <OurMission/>
      <Resources/>
      <BeginJourney/>
      <FAQ/>
      <Footer/>
    </main>
  );
}
