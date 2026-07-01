import FeaturePill from "../atoms/FeaturePill";

const features = [
  "Soporte Remoto",
  "Atención Presencial",
  "Garantía Profesional",
];

export default function HeroFeatures() {
  return (
    <div
      className="
        mt-12
        flex
        flex-wrap
        justify-center
        gap-4
      "
    >
      {features.map((feature) => (
        <FeaturePill
          key={feature}
          text={feature}
        />
      ))}
    </div>
  );
}