import Link from "next/link";

export default function HomeCTASection() {
  return (
    <section className="mt-32 pb-24">
      <div
        className="
          relative
          overflow-hidden
          rounded-[3rem]
          border
          border-border
          bg-card
          p-12
          text-center
          shadow-[var(--shadow)]
        "
      >
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top,rgba(89,193,42,0.15),transparent_60%)]
          "
        />

        <div className="relative z-10">
          <h2
            className="
              text-4xl
              font-black
              md:text-6xl
            "
          >
            ¿Tu equipo está lento?
          </h2>

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
            Permite que FIXORA optimice,
            proteja y potencie tus equipos
            con servicios profesionales de
            software, hardware y soporte técnico.
          </p>

          <Link
            href="/contacto"
            className="
              mt-10
              inline-flex
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
            Solicitar Diagnóstico
          </Link>
        </div>
      </div>
    </section>
  );
}