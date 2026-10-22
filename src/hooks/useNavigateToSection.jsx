import { useRouter } from './useRouter'

export function useNavigateToSection () {
    const { currentPath, navigateTo } = useRouter()

    const navigateToSection = (e, sectionId, path) => {
        e.preventDefault()

        if (currentPath !== path) {
            navigateTo(path, {
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