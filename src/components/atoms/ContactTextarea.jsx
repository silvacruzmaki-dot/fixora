export default function ContactTextarea({
  label,
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

      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        className="
          min-h-[180px]
          w-full
          resize-none
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