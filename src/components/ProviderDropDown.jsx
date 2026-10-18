import { useState, useRef, useEffect } from 'react'
import { fetchProviders } from '../data/Providers'
import { useProviderStore } from '../store/providerStore.js'

export function ProviderDropDown () {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)
    const { provider, providers, setProvider, setProviders, providersError, setProvidersError, isLoadingProviders, setIsLoadingProviders } = useProviderStore()

    useEffect(() => {
        fetchProviders()
            .then(data => {
                setProviders(data)
                setProvider(data[0])
            })
            .catch(err => setProvidersError(err.message))
            .finally(() => setIsLoadingProviders())
    }, [])

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className="provider-dropdown" ref={dropdownRef}>
            {isLoadingProviders ? (
                <button type="button" className="provider-trigger" disabled>
                    <span className="provider-name">Loading providers...</span>
                </button>
            ) : providersError ? (
                <button type="button" className="provider-trigger" disabled>
                    <span className="provider-name">Error loading providers</span>
                </button>
            ) : provider && (
                <>
                    <button
                        type="button"
                        className="provider-trigger"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-haspopup="listbox"
                    >
                        {provider.logoUrl ? (
                            <img className="provider-logo" src={provider.logoUrl} alt={provider.name} />
                        ) : (
                            provider.icon && <span className="provider-icon">{provider.icon}</span>
                        )}
                        <span className="provider-name">{provider.name}</span>
                        <svg
                            className={`dropdown-arrow ${isOpen ? 'open' : ''}`}
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="m6 9 6 6 6-6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    {isOpen && (
                        <ul className="provider-menu" role="listbox">
                            {providers.map((p) => (
                                <li key={p.name} role="option" aria-selected={p.name === provider.name}>
                                    <button
                                        type="button"
                                        className={`provider-option ${p.name === provider.name ? 'active' : ''}`}
                                        onClick={() => {
                                            setProvider(p)
                                            setIsOpen(false)
                                        }}
                                    >
                                        {p.logoUrl ? (
                                            <img className="provider-logo" src={p.logoUrl} alt={p.name} />
                                        ) : (
                                            p.icon && <span className="provider-icon">{p.icon}</span>
                                        )}
                                        <span>{p.name}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            )}
        </div>
    )
}