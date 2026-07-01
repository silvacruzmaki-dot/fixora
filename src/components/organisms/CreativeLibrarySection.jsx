"use client";

import {
  useEffect,
  useState,
} from "react";

import CreativeBadge from "../atoms/CreativeBadge";
import CreativeCard from "../molecules/CreativeCard";
import CreativeModal from "./CreativeModal";

const projects = [
  {
    title: "Kit Instagram Empresarial",
    category: "Redes Sociales",
    type: "free",
    likes: 120,
    views: 2100,
    image: "/creative/project-1.jpeg",
    date: "10 Enero 2026",
    description:
      "Pack profesional para publicaciones empresariales listas para Instagram.",
  },

  {
    title: "Branding Gym Evolution",
    category: "Branding",
    type: "showcase",
    likes: 185,
    views: 3400,
    image: "/creative/project-2.jpg",
    date: "15 Enero 2026",
    description:
      "Proyecto completo de identidad visual para gimnasio profesional.",
  },

  {
    title: "Pack Mockups Premium",
    category: "Mockups",
    type: "premium",
    price: 25,
    likes: 95,
    views: 1800,
    image: "/creative/project-3.jpg",
    date: "18 Enero 2026",
    description:
      "Colección premium de mockups para presentaciones comerciales.",
  },

  {
    title: "Flyer Día de la Madre",
    category: "Flyers",
    type: "free",
    likes: 88,
    views: 1300,
    image: "/creative/project-4.jpg",
    date: "20 Enero 2026",
    description:
      "Diseño publicitario listo para campañas promocionales.",
  },

  {
    title: "Identidad Corporativa",
    category: "Branding",
    type: "premium",
    price: 40,
    likes: 210,
    views: 5200,
    image: "/creative/project-5.jpg",
    date: "22 Enero 2026",
    description:
      "Manual completo de identidad corporativa profesional.",
  },

  {
    title: "Logo Empresarial",
    category: "Logos",
    type: "showcase",
    likes: 160,
    views: 2600,
    image: "/creative/project-6.jpg",
    date: "25 Enero 2026",
    description:
      "Diseño de logotipo moderno para marcas y empresas.",
  },
];

export default function CreativeLibrarySection() {
  const [
    selectedProject,
    setSelectedProject,
  ] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add(
        "creative-modal-open"
      );

      document.body.style.overflow =
        "hidden";
    } else {
      document.body.classList.remove(
        "creative-modal-open"
      );

      document.body.style.overflow =
        "auto";
    }

    return () => {
      document.body.classList.remove(
        "creative-modal-open"
      );

      document.body.style.overflow =
        "auto";
    };
  }, [selectedProject]);

  const handleOpenModal = (
    project
  ) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section
        id="biblioteca"
        className="mt-32"
      >
        <div className="text-center">
          <CreativeBadge>
            Biblioteca Creativa
          </CreativeBadge>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              md:text-5xl
            "
          >
            Recursos y proyectos
            disponibles
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
            Descarga recursos,
            explora proyectos y
            descubre material creativo
            desarrollado por FIXORA.
          </p>
        </div>

        <div
          className="
            mt-16
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {projects.map(
            (project) => (
              <CreativeCard
                key={project.title}
                project={project}
                onOpen={
                  handleOpenModal
                }
              />
            )
          )}
        </div>
      </section>

      <CreativeModal
        open={Boolean(
          selectedProject
        )}
        project={selectedProject}
        onClose={
          handleCloseModal
        }
      />
    </>
  );
}