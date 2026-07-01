import { Routes, Route, useLocation, Navigate, BrowserRouter } from 'react-router-dom'
import { useEffect } from 'react'

import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import FeaturesPage from './pages/FeaturesPage'
import LoginPage from './pages/LoginPage'
import PricingPage from './pages/PricingPage'
import { TopNav } from './components/layout/TopNav'
import { Footer } from './components/layout/Footer'
import LegalNoticesPage from './pages/LegalPage'
import CGUPage from './pages/CGUPage'
import NexiViaPage from './pages/NexiViaPage'
import AegisPlanPage from './pages/AegisPlanPage'
import DemeCarePage from './pages/DemeCarePage'

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
      <BrowserRouter>
      <main className='bg-background w-full overflow-x-hidden flex flex-col min-h-screen'>
      <ScrollToTop />
      <TopNav />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/legal" element={<LegalNoticesPage />} />
          <Route path='/CGU' element={<CGUPage/>}/>
          <Route path="*" element={<Navigate to="/" replace />} />

          <Route path="/solutions/nexivia" element={<NexiViaPage />} />
          <Route path="/solutions/aegisplan" element={<AegisPlanPage />} />
          <Route path="/solutions/demecare" element={<DemeCarePage />} />
        </Routes>
                <Footer/>
      </main>

      </BrowserRouter>

    </>
  )
}

export default App
