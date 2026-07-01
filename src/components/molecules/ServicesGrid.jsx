import ServiceCard from "../atoms/ServiceCard";

const services = [
  {
    title: "Mantenimiento Profesional",
    description:
      "Limpieza técnica especializada, optimización térmica y revisión integral."
  },

  {
    title: "Diagnóstico Técnico",
    description:
      "Identificación precisa de fallas de hardware y software."
  },

  {
    title: "Instalación de Software",
    description:
      "Windows, Office, Adobe y herramientas profesionales."
  },

  {
    title: "Optimización",
    description:
      "Mejora del rendimiento y velocidad del sistema."
  },

  {
    title: "Actualización de Hardware",
    description:
      "SSD, RAM y componentes de alto rendimiento."
  },

  {
    title: "Recuperación de Sistemas",
    description:
      "Restauración de sistemas operativos y configuraciones."
  },
];

export default function ServicesGrid() {
  return (
    <div
      className="
        grid
        gap-6
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {services.map((service) => (
        <ServiceCard
          key={service.title}
          {...service}
        />
      ))}
    </div>
  );
}