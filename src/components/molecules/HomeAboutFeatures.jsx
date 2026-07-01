import {
  HiOutlineShieldCheck,
  HiOutlineBolt,
  HiOutlineWrenchScrewdriver,
  HiOutlineSparkles,
} from "react-icons/hi2";

import HomeAboutFeatureCard from "../atoms/HomeAboutFeatureCard";

const features = [
  {
    icon: HiOutlineShieldCheck,
    title: "Seguridad",
    description:
      "Protección y estabilidad para tus equipos y sistemas.",
  },

  {
    icon: HiOutlineBolt,
    title: "Rendimiento",
    description:
      "Optimización avanzada para obtener la máxima velocidad.",
  },

  {
    icon: HiOutlineWrenchScrewdriver,
    title: "Soporte Profesional",
    description:
      "Asistencia técnica especializada para hogares y negocios.",
  },

  {
    icon: HiOutlineSparkles,
    title: "Innovación",
    description:
      "Soluciones modernas adaptadas a las nuevas tecnologías.",
  },
];

export default function HomeAboutFeatures() {
  return (
    <div
      className="
        mt-10
        grid
        gap-5
        md:grid-cols-2
      "
    >
      {features.map((feature) => (
        <HomeAboutFeatureCard
          key={feature.title}
          {...feature}
        />
      ))}
    </div>
  );
}