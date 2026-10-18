import { useOutputStore } from '../store/outputStore.js'
import { useProviderStore } from '../store/providerStore.js'
import { SubmitButton } from './SubmitButton'
import { ProviderDropDown } from './ProviderDropDown'

const VALID_INPUT_TYPES = ['text', 'email', 'number', 'url', 'tel', 'search', 'password']

export function SearchRow ({ BASE_URL }) {
    const { provider } = useProviderStore()
    const { setInputText } = useOutputStore()

    const handleTextChange = (e) => {
        const text = e.target.value
        setInputText(text)
    }

    return (
        <div className="search-row">
            <span className="url-prefix">{ BASE_URL }</span>
            <ProviderDropDown />

            <span className="url-bar">/</span>

            <div className="input-wrapper">

                <input
                    id="profile"
                    name="profile"
                    onChange={ handleTextChange }
                    type={VALID_INPUT_TYPES.includes(provider?.inputType) ? provider.inputType : 'text'}
                    placeholder={provider?.inputType || 'Username'}
                    autoComplete="off"
                />
            </div>

            <SubmitButton />
        </div>
    )
}