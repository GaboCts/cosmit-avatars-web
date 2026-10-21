import { Hero } from '../components/Hero'
import { TryIt } from '../components/TryIt'
import { HowItWorks } from '../components/HowItWorks'
import { Providers } from '../components/Providers'

export default function HomePage () {
    return (
        <main>
            <Hero />
            <TryIt />
            <HowItWorks />
            <Providers />
        </main>
    )
}
