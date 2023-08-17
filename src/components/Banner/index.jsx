import './styles.scss'
import { useLocation } from 'react-router-dom'

function Component({ picture, text = '' }) {
    const location = useLocation()

    function bannerHeight() {
        return {
            height: location.pathname.startsWith('/details')
                ? '416px'
                : '224px',
        }
    }

    return (
        <div className="banner" style={bannerHeight()}>
            <img src={picture} alt="banner" />
            {text !== '' && <h1>{text}</h1>}
        </div>
    )
}

export default Component
