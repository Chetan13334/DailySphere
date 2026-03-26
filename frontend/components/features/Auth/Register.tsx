"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/lib/constants";
import { authService } from "@/lib/services/auth.service";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (formData.password !== formData.confirm_password) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const result = await authService.register(formData);
      if (result.error) {
        setError(result.error);
      } else {
        setSuccess("Account created! Redirecting to login...");
        setTimeout(() => router.push(ROUTES.login), 2000);
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <motion.div
      className="bg-surface text-on-surface antialiased"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-12">
        <div className="pointer-events-none absolute inset-0 -z-10 hidden lg:block">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-surface-container-low" />
          <div className="hero-blob hero-blob-a" />
          <div className="hero-blob hero-blob-b" />
        </div>

        <div className="w-full max-w-[480px] space-y-8">
          <motion.div className="text-center lg:text-left lg:pl-4" variants={fadeUp}>
            <Link href={ROUTES.dashboard} className="font-headline text-3xl font-extrabold tracking-tighter text-primary">
              DailySphere
            </Link>
            <p className="mt-2 font-medium text-on-surface-variant">Create your editorial workspace</p>
          </motion.div>

          <motion.div
            className="glass-panel ambient-shadow rounded-xl border border-[#eceff2] bg-surface-container-lowest p-8 lg:p-10"
            variants={fadeUp}
          >
            {error && (
              <div className="mb-6 rounded-lg bg-red-500/10 p-4 text-sm font-semibold text-red-500 border border-red-500/20">
                {error}
              </div>
            )}
            {success && (
              <div className="mb-6 rounded-lg bg-green-500/10 p-4 text-sm font-semibold text-green-500 border border-green-500/20">
                {success}
              </div>
            )}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <button
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-surface-container-high px-4 py-3 font-semibold text-primary transition-all hover:bg-surface-container-highest active:scale-[0.98]"
                type="button"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Sign up with Google
              </button>

              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-outline-variant/20" />
                <span className="mx-4 flex-shrink-0 text-xs font-label uppercase tracking-widest text-on-surface-variant">
                  or continue with email
                </span>
                <div className="flex-grow border-t border-outline-variant/20" />
              </div>

              <div className="space-y-4">
                <div>
                  <label className="mb-1.5 ml-1 block text-xs font-label font-semibold uppercase tracking-wider text-on-surface-variant">
                    Full Name
                  </label>
                  <input
                    className="w-full rounded-lg border border-[rgba(196,198,205,0.15)] bg-white px-4 py-3 text-sm outline-none transition-all placeholder:text-outline/50 focus:border-primary-fixed-dim focus:ring-4 focus:ring-primary-fixed/20"
                    placeholder="Alex Rivera"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                    type="text"
                  />
                </div>

                <div>
                  <label className="mb-1.5 ml-1 block text-xs font-label font-semibold uppercase tracking-wider text-on-surface-variant">
                    Email Address
                  </label>
                  <input
                    className="w-full rounded-lg border border-[rgba(196,198,205,0.15)] bg-white px-4 py-3 text-sm outline-none transition-all placeholder:text-outline/50 focus:border-primary-fixed-dim focus:ring-4 focus:ring-primary-fixed/20"
                    placeholder="alex@DailySphere.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    type="email"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1.5 ml-1 block text-xs font-label font-semibold uppercase tracking-wider text-on-surface-variant">
                      Password
                    </label>
                    <input
                      className="w-full rounded-lg border border-[rgba(196,198,205,0.15)] bg-white px-4 py-3 text-sm outline-none transition-all placeholder:text-outline/50 focus:border-primary-fixed-dim focus:ring-4 focus:ring-primary-fixed/20"
                      placeholder="********"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      type="password"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 ml-1 block text-xs font-label font-semibold uppercase tracking-wider text-on-surface-variant">
                      Confirm
                    </label>
                    <input
                      className="w-full rounded-lg border border-[rgba(196,198,205,0.15)] bg-white px-4 py-3 text-sm outline-none transition-all placeholder:text-outline/50 focus:border-primary-fixed-dim focus:ring-4 focus:ring-primary-fixed/20"
                      placeholder="********"
                      name="confirm_password"
                      value={formData.confirm_password}
                      onChange={handleChange}
                      required
                      type="password"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 px-1">
                <input
                  className="mt-1 cursor-pointer rounded border-outline-variant text-primary focus:ring-primary-fixed/20"
                  type="checkbox"
                />
                <label className="text-xs leading-relaxed text-on-surface-variant">
                  I agree to the{" "}
                  <a className="font-semibold text-primary hover:underline" href="#">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a className="font-semibold text-primary hover:underline" href="#">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>

              <button
                className="primary-gradient flex w-full items-center justify-center rounded-lg py-4 font-semibold text-white shadow-lg shadow-primary/10 transition-all hover:opacity-90 active:scale-[0.97] disabled:opacity-70 disabled:cursor-not-allowed"
                type="submit"
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Create Editorial Account"}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-on-surface-variant">
                Already have an account?
                <Link href={ROUTES.login} className="ml-1 font-bold text-primary hover:underline">
                  Sign In
                </Link>
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center justify-between gap-4 border-t border-outline-variant/10 px-4 pt-4"
            variants={fadeUp}
          >
            <div className="flex gap-4">
              <span className="text-[10px] font-label font-medium uppercase tracking-[0.2em] text-outline">
                v2.4.0 Stable
              </span>
              <span className="text-[10px] font-label font-medium uppercase tracking-[0.2em] text-outline">
                Enterprise Cloud
              </span>
            </div>
            <div className="flex items-center gap-1 opacity-40">
              <span className="material-symbols-outlined text-sm" data-icon="verified_user">
                verified_user
              </span>
              <span className="text-[10px] font-label font-medium uppercase tracking-[0.2em] text-outline">
                Secure
              </span>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="mt-auto w-full border-t border-outline-variant/15 bg-surface-container-lowest py-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-12 md:flex-row">
          <p className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
            {"\u00A9"} 2024 DailySphere Editorial Dashboard. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant transition-colors hover:text-primary" href="#">
              Privacy Policy
            </a>
            <a className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant transition-colors hover:text-primary" href="#">
              Terms of Service
            </a>
            <a className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant transition-colors hover:text-primary" href="#">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Register;
