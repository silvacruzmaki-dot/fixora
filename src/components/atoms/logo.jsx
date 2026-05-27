import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <div
        className="
          h-3
          w-3
          rounded-full
          bg-primary
          shadow-[0_0_20px_rgba(76,175,80,0.6)]
        "
      />

      <h1
        className="
          text-2xl
          font-black
          tracking-[0.25em]
          text-foreground
        "
      >
        FIX<span className="text-primary">ORA</span>
      </h1>
    </Link>
  );
}