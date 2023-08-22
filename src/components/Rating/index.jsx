// Styles
import './styles.scss'

// Assets
import starTrue from '../../assets/rate_true.svg'
import starFalse from '../../assets/rate_false.svg'

/**
 * Composant d'affichage de notation (Étoiles).
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {number|string} props.number - Le nombre d'étoiles à afficher (entre 0 et 5).
 * @returns {JSX.Element} Le composant d'affichage de notation.
 */
function Rating({ number }) {
    number = typeof number === 'string' ? parseInt(number) : number

    /**
     * Génère un tableau d'images (URLs) en fonction du nombre.
     * @returns {string[]} Le tableau d'images (URLs).
     */
    const stars = () => {
        return [
            ...Array(number).fill(starTrue),
            ...Array(5 - number).fill(starFalse),
        ]
    }

    return (
        <div className="rating">
            {stars().map((star, index) => (
                <img key={`star-${index}`} src={star} alt="star" />
            ))}
        </div>
    )
}

export default Rating
