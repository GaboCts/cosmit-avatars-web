import { useEffect } from 'react'
import { Link } from './Link'
import { useRouter } from '../hooks/useRouter'

export function Footer () {
    const { state, currentPath, navigateTo } = useRouter()

    useEffect(() => {
        if (currentPath !== '/') return

        const sectionId = state?.scrollTo
        if (!sectionId) return

        requestAnimationFrame(() => {
            document.getElementById(sectionId)?.scrollIntoView({
                behavior: 'smooth'
            })

            navigateTo('/', {
                replace: true,
                state: null
            })
        })
    }, [currentPath, state, navigateTo])

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-main">
                    <div>
                        <Link href="/" className="title" aria-label="Cosmit Avatars">
                            <img src="/logo.svg" alt="Cosmit avatars logo" className="title-logo" />
                            <span className="title-name">Cosmit<span> avatars</span></span>
                        </Link>

                        <p className="footer-description">A simple way to find profile images for your digital projects.</p>
                    </div>

                    <nav className="footer-links" aria-label="Footer links">
                        <Link href="/docs">
                            Docs
                        </Link>
                        <a href="mailto:contact@cosmitavatars.space">Contact</a>
                        <Link href="/terms-of-service">
                            Terms of Service
                        </Link>
                        <Link to="/privacy-policy">
                            Privacy Policy
                        </Link>
                    </nav>
                </div>

                <div className="footer-bottom">
                    <span>© 2026 Cosmit Avatars.</span>
                    <span>The images belong to their respective providers.</span>
                </div>
            </div>
        </footer>
    )
}