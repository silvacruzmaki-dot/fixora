import SectionBadge from "../atoms/SectionBadge";
import ProcessGrid from "../molecules/ProcessGrid";

export default function ProcessSection() {
  return (
    <section className="mt-32">
      <div className="text-center">
        <SectionBadge>
          Proceso FIXORA
        </SectionBadge>

        <h2
          className="
            mt-6
            text-4xl
            font-black
            md:text-5xl
          "
        >
          Un proceso claro
          y profesional
        </h2>
      </div>

      <div className="mt-16">
        <ProcessGrid />
      </div>
    </section>
  );
}