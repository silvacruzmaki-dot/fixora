export default function CreativeComment({
  author,
  comment,
  date,
}) {
  return (
    <article
      className="
        rounded-2xl
        border
        border-border
        bg-background
        p-4
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
        "
      >
        <h4
          className="
            font-semibold
          "
        >
          {author}
        </h4>

        <span
          className="
            text-xs
            text-muted
          "
        >
          {date}
        </span>
      </div>

      <p
        className="
          mt-3
          text-sm
          leading-6
          text-muted
        "
      >
        {comment}
      </p>
    </article>
  );
}