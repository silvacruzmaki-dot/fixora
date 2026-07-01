export default function ContactInput({
  label,
  type = "text",
  placeholder,
  name,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="
          mb-3
          block
          text-sm
          font-bold
          tracking-wide
          text-foreground
        "
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="
          w-full
          rounded-2xl
          border
          border-border
          bg-background
          px-5
          py-4
          text-sm
          outline-none
          transition-all
          duration-300
          placeholder:text-muted
          focus:border-primary
          focus:ring-4
          focus:ring-primary/10
        "
      />
    </div>
  );
}