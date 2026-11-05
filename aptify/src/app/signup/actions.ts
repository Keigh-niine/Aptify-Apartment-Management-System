"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export type SignUpState = {
  errors?: {
    fullName?: string;
    email?: string;
    password?: string;
    confirm?: string;
    form?: string;
  };
  values?: { fullName: string; email: string };
};

export async function signUp(
  _prev: SignUpState,
  formData: FormData
): Promise<SignUpState> {
  const fullName = String(formData.get("fullName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  const confirm = String(formData.get("confirm") ?? "");
  const values = { fullName, email };

  // 1) Validate on the server (never trust the browser)
  const errors: NonNullable<SignUpState["errors"]> = {};
  if (fullName.length < 2) errors.fullName = "Enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Enter a valid email address.";
  if (password.length < 8) errors.password = "Use at least 8 characters.";
  if (confirm !== password) errors.confirm = "Passwords do not match.";
  if (Object.keys(errors).length) return { errors, values };

  // 2) Create the account in Supabase Auth.
  //    The database trigger copies full_name and email into `profiles`.
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { full_name: fullName } },
  });

  if (error) return { errors: { form: error.message }, values };

  // Supabase returns an empty identities list when the email already exists
  if (data.user && data.user.identities?.length === 0) {
    return {
      errors: { email: "An account with this email already exists." },
      values,
    };
  }

  redirect("/dashboard");
}