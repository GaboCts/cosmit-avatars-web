import { useState, useRef, useEffect } from 'react'
import logoSrc from '../assets/logo.svg'
import { useAvatarStore } from '../store/avatarStore'
import { useProviderStore } from '../store/providerStore'
import { useOutputStore } from '../store/outputStore'
import { BASE_URL, FORMATS } from '../data/config.js'

export function AvatarResult () {
    const { avatarUrl } = useAvatarStore()
    const { provider } = useProviderStore()
    const [format, setFormat] = useState(FORMATS[0])
    const [isOpen, setIsOpen] = useState(false)
    const [copied, setCopied] = useState(false)
    const dropdownRef = useRef(null)
    const { inputText } = useOutputStore()

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const username = inputText.trim().toLowerCase()
    const alt = `${provider?.name ?? 'avatar'} profile picture`

    let output = ''

    if (provider) {
        switch (format.id) {
            case 'html':
                output = username == ''
                    ? `<img src="${BASE_URL}${provider.slug}/${provider.inputType}" />`
                    : `<img src="${BASE_URL}${provider.slug}/${username}" />`
                break
            case 'javascript':
                output = username == ''
                    ? `await fetch(${BASE_URL}${provider.slug}/${provider.inputType}')`
                    : `await fetch('${BASE_URL}${provider.slug}/${username}')`
                break
            default: output = `<img src="${BASE_URL}${provider.slug}/${provider.inputType}" alt="${alt}" />`
        }
    }

    const handleCopy = async () => {
        if (!output) return
        try {
            await navigator.clipboard.writeText(output)
        } catch {
            const textarea = document.createElement('textarea')
            textarea.value = output
            document.body.appendChild(textarea)
            textarea.select()
            document.execCommand('copy')
            document.body.removeChild(textarea)
        }
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    }

    return (
        <div className="avatar-result">
            <div className="image-source">
                <div className="image-source-dropdown" ref={dropdownRef}>
                    <button
                        type="button"
                        className="image-source-trigger"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-haspopup="listbox"
                    >
                        <span>{format.label}</span>
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
                        <ul className="image-source-menu" role="listbox">
                            {FORMATS.map((f) => (
                                <li key={f.id} role="option" aria-selected={f.id === format.id}>
                                    <button
                                        type="button"
                                        className={`image-source-option ${f.id === format.id ? 'active' : ''}`}
                                        onClick={() => {
                                            setFormat(f)
                                            setIsOpen(false)
                                        }}
                                    >
                                        {f.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <p className="image-source-data">{output}</p>

                <button
                    type="button"
                    className="image-source-copy"
                    onClick={handleCopy}
                    disabled={!output}
                    aria-label="Copy"
                    title={copied ? 'Copied!' : 'Copy'}
                >
                    {copied ? (
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path
                                d="m5 13 4 4L19 7"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="14.875 10.5 34.25 43"
                            enableBackground="new 0 0 64 64"
                            aria-hidden="true"
                        >
                            <g>
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit="10"
                                    d="M24.125,36.42c0,3.36,2.72,6.08,6.08,6.08h12.34c3.36,0,6.08-2.72,6.08-6.08V17.08c0-3.36-2.72-6.08-6.08-6.08h-12.34c-3.36,0-6.08,2.72-6.08,6.08V36.42z"
                                />
                            </g>
                            <g>
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit="10"
                                    d="M41.625,31.25v16.07c0,3.13-2.55,5.68-5.68,5.68h-14.89c-3.13,0-5.68-2.55-5.68-5.68V27.18c0-3.13,2.55-5.68,5.68-5.68h10.82"
                                />
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit="10"
                                    d="M31.125,22.246v6.041c0,2.0506,1.6624,3.713,3.713,3.713h6.041c0.6633,0,0.9955-0.802,0.5265-1.271l-9.0094-9.0094C31.927,21.2505,31.125,21.5827,31.125,22.246z"
                                />
                            </g>
                        </svg>
                    )}
                </button>
            </div>

            <img
                src={avatarUrl || logoSrc}
                alt={avatarUrl ? `${provider?.name} avatar` : 'Cosmit Avatars logo'}
            />
            {avatarUrl && (
                <a href={avatarUrl} target="_blank" rel="noopener noreferrer" className="open-avatar">
                    Open original ↗
                </a>
            )}
        </div>
    )
}
