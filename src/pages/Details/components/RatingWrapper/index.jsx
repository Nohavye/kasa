import './styles.scss'
import Rating from '../../../../components/Rating'
import HostProfile from '../HostProfile'

function RatingWrapper({ rating, host }) {
    return (
        <div className="ratingWrapper">
            <Rating number={rating} />
            <HostProfile host={host} mobile={true} />
        </div>
    )
}

export default RatingWrapper
