import './styles.scss'
import { useState } from 'react'
import arrowDown from '../../assets/arrow_down.svg'
import arrowUp from '../../assets/arrow_up.svg'

function Component({ title, textArray = [], Open = false, large = false }) {
    const [isOpen, setIsOpen] = useState(Open)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div
            className={`dropdown${large ? ' dropdown-large' : ''}`}
            style={{ backgroundColor: !isOpen && 'transparent' }}
        >
            <div className="header" onClick={toggle}>
                <span>{title}</span>
                <img src={isOpen ? arrowUp : arrowDown} alt="arrow" />
            </div>
            {isOpen && (
                <div className="content">
                    {textArray.map((text, index) => (
                        <span key={`dropdown-text-${index}`}>{text}</span>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Component
