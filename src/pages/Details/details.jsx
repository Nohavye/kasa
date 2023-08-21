import Galery from '../../components/Galery'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'
import Dropdown from '../../components/Dropdown'

function HostDivision({ host, mobile = false }) {
    const hostName = host.name.split(' ')

    return (
        <div className={`hostDivision${mobile ? '-mobile' : ''}`}>
            <span>
                {hostName[0]}
                <br />
                {hostName[1]}
            </span>
            <img src={host.picture} alt="host" />
        </div>
    )
}

function TitleSection({ title, location, host }) {
    return (
        <div className="titleSection">
            <div className="titleDivision">
                <h1>{title}</h1>
                <span>{location}</span>
            </div>
            <HostDivision host={host} />
        </div>
    )
}

function TagWrapper({ tags }) {
    return (
        <div className="tagWrapper">
            {tags.map((tag, index) => (
                <Tag key={`tag-${index}`} text={tag} />
            ))}
        </div>
    )
}

function RatingWrapper({ rating, host }) {
    return (
        <div className="ratingWrapper">
            <Rating number={rating} />
            <HostDivision host={host} mobile={true} />
        </div>
    )
}

function MentionSection({ tags, rating, host }) {
    return (
        <div className="mentionSection">
            <TagWrapper tags={tags} />
            <RatingWrapper rating={rating} host={host} />
        </div>
    )
}

function DetailsWrapper({ data }) {
    return (
        <div className="detailsWrapper">
            <Galery picturesArray={data.pictures} />
            <div>
                <TitleSection
                    title={data.title}
                    location={data.location}
                    host={data.host}
                />
                <MentionSection
                    tags={data.tags}
                    rating={data.rating}
                    host={data.host}
                />
            </div>
            <div className="describeSection">
                <Dropdown
                    className="dropdown"
                    title="Description"
                    textArray={[data.description]}
                />
                <Dropdown
                    className="dropdown"
                    title="Équipements"
                    textArray={data.equipments}
                />
            </div>
        </div>
    )
}

export default DetailsWrapper
