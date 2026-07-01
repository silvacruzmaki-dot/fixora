import SolutionsHero from "@/components/organisms/SolutionsHero";
import ServicesSection from "@/components/organisms/ServicesSection";
import BenefitsSection from "@/components/organisms/BenefitsSection";
import ProcessSection from "@/components/organisms/ProcessSection";
import StatisticsSection from "@/components/organisms/StatisticsSection";
import CoverageSection from "@/components/organisms/CoverageSection";
import TechnologiesSection from "@/components/organisms/TechnologiesSection";
import SolutionsCTA from "@/components/organisms/SolutionsCTA";

export default function SolucionesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <SolutionsHero />

        <ServicesSection />

        <BenefitsSection />

        <ProcessSection />

        <StatisticsSection />

        <CoverageSection />

        <TechnologiesSection />

        <SolutionsCTA />
      </div>
    </main>
  );
}
