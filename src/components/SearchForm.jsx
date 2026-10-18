import { SubmitButton } from './SubmitButton'
import { useAvatarStore } from '../store/avatarStore.js'
import { useProviderStore } from '../store/providerStore..js'
import { ProviderDropDown } from './ProviderDropDown.jsx'

const BASE_URL = 'https://cosmitavatars.space/avatar/'

const VALID_INPUT_TYPES = ['text', 'email', 'number', 'url', 'tel', 'search', 'password']

function SearchRow () {
    const { provider } = useProviderStore()

    return (
        <div className="search-row">
            <span className="url-prefix">{BASE_URL}</span>
            <ProviderDropDown />

            <span className="url-bar">/</span>

            <div className="input-wrapper">

                <input
                    key={provider?.slug}
                    id="profile"
                    name="profile"
                    type={VALID_INPUT_TYPES.includes(provider?.inputType) ? provider.inputType : 'text'}
                    placeholder={provider?.inputType || 'Username'}
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
            <form className="search-panel" action="#" id="try" method="get" onSubmit={handleSubmit}>
                <label className="search-label" htmlFor="profile">
                    Try looking for a profile picture
                </label>

                <SearchRow />

                <p className="search-hint">
                    Enter a profile to get started. You don't need to create an account.
                </p>
            </form>
        </>
    )
}