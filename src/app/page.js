import Hero from "@/components/organisms/hero";

import TrustedBrandsSection from "@/components/organisms/TrustedBrandsSection";

import StatisticsSection from "@/components/organisms/StatisticsSection";

import ServicesSection from "@/components/organisms/ServicesSection";

import WhyFixoraSection from "@/components/organisms/WhyFixoraSection";

import BenefitsSection from "@/components/organisms/BenefitsSection";

import TechnologiesSection from "@/components/organisms/TechnologiesSection";

import HomeCTASection from "@/components/organisms/HomeCTASection";

export default function HomePage() {
  return (
    <main
      className="
        mx-auto
        max-w-7xl
        px-6
      "
    >
      <Hero />

      <TrustedBrandsSection />

      <StatisticsSection />

      <ServicesSection />

      <WhyFixoraSection />

      <BenefitsSection />

      <TechnologiesSection />

      <HomeCTASection />
    </main>
  );
}