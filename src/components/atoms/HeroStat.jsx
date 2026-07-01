export default function HeroStat({
  value,
  label,
}) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-border
        bg-card
        px-8
        py-6
        text-center
        shadow-[var(--shadow)]
      "
    >
      <h3
        className="
          text-4xl
          font-black
          text-primary
        "
      >
        {value}
      </h3>

      <p
        className="
          mt-2
          text-sm
          text-muted
        "
      >
        {label}
      </p>
    </div>
  );
}