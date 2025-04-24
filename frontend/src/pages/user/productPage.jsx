import React, { useState } from 'react';
import './ProductPage.css';
import CartPage from './CartPagee.jsx';

const ProductPage = () => {
  const [showCart, setShowCart] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleAddToCart = () => {
    setShowCart(true);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  const handleCheckout = () => {
    setShowCart(false);
    setShowThankYou(true);
  };

  if (showThankYou) {
    return (
      <div className="thank-you-container">
        <div className="thank-you-card">
          <h1>¡Gracias por tu compra!</h1>
          <p>Tu pedido ha sido procesado correctamente.</p>
          <button
            onClick={() => setShowThankYou(false)}
            className="back-to-store-btn"
          >
            Volver a la tienda
          </button>
        </div>
      </div>
    );
  }

  if (showCart) {
    return <CartPage onContinueShopping={handleContinueShopping} onCheckout={handleCheckout} />;
  }

  return (
    <div className="pet-store-container">
      <div className="pet-store-wrapper">
        <div className="pet-store-layout">

          {/* Barra lateral */}
          <div className="sidebar">
            <div className="filter-section">
              <h3 className="section-title">Filtrar por categorías</h3>
              <div className="filter-item">
                <div className="filter-checkbox">
                  <input type="checkbox" id="camas" />
                  <label htmlFor="camas">Camas</label>
                </div>
                <span className="filter-count">21</span>
              </div>
              <div className="filter-item">
                <div className="filter-checkbox">
                  <input type="checkbox" id="ropa" />
                  <label htmlFor="ropa">Ropa</label>
                </div>
                <span className="filter-count">35</span>
              </div>
              <div className="filter-item">
                <div className="filter-checkbox">
                  <input type="checkbox" id="accesorios" />
                  <label htmlFor="accesorios">Accesorios</label>
                </div>
                <span className="filter-count">14</span>
              </div>
              <div className="filter-item">
                <div className="filter-checkbox">
                  <input type="checkbox" id="comida" />
                  <label htmlFor="comida">Comida</label>
                </div>
                <span className="filter-count">50</span>
              </div>
              <div className="filter-item">
                <div className="filter-checkbox">
                  <input type="checkbox" id="juguetes" />
                  <label htmlFor="juguetes">Juguetes</label>
                </div>
                <span className="filter-count">60</span>
              </div>
            </div>

            <div className="filter-section">
              <h3 className="section-title">Filtrar por Precio</h3>
              <input type="range" min="0" max="100" className="price-slider" />
              <div className="price-filter-footer">
                <span className="price-range">Precio: $0 - $100</span>
                <button className="filter-button">Filtrar</button>
              </div>
            </div>

            <div className="filter-section">
              <h3 className="section-title">Filtrar por etiquetas</h3>
              <div className="filter-item">
                <div className="filter-checkbox">
                  <input type="checkbox" id="natural" />
                  <label htmlFor="natural">Comida natural</label>
                </div>
                <span className="filter-count">23</span>
              </div>
              <div className="filter-item">
                <div className="filter-checkbox">
                  <input type="checkbox" id="digestion" />
                  <label htmlFor="digestion">Comida de digestión</label>
                </div>
                <span className="filter-count">18</span>
              </div>
              <div className="filter-item">
                <div className="filter-checkbox">
                  <input type="checkbox" id="premium" />
                  <label htmlFor="premium">Comida premium</label>
                </div>
                <span className="filter-count">32</span>
              </div>
              <div className="filter-item">
                <div className="filter-checkbox">
                  <input type="checkbox" id="especiales" />
                  <label htmlFor="especiales">Triples calorías</label>
                </div>
                <span className="filter-count">25</span>
              </div>
            </div>

            <div className="filter-section">
              <h3 className="section-title">Filtrado por etiquetas</h3>
              <div className="tags-container">
                <button className="tag-button">Comida de perro</button>
                <button className="tag-button">Comida de gato</button>
                <button className="tag-button">Natural</button>
                <button className="tag-button">Perros</button>
                <button className="tag-button">Perro pequeño</button>
                <button className="tag-button">Reptiles</button>
              </div>
            </div>

            <div className="filter-section">
              <h3 className="section-title">Productos populares</h3>
              <div className="popular-products">
                <div className="popular-product">
                  <div className="product-thumbnail"></div>
                  <div className="product-info">
                    <p className="product-name">Comida premium para gato</p>
                    <p className="product-price">$25</p>
                  </div>
                </div>
                <div className="popular-product">
                  <div className="product-thumbnail"></div>
                  <div className="product-info">
                    <p className="product-name">Cama para gato</p>
                    <p className="product-price">$36</p>
                  </div>
                </div>
                <div className="popular-product">
                  <div className="product-thumbnail"></div>
                  <div className="product-info">
                    <p className="product-name">Correa para gato</p>
                    <p className="product-price">$17</p>
                  </div>
                </div>
                <div className="popular-product">
                  <div className="product-thumbnail"></div>
                  <div className="product-info">
                    <p className="product-name">Plato de comida para gato</p>
                    <p className="product-price">$20</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />

          {/* Detalles de Producto */}
          <div className="product-detail">
            <div className="product-layout vertical">
              <div className="product-image-container full-width">
                <img
                  src="https://5.imimg.com/data5/ECOM/Default/2024/1/376691210/HC/DP/YV/82542766/huftiputthewagintheswagdogt-shirt-30960d5f-1f24-4548-92e3-2725945be348-500x500.jpg"
                  alt="Camiseta de perro con estampado"
                  className="product-image"
                />
              </div>

              <div className="product-info-container full-width">
                <div className="product-header">
                  <h2 className="product-title">Camiseta de perro con estampado</h2>
                  <div className="product-price-tag">
                    <span>$9.00</span>
                  </div>
                </div>

                <div className="product-rating">
                  <span className="rating-label">Calificación:</span>
                  <div className="stars">
                    {'★★★★☆'} <span>4.2/5</span>
                  </div>
                </div>

                <div className="product-size">
                  <p className="size-label">Talla:</p>
                  <div className="size-options">
                    <button className="size-button">S</button>
                    <button className="size-button selected">M</button>
                    <button className="size-button">L</button>
                    <button className="size-button">XL</button>
                  </div>
                </div>

                <div className="product-description">
                  <h3 className="description-title">Descripción:</h3>
                  <p className="description-text">
                    Linda y cómoda camiseta diseñada especialmente para tu mejor amigo peludo. Confeccionada en un suave material de algodón, esta prenda es ideal para mantener a tu mascota fresca y a gusto durante los días calurosos. Su diseño no solo ofrece confort, sino que también permite que tu mascota se mueva libremente. Además, la camiseta viene en diversas tallas y colores, adaptándose a las necesidades y gustos de cada dueño y su fiel compañero. Es perfecta para paseos, días en el parque o simplemente para que tu peludo luzca a la moda en casa.
                  </p>
                </div>


                <br /> <br /> <br />
                <div className="add-to-cart-container">
                  <button
                    onClick={handleAddToCart}
                    className="add-to-cart-button"
                  >
                    Añadir al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;