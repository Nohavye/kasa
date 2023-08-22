// Context
import { createContext } from 'react'

// Hooks
import { useFetch } from '../hooks'

/**
 * Contexte de l'application pour gérer les données globales.
 * @type {React.Context}
 */
export const AppContext = createContext()

/**
 * Fournisseur du contexte de l'application pour gérer les données globales.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {JSX.Element} props.children - Les composants enfants encapsulés par le fournisseur.
 * @returns {JSX.Element} Le composant fournisseur du contexte de l'application.
 */
export const AppProvider = ({ children }) => {
    const { reload, data, isLoading, error } = useFetch(
        window.location.href.startsWith('http://localhost:3000')
            ? 'http://localhost:3000/data/data.json'
            : window.location.href.startsWith('http://192.168.0.128:3000')
            ? 'http://192.168.0.128:3000/data/data.json'
            : '',
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
