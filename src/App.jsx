import { Routes, Route } from 'react-router'
import { lazy } from 'react'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import './App.css'

const HomePage = lazy(() => import('./pages/HomePage.jsx'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'))


export default function App() {
  return (
    <>
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
    </>
  )
}
