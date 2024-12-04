import { create } from 'zustand';
import { auth } from '../firebase/config';
import { signOut } from '@firebase/auth';

interface UserState {
  user: any | null;
  setUser: (userData: any) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
    user: null,

    setUser: (userData: any) => set({user: userData}),

    logout: async () => {
        try {
            await signOut(auth);
            set({ user: null });
        } catch (error) {
            console.error("Error signing out:", error);
        }
    },
}));
