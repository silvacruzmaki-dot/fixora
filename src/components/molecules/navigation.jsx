import NavItem from "../atoms/NavItem";

const navLinks = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Soluciones",
    href: "/soluciones",
  },
  {
    label: "Creative",
    href: "/creative",
  },
  {
    label: "Software",
    href: "/software",
  },
  {
    label: "Hardware",
    href: "/hardware",
  },
  {
    label: "Proyectos",
    href: "/proyectos",
  },
  {
    label: "Empresa",
    href: "/empresa",
  },
  {
    label: "Contacto",
    href: "/contacto",
  },
];

export default function Navigation() {
  return (
    <nav
      className="
        hidden
        items-center
        gap-8
        lg:flex
      "
    >
      {navLinks.map((item) => (
        <NavItem
          key={item.label}
          href={item.href}
          label={item.label}
        />
      ))}
    </nav>
  );
}