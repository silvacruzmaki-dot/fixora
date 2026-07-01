import SectionBadge from "../atoms/SectionBadge";

const brands = [
  "Windows",
  "Microsoft",
  "Adobe",
  "Intel",
  "AMD",
  "NVIDIA",
];

export default function TrustedBrandsSection() {
  return (
    <section className="mt-32">
      <div className="text-center">
        <SectionBadge>
          Tecnologías Líderes
        </SectionBadge>

        <h2
          className="
            mt-6
            text-4xl
            font-black
            md:text-5xl
          "
        >
          Trabajamos con las mejores
          plataformas del mercado
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
          Utilizamos herramientas y tecnologías
          reconocidas mundialmente para ofrecer
          resultados confiables y profesionales.
        </p>
      </div>

      <div
        className="
          mt-16
          flex
          flex-wrap
          justify-center
          gap-4
        "
      >
        {brands.map((brand) => (
          <div
            key={brand}
            className="
              rounded-full
              border
              border-border
              bg-card
              px-8
              py-4
              font-semibold
              shadow-[var(--shadow)]
              transition-all
              duration-300
              hover:border-primary
              hover:-translate-y-1
            "
          >
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}