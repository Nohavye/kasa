// Styles
import './styles.scss'

// Components
import { Link } from 'react-router-dom'

/**
 * Composant affichant une page d'erreur 404.
 *
 * @component
 * @returns {JSX.Element} Le composant affichant la page d'erreur 404.
 */
function ErrorPage() {
    return (
        <div className="error">
            <h1>404</h1>
            <span>Oups! La page que vous demandez n'existe pas.</span>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default ErrorPage
