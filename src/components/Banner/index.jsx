import './styles.scss'

function Component({ picture, text = '', dimmed = false }) {
    const bannerHeight = {
        height: dimmed ? '224px' : '416px',
    }

    const imgOpacity = {
        opacity: dimmed ? '70%' : '100%',
    }

    return (
        <div className="banner" style={bannerHeight}>
            <img src={picture} alt="banner" style={imgOpacity} />
            {text !== '' && <h1>{text}</h1>}
        </div>
    )
}

export default Component
