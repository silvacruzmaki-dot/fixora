import {
  FaWhatsapp,
  FaFacebookF,
  FaTiktok,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import SocialCard from "../atoms/SocialCard";

export default function SocialLinksGrid() {
  return (
    <div
      className="
        space-y-5
      "
    >
      <SocialCard
        icon={FaWhatsapp}
        title="WhatsApp"
        description="+51 999 999 999"
        href="https://wa.me/51999999999"
      />

      <SocialCard
        icon={FaFacebookF}
        title="Facebook"
        description="FIXORA Oficial"
        href="https://facebook.com"
      />

      <SocialCard
        icon={FaTiktok}
        title="TikTok"
        description="@fixora"
        href="https://tiktok.com"
      />

      <SocialCard
        icon={MdEmail}
        title="Correo"
        description="contacto@fixora.com"
        href="mailto:contacto@fixora.com"
      />
    </div>
  );
}