"use client";

import Link from "next/link";
import { useActionState } from "react";
import Logo from "@/components/Logo";
import Field from "@/components/Field";
import { logIn, type LoginState } from "./actions";

export default function LoginPage() {
  const [state, formAction, pending] = useActionState<LoginState, FormData>(
    logIn,
    {}
  );
  const hasError = Boolean(state.error);

  return (
    <main className="flex min-h-screen">
      <section className="hidden flex-1 flex-col justify-center gap-6 bg-[#0369a1] px-20 md:flex">
        <Logo light />
        <h1 className="max-w-[560px] text-5xl font-bold leading-tight text-white">
          Welcome back.
        </h1>
        <p className="max-w-[520px] text-lg leading-7 text-sky-100">
          One account for landlords and tenants. Your role depends on the
          properties and units you belong to.
        </p>
        <ul className="flex flex-col gap-3 text-base font-medium text-white">
          <li>• Pay rent online or in cash</li>
          <li>• Report repairs and follow their status</li>
          <li>• Never miss an announcement</li>
        </ul>
      </section>

      <section className="flex flex-1 items-center justify-center px-6 py-12">
        <form action={formAction} className="flex w-full max-w-[400px] flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <h2 className="text-[32px] font-bold">Log in</h2>
            <p className="text-[15px] text-muted">Enter your details to continue.</p>
          </div>

          {state.error && (
            <p role="alert" className="rounded-[10px] bg-red-100 p-3 text-sm font-medium text-red-800">
              {state.error}
            </p>
          )}

          <Field
            label="Email address"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@email.com"
            defaultValue={state.email}
            invalid={hasError}
          />
          <Field
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            invalid={hasError}
          />

          <button
            type="submit"
            disabled={pending}
            className="rounded-[10px] bg-primary px-5 py-[11px] text-sm font-semibold text-white hover:bg-primary-dark disabled:opacity-60"
          >
            {pending ? "Logging in..." : "Log in"}
          </button>

          <div className="text-center">
            <Link href="/forgot-password" className="text-sm font-medium text-primary">
              Forgot password?
            </Link>
          </div>

          <p className="text-center text-sm text-muted">
            New to Aptify?{" "}
            <Link href="/signup" className="font-semibold text-primary">
              Create an account
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
}