import { useState, useRef, useEffect } from 'react'
import { fetchProviders } from '../data/Providers'
import logoSrc from '../assets/logo.svg'

const BASE_URL = 'https://cosmitavatars.space/avatar/'

export function Hero() {
    const [providers, setProviders] = useState([])
    const [provider, setProvider] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const [avatarUrl, setAvatarUrl] = useState(null)
    const [isLoadingProviders, setIsLoadingProviders] = useState(true)
    const [providersError, setProvidersError] = useState(null)
    const dropdownRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    useEffect(() => {
        fetchProviders()
            .then(data => {
                setProviders(data)
                setProvider(data[0])
            })
            .catch(err => setProvidersError(err.message))
            .finally(() => setIsLoadingProviders(false))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!provider) return
        const username = e.target.profile.value.toLowerCase()
        if (!username.trim()) return
        const url = `${BASE_URL}${provider.slug}/${username}`
        setAvatarUrl(url)
    }

    return (
        <section className="hero container" id="search">
            <div className="eyebrow">
                <span className="eyebrow-dot"></span>
                ONE RESOURCE, MANY PROVIDERS.
            </div>

            <h1>
                Every profile.<br />
                <span>One place.</span>
            </h1>

            <p className="hero-description">
                Find profile images for your favorite platforms all in one place. Simple for you, practical for your projects.
            </p>

            <form className="search-panel" action="#" method="get" onSubmit={handleSubmit}>
                <label className="search-label" htmlFor="profile">
                    Look for a profile picture.
                </label>

                <div className="search-row">

                    <span className="url-prefix">{BASE_URL}</span>
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

                    <button className="search-button" type="submit">
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <circle
                                cx="10.8" cy="10.8" r="6.8"
                                stroke="currentColor" strokeWidth="1.8"
                            />
                            <path
                                d="m16 16 4.2 4.2"
                                stroke="currentColor" strokeWidth="1.8"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                </div>

                <p className="search-hint">
                    Enter a profile to get started. You don't need to create an account.
                </p>
            </form>

            <div className="provider-tags" aria-label="Featured platforms">
                <span className="provider-tag"><span className="tag-dot"></span>Twitch</span>
                <span className="provider-tag"><span className="tag-dot"></span>GitHub</span>
                <span className="provider-tag"><span className="tag-dot"></span>Reddit</span>
                <span className="provider-tag"><span className="tag-dot"></span>YouTube</span>
                <span className="provider-tag"><span className="tag-dot"></span>X</span>
            </div>

            <div className="avatar-result">
                <img
                    src={avatarUrl || logoSrc}
                    alt={avatarUrl ? `${provider.name} avatar` : 'Cosmit Avatars logo'}
                />
                {avatarUrl && (
                    <a href={avatarUrl} target="_blank" rel="noopener noreferrer" className="open-avatar">
                        Open original ↗
                    </a>
                )}
            </div>
        </section>
    )
}
