import { lazy, Suspense, useState } from 'react'
import styles from './LazyHtmlCssEditor.module.css'

const HtmlCssEditor = lazy(() => import('./HtmlCssEditor'))

export function LazyHtmlCssEditor () {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={styles.container}>
            <button
                type="button"
                className={styles.card}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <div className={styles.cardText}>
                    <span className={styles.cardTitle}>Open the code editor</span>
                    <span className={styles.cardHint}>HTML live preview</span>
                </div>
                <svg
                    className={`${styles.arrow} ${isOpen ? styles.open : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                >
                    <path
                        d="m6 9 6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className={styles.panel}>
                    <Suspense fallback={<div className={styles.loading}>Loading editor…</div>}>
                        <HtmlCssEditor />
                    </Suspense>
                </div>
            )}
        </div>
    )
}
