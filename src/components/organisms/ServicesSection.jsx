import SectionBadge from "../atoms/SectionBadge";
import ServicesGrid from "../molecules/ServicesGrid";

export default function ServicesSection() {
  return (
    <section className="mt-32">
      <div className="text-center">
        <SectionBadge>
          Servicios
        </SectionBadge>

        <h2
          className="
            mt-6
            text-4xl
            font-black
            md:text-5xl
          "
        >
          Soluciones diseñadas
          para cada necesidad
        </h2>

        <p
          className="
            mx-auto
            mt-6
            max-w-3xl
            text-lg
            text-muted
          "
        >
          Servicios tecnológicos
          especializados para hogares,
          estudiantes, profesionales
          y empresas.
        </p>
      </div>

      <div className="mt-16">
        <ServicesGrid />
      </div>
    </section>
  );
}