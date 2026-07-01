export default function CreativePriceTag({
  type,
  price,
}) {
  if (type === "free") {
    return (
      <span
        className="
          rounded-full
          bg-primary
          px-4
          py-2
          text-xs
          font-bold
          text-black
        "
      >
        GRATIS
      </span>
    );
  }

  if (type === "premium") {
    return (
      <span
        className="
          rounded-full
          bg-foreground
          px-4
          py-2
          text-xs
          font-bold
          text-background
        "
      >
        S/ {price}
      </span>
    );
  }

  return (
    <span
      className="
        rounded-full
        border
        border-border
        bg-card
        px-4
        py-2
        text-xs
        font-bold
      "
    >
      CLIENTE
    </span>
  );
}