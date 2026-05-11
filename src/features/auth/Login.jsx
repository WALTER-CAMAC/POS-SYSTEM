import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";

export const Login = ({ user, pass, handle }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="flex h-screen overflow-hidden bg-(--color-bg-main)"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {/* ════════════════ LEFT — branding (desktop only) ════════════════ */}
      <div className="hidden lg:flex flex-col justify-between w-95 shrink-0 border-r border-(--color-border) bg-(--color-surface) px-8 py-10">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-(--color-accent-bg) border border-(--color-accent-border) text-(--color-accent) font-bold text-[13px]">
            A
          </div>
          <span className="text-[11px] font-bold tracking-[0.18em] text-(--color-text-secondary) uppercase">
            Admin Panel
          </span>
        </div>

        {/* Testimonial */}
        <div className="flex flex-col gap-5">
          <p className="text-[18px] font-medium leading-relaxed tracking-tight text-(--color-text-primary)">
            "Control total de tu plataforma, siempre al alcance de un clic."
          </p>
          <div className="flex items-center gap-2.5">
            <img
              src="https://i.pravatar.cc/150?img=11"
              alt="Devoryn"
              className="w-7 h-7 rounded-full border border-(--color-border) object-cover shrink-0"
            />
            <div className="flex flex-col gap-0.5">
              <span className="text-[13px] font-medium text-(--color-text-primary) leading-none">
                Walter Camac
              </span>
              <span className="text-[11px] text-(--color-text-secondary)">
                Administrador principal
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-[11px] text-(--color-text-secondary)">
          © 2026 Admin Panel · All rights reserved
        </p>
      </div>

      {/* ════════════════ RIGHT — form ════════════════ */}
      <div className="flex flex-1 items-center justify-center px-5">
        <div className="w-full max-w-85 flex flex-col gap-5">
          {/* Mobile logo */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-(--color-accent-bg) border border-(--color-accent-border) text-(--color-accent) font-bold text-[13px]">
              A
            </div>
            <span className="text-[11px] font-bold tracking-[0.18em] text-(--color-text-secondary) uppercase">
              Admin Panel
            </span>
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-1">
            <h1 className="my-0! text-[22px]! font-semibold tracking-tight leading-tight text-(--color-text-primary)">
              Welcome back
            </h1>
            <p className="text-[13px] text-(--color-text-secondary) leading-relaxed">
              Sign in to your account to continue.
            </p>
          </div>

          {/* ── Form ── */}
          <form className="flex flex-col gap-3" onSubmit={handle}>
            {/* Email */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="login-email"
                className="text-[12px] font-medium text-(--color-text-secondary)"
              >
                Email
              </label>
              <div className="relative">
                <Mail
                  size={13}
                  strokeWidth={1.8}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-(--color-text-secondary) pointer-events-none opacity-60"
                />
                <input
                  id="login-email"
                  type="text"
                  onChange={user}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="input pl-8! text-[13px]! placeholder:opacity-40"
                  style={{ paddingTop: "6px", paddingBottom: "6px" }}
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="login-password"
                  className="text-[12px] font-medium text-(--color-text-secondary)"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-[12px] text-(--color-accent) no-underline hover:underline transition-colors"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock
                  size={13}
                  strokeWidth={1.8}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-(--color-text-secondary) pointer-events-none opacity-60"
                />
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  onChange={pass}
                  autoComplete="current-password"
                  className="input pl-8! pr-9! text-[13px]! placeholder:opacity-40"
                  style={{ paddingTop: "6px", paddingBottom: "6px" }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-(--color-text-secondary) hover:text-(--color-text-primary) transition-colors cursor-pointer opacity-60 hover:opacity-100"
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff size={13} strokeWidth={1.8} />
                  ) : (
                    <Eye size={13} strokeWidth={1.8} />
                  )}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-2">
              <input
                id="login-remember"
                type="checkbox"
                className="w-3.5 h-3.5 rounded border border-(--color-border) accent-(--color-accent) cursor-pointer"
              />
              <label
                htmlFor="login-remember"
                className="text-[12px] text-(--color-text-secondary) cursor-pointer select-none"
              >
                Remember me
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn-primary w-full! mb-0! text-[13px]!"
              style={{ paddingTop: "7px", paddingBottom: "7px" }}
            >
              Sign in
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-(--color-border)" />
            <span className="text-[11px] text-(--color-text-secondary) shrink-0">
              or continue with
            </span>
            <div className="flex-1 h-px bg-(--color-border)" />
          </div>

          {/* Social buttons */}
          <div className="flex gap-2">
            {/* Google */}
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 px-3 border border-(--color-border) bg-(--color-surface) text-[12px] font-medium text-(--color-text-secondary) rounded-lg hover:text-(--color-text-primary) hover:shadow-(--shadow-custom) transition-all cursor-pointer"
              style={{ paddingTop: "6px", paddingBottom: "6px" }}
            >
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                aria-hidden="true"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </button>

            {/* GitHub */}
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 px-3 border border-(--color-border) bg-(--color-surface) text-[12px] font-medium text-(--color-text-secondary) rounded-lg hover:text-(--color-text-primary) hover:shadow-(--shadow-custom) transition-all cursor-pointer"
              style={{ paddingTop: "6px", paddingBottom: "6px" }}
            >
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </button>
          </div>

          {/* Sign up link */}
          <p className="text-center text-[12px] text-(--color-text-secondary)">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-(--color-accent) no-underline hover:underline font-medium transition-colors"
            >
              Request access
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
