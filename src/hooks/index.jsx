import { useEffect, useState } from 'react'

/**
 * Hook personnalisé pour effectuer des requêtes de données.
 *
 * @param {string} url - L'URL à partir de laquelle les données doivent être récupérées.
 * @returns {Object} Les fonctions et les états pour gérer les requêtes de données.
 */
export function useFetch(url) {
    const [data, setData] = useState({})
    const [isReloading, setReloading] = useState(false)
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (!url) return

        /**
         * Effectue la requête de données.
         */
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

    /**
     * Recharge les données.
     */
    const reload = () => setReloading(true)

    return { reload, data, isLoading, error }
}
