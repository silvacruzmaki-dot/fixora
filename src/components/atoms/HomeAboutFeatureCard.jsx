export default function HomeAboutFeatureCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <article
      className="
        flex
        gap-4
        rounded-3xl
        border
        border-border
        bg-card
        p-5
        transition-all
        duration-300
        hover:border-primary
        hover:-translate-y-1
      "
    >
      <div
        className="
          flex
          h-14
          w-14
          shrink-0
          items-center
          justify-center
          rounded-2xl
          bg-primary/10
          text-primary
        "
      >
        <Icon size={28} />
      </div>

      <div>
        <h3
          className="
            font-bold
            text-lg
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2
            text-sm
            leading-6
            text-muted
          "
        >
          {description}
        </p>
      </div>
    </article>
  );
}