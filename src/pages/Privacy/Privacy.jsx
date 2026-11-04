
import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import styles from './Privacy.module.css'
import { useProviderStore } from '../../store/providerStore'
import { fetchProviders } from '../../data/Providers'

const sections = [
    { id: 'about', title: 'About This Policy' },
    { id: 'information', title: 'Information We Collect' },
    { id: 'usage', title: 'How We Use Information' },
    { id: 'storage', title: 'Temporary Storage and Caching' },
    { id: 'third-party', title: 'Third-Party Services and APIs' },
    { id: 'external-links', title: 'External Websites and Links' },
    { id: 'changes', title: 'Changes to This Privacy Policy' },
    { id: 'contact', title: 'Contact Information' }
]

export default function Privacy () {
    const [activeSection, setActiveSection] = useState('about')
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
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter(entry => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            a.boundingClientRect.top - b.boundingClientRect.top
                    )

                if (visibleSections.length > 0) {
                    setActiveSection(visibleSections[0].target.id)
                }
            },
            {
                rootMargin: '-120px 0px -65% 0px',
                threshold: 0
            }
        )

        sections.forEach(({ id }) => {
            const element = document.getElementById(id)

            if (element) observer.observe(element)
        })

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
            <header className={styles.header}>
                <span className={styles.eyebrow}>LEGAL</span>

                <h1>Privacy Policy</h1>

                <p className={styles.description}>
                    Learn how Cosmit Avatars handles, processes,
                    and protects your information.
                </p>

                <span className={styles.updated}>
                    Last updated: November 3, 2026
                </span>
            </header>

            <div className={styles.layout}>
                <aside className={styles.sidebar}>
                    <span className={styles.sidebar__title}>
                        ON THIS PAGE
                    </span>

                    <nav>
                        {sections.map((section, index) => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                className={
                                    activeSection === section.id
                                        ? styles.active
                                        : ''
                                }
                                onClick={(event) =>
                                    handleNavigation(
                                        event,
                                        section.id
                                    )
                                }
                            >
                                <span>{String(index + 1).padStart(2, '0')}</span>
                                {section.title}
                            </a>
                        ))}
                    </nav>
                </aside>

                <article className={styles.content}>
                    <p className={styles.introduction}>
                        Cosmit Avatars ("we", "our", or "us") respects
                        your privacy and is committed to handling
                        information responsibly.
                    </p>

                    <p>
                        This Privacy Policy explains what information
                        may be collected, how it is used, how it is
                        stored, and what choices you have when using
                        our website and services.
                    </p>

                    <p>
                        By accessing or using Cosmit Avatars, you
                        acknowledge this Privacy Policy.
                    </p>

                    <section id="about">
                        <h2>1. About This Policy</h2>

                        <p>
                            Cosmit Avatars is a free online service
                            that allows users to retrieve and display
                            publicly available profile images from
                            supported third-party platforms.
                        </p>

                        <p>
                            The Service currently integrates with:
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
                            You do not need to create an account or
                            provide personal registration information
                            to use the core features of the Service.
                        </p>
                    </section>

                    <section id="information">
                        <h2>2. Information We Collect</h2>

                        <p>
                            We aim to minimize the information we
                            collect and process.
                        </p>

                        <p>
                            Depending on how you use the Service,
                            the following information may be processed.
                        </p>

                        <h3>2.1 Profile Search Information</h3>

                        <p>
                            When you request a profile image, we may
                            process:
                        </p>

                        <ul>
                            <li>The username, handle, or identifier you submit.</li>
                            <li>The third-party platform selected.</li>
                            <li>Profile information returned by the relevant platform.</li>
                            <li>The URL of the requested profile image.</li>
                            <li>Technical information necessary to process the request.</li>
                        </ul>

                        <p>
                            This information is used to provide the
                            requested functionality and maintain
                            the Service.
                        </p>

                        <h3>2.2 Technical and Server Information</h3>

                        <p>
                            When you access the website or use its
                            endpoints, our hosting infrastructure
                            or server may automatically process
                            technical information such as:
                        </p>

                        <ul>
                            <li>Request timestamps.</li>
                            <li>Requested URLs and HTTP response information.</li>
                            <li>Basic server and security logs.</li>
                        </ul>

                        <p>
                            The exact information collected depends
                            on our hosting provider, server
                            configuration, and security infrastructure.
                        </p>

                        <p>
                            We do not use this information to build
                            advertising profiles or track users across websites.
                        </p>

                        <h3>2.3 Cookies and Similar Technologies</h3>

                        <p>
                            Cosmit Avatars does not use advertising cookies,
                            analytics cookies, or cross-site tracking technologies.
                        </p>

                        <p>
                            However, essential technical storage
                            or similar technologies may be used
                            where necessary for the operation,
                            or performance of the Service.
                        </p>
                    </section>

                    <section id="usage">
                        <h2>3. How We Use Information</h2>

                        <p>
                            Information processed through Cosmit
                            Avatars may be used for the following
                            purposes:
                        </p>

                        <ul>
                            <li>Retrieve profile images requested by users.</li>
                            <li>Communicate with supported third-party APIs.</li>
                            <li>
                                Temporarily cache profile information
                                and image URLs to improve response times.
                            </li>
                            <li>Maintain and optimize the performance of the Service.</li>
                            <li>Identify and resolve technical errors.</li>
                            <li>Protect the security and integrity of our infrastructure.</li>
                        </ul>

                        <p>
                            We do not sell personal information or
                            use profile search information for
                            targeted advertising.
                        </p>
                    </section>

                    <section id="storage">
                        <h2>4. Temporary Storage and Caching</h2>

                        <p>
                            Cosmit Avatars may temporarily store
                            profile information and related data
                            to improve performance and reduce
                            unnecessary requests to third-party APIs.
                        </p>

                        <p>Cached information may include:</p>

                        <ul>
                            <li>Usernames or profile identifiers.</li>
                            <li>Platform identifiers.</li>
                            <li>Profile image URLs.</li>
                            <li>Public profile information returned by third-party APIs.</li>
                            <li>Cache timestamps and expiration metadata.</li>
                        </ul>

                        <p>
                            Cached information is retained only
                            for the period necessary for the
                            operation of the Service.
                        </p>

                        <div className={styles.notice}>
                            <strong>Cache retention period</strong>
                            <p>
                                3600 seconds (1 hour)
                            </p>
                        </div>

                        <p>
                            After the applicable retention period
                            expires, cached information is
                            automatically deleted or replaced,
                            subject to technical limitations and
                            backup or logging policies.
                        </p>

                        <p>
                            We do not intend to maintain permanent
                            user search histories or permanent
                            databases of profile images.
                        </p>
                    </section>

                    <section id="third-party">
                        <h2>5. Third-Party Services and APIs</h2>

                        <p>
                            Cosmit Avatars communicates with external
                            platforms to retrieve profile information.
                        </p>

                        <p>
                            These services operate independently
                            and have their own privacy policies,
                            terms of service, and data handling practices.
                        </p>

                        <div className={styles.notice}>
                            <strong>You can read each of the providers' privacy policies.</strong>
                        </div>

                        <p>
                            Profile information may be retrieved
                            through instance-specific APIs,
                            subject to the relevant instance's
                            configuration, access restrictions,
                            and authentication requirements.
                        </p>

                        <h3>5.8 Third-Party Data Processing</h3>

                        <p>
                            When we request information from these platforms,
                            the platform in question may process technical
                            information related to the request—such a
                            IP addresses or API credentials—in accordance
                            with its own policies. This data is provided
                            solely by our service and does not involve
                            or compromise any user data.
                        </p>

                        <p>
                            Additionally, profile images may be served
                            directly from third-party servers or conten
                            delivery networks. When your browser loads
                            an externally hosted image, the relevant
                            provider may receive technical information
                            about the user's connection.
                        </p>
                    </section>

                    <section id="external-links">
                        <h2>6. External Websites and Links</h2>

                        <p>
                            Our website may contain links to
                            third-party websites and services.
                        </p>

                        <p>
                            These links do not compromise any data
                            belonging to users who access them.
                        </p>

                        <p>
                            Accessing third-party websites is
                            entirely at your own discretion and
                            is subject to the terms and privacy
                            policies of those sites.
                        </p>
                    </section>

                    <section id="changes">
                        <h2>7. Changes to This Privacy Policy</h2>

                        <p>
                            We may update this Privacy Policy
                            from time to time to reflect changes
                            in our services, third-party
                            integrations, data processing
                            practices, or applicable laws.
                        </p>

                        <p>
                            Any changes will be published
                            on this page with an updated
                            "Last updated" date.
                        </p>

                        <p>
                            We encourage users to review
                            this page periodically.
                        </p>
                    </section>

                    <section id="contact">
                        <h2>8. Contact Information</h2>

                        <p>
                            If you have questions, concerns,
                            or requests regarding this Privacy
                            Policy or our data handling practices,
                            please contact us:
                        </p>

                        <div className={styles.contact}>
                            <span>Email</span>

                            <a href="mailto:contact@cosmitavatars.space">
                                contact@cosmitavatars.space
                            </a>

                            <span>Service</span>
                            <strong>Cosmit Avatars</strong>

                            <span>Website</span>
                            <a href="https://cosmitavatars.space">
                                cosmitavatars.space
                            </a>
                        </div>

                        <div className={styles.notice}>
                            <strong>Data Controller / Operator:</strong>
                            <a
                                href="https://github.com/GaboCts"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Gabriel
                            </a>

                            <strong>Country</strong>
                            <p>México</p>
                        </div>
                    </section>

                    <footer className={styles.footer}>
                        <p>
                            Your privacy matters to us.
                        </p>

                        <div>
                            <Link to="/terms-of-service">
                                Terms of Service
                            </Link>

                            <Link to="/">
                                Back to home
                            </Link>
                        </div>
                    </footer>
                </article>
            </div>
        </main>
    )
}
