import create from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
    userId: number
    cpf: string
    name: string
    age: number
    sex: string
    email: string
    password: string
}

interface UserStore {
    user: User | null
    setUser: any
    removeUser: any
}

export const useUserStore = create<UserStore>()(persist((set) => ({
    user: null,
    setUser: (data: User) => set(() => ({ user: data })),
    removeUser: () => set(() => ({ user: null }))
}), {
    name: 'user-store',
    getStorage: () => localStorage
}))