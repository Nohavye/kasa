import './styles.scss'

function Tag({ text }) {
    return (
        <div className="tag">
            <span>{text}</span>
        </div>
    )
}

export default Tag
