
import { useEffect, useState } from 'react'
import styles from './Docs.module.css'
import { Hero } from '../../components/Hero'
import { useProviderStore } from '../../store/providerStore.js'
import { fetchProviders } from '../../data/Providers.jsx'

const navigation = [
    {
        title: 'Getting Started',
        links: [
            { id: 'introduction', label: 'Introduction' },
            { id: 'overview', label: 'Overview' },
            { id: 'quick-start', label: 'Quick Start' }
        ]
    },
    {
        title: 'Providers',
        links: [
            { id: 'supported-providers', label: 'Supported Providers' },
            { id: 'provider-details', label: 'Provider Details' }
        ]
    },
    {
        title: 'Usage Guide',
        links: [
            { id: 'url-structure', label: 'URL Structure' },
            { id: 'retrieving-avatars', label: 'Retrieving Avatars' },
            { id: 'examples', label: 'Examples' },
            { id: 'error-handling', label: 'Error Handling' }
        ]
    },
    {
        title: 'Development',
        links: [
            { id: 'installation', label: 'Installation' },
            { id: 'configuration', label: 'Configuration' },
            { id: 'contributing', label: 'Contributing' }
        ]
    },
    {
        title: 'Project',
        links: [
            { id: 'license', label: 'License' },
            { id: 'acknowledgements', label: 'Acknowledgements' }
        ]
    }
]

const avatarExamples = [
    {
        provider: 'Xbox',
        username: 'xcosmo_',
        url: 'https://cosmitavatars.space/avatar/xbox/xcosmo_'
    },
    {
        provider: 'Twitch',
        username: 'xcosmo_',
        url: 'https://cosmitavatars.space/avatar/twitch/xcosmo_'
    },
    {
        provider: 'GitHub',
        username: 'gabocts',
        url: 'https://cosmitavatars.space/avatar/github/gabocts'
    }
]

export default function Dox () {
    const [activeSection, setActiveSection] = useState('introduction')
    const { providers, setProviders, setProvidersError, setIsLoadingProviders } = useProviderStore()
    
    useEffect(() => {
        fetchProviders()
            .then(data => {
                setProviders(data)
            })
            .catch(err => setProvidersError(err.message))
            .finally(() => setIsLoadingProviders())
    }, [])

    useEffect(() => {
        const elements = navigation
            .flatMap(group => group.links)
            .map(link => document.getElementById(link.id))
            .filter(Boolean)

        const observer = new IntersectionObserver(
            entries => {
                const visible = entries
                    .filter(entry => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            a.boundingClientRect.top -
                            b.boundingClientRect.top
                    )

                if (visible.length > 0) {
                    setActiveSection(visible[0].target.id)
                }
            },
            {
                rootMargin: '-100px 0px -65% 0px',
                threshold: 0
            }
        )

        elements.forEach(element => observer.observe(element))

        return () => observer.disconnect()
    }, [])

    const handleNavigation = (event, id) => {
        event.preventDefault()

        const target = document.getElementById(id)

        if (!target) return

        setActiveSection(id)

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    return (
        <main className={styles.main__content}>
            <aside
                className={styles.aside__content}
                aria-label="Documentation sidebar"
            >
                <nav aria-label="Documentation navigation">
                    {navigation.map(group => (
                        <div
                            key={group.title}
                            className={styles.sidebar__group}
                        >
                            <h2 className={styles.sidebar__title}>
                                {group.title}
                            </h2>

                            <ul className={styles.sidebar__list}>
                                {group.links.map(link => (
                                    <li key={link.id}>
                                        <a
                                            href={`#${link.id}`}
                                            className={[
                                                styles.sidebar__link,
                                                activeSection === link.id
                                                    ? styles.active
                                                    : ''
                                            ].filter(Boolean).join(' ')}
                                            aria-current={
                                                activeSection === link.id
                                                    ? 'location'
                                                    : undefined
                                            }
                                            onClick={event =>
                                                handleNavigation(
                                                    event,
                                                    link.id
                                                )
                                            }
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>
            </aside>

            <div className={styles.docs__content}>
                <Hero />

                <div className={styles.docs__body}>
                    <section
                        id="introduction"
                        className={styles.section}
                    >
                        <h2 className={styles.section__title}>
                            Introduction
                        </h2>

                        <p>
                            Welcome to Cosmit Avatars, an open-source
                            application designed to make profile pictures
                            easier to find and access across multiple
                            platforms.
                        </p>

                        <p>
                            By using a username and a supported provider,
                            you can retrieve profile avatars through simple,
                            consistent URLs.
                        </p>

                        <p>
                            This documentation explains how Cosmit Avatars
                            works, which providers are supported, and how
                            to use its available routes.
                        </p>

                        <p>
                            This resource was developed by <code><a className={ styles.blank__link } href="https://github.com/GaboCts" target="_blank" rel="noopener noreferrer" >Gabriel</a></code> to make the task of obtaining an avatar
                            and using it for various applications easier.
                        </p>
                    </section>

                    <section
                        id="overview"
                        className={styles.section}
                    >
                        <h2 className={styles.section__title}>
                            Overview
                        </h2>

                        <p>
                            Cosmit Avatars organizes avatar retrieval
                            around providers and usernames. Each provider
                            identifies a platform, while the username
                            identifies the profile whose avatar you
                            want to retrieve.
                        </p>

                        <h3>How to find your avatar</h3>

                        <ol>
                            <li>
                                Choose a supported provider.
                            </li>
                            <li>
                                Identify the username of the profile.
                            </li>
                            <li>
                                Build the corresponding avatar URL.
                            </li>
                            <li>
                                Request the URL to retrieve the avatar.
                            </li>
                        </ol>

                        <p>
                            The exact behavior depends on the provider
                            and the availability of the requested profile.
                        </p>
                    </section>

                    <section
                        id="quick-start"
                        className={styles.section}
                    >
                        <h2 className={styles.section__title}>
                            Quick Start
                        </h2>

                        <p>
                            The easiest way to use Cosmit Avatars is
                            to open an avatar URL in your browser or
                            use it as the source of an image element.
                        </p>

                        <p>
                            For example, the following URL requests
                            the Twitch avatar for the username
                            <code> <a className={ styles.blank__link } href="https://cosmitavatars.space/avatar/twitch/xcosmo_" target="_blank" rel="noopener noreferrer" >xCosmo_</a></code>.
                        </p>

                        <pre>
                            <code>
                                https://cosmitavatars.space/avatar/twitch/xcosmo_
                            </code>
                        </pre>

                        <p>
                            You can also display the avatar directly
                            in an HTML document.
                        </p>

                        <pre>
                            <code>{
                            `<img 
    src="https://cosmitavatars.space/avatar/twitch/xcosmo_"
    alt="Twitch profile avatar"
/>`}</code>
                        </pre>

                        <p>
                            Replace the provider and username with
                            the values for the profile you want to
                            retrieve.
                        </p>
                    </section>

                    <section
                        id="supported-providers"
                        className={styles.section}
                    >
                        <h2 className={styles.section__title}>
                            Supported Providers
                        </h2>

                        <p>
                            Cosmit Avatars supports avatar retrieval
                            from multiple platforms. Each provider
                            uses its own identifier in the avatar URL.
                        </p>

                        <p>
                            Here is a list of all available providers:
                        </p>

                        <div className="providers-grid">
                            {providers.map((p) => (
                                <button key={p.name} className="provider-menu-button" >
                                    <img className="provider-logo" src={p.logoUrl} alt={p.name} />
                                    <div className="provider-info">
                                        <span className="provider-name">{p.name}</span>
                                        <p className="provider-site">{p.providerSite}</p>
                                    </div>
                                </button>
                            ))}
                        </div>

                        <p>
                            You can also search for the list of providers using the following address:
                        </p>

                        <pre>
                            <a href="https://cosmitavatars.space/providers" target="_blank" rel="noopener noreferrer" ><code>{`https://cosmitavatars.space/providers`}</code></a>
                        </pre>

                        <p>
                            You will receive a response containing a list of
                            all compatible providers, structured as follows::
                        </p>

                        <pre>
                            <code>{`{
    "providers": {
        "{provider_slug}": {
            "provider": "{Provider name}",
            "logo_url": "https://cosmitavatars.space/providers/{provider_logo}.svg",
            "input_type": "{Requested_input_type}",
            "provider_site": "{provider_url}"
        }
    }
}`}</code>
                        </pre>

                    </section>

                    <section
                        id="provider-details"
                        className={styles.section}
                    >
                        <h2 className={styles.section__title}>
                            Provider Details
                        </h2>
                    </section>

                    <section
                        id="url-structure"
                        className={styles.section}
                    >
                        <h2 className={styles.section__title}>
                            URL Structure
                        </h2>
                    </section>

                    <section
                        id="retrieving-avatars"
                        className={styles.section}
                    >
                        <h2 className={styles.section__title}>
                            Retrieving Avatars
                        </h2>
                    </section>

                    <section
                        id="examples"
                        className={styles.section}
                    >
                        <h2 className={styles.section__title}>
                            Examples
                        </h2>
                    </section>

                    <section
                        id="error-handling"
                        className={styles.section}
                    >
                        <h2 className={styles.section__title}>
                            Error Handling
                        </h2>
                    </section>

                    <section
                        id="installation"
                        className={styles.section}
                    >
                        <h2 className={styles.section__title}>
                            Installation
                        </h2>
                    </section>

                    <section
                        id="configuration"
                        className={styles.section}
                    >
                        <h2 className={styles.section__title}>
                            Configuration
                        </h2>
                    </section>

                    <section
                        id="contributing"
                        className={styles.section}
                    >
                        <h2 className={styles.section__title}>
                            Contributing
                        </h2>
                    </section>

                    <section
                        id="license"
                        className={styles.section}
                    >
                        <h2 className={styles.section__title}>
                            License
                        </h2>
                    </section>

                    <section
                        id="acknowledgements"
                        className={styles.section}
                    >
                        <h2 className={styles.section__title}>
                            Acknowledgements
                        </h2>
                    </section>
                </div>
            </div>
        </main>
    )
}
