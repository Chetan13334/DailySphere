"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AppShell from "@/components/layout/AppShell";
import { authService } from "@/lib/services/auth.service";
import EditProfile from "./EditProfile";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
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

export default function Profile() {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showEditModal, setShowEditModal] = useState(false);

  const fetchProfile = async () => {
    setLoading(true);
    const data = await authService.getProfileDetails();
    if (data) {
      setUserData(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const getInitials = (name: string) => {
    if (!name) return "";
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    const firstInitial = parts[0].charAt(0).toUpperCase();
    const lastInitial = parts[parts.length - 1].charAt(0).toUpperCase();
    return firstInitial + lastInitial;
  };

  if (loading) {
    return (
      <AppShell headerActive="profile" sidebarActive="profile">
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
      </AppShell>
    );
  }

  const details = userData?.details || {};
  const initials = getInitials(userData?.full_name);

  const summaryCards = [
    {
      icon: "mail",
      label: "Email Address",
      value: userData?.email || "Not provided",
    },
    {
      icon: "location_on",
      label: "Location",
      value: details.location || "Not Set",
    },
    {
      icon: "payments",
      label: "Currency",
      value: details.currency || "USD",
    },
    {
      icon: "schedule",
      label: "Timezone",
      value: details.timezone || "UTC",
    },
  ];

  const settingsCards = [
    {
      icon: "key",
      title: "Two-Factor Auth",
      subtitle: details.two_factor_enabled ? "Active" : "Inactive",
      tone: details.two_factor_enabled ? "bg-secondary-container text-on-secondary-container" : "bg-outline-variant/10 text-outline",
    },
    {
      icon: "devices",
      title: "Active Sessions",
      subtitle: "Current device",
      tone: "bg-primary-fixed text-on-primary-fixed",
    },
  ];
  return (
    <AppShell headerActive="profile" sidebarActive="profile">
      <motion.div className="mx-auto w-full max-w-7xl" initial="hidden" animate="show" variants={container}>
        <motion.header className="mb-8 sm:mb-12" variants={fadeUp}>
          <h1 className="mb-2 font-headline text-3xl font-extrabold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Profile Settings
          </h1>
          <p className="text-base text-on-surface-variant sm:text-lg">Manage your personal identity and workspace preferences.</p>
        </motion.header>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-12 xl:gap-8">
          <motion.section className="xl:col-span-4" variants={fadeUp}>
            <div className="flex flex-col items-center rounded-2xl border border-outline-variant/10 bg-surface-container-lowest p-8 text-center shadow-sm">
              <div className="group relative mb-6">
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      // We will implement the actual upload in authService later
                      // For now, let's trigger the update logic
                      const reader = new FileReader();
                      reader.onloadend = async () => {
                         const result = await authService.updateProfileDetails({
                           details: { avatar_url: reader.result as string }
                         });
                         if (!result.error) fetchProfile();
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
                <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-surface-container-high bg-primary-container text-4xl font-bold text-primary shadow-lg">
                  {details.avatar_url ? (
                    <img
                      alt="User Profile Image"
                      className="h-full w-full object-cover"
                      src={details.avatar_url}
                    />
                  ) : (
                    initials as string
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => document.getElementById("avatar-upload")?.click()}
                  className="primary-gradient absolute bottom-1 right-1 rounded-full p-2 text-white shadow-lg transition-transform active:scale-90"
                  aria-label="Change profile photo"
                >
                  <span className="material-symbols-outlined text-sm">photo_camera</span>
                </button>
              </div>

              <h2 className="mb-1 font-headline text-2xl font-bold text-primary">{userData?.full_name}</h2>
              <p className="mb-6 text-sm font-medium text-on-surface-variant">
                {details.job_title || "Editor"} {details.company ? `@ ${details.company}` : ""}
              </p>

              <div className="w-full space-y-3 border-t border-outline-variant/10 pt-6">
                <button
                  type="button"
                  onClick={() => setShowEditModal(true)}
                  className="primary-gradient flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-on-primary transition-all hover:opacity-90 active:scale-95"
                >
                  Edit Profile
                </button>
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-surface-container-high px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-surface-container-highest active:scale-95"
                >
                  Security
                </button>
              </div>
            </div>
          </motion.section>

          <motion.section className="space-y-6 xl:col-span-8" variants={fadeUp}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {summaryCards.map((card) => (
                <div
                  key={card.label}
                  className="rounded-2xl border border-outline-variant/10 bg-surface-container-lowest p-6 transition-shadow hover:shadow-md"
                >
                  <div className="mb-4 flex items-center gap-3 text-on-primary-container">
                    <span className="material-symbols-outlined">{card.icon}</span>
                    <span className="font-label text-xs font-semibold uppercase tracking-widest opacity-70">{card.label}</span>
                  </div>
                  <div className="font-body font-semibold text-primary">{card.value as string}</div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-outline-variant/5 bg-surface-container-low p-8">
              <h3 className="mb-6 font-headline text-xl font-bold text-primary">Account Management</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {settingsCards.map((item) => (
                  <div
                    key={item.title}
                    className="group flex cursor-pointer items-center justify-between rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-4 transition-colors hover:border-primary-fixed"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.tone}`}>
                        <span className="material-symbols-outlined">{item.icon}</span>
                      </div>
                      <div>
                        <div className="text-sm font-bold">{item.title}</div>
                        <div className="text-xs text-on-surface-variant">{item.subtitle}</div>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-outline transition-colors group-hover:text-primary">
                      chevron_right
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="glass-panel rounded-3xl border border-outline-variant/10 p-5 sm:p-8">
              <h3 className="mb-6 font-headline text-xl font-bold text-primary">Interface Preferences</h3>
              <div className="flex items-center justify-between border-b border-outline-variant/10 py-4">
                <div>
                  <div className="font-bold text-primary">Dark Mode</div>
                  <div className="text-sm text-on-surface-variant">Switch between light and dark themes.</div>
                </div>
                <div className={`flex h-6 w-12 cursor-pointer items-center rounded-full p-1 transition-colors ${details.dark_mode ? "bg-primary" : "bg-surface-container-highest"}`}>
                  <div className={`h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${details.dark_mode ? "translate-x-6" : "translate-x-0"}`} />
                </div>
              </div>
              <div className="flex items-center justify-between py-4">
                <div>
                  <div className="font-bold text-primary">Compact View</div>
                  <div className="text-sm text-on-surface-variant">Show more information with less spacing.</div>
                </div>
                <div className={`flex h-6 w-12 cursor-pointer items-center rounded-full p-1 transition-colors ${details.compact_view ? "bg-primary" : "bg-surface-container-highest"}`}>
                  <div className={`h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${details.compact_view ? "translate-x-6" : "translate-x-0"}`} />
                </div>
              </div>
            </div> */}
          </motion.section>
        </div>
      </motion.div>

      {showEditModal && (
        <EditProfile
          userData={userData}
          onClose={() => setShowEditModal(false)}
          onUpdate={fetchProfile}
        />
      )}
    </AppShell>
  );
}
