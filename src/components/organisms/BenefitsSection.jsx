import SectionBadge from "../atoms/SectionBadge";
import BenefitsGrid from "../molecules/BenefitsGrid";

export default function BenefitsSection() {
  return (
    <section className="mt-32">
      <div className="text-center">
        <SectionBadge>
          Beneficios
        </SectionBadge>

        <h2
          className="
            mt-6
            text-4xl
            font-black
            md:text-5xl
          "
        >
          Resultados que
          realmente importan
        </h2>
      </div>

      <div className="mt-16">
        <BenefitsGrid />
      </div>
    </section>
  );
}