import HeroStat from "../atoms/HeroStat";

export default function HeroStats() {
  return (
    <div
      className="
        mt-16
        grid
        gap-4
        md:grid-cols-3
      "
    >
      <HeroStat
        value="500+"
        label="Equipos atendidos"
      />

      <HeroStat
        value="300+"
        label="Instalaciones realizadas"
      />

      <HeroStat
        value="98%"
        label="Satisfacción del cliente"
      />
    </div>
  );
}