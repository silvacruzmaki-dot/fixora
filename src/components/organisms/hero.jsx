import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-24
        px-6
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-6xl
          items-center
          gap-12
          md:grid-cols-2
        "
      >
        {/* LEFT CONTENT */}
        <div>
          <p className="text-primary font-semibold">
            FIXORA
          </p>

          <h1
            className="
              mt-3
              text-4xl
              font-bold
              leading-tight
              md:text-5xl
            "
          >
            Tecnología moderna para hogares y empresas
          </h1>

          <p className="mt-5 text-muted leading-7">
            Optimización, soporte técnico y soluciones digitales
            para que tu equipo funcione al máximo rendimiento.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4">
            <button
              className="
                rounded-xl
                bg-primary
                px-6
                py-3
                font-medium
                text-white
                hover:opacity-90
              "
            >
              Solicitar diagnóstico
            </button>

            <button
              className="
                rounded-xl
                border
                border-border
                px-6
                py-3
                font-medium
                hover:bg-muted
              "
            >
              Ver servicios
            </button>
          </div>

          {/* MINI STATS */}
          <div
            className="
              mt-10
              grid
              grid-cols-2
              gap-4
              md:grid-cols-4
            "
          >
            <div>
              <p className="text-xl font-bold">500+</p>
              <p className="text-sm text-muted">Clientes</p>
            </div>

            <div>
              <p className="text-xl font-bold">300+</p>
              <p className="text-sm text-muted">Equipos</p>
            </div>

            <div>
              <p className="text-xl font-bold">98%</p>
              <p className="text-sm text-muted">Satisfacción</p>
            </div>

            <div>
              <p className="text-xl font-bold">24h</p>
              <p className="text-sm text-muted">Soporte</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div
            className="
              absolute
              -inset-8
              rounded-full
              bg-primary/10
              blur-3xl
            "
          />

          <Image
            src="/home/fixora-hero.webp"
            alt="FIXORA Hero"
            width={600}
            height={600}
            className="
              relative
              rounded-3xl
              object-cover
              shadow-2xl
            "
          />
        </div>
      </div>
    </section>
  );
}