import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './components/nav'
import Home from './pages/user/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'  // Changed from 'react-router'
import React from "react";
import HeroNav from './components/heronav'

import Configuration from './pages/user/configuration'
import ProductPage from './pages/user/productPage'

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          {/* Rutas */}
          <Route path="/" element={<Home />} />
          <Route path="/configuration" element={<Configuration />} />
          <Route path="/gato" element={<HeroNav />} />
          <Route path="/prueba" element={<ProductPage />} />
          {/* Demas rutas por agregar */}
        </Routes>
      </Router>
    </>
  )
}

export default App