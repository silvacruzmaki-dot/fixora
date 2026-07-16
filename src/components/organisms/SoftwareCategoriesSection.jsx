import SectionBadge from "../atoms/SectionBadge";
import SoftwareCategoryCard from "../molecules/SoftwareCategoryCard";

const categories = [
  {
    iconName: "monitor",
    title: "Sistemas operativos",
    description:
      "Software base para equipos de escritorio y laptops, instalación y configuración inicial.",
  },
  {
    iconName: "file",
    title: "Ofimática",
    description:
      "Programas para documentos, hojas de cálculo, presentaciones y trabajo administrativo.",
  },
  {
    iconName: "shield",
    title: "Antivirus y seguridad",
    description:
      "Soluciones para proteger equipos contra virus, amenazas, archivos maliciosos y riesgos digitales.",
  },
  {
    iconName: "pen",
    title: "Diseño gráfico",
    description:
      "Herramientas para edición visual, diseño de piezas gráficas, branding y contenido digital.",
  },
  {
    iconName: "edit",
    title: "Edición multimedia",
    description:
      "Programas para edición de imágenes, audio, video y contenido para redes sociales.",
  },
  {
    iconName: "cpu",
    title: "Arquitectura e ingeniería",
    description:
      "Software técnico para diseño, planos, modelado, cálculo y trabajos profesionales.",
  },
  {
    iconName: "book",
    title: "Software educativo",
    description:
      "Programas y herramientas digitales para estudiantes, docentes y aprendizaje virtual.",
  },
  {
    iconName: "settings",
    title: "Utilitarios",
    description:
      "Herramientas para mantenimiento, compresión, recuperación, limpieza y optimización del sistema.",
  },
  {
    iconName: "briefcase",
    title: "Software empresarial",
    description:
      "Soluciones digitales para gestión, administración, productividad y trabajo en equipo.",
  },
  {
    iconName: "database",
    title: "Bases de datos",
    description:
      "Herramientas para gestión de información, almacenamiento y administración de datos.",
  },
  {
    iconName: "grid",
    title: "Otros programas",
    description:
      "También contamos con otros programas y soluciones digitales sujetos a disponibilidad.",
  },
];

export default function SoftwareCategoriesSection() {
  return (
    <section className="mt-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <SectionBadge>
            Categorías
          </SectionBadge>

          <h2 className="mt-6 text-4xl font-black text-foreground md:text-5xl">
            Programas y soluciones digitales
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted">
            Explora nuestras categorías principales de software para trabajo,
            estudio, seguridad, diseño, productividad y uso profesional.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <SoftwareCategoryCard
              key={category.title}
              iconName={category.iconName}
              title={category.title}
              description={category.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}