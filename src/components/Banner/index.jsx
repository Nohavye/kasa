import './styles.scss'

function Banner({ picture, text = '' }) {
    return (
        <div className="banner">
            <img src={picture} alt="banner" />
            {text !== '' && <h1>{text}</h1>}
        </div>
    )
}

export default Banner
