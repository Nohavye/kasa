// Styles
import './styles.scss'

// Assets
import picture from '../../assets/home_picture.png'

// Components
import Banner from '../../components/Banner'
import LodgmentList from '../../components/LodgmentList'

/**
 * Composant représentant la page d'accueil de l'application.
 *
 * @component
 * @returns {JSX.Element} Le composant représentant la page d'accueil.
 */
function HomePage() {
    return (
        <div className="home">
            <Banner picture={picture} text="Chez vous, partout et ailleurs" />
            <LodgmentList />
        </div>
    )
}

export default HomePage
