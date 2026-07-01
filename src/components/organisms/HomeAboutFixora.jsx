import Image from "next/image";
import HomeAboutFeatures from "../molecules/HomeAboutFeatures";

export default function HomeAboutFixora() {
  return (
    <section
      className="
        relative
        py-20
        px-6
        bg-background
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
        {/* IMAGE SIDE */}
        <div className="relative">
          <div
            className="
              absolute
              -inset-6
              rounded-3xl
              bg-primary/10
              blur-2xl
            "
          />

          <Image
            src="/home/fixora-about.webp"
            alt="FIXORA tecnología"
            width={600}
            height={500}
            className="
              relative
              rounded-3xl
              object-cover
              shadow-xl
            "
          />
        </div>

        {/* CONTENT SIDE */}
        <div>
          <p className="text-primary font-semibold">
            Sobre FIXORA
          </p>

          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Tecnología, soporte y optimización profesional
          </h2>

          <p className="mt-4 text-muted leading-7">
            En FIXORA ayudamos a mejorar el rendimiento de equipos,
            resolver problemas técnicos y brindar soporte confiable
            para usuarios y empresas.
          </p>

          {/* FEATURES */}
          <HomeAboutFeatures />
        </div>
      </div>
    </section>
  );
}