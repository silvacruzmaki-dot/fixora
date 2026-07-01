import SectionBadge from "../atoms/SectionBadge";
import WhyGrid from "../molecules/WhyGrid";

export default function WhyFixoraSection() {
  return (
    <section className="mt-32">
      <div className="text-center">
        <SectionBadge>
          ¿Por qué FIXORA?
        </SectionBadge>

        <h2
          className="
            mt-6
            text-4xl
            font-black
            md:text-5xl
          "
        >
          Más que soporte técnico,
          una solución profesional
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
          Nuestro enfoque combina experiencia,
          tecnología y atención personalizada
          para ofrecer resultados reales.
        </p>
      </div>

      <div className="mt-16">
        <WhyGrid />
      </div>
    </section>
  );
}