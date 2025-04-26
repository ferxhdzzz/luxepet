import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './components/nav'
import Home from './pages/user/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from "react";
import HeroNav from './components/heronav'
import Productsycat from './pages/ProductosyCatt'

import Loginn from './pages/login'
import Carrito from './pages/user/CartPagee'


import Configuration from './pages/user/configuration'
import ProductPage from './pages/user/productPage'
import Contactanos from './pages/Contactanos'



function App() {


  
  return (
    <>
      <Router>
        <Nav />
        <Routes>

          {/* Rutas */}
          
          <Route path="/configuration" element={<Configuration />} />
          <Route path="/products" element={<Productsycat /> }  />
          <Route path="/" element={<HeroNav />} />
          <Route path="/login" element={<Loginn />} />
          {/* Demas rutas por agregar */}

          {/* Rutas existentes */}
          <Route path="/" element={<Home />} />
          <Route path="/configuration" element={<Configuration />} />
          <Route path="/products" element={<Productsycat />} />
          <Route path="/contact" element={<Contactanos />} />
          <Route path="/cart" element={<Carrito />} />
          
          {/* Nuevas rutas dinámicas para productos */}
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/producto/:productId" element={<ProductPage />} />
          <Route path="/mascota/:tipoMascota" element={<ProductPage />} />
          <Route path="/popular/:productId" element={<ProductPage />} />

        </Routes>
      </Router>
    </>
  )
}

export default App