export default function FeaturePill({
  text,
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-2
        rounded-full
        border
        border-border
        bg-card
        px-5
        py-3
        text-sm
        font-medium
        shadow-[var(--shadow)]
      "
    >
      <span
        className="
          text-primary
          font-bold
        "
      >
        ✓
      </span>

      {text}
    </div>
  );
}