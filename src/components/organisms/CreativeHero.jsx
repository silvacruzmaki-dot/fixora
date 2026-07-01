import Link from "next/link";

import CreativeBadge from "../atoms/CreativeBadge";

export default function CreativeHero() {
  return (
    <section
      className="
        relative
        flex
        min-h-[85vh]
        items-center
        justify-center
        overflow-hidden
        pt-32
      "
    >
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(89,193,42,0.18),transparent_55%)]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-5xl
          text-center
        "
      >
        <CreativeBadge>
          FIXORA CREATIVE
        </CreativeBadge>

        <h1
          className="
            mt-8
            text-5xl
            font-black
            leading-tight
            tracking-tight
            md:text-7xl
          "
        >
          Diseño profesional,
          recursos digitales
          y proyectos creativos
        </h1>

        <p
          className="
            mx-auto
            mt-8
            max-w-3xl
            text-lg
            leading-8
            text-muted
          "
        >
          Explora proyectos, recursos gratuitos,
          plantillas premium y trabajos desarrollados
          por FIXORA para emprendedores, negocios
          y marcas.
        </p>

        <div
          className="
            mt-12
            flex
            flex-wrap
            justify-center
            gap-4
          "
        >
          <Link
            href="#biblioteca"
            className="
              rounded-2xl
              bg-primary
              px-8
              py-4
              font-bold
              text-black
            "
          >
            Explorar Biblioteca
          </Link>

          <Link
            href="#proyectos"
            className="
              rounded-2xl
              border
              border-border
              bg-card
              px-8
              py-4
              font-bold
            "
          >
            Ver Proyectos
          </Link>
        </div>
      </div>
    </section>
  );
}