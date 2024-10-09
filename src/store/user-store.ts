import { create } from 'zustand';

interface User{
    name: string,
    email: string
}

type UserStore = {
    user: User | null,
    setUser: any
}

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    setUser: (user: User) => set(() => ({user}))
}))
