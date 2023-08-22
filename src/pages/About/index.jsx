import './styles.scss'
import Banner from '../../components/Banner'
import Dropdown from '../../components/Dropdown'
import picture from '../../assets/about_picture.png'

/**
 * Composant de page "À propos" affichant des informations sur le service.
 *
 * @component
 * @returns {JSX.Element} Le composant de page "À propos".
 */
function AboutPage() {
    return (
        <div className="about">
            <Banner picture={picture} />
            <div className="dropdownWrapper">
                <Dropdown
                    title="Fiabilité"
                    textArray={[
                        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
                    ]}
                    large={true}
                />
                <Dropdown
                    title="Respect"
                    textArray={[
                        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
                    ]}
                    large={true}
                />
                <Dropdown
                    title="Service"
                    textArray={[
                        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
                    ]}
                    large={true}
                />
                <Dropdown
                    title="Sécurité"
                    textArray={[
                        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
                    ]}
                    large={true}
                />
            </div>
        </div>
    )
}

export default AboutPage
