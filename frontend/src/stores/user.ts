import create from 'zustand'

interface User {
    id: number
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
}

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    setUser: (data: User) => set(() => ({ user: data }))
}))