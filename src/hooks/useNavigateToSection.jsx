import { useRouter } from './useRouter'

export function useNavigateToSection () {
    const { currentPath, navigateTo } = useRouter()

    const navigateToSection = (sectionId) => {
        if (currentPath !== '/') {
            navigateTo('/', {
                state: { scrollTo: sectionId }
            })
            return
        }

        document.getElementById(sectionId)?.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return {
        navigateToSection
    }
}