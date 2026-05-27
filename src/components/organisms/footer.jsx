export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-border/40
        bg-background
        px-6
        py-10
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          justify-between
          gap-4
          md:flex-row
        "
      >
        <div>
          <h2
            className="
              text-xl
              font-black
              tracking-[0.25em]
              text-foreground
            "
          >
            FIX<span className="text-primary">ORA</span>
          </h2>

          <p className="mt-2 text-sm text-muted">
            Tecnología y soluciones premium.
          </p>
        </div>

        <p className="text-sm text-muted">
          © 2026 FIXORA. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}