export function Providers () {
    return (
        <section className="section container" id="plataformas">
            <div className="section-heading">
                <div>
                    <p className="section-kicker">Compatibility</p>
                    <h2>Your favorite platforms</h2>
                    <p className="section-description">
                        A simple access point to check avatars from different services.
                    </p>
                </div>

                <a className="section-link" href="#buscar">
                    Try a search ↗
                </a>
            </div>

            <div className="provider-grid">
                <a className="provider-card" href="#buscar">
                    <div className="provider-icon">T</div>
                    <h3>Twitch</h3>
                    <p>Profiles of creators and streamers.</p>
                </a>

                <a className="provider-card" href="#buscar">
                    <div className="provider-icon">GH</div>
                    <h3>GitHub</h3>
                    <p>Profiles of the developer community.</p>
                </a>

                <a className="provider-card" href="#buscar">
                    <div className="provider-icon">R</div>
                    <h3>Reddit</h3>
                    <p>Find a user's image.</p>
                </a>

                <a className="provider-card" href="#buscar">
                    <div className="provider-icon">▶</div>
                    <h3>YouTube</h3>
                    <p>Channels and content creators.</p>
                </a>

                <a className="provider-card" href="#buscar">
                    <div className="provider-icon">𝕏</div>
                    <h3>X</h3>
                    <p>Public profile images.</p>
                </a>
            </div>
        </section>
    )
}