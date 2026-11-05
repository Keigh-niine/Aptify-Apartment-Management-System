import Logo from "@/components/Logo";
import NavLinks from "./NavLinks";
import { logOut } from "@/app/login/actions";

export default function Sidebar({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  const initials =
    name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase() || "?";

  return (
    <aside className="hidden w-60 shrink-0 flex-col gap-1.5 border-r border-line bg-white px-5 py-6 md:flex">
      <Logo />
      <div className="h-5" />
      <NavLinks />
      <div className="flex-1" />

      <div className="flex items-center gap-2.5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-tint text-[13px] font-bold text-primary">
          {initials}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">{name}</p>
          <p className="truncate text-xs text-muted">{email}</p>
        </div>
      </div>

      <form action={logOut} className="mt-3">
        <button
          type="submit"
          className="w-full rounded-[10px] border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-50"
        >
          Log out
        </button>
      </form>
    </aside>
  );
}