import './styles.scss'
import { Link, useLocation } from 'react-router-dom'

/**
 * Composant d'en-tête de navigation avec des liens actifs.
 *
 * @component
 * @returns {JSX.Element} Le composant d'en-tête de navigation.
 */
function Header() {
    const location = useLocation()

    /**
     * Décorateur de style pour les liens en fonction de la route active.
     * @param {string} route - La route à comparer avec la localisation actuelle.
     * @returns {Object} L'objet de style pour le lien.
     */
    const linkDecorator = (route) => ({
        textDecoration: location.pathname === route ? 'underline' : 'none',
    })

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

export default Header
