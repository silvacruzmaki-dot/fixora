import {
  HiOutlineArrowDownTray,
  HiOutlineShoppingBag,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";

export default function CreativeDownloadActions({
  type,
  price,
}) {
  if (type === "free") {
    return (
      <button
        className="
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-2xl
          bg-primary
          px-6
          py-4
          font-bold
          text-black
        "
      >
        <HiOutlineArrowDownTray />

        Descargar Gratis
      </button>
    );
  }

  if (type === "premium") {
    return (
      <button
        className="
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-2xl
          bg-yellow-500
          px-6
          py-4
          font-bold
          text-black
        "
      >
        <HiOutlineShoppingBag />

        Comprar S/{price}
      </button>
    );
  }

  return (
    <button
      className="
        flex
        w-full
        items-center
        justify-center
        gap-2
        rounded-2xl
        border
        border-border
        px-6
        py-4
        font-bold
      "
    >
      <HiOutlineChatBubbleLeftRight />

      Solicitar Similar
    </button>
  );
}