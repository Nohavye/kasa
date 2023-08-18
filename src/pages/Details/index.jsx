import './styles.scss'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../../context'
import Banner from '../../components/Banner'

function Component() {
    const { index } = useParams()
    const { data } = useContext(AppContext)

    const details = data[index]
    const hostName = details.host.name.split(' ')

    return (
        <div className="wrapper">
            <Banner picture={details.cover} />
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
            <p>{JSON.stringify(details)}</p>
        </div>
    )
}

export default Component
