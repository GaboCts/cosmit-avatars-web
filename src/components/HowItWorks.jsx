export function HowItWorks () {
    return (
        <section className="section container" id="how-it-works">
            <div className="section-heading">
                <div>
                    <p className="section-kicker">Implement it in a simple way</p>
                    <h2>You only need the user and the service</h2>
                    <p className="section-description">
                        You don't need to take unnecessary steps.
                    </p>
                </div>
            </div>

            <div className="code-articles">
                <article className="code-writing">
                    <div className="input-syntax">HTML</div>
                    <h3>Write your code</h3>
                    <p>
                        {/* Code input here */}
                    </p>
                </article>

                <article className="code-output">
                    <div className="output-results">Output</div>
                    <h3>Look at the results</h3>
                    <p>
                        {/* Results output here */}
                    </p>
                </article>
            </div>
        </section>
    )
}