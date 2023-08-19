import './styles.scss'
import starTrue from '../../assets/rate_true.svg'
import starFalse from '../../assets/rate_false.svg'

function Component({ number }) {
    number = typeof number === 'string' ? parseInt(number) : number

    const stars = () => {
        return [
            ...Array(number).fill(starTrue),
            ...Array(5 - number).fill(starFalse),
        ]
    }
    return (
        <div className="rating">
            {stars().map((star, index) => (
                <img key={`star-${index}`} src={star} alt="star" />
            ))}
        </div>
    )
}

export default Component
