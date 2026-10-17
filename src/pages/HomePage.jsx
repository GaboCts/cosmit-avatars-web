import { Developers } from '../components/Developers'
import { Hero } from '../components/Hero'
import { HowToUse } from '../components/HowToUse'
import { Providers } from '../components/Providers'
import { TryIt } from '../components/TryIt'

export default function HomePage () {
    return (
        <main>
            <Hero />
            <TryIt />
            {/* <Providers />
            <HowToUse />
            <Developers /> */}
        </main>
    )
}