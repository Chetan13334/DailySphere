"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import { ROUTES } from "@/lib/constants";

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

const Login = () => {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(ROUTES.dashboard);
  };

  return (
    <motion.div
      className="bg-surface text-on-surface antialiased"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-12">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-5%] top-[-10%] h-[40rem] w-[40rem] rounded-full bg-secondary-container opacity-20 blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-5%] h-[35rem] w-[35rem] rounded-full bg-primary-fixed opacity-30 blur-[120px]" />
        </div>

        <div className="w-full max-w-[440px] z-10">
          <motion.div className="mb-10 text-center" variants={fadeUp}>
            <Link href={ROUTES.dashboard} className="font-headline mb-2 text-4xl font-extrabold tracking-tighter text-primary">
              Zenith Dashboard
            </Link>
            <p className="text-sm tracking-tight text-on-surface-variant">
              Enter your credentials to access your editorial workspace.
            </p>
          </motion.div>

          <motion.div
            className="glass-panel ambient-shadow rounded-xl border border-[rgba(196,198,205,0.15)] bg-surface-container-lowest p-8 lg:p-10"
            variants={fadeUp}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-xs font-label font-semibold uppercase tracking-widest text-on-surface-variant" htmlFor="email">
                  Email Address
                </label>
                <div className="group relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-outline">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </div>
                  <input
                    className="w-full rounded-lg border border-[rgba(196,198,205,0.15)] bg-white py-3 pl-11 pr-4 text-on-surface outline-none transition-all duration-200 placeholder:text-outline/50 focus:border-primary-fixed-dim focus:ring-4 focus:ring-primary-fixed/20"
                    id="email"
                    name="email"
                    placeholder="alex.rivera@zenith.com"
                    required
                    type="email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-label font-semibold uppercase tracking-widest text-on-surface-variant" htmlFor="password">
                    Password
                  </label>
                  <a className="text-xs font-medium text-primary transition-all hover:underline underline-offset-4" href="#">
                    Forgot Password?
                  </a>
                </div>
                <div className="group relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-outline">
                    <span className="material-symbols-outlined text-[20px]">lock</span>
                  </div>
                  <input
                    className="w-full rounded-lg border border-[rgba(196,198,205,0.15)] bg-white py-3 pl-11 pr-12 text-on-surface outline-none transition-all duration-200 placeholder:text-outline/50 focus:border-primary-fixed-dim focus:ring-4 focus:ring-primary-fixed/20"
                    id="password"
                    name="password"
                    placeholder="********"
                    required
                    type="password"
                  />
                  <button className="absolute inset-y-0 right-0 flex items-center pr-4 text-outline transition-colors hover:text-primary" type="button">
                    <span className="material-symbols-outlined text-[20px]">visibility</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <input
                  className="h-4 w-4 cursor-pointer rounded border-outline-variant text-primary focus:ring-primary-fixed/30"
                  id="remember"
                  name="remember"
                  type="checkbox"
                />
                <label className="select-none text-sm text-on-surface-variant" htmlFor="remember">
                  Remember this device
                </label>
              </div>

              <button
                className="primary-gradient group flex w-full items-center justify-center rounded-lg px-6 py-4 font-headline font-bold text-white shadow-lg transition-all duration-200 hover:shadow-xl active:scale-[0.98]"
                type="submit"
              >
                Sign In to Dashboard
                <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-1">arrow_forward</span>
              </button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-outline-variant/15" />
              </div>
              <div className="relative flex justify-center text-xs uppercase tracking-widest">
                <span className="bg-white px-4 font-medium text-outline/60">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center rounded-lg bg-surface-container-high px-4 py-3 text-sm font-medium text-on-surface transition-colors duration-150 hover:bg-surface-container-highest active:scale-95">
                <img
                  alt="Google"
                  className="mr-2 h-5 w-5"
                  data-alt="Google company icon logo with colorful brand colors on a simple transparent background"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA50P3wLukNDskqPCHIi7132bGiGrK8zp5RXu_X0kJJCB2JWE9sAjMM7FFsr0b2RNSOqveRJivpTZKX6ZQJUGOlIScT3-GjGEtLkVkyN7NSfHc4bylr-nPb2msDG4P0NXjpAapYli-U58PaSe22VkePzverSbB1q39I7n3WvodzVBDV9iTtKUBsX6ew4pHJNP_pKn6P0K1CFZ2HJPDFu_V-ZjMFo4HbqVrXbQBYlkg9mCEcJVJwCDE7xIPD0tv3k2i1AKYJfXYNng"
                />
                Google
              </button>
              <button className="flex items-center justify-center rounded-lg bg-surface-container-high px-4 py-3 text-sm font-medium text-on-surface transition-colors duration-150 hover:bg-surface-container-highest active:scale-95">
                <span className="material-symbols-outlined mr-2 text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  ios
                </span>
                Apple
              </button>
            </div>
          </motion.div>

          <motion.div className="mt-8 text-center" variants={fadeUp}>
              <p className="text-sm text-on-surface-variant">
                Don't have an account?
                <Link href={ROUTES.register} className="ml-1 font-semibold text-primary transition-all hover:underline underline-offset-4 decoration-2">
                Sign up for Zenith
                </Link>
              </p>
            </motion.div>
        </div>
      </main>

      <footer className="w-full border-t border-outline-variant/15 bg-surface-container-lowest">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-12 py-8 md:flex-row">
          <p className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
            {"\u00A9"} 2024 Zenith Editorial Dashboard. All rights reserved.
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

export default Login;
