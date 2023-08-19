import './styles.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { AppContext } from '../../context'
import Galery from '../../components/Galery'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'
import Dropdown from '../../components/Dropdown'

function Component() {
    const { index } = useParams()
    const { data } = useContext(AppContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (data[index] === undefined) {
            navigate('/error')
        }
    }, [data, index, navigate])

    return (
        <>
            {data[index] !== undefined && (
                <div className="details">
                    <Galery picturesArray={data[index].pictures} />
                    <div>
                        <div className="titleSection">
                            <div className="tilteDivision">
                                <h1>{data[index].title}</h1>
                                <span>{data[index].location}</span>
                            </div>

                            <div className="hostDivision">
                                <span>
                                    {data[index].host.name.split(' ')[0]}
                                    <br />
                                    {data[index].host.name.split(' ')[1]}
                                </span>
                                <img
                                    src={data[index].host.picture}
                                    alt="host"
                                />
                            </div>
                        </div>

                        <div className="tagSection">
                            <div className="tagWrapper">
                                {data[index].tags.map((tag, index) => (
                                    <Tag key={`tag-${index}`} text={tag} />
                                ))}
                            </div>
                            <div className="ratingWrapper">
                                <Rating number={data[index].rating} />
                                <div className="hostDivision-mobile">
                                    <span>
                                        {data[index].host.name.split(' ')[0]}
                                        <br />
                                        {data[index].host.name.split(' ')[1]}
                                    </span>
                                    <img
                                        src={data[index].host.picture}
                                        alt="host"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="describeSection">
                        <Dropdown
                            className="dropdown"
                            title="Description"
                            textArray={[data[index].description]}
                        />
                        <Dropdown
                            className="dropdown"
                            title="Équipements"
                            textArray={data[index].equipments}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default Component
