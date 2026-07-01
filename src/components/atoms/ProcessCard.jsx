export default function ProcessCard({
  number,
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
      "
    >
      <span
        className="
          text-5xl
          font-black
          text-primary
        "
      >
        {number}
      </span>

      <h3
        className="
          mt-6
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