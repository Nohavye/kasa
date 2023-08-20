import { useEffect, useState } from 'react'
import './styles.scss'

function Component() {
    const [footerDown, setFooterDown] = useState()

    useEffect(() => {
        setFooterDown(document.body.clientHeight < window.innerHeight - 210)
        const handleBodyResize = () => {
            setFooterDown(document.body.clientHeight < window.innerHeight - 210)
        }
        window.addEventListener('resize', handleBodyResize)
        document.body.addEventListener('click', handleBodyResize)
        return () => {
            window.removeEventListener('resize', handleBodyResize)
            document.body.removeEventListener('click', handleBodyResize)
        }
    }, [])

    return (
        <footer style={{ bottom: footerDown ? '0' : 'auto' }}>
            <img alt="Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Component
