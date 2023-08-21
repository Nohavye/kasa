import './styles.scss'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../context'

function Component() {
    const { dataIsLoading } = useContext(AppContext)
    const [isAnchored, setAnchored] = useState()

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

export default Component
