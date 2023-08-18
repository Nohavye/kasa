import './styles.scss'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../../context'
import Banner from '../../components/Banner'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'
import Dropdown from '../../components/Dropdown'

function Component() {
    const { index } = useParams()
    const { data } = useContext(AppContext)

    const details = data[index]
    const hostName = details.host.name.split(' ')

    return (
        <div className="details">
            <Banner picture={details.cover} />
            <div>
                <div className="titleSection">
                    <div className="tilteDivision">
                        <h1>{details.title}</h1>
                        <span>{details.location}</span>
                    </div>

                    <div className="hostDivision">
                        <span>
                            {hostName[0]}
                            <br />
                            {hostName[1]}
                        </span>
                        <img src={details.host.picture} alt="host" />
                    </div>
                </div>

                <div className="ratingSection">
                    <div className="tagWrapper">
                        {details.tags.map((tag) => (
                            <Tag text={tag} />
                        ))}
                    </div>
                    <div>
                        <Rating number={details.rating} />
                    </div>
                </div>
            </div>

            <div className="describeSection">
                <Dropdown
                    className="dropdown"
                    title="Description"
                    textArray={[details.description]}
                    Open={true}
                />
                <Dropdown
                    className="dropdown"
                    title="Équipements"
                    textArray={details.equipments}
                    Open={true}
                />
            </div>
        </div>
    )
}

export default Component
