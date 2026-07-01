import CreativeBadge from "../atoms/CreativeBadge";

import CreativeCategoriesGrid from "../molecules/CreativeCategoriesGrid";

export default function CreativeCategoriesSection() {
  return (
    <section className="mt-24">
      <div className="text-center">
        <CreativeBadge>
          Categorías
        </CreativeBadge>

        <h2
          className="
            mt-6
            text-4xl
            font-black
            md:text-5xl
          "
        >
          Todo organizado
          para encontrar
          lo que necesitas
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
          Recursos digitales,
          branding, flyers,
          mockups y contenido
          visual profesional.
        </p>
      </div>

      <div className="mt-16">
        <CreativeCategoriesGrid />
      </div>
    </section>
  );
}