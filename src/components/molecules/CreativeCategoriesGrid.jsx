import {
  HiOutlinePaintBrush,
  HiOutlinePhoto,
  HiOutlineSparkles,
  HiOutlineSquares2X2,
  HiOutlineDocumentText,
  HiOutlineDevicePhoneMobile,
} from "react-icons/hi2";

const categories = [
  {
    icon: HiOutlinePaintBrush,
    title: "Branding",
  },

  {
    icon: HiOutlinePhoto,
    title: "Flyers",
  },

  {
    icon: HiOutlineSparkles,
    title: "Logos",
  },

  {
    icon: HiOutlineSquares2X2,
    title: "Mockups",
  },

  {
    icon: HiOutlineDocumentText,
    title: "Plantillas",
  },

  {
    icon:
      HiOutlineDevicePhoneMobile,
    title: "Redes Sociales",
  },
];

export default function CreativeCategoriesGrid() {
  return (
    <div
      className="
        grid
        gap-6
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {categories.map(
        ({
          icon: Icon,
          title,
        }) => (
          <article
            key={title}
            className="
              rounded-[2rem]
              border
              border-border
              bg-card
              p-8
              shadow-[var(--shadow)]
              transition-all
              duration-300
              hover:-translate-y-1
            "
          >
            <Icon
              size={40}
              className="
                text-primary
              "
            />

            <h3
              className="
                mt-6
                text-2xl
                font-bold
              "
            >
              {title}
            </h3>
          </article>
        )
      )}
    </div>
  );
}