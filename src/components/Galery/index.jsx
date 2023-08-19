import './styles.scss'
import React from 'react'
import { useState } from 'react'
import arrowLeft from '../../assets/galery_arrow_left.svg'
import arrowRight from '../../assets/galery_arrow_right.svg'

function Galery({ picturesArray = [] }) {
    const [index, setIndex] = useState(0)

    if (picturesArray.length === 0) return

    const next = () => {
        setIndex(index === picturesArray.length - 1 ? 0 : index + 1)
    }

    const previous = () => {
        setIndex(index === 0 ? picturesArray.length - 1 : index - 1)
    }

    return (
        <div className="galery">
            <img className="view" src={picturesArray[index]} alt="galery" />
            {picturesArray.length !== 1 && (
                <React.Fragment>
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
                </React.Fragment>
            )}
        </div>
    )
}

export default Galery
