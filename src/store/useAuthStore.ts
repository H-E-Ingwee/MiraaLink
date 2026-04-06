import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserProfile, UserRole } from '../types';

interface AuthState {
  user: UserProfile | null;
  token: string | null;
  language: 'en' | 'sw';
  isOffline: boolean;
  setUser: (user: UserProfile | null, token?: string | null) => void;
  setLanguage: (language: 'en' | 'sw') => void;
  setOffline: (offline: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      language: 'en',
      isOffline: false,
      setUser: (user, token) => set({ user, token: token ?? null }),
      setLanguage: (language) => set({ language }),
      setOffline: (offline) => set({ isOffline: offline }),
      logout: () => set({ user: null, token: null })
    }),
    {
      name: 'miraalink-auth',
      partialize: (state) => ({ user: state.user, token: state.token, language: state.language })
    }
  )
);
