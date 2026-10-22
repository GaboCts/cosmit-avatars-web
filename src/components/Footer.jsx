export function Footer () {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-main">
                    <div>
                        <a className="title" href="#" aria-label="Cosmit Avatars">
                            <img src="/logo.svg" alt="Cosmit avatars logo" className="title-logo" />
                            <span className="title-name">Cosmit<span> avatars</span></span>
                        </a>

                        <p className="footer-description">A simple way to find profile images for your digital projects.</p>
                    </div>

                    <nav className="footer-links" aria-label="Footer links">
                        <a href="#try" onClick={(e) => {
                            e.preventDefault()
                            document.getElementById('try')?.scrollIntoView({
                                behavior: 'smooth'
                            })
                        }}>Try it</a>
                        <a href="#how-it-works" onClick={(e) => {
                            e.preventDefault()
                            document.getElementById('how-it-works')?.scrollIntoView({
                                behavior: 'smooth'
                            })
                        }}>How it works</a>
                        <a href="#provider-list" onClick={(e) => {
                            e.preventDefault()
                            document.getElementById('provider-list')?.scrollIntoView({
                                behavior: 'smooth'
                            })
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