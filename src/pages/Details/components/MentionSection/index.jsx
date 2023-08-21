import './styles.scss'
import TagsWrapper from '../TagsWrapper'
import RatingWrapper from '../RatingWrapper'

function MentionSection({ tags, rating, host }) {
    return (
        <div className="mentionSection">
            <TagsWrapper tags={tags} />
            <RatingWrapper rating={rating} host={host} />
        </div>
    )
}

export default MentionSection
