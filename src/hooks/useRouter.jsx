import { useNavigate, useLocation } from 'react-router'

export function useRouter() {
    const navigate = useNavigate()
    const location = useLocation()

    function navigateTo( path, section) {
        navigate( path, section)
    }

    return {
        currentPath: location.pathname,
        state: location.state,
        navigateTo
    }
}