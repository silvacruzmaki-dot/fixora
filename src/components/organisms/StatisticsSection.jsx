import SectionBadge from "../atoms/SectionBadge";
import StatCard from "../atoms/StatCard";

export default function StatisticsSection() {
  return (
    <section className="mt-32">
      <div className="text-center">
        <SectionBadge>
          Estadísticas
        </SectionBadge>

        <h2
          className="
            mt-6
            text-4xl
            font-black
            md:text-5xl
          "
        >
          Resultados que respaldan
          nuestro trabajo
        </h2>
      </div>

      <div
        className="
          mt-16
          grid
          gap-6
          md:grid-cols-2
          xl:grid-cols-4
        "
      >
        <StatCard
          value="500+"
          label="Equipos atendidos"
        />

        <StatCard
          value="300+"
          label="Instalaciones realizadas"
        />

        <StatCard
          value="98%"
          label="Satisfacción del cliente"
        />

        <StatCard
          value="24H"
          label="Respuesta promedio"
        />
      </div>
    </section>
  );
}