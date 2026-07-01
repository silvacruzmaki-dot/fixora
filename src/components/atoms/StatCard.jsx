export default function StatCard({
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
        p-8
        text-center
      "
    >
      <h3
        className="
          text-5xl
          font-black
          text-primary
        "
      >
        {value}
      </h3>

      <p
        className="
          mt-3
          text-muted
        "
      >
        {label}
      </p>
    </div>
  );
}