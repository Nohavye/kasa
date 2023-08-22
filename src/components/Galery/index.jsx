// Styles
import './styles.scss'

// Hooks
import { useState } from 'react'

// Assets
import arrowLeft from '../../assets/galery_arrow_left.svg'
import arrowRight from '../../assets/galery_arrow_right.svg'

/**
 * Composant de galerie d'images avec navigation.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {string[]} props.picturesArray - Un tableau d'images à afficher (URLs).
 * @returns {JSX.Element|null} Le composant de galerie d'images.
 */
function Galery({ picturesArray }) {
    const [index, setIndex] = useState(0)

    if (picturesArray.length === 0) return

    /**
     * Passe à l'image suivante dans la galerie.
     */
    const next = () => {
        setIndex(index === picturesArray.length - 1 ? 0 : index + 1)
    }

    /**
     * Passe à l'image précédente dans la galerie.
     */
    const previous = () => {
        setIndex(index === 0 ? picturesArray.length - 1 : index - 1)
    }

    return (
        <div className="galery">
            <img className="view" src={picturesArray[index]} alt="galery" />
            {picturesArray.length !== 1 && (
                <>
                    <img
                        onClick={previous}
                        className="arrowLeft"
                        src={arrowLeft}
                        alt="navigation"
                    />
                    <img
                        onClick={next}
                        className="arrowRight"
                        src={arrowRight}
                        alt="navigation"
                    />
                    <span>{`${index + 1}/${picturesArray.length}`}</span>
                </>
            )}
        </div>
    )
}

export default Galery
