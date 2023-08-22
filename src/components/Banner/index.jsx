import './styles.scss'

/**
 * Composant bannière affichant une image et un texte en option.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.picture - L'URL de l'image de la bannière.
 * @param {string} [props.text=''] - Le texte à afficher dans la bannière (facultatif).
 * @returns {JSX.Element} Le composant bannière.
 */
function Banner({ picture, text = '' }) {
    return (
        <div className="banner">
            <img src={picture} alt="banner" />
            {text !== '' && <h1>{text}</h1>}
        </div>
    )
}

export default Banner
