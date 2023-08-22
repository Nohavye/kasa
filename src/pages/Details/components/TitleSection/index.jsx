import './styles.scss'
import HostProfile from '../HostProfile'

/**
 * Composant affichant une section contenant le titre, l'emplacement et le profil de l'hôte.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.title - Le titre à afficher.
 * @param {string} props.location - L'emplacement à afficher.
 * @param {Object} props.host - Les données de l'hôte associé.
 * @returns {JSX.Element} Le composant affichant la section contenant le titre, l'emplacement et le profil de l'hôte.
 */
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
