import Banner from '../../components/Banner'
import picture from '../../assets/home_picture.png'
import './styles.scss'

function Component() {
    return (
        <div className="home">
            <Banner picture={picture} text="Chez vous, partout et ailleurs" />
        </div>
    )
}

export default Component
