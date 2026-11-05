"use client";

import Link from "next/link";
import { useActionState } from "react";
import Logo from "@/components/Logo";
import Field from "@/components/Field";
import { signUp, type SignUpState } from "./actions";

export default function SignUpPage() {
  const [state, formAction, pending] = useActionState<SignUpState, FormData>(
    signUp,
    {}
  );
  const errors = state.errors ?? {};

  return (
    <main className="flex min-h-screen">
      {/* Brand panel (hidden on small screens) */}
      <section className="hidden flex-1 flex-col justify-center gap-6 bg-[#0369a1] px-20 md:flex">
        <Logo light />
        <h1 className="max-w-[560px] text-5xl font-bold leading-tight text-white">
          Create your account.
        </h1>
        <p className="max-w-[520px] text-lg leading-7 text-sky-100">
          Landlords create properties. Tenants join a unit with a code from
          their landlord.
        </p>
        <ul className="flex flex-col gap-3 text-base font-medium text-white">
          <li>• Set up a property in minutes</li>
          <li>• Join your unit with an invite code</li>
          <li>• Pay rent and track repairs in one place</li>
        </ul>
      </section>

      {/* Form */}
      <section className="flex flex-1 items-center justify-center px-6 py-12">
        <form action={formAction} className="flex w-full max-w-[400px] flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <h2 className="text-[32px] font-bold">Sign up</h2>
            <p className="text-[15px] text-muted">
              Create an account to get started.
            </p>
          </div>

          {errors.form && (
            <p className="rounded-[10px] bg-red-100 p-3 text-sm font-medium text-red-800">
              {errors.form}
            </p>
          )}

          <Field
            label="Full name"
            name="fullName"
            autoComplete="name"
            defaultValue={state.values?.fullName}
            error={errors.fullName}
          />
          <Field
            label="Email address"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@email.com"
            defaultValue={state.values?.email}
            error={errors.email}
          />
          <Field
            label="Password"
            name="password"
            type="password"
            autoComplete="new-password"
            hint="At least 8 characters."
            error={errors.password}
          />
          <Field
            label="Confirm password"
            name="confirm"
            type="password"
            autoComplete="new-password"
            error={errors.confirm}
          />

          <button
            type="submit"
            disabled={pending}
            className="rounded-[10px] bg-primary px-5 py-[11px] text-sm font-semibold text-white hover:bg-primary-dark disabled:opacity-60"
          >
            {pending ? "Creating account..." : "Create account"}
          </button>

          <p className="text-center text-sm text-muted">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-primary">
              Log in
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
}