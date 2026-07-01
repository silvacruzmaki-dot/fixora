import ContactInput from "../atoms/ContactInput";

export default function ContactForm() {
  return (
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
        Envíanos un mensaje
      </h3>

      <p
        className="
          mt-3
          text-muted
        "
      >
        Cuéntanos qué necesitas y nos
        pondremos en contacto contigo.
      </p>

      <form
        className="
          mt-8
          space-y-5
        "
      >
        <ContactInput
          label="Nombre"
          placeholder="Tu nombre"
        />

        <ContactInput
          label="Correo electrónico"
          placeholder="correo@ejemplo.com"
          type="email"
        />

        <ContactInput
          label="Teléfono"
          placeholder="+51 999 999 999"
        />

        <div>
          <label
            className="
              mb-2
              block
              text-sm
              font-semibold
            "
          >
            Mensaje
          </label>

          <textarea
            placeholder="Describe tu proyecto o consulta..."
            className="
              min-h-[160px]
              w-full
              rounded-2xl
              border
              border-border
              bg-background
              px-5
              py-4
              outline-none
              transition-all
              duration-300
              focus:border-primary
            "
          />
        </div>

        <button
          type="submit"
          className="
            w-full
            rounded-2xl
            bg-primary
            py-4
            font-bold
            text-black
            transition-all
            duration-300
            hover:scale-[1.02]
          "
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
}