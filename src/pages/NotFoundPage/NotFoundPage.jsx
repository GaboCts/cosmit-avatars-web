import styles from './NotFoundPage.module.css'
import error404 from '../../assets/error404.svg'

export default function NotFoundPage() {
    return (
        <main className={ styles.main__content }>
            <img src={ error404 } alt="404 Page not found" className={ styles.error404 }/>
            <a href="/" className={ styles.NotFound__home__button }>Back to home page</a>
        </main>
    )
}