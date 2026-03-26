const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export interface User {
  id: string;
  full_name: string;
  email: string;
}

export interface AuthResponse {
  message: string;
  token?: string;
  user?: User;
  error?: string;
}

export const authService = {
  async register(data: any): Promise<AuthResponse> {
    try {
      const response = await fetch(`${API_URL}/api/register`, {
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
      const response = await fetch(`${API_URL}/api/login`, {
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

      // Save token in localStorage
      if (result.token) {
        localStorage.setItem('auth_token', result.token);
        localStorage.setItem('user', JSON.stringify(result.user));
      }

      return result;
    } catch (error: any) {
      return { message: 'Network error', error: error.message };
    }
  },

  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
  },

  getCurrentUser(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  isAuthenticated(): boolean {
    return !!localStorage.getItem('auth_token');
  }
};
