import './styles.scss'
import Rating from '../../../../components/Rating'
import HostProfile from '../HostProfile'

/**
 * Composant englobant la notation et le profil de l'hôte.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {number|string} props.rating - La notation à afficher.
 * @param {Object} props.host - Les données de l'hôte associé.
 * @returns {JSX.Element} Le composant englobant la notation et le profil de l'hôte.
 */
function RatingWrapper({ rating, host }) {
    return (
        <div className="ratingWrapper">
            <Rating number={rating} />
            <HostProfile host={host} mobile={true} />
        </div>
    )
}

export default RatingWrapper
