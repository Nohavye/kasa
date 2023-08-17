import './styles.scss'
import { Link, useLocation } from 'react-router-dom'

function Component() {
    const location = useLocation()

    function linkDecorator(route) {
        return {
            textDecoration: location.pathname === route ? 'underline' : 'none',
        }
    }

    return (
        <header>
            <img alt="Kasa" />
            <nav>
                <Link style={linkDecorator('/')} to="/">
                    Accueil
                </Link>
                <Link style={linkDecorator('/about')} to="/about">
                    À propos
                </Link>
            </nav>
        </header>
    )
}

export default Component
