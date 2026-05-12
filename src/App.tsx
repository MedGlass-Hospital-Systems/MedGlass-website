import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import FeaturesPage from './pages/FeaturesPage'
import LoginPage from './pages/LoginPage'
import PricingPage from './pages/PricingPage'
import { TopNav } from './components/layout/TopNav'
import { Footer } from './components/layout/Footer'
import { AmbientBackground } from './components/layout/AmbientBackground'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}

function App() {
  return (
    <>
      <AmbientBackground />
      <ScrollToTop />
      <TopNav />
      <main className="relative pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
