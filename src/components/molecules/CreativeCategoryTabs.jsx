const tabs = [
  "Todos",
  "Gratis",
  "Premium",
  "Clientes",
];

export default function CreativeCategoryTabs({
  active,
  setActive,
}) {
  return (
    <div
      className="
        flex
        flex-wrap
        justify-center
        gap-3
      "
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() =>
            setActive(tab)
          }
          className={`
            rounded-full
            px-5
            py-3
            text-sm
            font-semibold
            transition-all
            duration-300

            ${
              active === tab
                ? "bg-primary text-black"
                : "bg-card border border-border"
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}