import { useAvatarStore } from '../store/avatarStore.js'
import { useProviderStore } from '../store/providerStore.js'
import { SearchRow } from './SearchRow'
import { BASE_URL } from '../data/config.js'

export function SearchForm () {
    const { provider } = useProviderStore()
    const { setAvatarUrl } = useAvatarStore()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!provider) return
        const username = e.target.profile.value.toLowerCase()
        if (!username.trim()) return
        const url = `${BASE_URL}${provider.slug}/${username}`
        setAvatarUrl(url)
    }

    return (
        <>
            <form className="search-panel" action="#" id="try" method="get" onSubmit={handleSubmit}>
                <label className="search-label" htmlFor="profile">
                    Try looking for a profile picture
                </label>

                <SearchRow BASE_URL={ BASE_URL }/>

                <p className="search-hint">
                    Enter a profile to get started. You don't need to create an account.
                </p>
            </form>
        </>
    )
}