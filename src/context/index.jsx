import { createContext } from 'react'
import { useFetch } from '../hooks'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const { reload, data, isLoading, error } = useFetch(
        'http://localhost:3000/data/data.json',
    )

    return (
        <AppContext.Provider
            value={{
                reloadData: reload,
                data,
                dataIsLoading: isLoading,
                dataError: error,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
