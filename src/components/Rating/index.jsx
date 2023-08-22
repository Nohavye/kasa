import './styles.scss'
import starTrue from '../../assets/rate_true.svg'
import starFalse from '../../assets/rate_false.svg'

/**
 * Composant d'affichage de notation en étoiles.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {number|string} props.number - Le nombre d'étoiles à afficher (entre 0 et 5).
 * @returns {JSX.Element} Le composant d'affichage de notation en étoiles.
 */
function Rating({ number }) {
    number = typeof number === 'string' ? parseInt(number) : number

    /**
     * Génère un tableau d'URLs d'images d'étoiles en fonction du nombre.
     * @returns {string[]} Le tableau d'URLs d'images d'étoiles.
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
