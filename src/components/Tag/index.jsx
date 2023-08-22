// Styles
import './styles.scss'

/**
 * Composant d'étiquette (tag).
 *
 * @component
 * @param {string} text - Le texte de l'étiquette.
 * @returns {JSX.Element} Le composant d'étiquette.
 */
function Tag({ text }) {
    return (
        <div className="tag">
            <span>{text}</span>
        </div>
    )
}

export default Tag
