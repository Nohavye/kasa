import './styles.scss'
import { useState } from 'react'
import arrowDown from '../../assets/arrow_down.svg'
import arrowUp from '../../assets/arrow_up.svg'

/**
 * Composant dropdown avec un titre, un contenu textuel et un état ouvert/fermé.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.title - Le titre du dropdown.
 * @param {string[]} props.textArray - Un tableau de textes à afficher dans le contenu.
 * @param {boolean} [props.Open=false] - L'état initial du dropdown (ouvert ou fermé) (facultatif).
 * @param {boolean} [props.large=false] - Indique si le dropdown doit être affiché en grand (facultatif).
 * @returns {JSX.Element} Le composant dropdown.
 */
function Dropdown({ title, textArray, Open = false, large = false }) {
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

export default Dropdown
