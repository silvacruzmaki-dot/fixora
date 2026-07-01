export default function CreativeBadge({
  children,
}) {
  return (
    <span
      className="
        inline-flex
        rounded-full
        border
        border-primary/20
        bg-primary/10
        px-5
        py-2
        text-sm
        font-bold
        uppercase
        tracking-wider
        text-primary
      "
    >
      {children}
    </span>
  );
}