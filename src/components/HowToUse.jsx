export function HowToUse () {
    return (
        <section className="section container" id="como-funciona">
            <div className="section-heading">
                <div>
                    <p className="section-kicker">Sin complicaciones</p>
                    <h2>De usuario a avatar en tres pasos</h2>
                    <p className="section-description">
                        Una experiencia directa que evita pasos innecesarios.
                    </p>
                </div>
            </div>

            <div className="steps-grid">
                <article className="step-card">
                    <div className="step-number">01</div>
                    <h3>Introduce un perfil</h3>
                    <p>
                        Escribe el nombre de usuario o pega la URL del perfil
                        que quieres consultar.
                    </p>
                </article>

                <article className="step-card">
                    <div className="step-number">02</div>
                    <h3>Consulta el recurso</h3>
                    <p>
                        Cosmit busca la imagen disponible en la plataforma
                        correspondiente.
                    </p>
                </article>

                <article className="step-card">
                    <div className="step-number">03</div>
                    <h3>Usa la imagen</h3>
                    <p>
                        Abre la imagen directa o intégrala en tu proyecto
                        respetando las condiciones del servicio.
                    </p>
                </article>
            </div>
        </section>
    )
}