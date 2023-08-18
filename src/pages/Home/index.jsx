// Styles
import './styles.scss'

// Assets
import picture from '../../assets/home_picture.png'

// Components
import Banner from '../../components/Banner'
import LodgmentList from '../../components/LodgmentList'

function Component() {
    return (
        <div className="wrapper">
            <Banner
                picture={picture}
                text="Chez vous, partout et ailleurs"
                dimmed={true}
            />
            <LodgmentList />
        </div>
    )
}

export default Component
