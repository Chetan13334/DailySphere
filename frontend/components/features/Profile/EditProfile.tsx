"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { authService } from "@/lib/services/auth.service";

interface EditProfileProps {
  userData: any;
  onClose: () => void;
  onUpdate: () => void;
}

export default function EditProfile({ userData, onClose, onUpdate }: EditProfileProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    full_name: userData?.full_name || "",
    job_title: userData?.details?.job_title || "",
    company: userData?.details?.company || "",
    location: userData?.details?.location || "",
    currency: userData?.details?.currency || "USD",
    timezone: userData?.details?.timezone || "UTC",
    avatar_url: userData?.details?.avatar_url || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await authService.updateProfileDetails({
        full_name: formData.full_name,
        details: {
          job_title: formData.job_title,
          company: formData.company,
          location: formData.location,
          currency: formData.currency,
          timezone: formData.timezone,
          avatar_url: formData.avatar_url,
        },
      });

      if (result.error) {
        setError(result.error);
      } else {
        onUpdate();
        onClose();
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl rounded-3xl border border-outline-variant/10 bg-surface-container-low p-8 shadow-2xl"
      >
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-headline text-2xl font-bold text-primary">Edit Profile</h2>
          <button onClick={onClose} className="rounded-full p-2 hover:bg-surface-container-high">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {error && <div className="mb-6 rounded-xl bg-error-container p-4 text-sm text-on-error-container">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="mb-1.5 ml-1 block text-xs font-label font-semibold uppercase tracking-wider text-on-surface-variant">
                Full Name
              </label>
              <input
                className="w-full rounded-xl border border-outline-variant/10 bg-surface-container-lowest px-4 py-3 text-sm outline-none focus:border-primary"
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="mb-1.5 ml-1 block text-xs font-label font-semibold uppercase tracking-wider text-on-surface-variant">
                Job Title
              </label>
              <input
                className="w-full rounded-xl border border-outline-variant/10 bg-surface-container-lowest px-4 py-3 text-sm outline-none focus:border-primary"
                type="text"
                name="job_title"
                value={formData.job_title}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="mb-1.5 ml-1 block text-xs font-label font-semibold uppercase tracking-wider text-on-surface-variant">
                Company
              </label>
              <input
                className="w-full rounded-xl border border-outline-variant/10 bg-surface-container-lowest px-4 py-3 text-sm outline-none focus:border-primary"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="mb-1.5 ml-1 block text-xs font-label font-semibold uppercase tracking-wider text-on-surface-variant">
                Location
              </label>
              <input
                className="w-full rounded-xl border border-outline-variant/10 bg-surface-container-lowest px-4 py-3 text-sm outline-none focus:border-primary"
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="mb-1.5 ml-1 block text-xs font-label font-semibold uppercase tracking-wider text-on-surface-variant">
                Currency
              </label>
              <select
                className="w-full rounded-xl border border-outline-variant/10 bg-surface-container-lowest px-4 py-3 text-sm outline-none focus:border-primary"
                name="currency"
                value={formData.currency}
                onChange={handleChange}
              >
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
                <option value="INR">INR (₹)</option>
              </select>
            </div>

            <div>
              <label className="mb-1.5 ml-1 block text-xs font-label font-semibold uppercase tracking-wider text-on-surface-variant">
                Timezone
              </label>
              <input
                className="w-full rounded-xl border border-outline-variant/10 bg-surface-container-lowest px-4 py-3 text-sm outline-none focus:border-primary"
                type="text"
                name="timezone"
                value={formData.timezone}
                onChange={handleChange}
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-1.5 ml-1 block text-xs font-label font-semibold uppercase tracking-wider text-on-surface-variant">
                Profile Photo
              </label>
              <div className="flex items-center gap-4">
                <input
                  className="hidden"
                  type="file"
                  id="modal-photo-upload"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setFormData((prev) => ({ ...prev, avatar_url: reader.result as string }));
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={() => document.getElementById("modal-photo-upload")?.click()}
                  className="flex items-center gap-2 rounded-xl bg-surface-container-high px-4 py-3 text-sm font-semibold text-primary hover:bg-surface-container-highest"
                >
                  <span className="material-symbols-outlined text-lg">upload</span>
                  Upload from Device
                </button>
                <div className="flex-grow">
                  <input
                    className="w-full rounded-xl border border-outline-variant/10 bg-surface-container-lowest px-4 py-3 text-xs outline-none focus:border-primary"
                    type="text"
                    name="avatar_url"
                    value={formData.avatar_url}
                    onChange={handleChange}
                    placeholder="Or paste an image URL..."
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl px-6 py-3 text-sm font-semibold text-on-surface-variant hover:bg-surface-container-high"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="primary-gradient rounded-xl px-10 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:opacity-90 active:scale-95 disabled:opacity-50"
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
