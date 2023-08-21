import './styles.scss'
import Tag from '../../../../components/Tag'

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
