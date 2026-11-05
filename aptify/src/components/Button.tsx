import Link from "next/link";

type Props = {
  href: string;
  variant?: "primary" | "outline";
  size?: "md" | "lg";
  children: React.ReactNode;
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-[10px] font-semibold transition-colors";
  const sizes = {
    md: "px-5 py-[11px] text-sm",
    lg: "px-7 py-4 text-base",
  };
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    outline: "border border-slate-300 bg-white text-ink hover:bg-slate-50",
  };

  return (
    <Link href={href} className={`${base} ${sizes[size]} ${variants[variant]}`}>
      {children}
    </Link>
  );
}