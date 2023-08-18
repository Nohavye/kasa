import './styles.scss'
import { Link } from 'react-router-dom'

function Component({ index, title, cover }) {
    return (
        <Link className="lodgmentCard" to={`/details/${index}`}>
            <img src={cover} alt="lodgment" />
            <div>
                <span>{title}</span>
            </div>
        </Link>
    )
}

export default Component
