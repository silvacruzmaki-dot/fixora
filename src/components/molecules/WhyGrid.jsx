import WhyCard from "../atoms/WhyCard";

const reasons = [
  {
    title: "Diagnóstico Preciso",
    description:
      "Identificamos problemas reales y proponemos soluciones eficientes para cada equipo."
  },

  {
    title: "Atención Profesional",
    description:
      "Experiencia en mantenimiento, software, hardware y optimización avanzada."
  },

  {
    title: "Resultados Garantizados",
    description:
      "Mayor velocidad, estabilidad y productividad para tus equipos."
  },
];

export default function WhyGrid() {
  return (
    <div
      className="
        grid
        gap-6
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {reasons.map((item) => (
        <WhyCard
          key={item.title}
          {...item}
        />
      ))}
    </div>
  );
}