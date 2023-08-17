// React
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Global Styles
import './styles/globalStyles.css'

// Pages
import AboutPage from './pages/About'
import DetailsPage from './pages/Details'
import ErrorPage from './pages/Error'
import HomePage from './pages/Home'

// Components
import App from './components/App'
import Header from './components/Header'
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App>
                <Header />
                <Routes>
                    <Route path="*" element={<ErrorPage />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/details/:id" element={<DetailsPage />} />
                </Routes>
                <Footer />
            </App>
        </BrowserRouter>
    </React.StrictMode>,
)
