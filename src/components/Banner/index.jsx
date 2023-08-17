import './styles.scss'

function Component({ picture, text = '' }) {
    return (
        <div className="banner">
            <img src={picture} alt="banner" />
            <h1>{text}</h1>
        </div>
    )
}

export default Component
