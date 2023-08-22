import './styles.scss'

/**
 * Composant affichant le profil de l'hôte.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {Object} props.host - Les données de l'hôte.
 * @param {boolean} [props.mobile=false] - Indique si le composant est affiché en version mobile.
 * @returns {JSX.Element} Le composant affichant le profil de l'hôte.
 */
function HostProfile({ host, mobile = false }) {
    const hostName = host.name.split(' ')

    return (
        <div className={`hostProfile${mobile ? '-mobile' : ''}`}>
            <span>
                {hostName[0]}
                <br />
                {hostName[1]}
            </span>
            <img src={host.picture} alt="host" />
        </div>
    )
}

export default HostProfile
