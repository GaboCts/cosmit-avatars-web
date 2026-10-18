import { create } from 'zustand'

export const useProviderStore = create((set) => ({
    providers: [],
    provider: null,
    providersError: null,
    isLoadingProviders: true,

    setProviders: (data) => set({providers: data}),
    setProvider: (data) => set({provider: data}),
    setProvidersError: (error) => set({providersError: error}),
    setIsLoadingProviders: () => set({isLoadingProviders: false})
}))