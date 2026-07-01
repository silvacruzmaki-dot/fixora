import SectionBadge from "../atoms/SectionBadge";

import ContactForm from "../molecules/ContactForm";
import SocialLinksGrid from "../molecules/SocialLinksGrid";

export default function ContactSection() {
  return (
    <section className="mt-32 pb-24">
      <div className="text-center">
        <SectionBadge>
          Contacto
        </SectionBadge>

        <h2
          className="
            mt-6
            text-4xl
            font-black
            md:text-5xl
          "
        >
          Hablemos de tu proyecto
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
          Ponte en contacto con FIXORA
          mediante nuestro formulario o
          cualquiera de nuestras redes
          oficiales.
        </p>
      </div>

      <div
        className="
          mt-16
          grid
          gap-8
          lg:grid-cols-[1.2fr_0.8fr]
        "
      >
        <ContactForm />

        <div
          className="
            rounded-[2rem]
            border
            border-border
            bg-card
            p-8
            shadow-[var(--shadow)]
          "
        >
          <h3
            className="
              text-2xl
              font-black
            "
          >
            Redes y contacto directo
          </h3>

          <p
            className="
              mt-3
              text-muted
            "
          >
            También puedes encontrarnos
            en nuestras plataformas y
            canales oficiales.
          </p>

          <div className="mt-8">
            <SocialLinksGrid />
          </div>
        </div>
      </div>
    </section>
  );
}