import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SentinelAdvantage } from "@/components/sections/SentinelAdvantage";
import { Solutions } from "@/components/sections/Solutions";
import { TechStack } from "@/components/sections/TechStack";
import { ClinicalLogic } from "@/components/sections/ClinicalLogic";
import { ScaleSection } from "@/components/sections/ScaleSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-phrelis-charcoal text-white selection:bg-phrelis-blue/30 selection:text-white overflow-hidden">
      <Header />

      <Hero />

      <SentinelAdvantage />

      <Solutions />
      <ClinicalLogic />
      <ScaleSection />
      <TechStack />

      <Footer />
    </main>
  );
}
