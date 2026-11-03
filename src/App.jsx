import { Routes, Route } from 'react-router'
import { lazy } from 'react'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import './App.css'

const HomePage = lazy(() => import('./pages/HomePage.jsx'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage.jsx'))
const Docs = lazy(() => import('./pages/Docs/Docs.jsx'))
const TermsOfService = lazy(() => import('./pages/TermsOfService/TermsOfService.jsx'))
const Privacy = lazy(() => import('./pages/Privacy/Privacy.jsx'))


export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/docs" element={<Docs />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/privacy-policy" element={<Privacy />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </>
    )
}
