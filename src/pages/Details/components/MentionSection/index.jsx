// Styles
import './styles.scss'

// Components
import TagsWrapper from '../TagsWrapper'
import RatingWrapper from '../RatingWrapper'

/**
 * Composant affichant une section d'informations sur les étiquettes et la notation.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {string[]} props.tags - Les étiquettes associées à l'élément.
 * @param {number|string} props.rating - La notation de l'élément.
 * @param {Object} props.host - Les données de l'hôte associé à l'élément.
 * @returns {JSX.Element} Le composant affichant la section d'informations sur les étiquettes et la notation.
 */
function MentionSection({ tags, rating, host }) {
    return (
        <div className="mentionSection">
            <TagsWrapper tags={tags} />
            <RatingWrapper rating={rating} host={host} />
        </div>
    )
}

export default MentionSection
