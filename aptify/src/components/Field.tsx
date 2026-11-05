type Props = {
  label: string;
  name: string;
  type?: string;
  error?: string;
  hint?: string;
  invalid?: boolean;
  defaultValue?: string;
  placeholder?: string;
  autoComplete?: string;
};

export default function Field({
  label,
  name,
  type = "text",
  error,
  hint,
  invalid,
  defaultValue,
  placeholder,
  autoComplete,
}: Props) {
  const hasError = Boolean(error) || Boolean(invalid);

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-[13px] font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={hasError ? true : undefined}
        className={`rounded-[10px] border bg-white px-3.5 py-3 text-[15px] outline-none focus:ring-2 focus:ring-primary/30 ${
          hasError ? "border-red-600" : "border-slate-300"
        }`}
      />
      {error ? (
        <p className="text-xs font-medium text-red-700">{error}</p>
      ) : hint ? (
        <p className="text-xs text-muted">{hint}</p>
      ) : null}
    </div>
  );
}