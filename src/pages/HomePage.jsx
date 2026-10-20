import { Developers } from '../components/Developers'
import { Hero } from '../components/Hero'
import { HowItWorks } from '../components/HowItWorks'
import { Providers } from '../components/Providers'
import { TryIt } from '../components/TryIt'

export default function HomePage () {
    return (
        <main>
            <Hero />
            <TryIt />
            <HowItWorks />
            {/* <Providers />
            <Developers /> */}
        </main>
    )
}