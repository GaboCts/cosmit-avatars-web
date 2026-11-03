
import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { useProviderStore } from '../../store/providerStore.js'
import { fetchProviders } from '../../data/Providers'
import styles from './TermsOfService.module.css'

const sections = [
    { id: 'acceptance', title: 'Acceptance of Terms' },
    { id: 'about', title: 'About Cosmit Avatars' },
    { id: 'eligibility', title: 'Eligibility' },
    { id: 'acceptable-use', title: 'Acceptable Use' },
    { id: 'third-party', title: 'Third-Party Services and Content' },
    { id: 'intellectual-property', title: 'Intellectual Property' },
    { id: 'availability', title: 'Service Availability' },
    { id: 'disclaimer', title: 'Disclaimer of Warranties' },
    { id: 'liability', title: 'Limitation of Liability' },
    { id: 'indemnification', title: 'Indemnification' },
    { id: 'privacy', title: 'Privacy' },
    { id: 'changes', title: 'Changes to These Terms' },
    { id: 'governing-law', title: 'Governing Law' },
    { id: 'severability', title: 'Severability' },
    { id: 'contact', title: 'Contact Information' }
]

export default function TermsOfService() {
    const [activeSection, setActiveSection] = useState('acceptance')
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

                <h1>Terms of Service</h1>

                <p className={styles.description}>
                    Please read these terms carefully before using
                    Cosmit Avatars.
                </p>

                <span className={styles.updated}>
                    Last updated: November 2, 2026
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
                        Welcome to <strong>Cosmit Avatars</strong>. These
                        Terms of Service ("Terms") govern your access to
                        and use of the Cosmit Avatars website and services
                        (collectively, the "Service").
                    </p>

                    <p>
                        By accessing or using Cosmit Avatars, you agree
                        to these Terms. If you do not agree, please do
                        not use the Service.
                    </p>

                    <section id="acceptance">
                        <h2>1. Acceptance of Terms</h2>

                        <p>
                            By accessing, browsing, or using Cosmit
                            Avatars, you acknowledge that you have read,
                            understood, and agree to be bound by these
                            Terms and any applicable laws and regulations.
                        </p>

                        <p>
                            These Terms apply to all visitors and users
                            of the Service, regardless of how they access
                            or use it.
                        </p>
                    </section>

                    <section id="about">
                        <h2>2. About Cosmit Avatars</h2>

                        <p>
                            Cosmit Avatars is a free online service that
                            allows users to retrieve and display publicly
                            available profile images from supported
                            third-party platforms.
                        </p>

                        <p>The Service currently supports integrations with:</p>

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
                            Cosmit Avatars does not require users to
                            create an account or register to use its
                            core features.
                        </p>

                        <p>
                            Supported platforms and features may change
                            over time.
                        </p>
                    </section>

                    <section id="eligibility">
                        <h2>3. Eligibility</h2>

                        <p>
                            You may use the Service provided that:
                        </p>

                        <ul>
                            <li>
                                You comply with these Terms and all
                                applicable laws and regulations.
                            </li>
                            <li>
                                You do not use the Service for unlawful
                                or unauthorized purposes.
                            </li>
                            <li>
                                You are legally permitted to access
                                and use the Service in your jurisdiction.
                            </li>
                        </ul>

                        <p>
                            If you are under the age required to
                            independently agree to these Terms in
                            your jurisdiction, you must have permission
                            from your parent or legal guardian.
                        </p>
                    </section>

                    <section id="acceptable-use">
                        <h2>4. Acceptable Use</h2>

                        <p>
                            You agree not to:
                        </p>

                        <ul>
                            <li>
                                Use the Service for illegal, fraudulent,
                                abusive, or harmful activities.
                            </li>
                            <li>
                                Attempt to disrupt, overload, damage,
                                or interfere with the Service or its
                                infrastructure.
                            </li>
                            <li>
                                Circumvent rate limits, security measures,
                                or technical restrictions.
                            </li>
                            <li>
                                Use automated requests or scraping
                                techniques in a manner that abuses
                                the Service or violates applicable
                                third-party policies.
                            </li>
                            <li>
                                Attempt to gain unauthorized access
                                to systems, servers, or APIs used by
                                Cosmit Avatars.
                            </li>
                            <li>
                                Redistribute or commercially exploit
                                content obtained through the Service
                                in violation of applicable laws or
                                third-party rights.
                            </li>
                            <li>
                                Misrepresent your affiliation with
                                Cosmit Avatars or any supported platform.
                            </li>
                        </ul>

                        <p>
                            We reserve the right to restrict or block
                            access to users or requests that violate
                            these Terms or threaten the stability
                            and security of the Service.
                        </p>
                    </section>

                    <section id="third-party">
                        <h2>5. Third-Party Services and Content</h2>

                        <p>
                            Cosmit Avatars integrates with third-party
                            platforms to retrieve publicly available
                            profile information and images.
                        </p>

                        <p>When using the Service, you acknowledge that:</p>

                        <ul>
                            <li>
                                Profile images, usernames, account
                                information, and other profile content
                                belong to their respective owners or
                                rights holders.
                            </li>
                            <li>
                                Such content is provided by or retrieved
                                through third-party services.
                            </li>
                            <li>
                                Cosmit Avatars does not own, control,
                                or claim ownership of third-party
                                profile content.
                            </li>
                            <li>
                                The availability, accuracy, and
                                accessibility of profile information
                                depend on the respective platform.
                            </li>
                            <li>
                                Third-party platforms may change,
                                restrict, or discontinue their APIs
                                or services without notice.
                            </li>
                        </ul>

                        <p>
                            Each platform operates independently and
                            is subject to its own terms, privacy policies,
                            API policies, and usage restrictions.
                        </p>

                        <p>
                            Your use of third-party content must comply
                            with the applicable platform's terms and
                            policies.
                        </p>

                        <h3>5.1 Third-Party API Limitations</h3>

                        <p>
                            Cosmit Avatars relies on APIs and services
                            provided by third parties. These integrations
                            may be subject to:
                        </p>

                        <ul>
                            <li>API rate limits and usage quotas.</li>
                            <li>Authentication and authorization requirements.</li>
                            <li>Access restrictions and eligibility requirements.</li>
                            <li>Geographic or account-based limitations.</li>
                            <li>Changes to API endpoints and response formats.</li>
                            <li>
                                Restrictions on storing, displaying,
                                or redistributing retrieved information.
                            </li>
                        </ul>

                        <p>
                            Cosmit Avatars cannot guarantee that every
                            profile can be retrieved successfully.
                        </p>
                    </section>

                    <section id="intellectual-property">
                        <h2>6. Intellectual Property</h2>

                        <p>
                            The Cosmit Avatars website, including its
                            original design, branding, interface,
                            source code, and other original materials,
                            is owned by or licensed to the Service
                            operator, unless otherwise stated.
                        </p>

                        <p>
                            You may not copy, modify, distribute,
                            or commercially exploit original materials
                            belonging to Cosmit Avatars without
                            permission, except where permitted by
                            applicable law or an applicable open-source
                            license.
                        </p>

                        <p>
                            Third-party names, logos, trademarks,
                            profile images, and other materials remain
                            the property of their respective owners.
                        </p>

                        <p>
                            Nothing in these Terms grants you ownership
                            of third-party intellectual property.
                        </p>
                    </section>

                    <section id="availability">
                        <h2>7. Service Availability</h2>

                        <p>
                            We aim to keep Cosmit Avatars available
                            and functional. However, we do not guarantee
                            uninterrupted, error-free, or continuous
                            operation.
                        </p>

                        <p>The Service may be temporarily unavailable due to:</p>

                        <ul>
                            <li>Maintenance or technical updates.</li>
                            <li>Server or infrastructure failures.</li>
                            <li>Third-party API outages or restrictions.</li>
                            <li>Network connectivity problems.</li>
                            <li>
                                Security incidents or other circumstances
                                beyond our control.
                            </li>
                        </ul>

                        <p>
                            We reserve the right to modify, suspend,
                            restrict, or discontinue any part of the
                            Service at any time.
                        </p>
                    </section>

                    <section id="disclaimer">
                        <h2>8. Disclaimer of Warranties</h2>

                        <p>
                            Cosmit Avatars is provided on an
                            <strong> "AS IS" and "AS AVAILABLE" </strong>
                            basis, without warranties of any kind,
                            whether express, implied, or statutory.
                        </p>

                        <p>
                            To the maximum extent permitted by applicable
                            law, we disclaim all warranties, including
                            but not limited to:
                        </p>

                        <ul>
                            <li>Accuracy, reliability, or completeness of retrieved information.</li>
                            <li>Availability of profile images or third-party services.</li>
                            <li>Fitness for a particular purpose.</li>
                            <li>Non-infringement.</li>
                            <li>Continuous or error-free operation.</li>
                        </ul>

                        <p>
                            We do not guarantee that the Service will
                            meet your specific requirements or expectations.
                        </p>
                    </section>

                    <section id="liability">
                        <h2>9. Limitation of Liability</h2>

                        <p>
                            To the maximum extent permitted by applicable
                            law, Cosmit Avatars and its operator shall
                            not be liable for any indirect, incidental,
                            special, consequential, or punitive damages,
                            including loss of profits, data, business
                            opportunities, or reputation arising from
                            or related to your use of the Service.
                        </p>

                        <p>We are not responsible for:</p>

                        <ul>
                            <li>The accuracy or availability of third-party profile information.</li>
                            <li>Changes or interruptions to third-party APIs.</li>
                            <li>Actions taken by third-party platforms.</li>
                            <li>
                                Unauthorized use of profile images or
                                other third-party content by users.
                            </li>
                            <li>Temporary data loss or service interruptions.</li>
                        </ul>

                        <p>
                            Nothing in these Terms excludes or limits
                            liability that cannot legally be excluded
                            or limited under applicable law.
                        </p>
                    </section>

                    <section id="indemnification">
                        <h2>10. Indemnification</h2>

                        <p>
                            You agree to indemnify and hold harmless
                            Cosmit Avatars and its operator from claims,
                            liabilities, damages, losses, and expenses
                            arising from your unlawful use of the
                            Service, your violation of these Terms,
                            or your infringement of third-party rights.
                        </p>

                        <p>
                            This provision applies only to the extent
                            permitted by applicable law.
                        </p>
                    </section>

                    <section id="privacy">
                        <h2>11. Privacy</h2>

                        <p>
                            Your use of Cosmit Avatars is also governed
                            by our Privacy Policy, which explains how
                            information is collected, processed,
                            stored, and protected.
                        </p>

                        <p>
                            You can review it at{' '}
                            <Link to="/privacy-policy">
                                Privacy Policy
                            </Link>.
                        </p>
                    </section>

                    <section id="changes">
                        <h2>12. Changes to These Terms</h2>

                        <p>
                            We may update these Terms from time to
                            time to reflect changes to the Service,
                            applicable laws, or our operating practices.
                        </p>

                        <p>
                            Updated Terms will be published on this
                            page with a revised "Last updated" date.
                        </p>

                        <p>
                            Your continued use of the Service after
                            changes become effective constitutes
                            acceptance of the updated Terms, to the
                            extent permitted by applicable law.
                        </p>
                    </section>

                    <section id="governing-law">
                        <h2>13. Governing Law</h2>

                        <p>
                            These Terms shall be governed by and
                            interpreted in accordance with the laws
                            of <strong>[]</strong>,
                            without regard to conflict-of-law principles.
                        </p>

                        <p>
                            Any disputes arising from or relating
                            to these Terms shall be handled by the
                            competent courts of{' '}
                            <strong>[]</strong>,
                            subject to applicable consumer protection
                            laws and mandatory legal provisions.
                        </p>
                    </section>

                    <section id="severability">
                        <h2>14. Severability</h2>

                        <p>
                            If any provision of these Terms is found
                            to be invalid or unenforceable, the remaining
                            provisions shall remain in full force
                            and effect.
                        </p>
                    </section>

                    <section id="contact">
                        <h2>15. Contact Information</h2>

                        <p>
                            If you have questions, concerns, or
                            requests regarding these Terms, you can
                            contact us at:
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

                        <p className={styles.placeholder}>
                            Operator: GaboCts
                            <br />
                        </p>
                    </section>

                    <footer className={styles.footer}>
                        <p>
                            Thank you for using Cosmit Avatars.
                        </p>

                        <Link to="/">
                            Back to home
                        </Link>
                    </footer>
                </article>
            </div>
        </main>
    )
}
