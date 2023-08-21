import { useEffect, useState } from 'react'

export function useFetch(url) {
    const [data, setData] = useState({})
    const [isReloading, setReloading] = useState(false)
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (!url) return

        async function fetchData() {
            setLoading(true)

            try {
                const response = await fetch(url)
                const data = await response.json()
                setData(data)
            } catch (error) {
                console.error(error)
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
        setReloading(false)
    }, [url, isReloading])

    const reload = () => setReloading(true)

    return { reload, data, isLoading, error }
}
