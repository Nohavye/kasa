import { createContext, useState } from 'react'
import jsonData from '../data/data.json'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [data, setData] = useState(jsonData)

    const reloadData = () => {
        setData(jsonData)
    }

    return (
        <AppContext.Provider value={{ data, reloadData }}>
            {children}
        </AppContext.Provider>
    )
}
