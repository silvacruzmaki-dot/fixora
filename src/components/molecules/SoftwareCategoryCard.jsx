"use client";

import {
  FiArrowRight,
  FiBookOpen,
  FiBriefcase,
  FiCpu,
  FiDatabase,
  FiEdit3,
  FiFileText,
  FiGrid,
  FiMonitor,
  FiPenTool,
  FiSettings,
  FiShield,
} from "react-icons/fi";

const icons = {
  monitor: FiMonitor,
  file: FiFileText,
  shield: FiShield,
  pen: FiPenTool,
  edit: FiEdit3,
  cpu: FiCpu,
  book: FiBookOpen,
  settings: FiSettings,
  briefcase: FiBriefcase,
  database: FiDatabase,
  grid: FiGrid,
};

export default function SoftwareCategoryCard({
  iconName = "monitor",
  title,
  description,
  targetId = "catalogo-software",
  buttonLabel = "Ver programas",
}) {
  const Icon = icons[iconName] || FiMonitor;

  const handleScroll = () => {
    const section = document.getElementById(targetId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <article className="group flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow)] transition duration-300 hover:-translate-y-2 hover:border-primary">
      <div>
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
          <Icon className="text-3xl" />
        </div>

        <h3 className="mt-8 text-2xl font-black text-foreground">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-muted">
          {description}
        </p>
      </div>

      <button
        type="button"
        onClick={handleScroll}
        className="mt-8 inline-flex items-center gap-2 text-left font-bold text-primary transition hover:text-primary-hover"
      >
        {buttonLabel}
        <FiArrowRight className="transition group-hover:translate-x-1" />
      </button>
    </article>
  );
}