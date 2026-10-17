import { SubmitButton } from './SubmitButton'
import { useAvatarStore } from '../store/avatarStore.js'
import { useProviderStore } from '../store/providerStore..js'
import { ProviderDropDown } from './ProviderDropDown.jsx'

const BASE_URL = 'http://localhost:3000/avatar/'

function SearchRow () {
    return (
        <div className="search-row">
            <span className="url-prefix">{BASE_URL}</span>
            <ProviderDropDown />

            <span className="url-bar">/</span>

            <div className="input-wrapper">

                <input
                    id="profile"
                    name="profile"
                    type="text"
                    placeholder="Username..."
                    autoComplete="off"
                />
            </div>

            <SubmitButton />
        </div>
    )
}

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
            <form className="search-panel" action="#" method="get" onSubmit={handleSubmit}>
                <label className="search-label" htmlFor="profile">
                    Look for a profile picture.
                </label>

                <SearchRow />

                <p className="search-hint">
                    Enter a profile to get started. You don't need to create an account.
                </p>
            </form>
        </>
    )
}