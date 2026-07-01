import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlineClock,
} from "react-icons/hi2";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

import SocialCard from "../atoms/SocialCard";

export default function SocialGrid() {
  return (
    <div className="space-y-5">
      <SocialCard
        icon={HiOutlineChatBubbleLeftRight}
        title="WhatsApp"
        description="Atención rápida y soporte directo."
        href="https://wa.me/51999999999"
      />

      <SocialCard
        icon={FaFacebookF}
        title="Facebook"
        description="Noticias y novedades de FIXORA."
        href="https://facebook.com"
      />

      <SocialCard
        icon={FaInstagram}
        title="Instagram"
        description="Diseños, proyectos y contenido visual."
        href="https://instagram.com"
      />

      <SocialCard
        icon={FaTiktok}
        title="TikTok"
        description="Contenido tecnológico y creativo."
        href="https://tiktok.com"
      />

      <SocialCard
        icon={HiOutlineEnvelope}
        title="Correo"
        description="contacto@fixora.com"
        href="mailto:contacto@fixora.com"
      />

      <SocialCard
        icon={HiOutlineMapPin}
        title="Ubicación"
        description="Celendín, Cajamarca"
        href="#"
      />

      <SocialCard
        icon={HiOutlineClock}
        title="Horario"
        description="Lunes a Sábado · 8:00 AM - 8:00 PM"
        href="#"
      />
    </div>
  );
}