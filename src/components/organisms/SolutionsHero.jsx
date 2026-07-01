import Link from "next/link";

export default function SolutionsHero() {
  return (
    <section
      className="
        relative
        flex
        min-h-[90vh]
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
        <p
          className="
            mb-6
            text-sm
            font-bold
            uppercase
            tracking-[0.35em]
            text-primary
          "
        >
          SOLUCIONES TECNOLÓGICAS
        </p>

        <h1
          className="
            text-5xl
            font-black
            leading-tight
            tracking-tight
            md:text-7xl
          "
        >
          Servicios profesionales
          <br />
          para potenciar
          tus equipos
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
          En FIXORA ofrecemos mantenimiento,
          optimización, instalación de software,
          reparación y soporte especializado para
          hogares, profesionales y negocios.
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
            href="/contacto"
            className="
              rounded-2xl
              bg-primary
              px-8
              py-4
              font-bold
              text-black
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Solicitar Soporte
          </Link>

          <Link
            href="/proyectos"
            className="
              rounded-2xl
              border
              border-border
              bg-card
              px-8
              py-4
              font-bold
              transition-all
              duration-300
              hover:border-primary
            "
          >
            Ver Proyectos
          </Link>
        </div>
      </div>
    </section>
  );
}