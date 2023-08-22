// Styles
import './styles.scss'

// Hooks
import { useContext } from 'react'

// Context
import { AppContext } from '../../context'

// Components
import Loader from '../Loader'
import LodgmentCard from '../LodgmentCard'

/**
 * Composant de liste d'hébergements avec gestion des erreurs et de l'état de chargement.
 *
 * @component
 * @returns {JSX.Element} Le composant de liste d'hébergements.
 */
function LodgmentList() {
    const { data, dataIsLoading, dataError } = useContext(AppContext)

    // Retour en cas d'erreur du chargement des données.
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

export default LodgmentList
