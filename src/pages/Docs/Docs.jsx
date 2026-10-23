
import { useEffect, useState } from 'react'
import styles from './Docs.module.css'
import { Hero } from '../../components/Hero'
import { useNavigateToSection } from '../../hooks/useNavigateToSection'

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
            { id: 'provider-routes', label: 'Provider Routes' }
        ]
    },
    {
        title: 'Usage Guide',
        links: [
            { id: 'url-structure', label: 'URL Structure' },
            { id: 'examples', label: 'Examples' }
        ]
    },
    {
        title: 'Project',
        links: [
            { id: 'contributing', label: 'Contributing' },
            { id: 'license', label: 'License' }
        ]
    }
]

export default function Docs () {
    const [activeSection, setActiveSection] = useState('introduction')
    const { navigateToSection } = useNavigateToSection()

    useEffect(() => {
        const sections = navigation.flatMap(group => group.links)

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter(entry => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            a.boundingClientRect.top -
                            b.boundingClientRect.top
                    )

                if (visibleSections.length > 0) {
                    setActiveSection(visibleSections[0].target.id)
                }
            },
            {
                rootMargin: '-80px 0px -65% 0px',
                threshold: 0
            }
        )

        sections.forEach(({ id }) => {
            const element = document.getElementById(id)

            if (element) {
                observer.observe(element)
            }
        })

        return () => observer.disconnect()
    }, [])

    return (
        <main className={styles.main__content}>
            <aside
                className={styles.aside__content}
                aria-label="Documentation sidebar"
            >
                <nav aria-label="Documentation navigation">
                    {navigation.map((group) => (
                        <div
                            key={group.title}
                            className={styles.sidebar__group}
                        >
                            <h2 className={styles.sidebar__title}>
                                {group.title}
                            </h2>

                            <ul className={styles.sidebar__list}>
                                {group.links.map((link) => (
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
                                            onClick={(e) => {
                                                    navigateToSection(e, link.id, '/docs')
                                                    setActiveSection(link.id)
                                                }
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
                            This resource was developed by <a className={ styles.github__link } href="https://github.com/GaboCts" target="_blank" rel="noopener noreferrer" >Gabriel</a> to make the task of obtaining an avatar
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
                            Cosmit Avatars brings profile images from
                            different platforms together in one place.
                            Each provider has its own route for retrieving
                            a user's avatar.
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
                            To get started, choose a supported provider
                            and enter the username of the profile you
                            want to retrieve.
                        </p>

                        <p>
                            Refer to the provider documentation for the
                            correct route and username format.
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
                            Cosmit Avatars supports multiple platforms.
                            Each provider may have different requirements
                            for identifying users and retrieving avatars.
                        </p>

                        {/* Add your provider list here. */}
                    </section>

                    <section
                        id="provider-routes"
                        className={styles.section}
                    >
                        <h2 className={styles.section__title}>
                            Provider Routes
                        </h2>

                        <p>
                            Each provider has a dedicated route for
                            retrieving profile images. See the examples
                            in the Usage Guide for more information.
                        </p>
                    </section>

                    <section
                        id="url-structure"
                        className={styles.section}
                    >
                        <h2 className={styles.section__title}>
                            URL Structure
                        </h2>

                        <p>
                            Avatar URLs follow a provider-specific
                            structure. Replace the provider and username
                            with the values corresponding to the profile
                            you want to retrieve.
                        </p>
                    </section>

                    <section
                        id="examples"
                        className={styles.section}
                    >
                        <h2 className={styles.section__title}>
                            Examples
                        </h2>

                        <p>
                            Use this section to document real URLs,
                            supported parameters, and example responses.
                        </p>
                    </section>

                    <section
                        id="contributing"
                        className={styles.section}
                    >
                        <h2 className={styles.section__title}>
                            Contributing
                        </h2>

                        <p>
                            Contributions, improvements, and bug reports
                            are welcome. Visit the project repository
                            to learn how to contribute.
                        </p>
                    </section>

                    <section
                        id="license"
                        className={styles.section}
                    >
                        <h2 className={styles.section__title}>
                            License
                        </h2>

                        <p>
                            Cosmit Avatars is open source. Refer to the
                            project's LICENSE file for the applicable
                            terms of use, modification, and distribution.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    )
}
