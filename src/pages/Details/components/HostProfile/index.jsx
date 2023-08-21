import './styles.scss'

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
