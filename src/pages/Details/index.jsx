import { useParams, useLocation } from 'react-router-dom'
import picture from '../../assets/home_picture.png'
import Banner from '../../components/Banner'

function Component() {
    const { id } = useParams()
    const location = useLocation()

    return (
        <div style={{ height: '768px' }}>
            <h1>
                Fiche Logement 📔 {id} {location.pathname}
            </h1>
            <Banner picture={picture} text={location.pathname} />
        </div>
    )
}

export default Component
