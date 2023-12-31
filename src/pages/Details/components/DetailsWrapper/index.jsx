// Styles
import './styles.scss'

// Components
import Galery from '../../../../components/Galery'
import TitleSection from '../TitleSection'
import MentionSection from '../MentionSection'
import Dropdown from '../../../../components/Dropdown'

/**
 * Composant englobant les sections de détails pour un hébergement.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {Object} props.data - Les données de l'hébergement à afficher.
 * @returns {JSX.Element} Le composant englobant les sections de détails.
 */
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
