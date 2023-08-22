import './styles.scss'
import Tag from '../../../../components/Tag'

/**
 * Composant englobant une liste d'étiquettes.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {string[]} props.tags - Les étiquettes à afficher.
 * @returns {JSX.Element} Le composant englobant une liste d'étiquettes.
 */
function TagsWrapper({ tags }) {
    return (
        <div className="tagsWrapper">
            {tags.map((tag, index) => (
                <Tag key={`tag-${index}`} text={tag} />
            ))}
        </div>
    )
}

export default TagsWrapper
