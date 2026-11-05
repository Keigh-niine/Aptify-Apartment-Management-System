import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Sidebar from "@/components/app/Sidebar";
import Logo from "@/components/Logo";
import { logOut } from "@/app/login/actions";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const name =
    (user.user_metadata?.full_name as string | undefined) ||
    user.email ||
    "Account";

  return (
    <div className="flex min-h-screen flex-col bg-page md:flex-row">
      {/* Top bar on small screens (the sidebar is hidden there) */}
      <header className="flex items-center justify-between border-b border-line bg-white px-4 py-3 md:hidden">
        <Logo />
        <form action={logOut}>
          <button
            type="submit"
            className="rounded-[10px] border border-slate-300 px-3 py-1.5 text-sm font-semibold"
          >
            Log out
          </button>
        </form>
      </header>

      <Sidebar name={name} email={user.email ?? ""} />
      <main className="flex-1 p-6 md:p-10">{children}</main>
    </div>
  );
}