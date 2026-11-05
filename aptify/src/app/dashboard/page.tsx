import { logOut } from "@/app/login/actions";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";


export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  return (
    <main className="p-10">

        <form action={logOut} className="mt-6">
            <button
            type="submit"
            className="rounded-[10px] border border-slate-300 px-5 py-[11px] text-sm font-semibold hover:bg-slate-50"
            >
            Log out
            </button>
        </form>


      <h1 className="text-2xl font-bold">
        Welcome, {user.user_metadata.full_name}
      </h1>
      <p className="text-muted">{user.email}</p>
    </main>
  );
}