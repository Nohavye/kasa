import './styles.scss'

function Component({ title, cover }) {
    return (
        <div className="lodgmentCard">
            <img src={cover} alt="lodgment" />
            <div>
                <span>{title}</span>
            </div>
        </div>
    )
}

export default Component
