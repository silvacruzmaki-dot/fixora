export default function EmpresaPage() {
  return (
    <main className="min-h-screen bg-background px-6 pt-32 text-foreground">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          FIXORA
        </p>

        <h1 className="text-5xl font-black tracking-tight">
          Empresa
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          Innovación, visión y compromiso tecnológico profesional.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Historia",
            "Misión",
            "Visión",
            "Valores",
          ].map((item) => (
            <div
              key={item}
              className="
                rounded-3xl
                border
                border-border
                bg-card
                p-8
                shadow-[var(--shadow)]
              "
            >
              <h2 className="text-2xl font-bold text-foreground">
                {item}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}