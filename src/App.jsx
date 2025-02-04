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
import Profile from './components/Profile'
import EditProfile from './components/EditProfile'



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
        <Route path='/e-shopping/Profile' element={<Profile/>} />
        <Route path='/e-shopping/Profile/EditProfile' element={<EditProfile/>} />
        
      </Routes>
      <Footer />

    </BrowserRouter>
  )
}

export default App
