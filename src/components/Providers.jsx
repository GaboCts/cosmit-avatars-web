import { useProviderStore } from "../store/providerStore"

export function Providers () {
    const { providers, setProvider } = useProviderStore()

    return (
        <section className="section container" id="provider-list">
            <div className="section-heading">
                <div>
                    <p className="section-kicker">You can choose from a list of sites</p>
                    <h2>Provider list</h2>
                    <p className="section-description">
                        It is completely free
                    </p>
                </div>
            </div>

            <div className="providers-grid">
                {providers.map((p) => (
                    <button key={p.name} className="provider-menu-provider" onClick={(e) => {
                        e.preventDefault()
                        document.getElementById('try')?.scrollIntoView({
                            behavior: 'smooth'
                        })
                        setProvider(p)
                    }}>
                        <img className="provider-logo" src={p.logoUrl} alt={p.name} />
                        <span>{p.name}</span>
                    </button>
                ))}
            </div>
        </section>
    )
}