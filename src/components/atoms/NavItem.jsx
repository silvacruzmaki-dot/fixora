import Link from "next/link";

export default function NavItem({ href, label }) {
  return (
    <Link
      href={href}
      className="
        relative
        text-sm
        font-semibold
        tracking-wide
        text-muted
        transition-all
        duration-300
        hover:text-primary
      "
    >
      {label}
    </Link>
  );
}