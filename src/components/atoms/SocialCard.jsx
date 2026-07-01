export default function SocialCard({
  icon: Icon,
  title,
  description,
  href,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        flex
        items-center
        gap-5
        rounded-[1.8rem]
        border
        border-border
        bg-card
        p-6
        shadow-[var(--shadow)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary
      "
    >
      <div
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-primary/10
          text-primary
          transition-all
          duration-300
          group-hover:bg-primary
          group-hover:text-black
        "
      >
        <Icon size={24} />
      </div>

      <div>
        <h3
          className="
            font-bold
            text-foreground
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-1
            text-sm
            text-muted
          "
        >
          {description}
        </p>
      </div>
    </a>
  );
}