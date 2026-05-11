
import './App.css'
import { Routes, Route } from 'react-router-dom'

import HomePage from "./pages/HomePage"
import ContactPage from './pages/ContactPage'
import FeaturesPage from './pages/FeaturesPage'
import LoginPage from './pages/LoginPage'
import PricingPage from './pages/PricingPage'
import { TopNav } from './components/layout/TopNav'


function App() {

  return (
    <>
      <TopNav/>    
      <Routes>
        {/* Route principale correspondante à "/" */}
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={< ContactPage/>} /> 
        <Route path="/features" element={< FeaturesPage/>} /> 
        <Route path="/login" element={< LoginPage/>} /> 
        <Route path="/pricing" element={< PricingPage/>} /> 

       {/* <Route path="*" element={<NotFoundPage />} />*/}
      </Routes>
    </>
  )
}

export default App
