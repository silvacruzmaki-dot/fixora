import {
  HiOutlineArrowTopRightOnSquare,
} from "react-icons/hi2";

export default function CreativeOpenButton({
  onClick,
}) {
  return (
    <button
      onClick={onClick}
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
        transition-all
        duration-300
        hover:scale-[1.02]
      "
    >
      <HiOutlineArrowTopRightOnSquare
        size={18}
      />

      Ver Proyecto
    </button>
  );
}