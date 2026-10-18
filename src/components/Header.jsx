export function Header () {
    return (
        <header className="header">
            <nav className="navbar container" aria-label="Main navigation">
                <a className="title" href="/" aria-label="Cosmit Avatars">
                    <img src="src\assets\logo.svg" alt="Cosmit avatars logo" className="title-logo" />
                    <span className="title-name">Cosmit<span> avatars</span></span>
                </a>

                <div className="nav-links">
                    <a href="#try" onClick={(e) => {
                        e.preventDefault()
                        document.getElementById('try')?.scrollIntoView({
                            behavior: 'smooth'
                        })
                    }}>Try it</a>
                    <a href="#how-it-works">How it works</a>
                    <a href="#developers">Developers</a>
                    <a className="nav-button" href="https://github.com/GaboCts/cosmit-avatars-web" target="_blank" >Repository</a>
                </div>
            </nav>
        </header>
    )
}