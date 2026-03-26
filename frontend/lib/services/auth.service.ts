export interface User {
  id: string;
  full_name: string;
  email: string;
}

export interface AuthResponse {
  message: string;
  user?: User;
  error?: string;
}

export interface ProfileDetails extends User {
  details?: Record<string, any>;
}

export const authService = {
  async register(data: any): Promise<AuthResponse> {
    try {
      const response = await fetch("/api/auth/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: data.full_name,
          email: data.email,
          password: data.password,
        }),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Registration failed');
      return result;
    } catch (error: any) {
      return { message: 'Network error', error: error.message };
    }
  },

  async login(data: any): Promise<AuthResponse> {
    try {
      const response = await fetch("/api/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Login failed');

      return result;
    } catch (error: any) {
      return { message: 'Network error', error: error.message };
    }
  },

  async logout(): Promise<void> {
    await fetch("/api/auth/logout", {
      method: "POST",
    });
  },

  async getCurrentUser(): Promise<User | null> {
    const response = await fetch("/api/auth/session", {
      method: "GET",
      cache: "no-store",
    });

    const result = await response.json();

    return result?.authenticated ? result.user ?? null : null;
  },

  async getProfileDetails(): Promise<ProfileDetails | null> {
    const response = await fetch("/api/auth/profile", {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    return response.json();
  },

  async updateProfileDetails(data: any): Promise<any> {
    try {
      const response = await fetch("/api/auth/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Update failed");
      return result;
    } catch (error: any) {
      console.error("Update Error:", error.message);
      return { error: error.message };
    }
  },

  async isAuthenticated(): Promise<boolean> {
    const response = await fetch("/api/auth/session", {
      method: "GET",
      cache: "no-store",
    });

    const result = await response.json();

    return Boolean(result?.authenticated);
  }
};
