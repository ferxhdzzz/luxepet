import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductPage.css';
import CartPage from './CartPagee.jsx'; // * Importa el componente del carrito (verifica el nombre del archivo)

/* * Componente principal que muestra los detalles de un producto */
const ProductPage = () => {
  const { productId, tipoMascota } = useParams(); // * Obtiene los parámetros de la URL (ID del producto y tipo de mascota)
  const [showCart, setShowCart] = useState(false); // * Controla la visibilidad del carrito de compras
  const [showThankYou, setShowThankYou] = useState(false); // * Controla si se muestra el mensaje de agradecimiento
  const [product, setProduct] = useState(null); // * Estado para almacenar los datos del producto seleccionado

  // * Base de datos simulada de productos
  const productosDB = {
    "plato-para-perro": {
      nombre: "Plato para perro",
      precio: "$3.90",
      imagen: "https://i.pinimg.com/736x/57/5f/23/575f23782b6124e9bb8b72f1b10ae1d9.jpg",
      descripcion: "Plato resistente y fácil de limpiar para tu perro.",
    },
    // * Agrega más productos aquí según sea necesario
  };

  // * useEffect para cargar los datos del producto al montar el componente o cuando cambia el ID
  useEffect(() => {
    const selectedProduct = productosDB[productId];
    setProduct(selectedProduct);
  }, [productId]);

  // * Maneja el clic en el botón "Agregar al carrito"
  const handleAddToCart = () => {
    setShowCart(true); // * Muestra el componente del carrito
    setShowThankYou(true); // * Muestra el mensaje de agradecimiento

    // * Oculta el mensaje después de 2 segundos
    setTimeout(() => {
      setShowThankYou(false);
    }, 2000);
  };

  // * Si no hay producto, muestra un mensaje de carga
  if (!product) {
    return <div>Cargando producto...</div>;
  }

  // * Renderizado del componente
  return (
    <div className="product-page">
      <div className="product-image">
        <img src={product.imagen} alt={product.nombre} />
      </div>
      <div className="product-details">
        <h2>{product.nombre}</h2>
        <p>{product.descripcion}</p>
        <p className="product-price">{product.precio}</p>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Agregar al carrito
        </button>
        {showThankYou && <p className="thank-you-message">¡Gracias por tu compra!</p>}
        <Link to={`/productos/${tipoMascota}`} className="back-link">
          ← Volver a productos
        </Link>
      </div>
      {showCart && <CartPage />}
    </div>
  );
};

export default ProductPage; // * Exporta el componente para usarlo en otras partes de la app
