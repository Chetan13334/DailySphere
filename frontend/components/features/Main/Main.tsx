"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AppShell from "@/components/layout/AppShell";
import { authService, User } from "@/lib/services/auth.service";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardHover = {
  y: -8,
  transition: { type: "spring" as const, stiffness: 220, damping: 20 },
};

const Main = () => {
  const [user, setUser] = useState<User | null>(null);
  const [greeting, setGreeting] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // Fetch user
    const fetchUser = async () => {
      const currentUser = await authService.getCurrentUser();
      setUser(currentUser);
    };
    fetchUser();

    // Set greeting
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) setGreeting("Good morning");
    else if (hour >= 12 && hour < 17) setGreeting("Good afternoon");
    else if (hour >= 17 && hour < 21) setGreeting("Good evening");
    else setGreeting("Good night");

    // Set date
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      month: 'short', 
      day: 'numeric' 
    };
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', options);
    
    // Add ordinal suffix (st, nd, rd, th)
    const day = now.getDate();
    let suffix = "th";
    if (day % 10 === 1 && day !== 11) suffix = "st";
    else if (day % 10 === 2 && day !== 12) suffix = "nd";
    else if (day % 10 === 3 && day !== 13) suffix = "rd";
    
    setCurrentDate(`Today is ${dateStr}${suffix}.`);
  }, []);

  return (
    <AppShell headerActive="dashboard" sidebarActive="overview">
      <motion.div className="relative" initial="hidden" animate="show" variants={container}>
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="hero-blob hero-blob-a" aria-hidden="true" />
          <div className="hero-blob hero-blob-b" aria-hidden="true" />
          <div className="hero-grid" aria-hidden="true" />
        </div>

        <motion.section className="mb-16" variants={fadeUp}>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h1 className="mb-2 font-headline text-5xl font-extrabold tracking-tight text-primary">
                {greeting}, {user?.full_name?.split(" ")[0] || "Guest"}!
              </h1>
              <p className="text-lg text-on-surface-variant">{currentDate}</p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-primary to-primary-container px-6 py-3 font-semibold text-on-primary shadow-lg transition-all active:scale-95">
              <span className="material-symbols-outlined text-sm">add</span>
              Quick Action
            </button>
          </div>
        </motion.section>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <motion.div
            className="group relative overflow-hidden rounded-3xl bg-surface-container-lowest p-8 shadow-[0_20px_40px_rgba(25,28,29,0.06)] md:col-span-8"
            variants={fadeUp}
            whileHover={cardHover}
          >
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex items-start justify-between">
                <div>
                  <p className="mb-1 font-label text-xs uppercase tracking-widest text-on-surface-variant">
                    Current Weather
                  </p>
                  <h3 className="font-headline text-2xl font-bold text-primary">San Francisco, CA</h3>
                </div>
                <span className="material-symbols-outlined text-4xl text-primary">cloudy_snowing</span>
              </div>
              <div className="mt-8 flex items-baseline gap-4">
                <span className="font-headline text-7xl font-extrabold text-primary">68°</span>
                <div className="text-on-surface-variant">
                  <p className="font-bold">Partly Cloudy</p>
                  <p className="text-sm">H: 72° L: 54°</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-12 -bottom-12 h-64 w-64 rounded-full bg-secondary-container/20 blur-3xl transition-colors group-hover:bg-secondary-container/30" />
          </motion.div>

          <motion.div
            className="flex flex-col justify-between rounded-3xl bg-primary p-8 text-on-primary shadow-[0_20px_40px_rgba(25,28,29,0.06)] md:col-span-4"
            variants={fadeUp}
            whileHover={cardHover}
          >
            <div>
              <span className="material-symbols-outlined mb-4 text-primary-fixed">currency_exchange</span>
              <p className="font-label text-xs uppercase tracking-widest text-primary-fixed-dim opacity-70">
                Exchange Rate
              </p>
              <h3 className="mt-1 font-headline text-xl font-bold">EUR / USD</h3>
            </div>
            <div>
              <div className="mb-1 font-headline text-4xl font-extrabold tracking-tighter">1.0942</div>
              <div className="flex items-center gap-1 text-sm text-secondary-fixed">
                <span className="material-symbols-outlined text-xs">trending_up</span>
                <span>+0.24% today</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-3xl bg-tertiary-fixed p-8 shadow-[0_20px_40px_rgba(25,28,29,0.06)] md:col-span-4"
            variants={fadeUp}
            whileHover={cardHover}
          >
            <div className="relative z-10 flex h-full flex-col gap-6">
              <div>
                <p className="mb-1 font-label text-xs uppercase tracking-widest text-on-tertiary-fixed-variant">
                  Upcoming Holiday
                </p>
                <h3 className="font-headline text-2xl font-bold text-on-tertiary-fixed">Halloween</h3>
                <p className="mt-2 font-medium text-on-tertiary-fixed-variant">Tuesday, Oct 31st</p>
              </div>
              <div className="mt-auto">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/30 px-4 py-2 text-sm font-bold text-on-tertiary-fixed backdrop-blur-md">
                  <span className="material-symbols-outlined text-sm">event</span>
                  7 days to go
                </div>
              </div>
            </div>
            <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl opacity-10 rotate-12">
              celebration
            </span>
          </motion.div>

          <motion.div
            className="rounded-3xl bg-surface-container-lowest p-8 shadow-[0_20px_40px_rgba(25,28,29,0.06)] md:col-span-5"
            variants={fadeUp}
            whileHover={cardHover}
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-headline text-xl font-bold text-primary">Active Reminders</h3>
              <span className="rounded-full bg-surface-container-high px-3 py-1 text-xs font-bold text-primary">
                3 Tasks
              </span>
            </div>
            <ul className="space-y-4">
              <li className="flex cursor-pointer items-center gap-4 rounded-xl p-3 transition-all hover:bg-surface-container-low">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-primary">Executive Board Review</p>
                  <p className="text-xs text-on-surface-variant">Due at 2:00 PM</p>
                </div>
                <span className="material-symbols-outlined text-lg text-outline-variant">radio_button_unchecked</span>
              </li>
              <li className="flex cursor-pointer items-center gap-4 rounded-xl p-3 transition-all hover:bg-surface-container-low">
                <span className="h-2 w-2 rounded-full bg-secondary" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-primary">Design System Sync</p>
                  <p className="text-xs text-on-surface-variant">Due at 4:30 PM</p>
                </div>
                <span className="material-symbols-outlined text-lg text-outline-variant">radio_button_unchecked</span>
              </li>
              <li className="flex cursor-pointer items-center gap-4 rounded-xl p-3 transition-all hover:bg-surface-container-low">
                <span className="h-2 w-2 rounded-full bg-outline-variant" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-primary">Weekly Content Audit</p>
                  <p className="text-xs text-on-surface-variant">Tomorrow</p>
                </div>
                <span className="material-symbols-outlined text-lg text-outline-variant">radio_button_unchecked</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="rounded-3xl bg-surface-container-low p-8 text-center shadow-[0_20px_40px_rgba(25,28,29,0.06)] md:col-span-3"
            variants={fadeUp}
            whileHover={cardHover}
          >
            <span className="material-symbols-outlined mb-4 text-4xl text-primary-fixed-dim">format_quote</span>
            <blockquote className="font-body italic leading-relaxed text-on-surface-variant">
              "Design is not just what it looks like and feels like. Design is how it works."
            </blockquote>
            <cite className="mt-4 block text-sm font-bold not-italic text-primary">- Steve Jobs</cite>
          </motion.div>
        </div>
      </motion.div>
    </AppShell>
  );
};

export default Main;
