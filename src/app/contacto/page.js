import ContactSection from "@/components/organisms/ContactSection";

export const metadata = {
  title: "Contacto | FIXORA",
  description:
    "Ponte en contacto con FIXORA para soporte técnico, mantenimiento, diseño y soluciones tecnológicas.",
};

export default function ContactPage() {
  return (
    <main
      className="
        mx-auto
        max-w-7xl
        px-6
        pt-32
      "
    >
      <ContactSection />
    </main>
  );
}