const PROVIDER_URL = 'https://cosmitavatars.space/providers'

export async function fetchProviders() {
    const response = await fetch(PROVIDER_URL)
    if (!response.ok) {
        throw new Error(`Failed to load providers: ${response.status}`)
    }
    const data = await response.json()

    return Object.values(data.providers).map(p => ({
        name: p.provider,
        logoUrl: p.logo_url,
        slug: p.provider.toLowerCase().replace(/\s+/g, ''),
        inputType: p.input_type
    }))
}
