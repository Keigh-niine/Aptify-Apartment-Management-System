const tones = {
  blue: "bg-tint text-primary",
  green: "bg-green-100 text-green-800",
  amber: "bg-amber-100 text-amber-800",
};

export default function Badge({
  children,
  tone = "blue",
}: {
  children: React.ReactNode;
  tone?: keyof typeof tones;
}) {
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-1 text-xs font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}