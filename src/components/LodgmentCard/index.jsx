import './styles.scss'
import { Link } from 'react-router-dom'

/**
 * Composant de carte d'hébergement avec lien vers les détails.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.index - L'index de l'hébergement.
 * @param {string} props.title - Le titre de l'hébergement.
 * @param {string} props.cover - L'URL de la couverture de l'hébergement.
 * @returns {JSX.Element} Le composant de carte d'hébergement.
 */
function LodgmentCard({ index, title, cover }) {
    return (
        <Link className="lodgmentCard" to={`/details/${index}`}>
            <img src={cover} alt="lodgment" />
            <div>
                <span>{title}</span>
            </div>
        </Link>
    )
}

export default LodgmentCard
