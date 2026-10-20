import { LazyHtmlCssEditor } from './LazyHtmlCssEditor'

export function HowItWorks () {
    return (
        <section className="section container" id="how-it-works">
            <div className="section-heading">
                <div>
                    <p className="section-kicker">Use it in a simple way</p>
                    <h2>Try implementing it yourself</h2>
                    <p className="section-description">
                        You just need to provide the source
                    </p>
                </div>
            </div>

            <div className="code-articles">
                <LazyHtmlCssEditor />
            </div>
        </section>
    )
}
