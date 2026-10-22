import { useEffect } from 'react'
import { Link as NavLink, useLocation } from 'react-router'

export function Link({href, children, ...restOfProps}) {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        })
    }, [location.pathname])

    return (
        <NavLink to={href} {...restOfProps}>
            {children}
        </NavLink>
    )
}