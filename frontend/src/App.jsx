import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './components/nav'
import Home from './pages/user/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import React from "react";
import HeroNav from './components/heronav'
import Profile from './pages/user/profile'

function App() {


  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Router>
        {/* Mostramos la Navbar y la Sección Hero */}
        <HeroNav />

        {/* Aquí puedes definir tus rutas */}
        <Routes>
          <Route path="/products" element={<h1>Página de Productos</h1>} />
          <Route path="/profile" element={<Profile />} /> 
        </Routes>
      </Router>

    </>
  )
}

export default App
