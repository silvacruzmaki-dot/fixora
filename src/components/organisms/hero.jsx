export default function Hero() {
  return (
    <section
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        px-6
        pt-24
      "
    >
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(76,175,80,0.18),transparent_45%)]
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
          Smart Technology Solutions
        </p>

        <h1
          className="
            text-5xl
            font-black
            leading-tight
            tracking-tight
            text-foreground
            md:text-7xl
          "
        >
          Tecnología moderna
          <br />
          para personas y negocios
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
          FIXORA ofrece mantenimiento profesional,
          instalación de software, diseño gráfico y
          soluciones tecnológicas premium para potenciar
          tu productividad.
        </p>

        <div
          className="
            mt-12
            flex
            flex-wrap
            items-center
            justify-center
            gap-4
          "
        >
          <button
            className="
              rounded-2xl
              bg-primary
              px-8
              py-4
              text-sm
              font-bold
              text-black
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Explorar Servicios
          </button>

          <button
            className="
              rounded-2xl
              border
              border-border
              bg-card
              px-8
              py-4
              text-sm
              font-bold
              text-foreground
              transition-all
              duration-300
              hover:border-primary
            "
          >
            Ver Proyectos
          </button>
        </div>
      </div>
    </section>
  );
}