export function Footer () {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-main">
                    <div>
                        <a className="title" href="#" aria-label="Cosmit Avatars">
                            <img src="src\assets\logo.svg" alt="Cosmit avatars logo" className="title-logo" />
                            <span className="title-name">Cosmit<span> avatars</span></span>
                        </a>

                        <p className="footer-description">A simple way to find profile images for your digital projects.</p>
                    </div>

                    <nav className="footer-links" aria-label="Footer links">
                        <a href="#providers">Providers</a>
                        <a href="#how-it-works">How it works</a>
                        <a href="#developers">Developers</a>
                        <a href="mailto:contacto@tudominio.com">Contact</a>
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