import ProcessCard from "../atoms/ProcessCard";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Analizamos el estado del equipo y detectamos posibles problemas."
  },

  {
    number: "02",
    title: "Evaluación",
    description:
      "Determinamos la solución más eficiente para cada caso."
  },

  {
    number: "03",
    title: "Intervención",
    description:
      "Aplicamos mantenimiento, reparación u optimización."
  },

  {
    number: "04",
    title: "Entrega",
    description:
      "Validamos resultados y entregamos el equipo listo para trabajar."
  },
];

export default function ProcessGrid() {
  return (
    <div
      className="
        grid
        gap-6
        md:grid-cols-2
        xl:grid-cols-4
      "
    >
      {steps.map((step) => (
        <ProcessCard
          key={step.number}
          {...step}
        />
      ))}
    </div>
  );
}