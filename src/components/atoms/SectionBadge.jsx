export default function SectionBadge({
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
        px-4
        py-2
        text-xs
        font-bold
        uppercase
        tracking-[0.25em]
        text-primary
      "
    >
      {children}
    </span>
  );
}