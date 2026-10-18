import { create } from 'zustand'

export const useOutputStore = create((set) => ({
    inputText: "",

    setInputText: (text) => set({inputText: text})
}))