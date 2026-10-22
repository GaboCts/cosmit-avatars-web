import { useEffect } from 'react'
import { Link } from './Link'
import { useRouter } from '../hooks/useRouter'
import { useNavigateToSection } from '../hooks/useNavigateToSection'

export function Footer () {
    const { state, currentPath, navigateTo } = useRouter()
    const { navigateToSection } = useNavigateToSection()

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
                        <a href="#try" onClick={(e) => {
                            e.preventDefault()
                            navigateToSection('try')
                        }}>Try it</a>
                        <a href="#how-it-works" onClick={(e) => {
                            e.preventDefault()
                            navigateToSection('how-it-works')
                        }}>How it works</a>
                        <a href="#provider-list" onClick={(e) => {
                            e.preventDefault()
                            navigateToSection('provider-list')
                        }}>Providers</a>
                        <a href="mailto:contact@cosmitavatars.space">Contact</a>
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