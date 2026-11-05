export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-[10px] text-xl font-bold ${
          light ? "bg-white text-primary" : "bg-primary text-white"
        }`}
      >
        A
      </div>
      <span className={`text-[22px] font-bold ${light ? "text-white" : "text-ink"}`}>
        Aptify
      </span>
    </div>
  );
}