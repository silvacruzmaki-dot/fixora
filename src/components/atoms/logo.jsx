import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="
        flex
        items-center
        gap-4
        transition-all
        duration-300
        hover:opacity-90
      "
    >
      {/* LOGO */}

      <div
  className="
    relative
    flex
    h-[50px]
    w-[50px]
    items-center
    justify-center
    overflow-hidden
    rounded-[1.1rem]
    border
    border-white/10
    bg-white
    p-2
    shadow-[0_8px_28px_rgba(0,0,0,0.10)]
    dark:border-white/5
    dark:bg-white
  "
>
        <Image
          src="/Logo.svg"
          alt="FIXORA Logo"
          fill
          priority
          sizes="60px"
          className="
            object-contain
          "
        />
      </div>

      {/* BRAND */}

      <h1
        className="
          text-[1.28rem]
          font-black
          tracking-[0.22em]
          text-foreground
          leading-none
        "
      >
        FIX
        <span className="text-primary">
          ORA
        </span>
      </h1>
    </Link>
  );
}