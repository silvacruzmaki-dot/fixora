export default function BenefitCard({
  title,
}) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-border
        bg-card
        p-8
      "
    >
      <h3
        className="
          text-xl
          font-bold
        "
      >
        {title}
      </h3>
    </div>
  );
}