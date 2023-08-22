// Hooks
import { useNavigate, useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'

// Context
import { AppContext } from '../../context'

// Components
import DetailsWrapper from './components/DetailsWrapper'
import Loader from '../../components/Loader'

/**
 * Composant de page de détails affichant les détails d'un hébergement.
 *
 * @component
 * @returns {JSX.Element} Le composant de page de détails.
 */
function DetailsPage() {
    const { index } = useParams()
    const { data, dataIsLoading } = useContext(AppContext)
    const navigate = useNavigate()

    useEffect(() => {
        // Remonter vers le haut de la page lors du chargement de la page
        document.documentElement.scrollTop = 0
    }, [])

    useEffect(() => {
        // Vérifie si l'élément avec l'index spécifié existe dans les données
        // Redirige vers la page d'erreur si l'élément n'existe pas
        if (!dataIsLoading && data[index] === undefined) {
            navigate('/error')
        }
    }, [data, dataIsLoading, index, navigate])

    return (
        <>
            {dataIsLoading ? (
                <Loader />
            ) : (
                data[index] !== undefined && (
                    <DetailsWrapper data={data[index]} />
                )
            )}
        </>
    )
}

export default DetailsPage
