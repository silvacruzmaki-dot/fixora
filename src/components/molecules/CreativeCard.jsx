"use client";

import {
  HiOutlineArrowUpRight,
} from "react-icons/hi2";

import CreativeBadge from "../atoms/CreativeBadge";
import CreativePriceTag from "../atoms/CreativePriceTag";
import CreativeStats from "./CreativeStats";

export default function CreativeCard({
  project,
  onOpen,
}) {
  if (!project) {
    return null;
  }

  return (
    <article
      onClick={() => onOpen?.(project)}
      className="
        group
        cursor-pointer
        overflow-hidden
        rounded-[2rem]
        border
        border-border
        bg-card
        shadow-[var(--shadow)]
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-primary/30
      "
    >
      {/* IMAGEN */}

      <div
        className="
          relative
          aspect-[4/3]
          overflow-hidden
        "
      >
        <img
          src={project.image}
          alt={project.title}
          className="
            h-full
            w-full
            object-cover
            transition-all
            duration-500
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/50
            via-transparent
            to-transparent
          "
        />

        {/* CATEGORÍA */}

        <div
          className="
            absolute
            left-4
            top-4
          "
        >
          <CreativeBadge>
            {project.category}
          </CreativeBadge>
        </div>

        {/* PRECIO */}

        <div
          className="
            absolute
            right-4
            top-4
          "
        >
          <CreativePriceTag
            type={project.type}
            price={project.price}
          />
        </div>
      </div>

      {/* CONTENIDO */}

      <div className="p-6">
        <h3
          className="
            text-xl
            font-bold
          "
        >
          {project.title}
        </h3>

        <p
          className="
            mt-3
            line-clamp-2
            text-sm
            leading-6
            text-muted
          "
        >
          {project.description}
        </p>

        <div
          className="
            mt-6
            flex
            items-center
            justify-between
          "
        >
          <CreativeStats
            likes={project.likes}
            views={project.views}
          />

          <HiOutlineArrowUpRight
            size={22}
            className="
              transition-all
              duration-300
              group-hover:-translate-y-1
              group-hover:translate-x-1
              group-hover:text-primary
            "
          />
        </div>
      </div>
    </article>
  );
}