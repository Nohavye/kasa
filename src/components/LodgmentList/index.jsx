import './styles.scss'
import { useContext } from 'react'
import { AppContext } from '../../context'
import Loader from '../Loader'
import LodgmentCard from '../LodgmentCard'

function Component() {
    const { data, dataIsLoading, dataError } = useContext(AppContext)

    if (dataError) {
        return (
            <div className="lodgmentList">
                <span className="errorMessage">
                    Oups ... il y a eu un problème.
                </span>
            </div>
        )
    }

    return (
        <div className="lodgmentList">
            {dataIsLoading ? (
                <Loader />
            ) : (
                data.map((lodgment, index) => (
                    <LodgmentCard
                        key={lodgment.id}
                        index={index}
                        title={lodgment.title}
                        cover={lodgment.cover}
                    />
                ))
            )}
        </div>
    )
}

export default Component
