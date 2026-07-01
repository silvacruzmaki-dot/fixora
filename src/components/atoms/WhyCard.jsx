export default function WhyCard({
  title,
  description,
}) {
  return (
    <article
      className="
        rounded-[2rem]
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
          font-black
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