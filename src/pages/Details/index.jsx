import { useNavigate, useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { AppContext } from '../../context'

import DetailsWrapper from './components/DetailsWrapper'
import Loader from '../../components/Loader'

function Component() {
    const { index } = useParams()
    const { data, dataIsLoading } = useContext(AppContext)
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    useEffect(() => {
        if (!dataIsLoading && data[index] === undefined) {
            navigate('/error')
        }
    }, [data, dataIsLoading, index, navigate])

    return (
        <>
            {dataIsLoading ? (
                <Loader />
            ) : (
                data[index] !== undefined && (
                    <DetailsWrapper data={data[index]} />
                )
            )}
        </>
    )
}

export default Component
