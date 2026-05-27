import Logo from "../atoms/logo";
import Navigation from "../molecules/navigation";

export default function Navbar() {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        z-50
        w-full
        border-b
        border-border/50
        bg-background/80
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          h-20
          max-w-7xl
          items-center
          justify-between
          px-6
        "
      >
        <Logo />

        <Navigation />
      </div>
    </header>
  );
}