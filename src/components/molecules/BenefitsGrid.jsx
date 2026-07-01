import BenefitCard from "../atoms/BenefitCard";

const benefits = [
  "Mayor velocidad",
  "Mayor productividad",
  "Mayor estabilidad",
  "Mayor seguridad",
  "Mayor vida útil",
  "Soporte especializado",
];

export default function BenefitsGrid() {
  return (
    <div
      className="
        grid
        gap-6
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {benefits.map((benefit) => (
        <BenefitCard
          key={benefit}
          title={benefit}
        />
      ))}
    </div>
  );
}