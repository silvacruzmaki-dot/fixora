export default function ServiceCard({
  title,
  description,
}) {
  return (
    <article
      className="
        rounded-3xl
        border
        border-border
        bg-card
        p-8
        shadow-[var(--shadow)]
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-primary
      "
    >
      <h3
        className="
          text-2xl
          font-bold
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-4
          leading-7
          text-muted
        "
      >
        {description}
      </p>
    </article>
  );
}