import './styles.scss'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../context'

/**
 * Composant de pied de page avec ancrage dynamique.
 *
 * @component
 * @returns {JSX.Element} Le composant de pied de page.
 */
function Footer() {
    const { dataIsLoading } = useContext(AppContext)
    const [isAnchored, setAnchored] = useState()

    /**
     * Vérifie si le pied de page doit être ancré en bas de la page.
     * @returns {boolean} `true` si le pied de page doit être ancré, sinon `false`.
     */
    const mustBeAnchored = () =>
        document.body.clientHeight <
        window.innerHeight - document.querySelector('footer').clientHeight

    useEffect(() => {
        const handle = () => {
            setAnchored(mustBeAnchored())
        }

        window.addEventListener('resize', handle)
        document.body.addEventListener('click', handle)

        return () => {
            window.removeEventListener('resize', handle)
            document.body.removeEventListener('click', handle)
        }
    }, [])

    useEffect(() => setAnchored(mustBeAnchored()), [dataIsLoading])

    return (
        <footer style={{ bottom: isAnchored ? '0' : 'auto' }}>
            <img alt="Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer
