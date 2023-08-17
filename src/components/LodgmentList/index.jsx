import data from './list'
import './styles.scss'
import LodgmentCard from '../LodgmentCard'

function Component() {
    return (
        <div className="lodgmentList">
            {data.map((lodgment) => (
                <LodgmentCard
                    key={lodgment.id}
                    title={lodgment.title}
                    cover={lodgment.cover}
                />
            ))}
        </div>
    )
}

export default Component
