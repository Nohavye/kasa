import './styles.scss'
import { useContext } from 'react'
import { AppContext } from '../../context'
import LodgmentCard from '../LodgmentCard'

// import data from '../../data/data.json'

function Component() {
    const { data } = useContext(AppContext)

    return (
        <div className="lodgmentList">
            {data.map((lodgment, index) => (
                <LodgmentCard
                    key={lodgment.id}
                    index={index}
                    title={lodgment.title}
                    cover={lodgment.cover}
                />
            ))}
        </div>
    )
}

export default Component
