import SectionBadge from "../atoms/SectionBadge";

const tech = [
  "Windows",
  "Microsoft Office",
  "Adobe",
  "Intel",
  "AMD",
  "SSD",
  "NVIDIA",
  "Cloud",
];

export default function TechnologiesSection() {
  return (
    <section className="mt-32">
      <div className="text-center">
        <SectionBadge>
          Tecnologías
        </SectionBadge>

        <h2
          className="
            mt-6
            text-4xl
            font-black
            md:text-5xl
          "
        >
          Herramientas y plataformas
          que utilizamos
        </h2>
      </div>

      <div
        className="
          mt-16
          flex
          flex-wrap
          justify-center
          gap-4
        "
      >
        {tech.map((item) => (
          <div
            key={item}
            className="
              rounded-full
              border
              border-border
              bg-card
              px-6
              py-3
              font-medium
            "
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}