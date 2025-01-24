import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import HomePage from './components/HomePage'
import Furniture from './components/furniture'
import Clothes from './components/Clothes'
import Lighting from './components/Lighting'
import Service from './components/Service'
import Contact from './components/Contact'



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/e-shopping' element={<HomePage />} />
        <Route path='/e-shopping/furniture' element={<Furniture />} />
        <Route path='/e-shopping/Clothes' element={<Clothes/>} />
        <Route path='/e-shopping/Lighting' element={<Lighting/>} />
        <Route path='/e-shopping/Service' element={<Service/>} />
        <Route path='/e-shopping/Contact' element={<Contact/>} />
      </Routes>
      <Footer />

    </BrowserRouter>
  )
}

export default App
