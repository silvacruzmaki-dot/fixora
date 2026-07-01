"use client";

import { useEffect } from "react";

import {
  HiOutlineHeart,
  HiOutlineEye,
  HiOutlineShare,
  HiOutlineCalendarDays,
  HiOutlineXMark,
} from "react-icons/hi2";

import CreativeDownloadActions from "../molecules/CreativeDownloadActions";
import CreativeComment from "../atoms/CreativeComment";

export default function CreativeModal({
  project,
  open,
  onClose,
}) {
  useEffect(() => {
    const navbar =
      document.getElementById("main-navbar");

    if (open) {
      document.body.style.overflow =
        "hidden";

      if (navbar) {
        navbar.style.display = "none";
      }
    }

    return () => {
      document.body.style.overflow =
        "auto";

      if (navbar) {
        navbar.style.display = "block";
      }
    };
  }, [open]);

  if (!open || !project) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-[999]
        bg-black/80
        backdrop-blur-md
        overflow-y-auto
      "
    >
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          p-4
          md:p-8
        "
      >
        <div
          className="
            relative
            w-full
            max-w-7xl
            overflow-hidden
            border
            border-border
            bg-card
            shadow-[var(--shadow)]
          "
        >
          {/* BOTÓN CERRAR */}

          <button
            onClick={onClose}
            className="
              absolute
              top-5
              right-5
              z-50
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-card/95
              border
              border-border
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-primary
              hover:text-primary
            "
          >
            <HiOutlineXMark size={22} />
          </button>

          {/* CONTENIDO */}

          <div
            className="
              grid
              lg:grid-cols-[1.35fr_0.65fr]
            "
          >
            {/* IMAGEN */}

            <div
              className="
                flex
                items-center
                justify-center
                bg-background
                min-h-[700px]
                p-8
              "
            >
              <img
                src={project.image}
                alt={project.title}
                draggable={false}
                className="
                  max-h-[85vh]
                  max-w-full
                  h-auto
                  w-auto
                  object-contain
                  select-none
                "
              />
            </div>

            {/* PANEL DERECHO */}

            <div
              className="
                border-l
                border-border
                p-8
                lg:p-10
              "
            >
              <h2
                className="
                  text-3xl
                  font-black
                  md:text-4xl
                "
              >
                {project.title}
              </h2>

              <p
                className="
                  mt-6
                  leading-8
                  text-muted
                "
              >
                {project.description}
              </p>

              {/* INFO */}

              <div
                className="
                  mt-8
                  flex
                  flex-wrap
                  gap-5
                  text-sm
                  text-muted
                "
              >
                <span
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <HiOutlineCalendarDays />
                  {project.date}
                </span>

                <span
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <HiOutlineHeart />
                  {project.likes}
                </span>

                <span
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <HiOutlineEye />
                  {project.views}
                </span>

                <button
                  className="
                    flex
                    items-center
                    gap-2
                    transition-all
                    hover:text-primary
                  "
                >
                  <HiOutlineShare />
                  Compartir
                </button>
              </div>

              {/* ACCIONES */}

              <div className="mt-10">
                <CreativeDownloadActions
                  type={project.type}
                  price={project.price}
                />
              </div>

              {/* COMENTARIOS */}

              <div className="mt-14">
                <h3
                  className="
                    text-xl
                    font-bold
                  "
                >
                  Comentarios
                </h3>

                <textarea
                  placeholder="Escribe un comentario..."
                  className="
                    mt-5
                    min-h-[120px]
                    w-full
                    rounded-2xl
                    border
                    border-border
                    bg-background
                    p-4
                    outline-none
                  "
                />

                <button
                  className="
                    mt-4
                    rounded-2xl
                    bg-primary
                    px-6
                    py-3
                    font-bold
                    text-black
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                  "
                >
                  Publicar Comentario
                </button>

                <div
                  className="
                    mt-8
                    space-y-4
                  "
                >
                  <CreativeComment
                    author="Carlos"
                    date="Hace 2 días"
                    comment="Excelente diseño, muy profesional."
                  />

                  <CreativeComment
                    author="María"
                    date="Hace 1 semana"
                    comment="Me gustó mucho la composición visual."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}