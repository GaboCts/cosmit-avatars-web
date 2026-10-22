import { useEffect } from 'react'
import { Link } from './Link'
import { useRouter } from '../hooks/useRouter'
import { useNavigateToSection } from '../hooks/useNavigateToSection'

export function Header () {
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
        <header className="header">
            <nav className="navbar container" aria-label="Main navigation">
                <Link href="/" className="title" aria-label="Cosmit Avatars">
                    <img src="/logo.svg" alt="Cosmit avatars logo" className="title-logo" />
                    <span className="title-name">Cosmit<span> avatars</span></span>
                </Link>

                <div className="nav-links">
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
                    <a className="nav-button" href="https://github.com/GaboCts/cosmit-avatars-web" target="_blank" rel="noopener noreferrer" >Repository</a>
                </div>
            </nav>
        </header>
    )
}