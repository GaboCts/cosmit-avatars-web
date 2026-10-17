import { create } from 'zustand'

export const useAvatarStore = create((set) => ({
    avatarUrl: null,

    setAvatarUrl: (url) => set({avatarUrl: url})
}))