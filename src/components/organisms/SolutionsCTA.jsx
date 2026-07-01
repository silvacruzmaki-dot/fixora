import Link from "next/link";

export default function SolutionsCTA() {
  return (
    <section className="mt-32 pb-24">
      <div
        className="
          rounded-[3rem]
          border
          border-border
          bg-card
          p-12
          text-center
          shadow-[var(--shadow)]
        "
      >
        <h2
          className="
            text-4xl
            font-black
            md:text-6xl
          "
        >
          ¿Necesitas una solución
          tecnológica profesional?
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
          con servicios especializados.
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
    </section>
  );
}