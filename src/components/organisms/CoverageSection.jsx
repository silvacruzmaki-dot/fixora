import SectionBadge from "../atoms/SectionBadge";

export default function CoverageSection() {
  return (
    <section className="mt-32">
      <div
        className="
          rounded-[3rem]
          border
          border-border
          bg-card
          p-10
          shadow-[var(--shadow)]
        "
      >
        <SectionBadge>
          Cobertura
        </SectionBadge>

        <h2
          className="
            mt-6
            text-4xl
            font-black
          "
        >
          Atención presencial
          y remota
        </h2>

        <p
          className="
            mt-6
            max-w-3xl
            text-lg
            leading-8
            text-muted
          "
        >
          Brindamos soporte técnico,
          mantenimiento, instalación de
          software y optimización de equipos
          para clientes particulares,
          profesionales y negocios.
        </p>

        <div
          className="
            mt-10
            grid
            gap-4
            md:grid-cols-2
          "
        >
          <div className="rounded-2xl border border-border p-6">
            Celendín
          </div>

          <div className="rounded-2xl border border-border p-6">
            Soporte Remoto
          </div>

          <div className="rounded-2xl border border-border p-6">
            Hogares
          </div>

          <div className="rounded-2xl border border-border p-6">
            Negocios
          </div>
        </div>
      </div>
    </section>
  );
}