import './styles.scss'
import HostProfile from '../HostProfile'

function TitleSection({ title, location, host }) {
    return (
        <div className="titleSection">
            <div className="titleDivision">
                <h1>{title}</h1>
                <span>{location}</span>
            </div>
            <HostProfile host={host} />
        </div>
    )
}

export default TitleSection
