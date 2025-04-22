import React, { useState } from 'react';
import './CartPagee.css';

const CartPage = ({ onContinueShopping, onCheckout }) => {
    const [quantities, setQuantities] = useState({
        vestido: 1,
        plato: 1,
        cama: 1
    });

    const increaseQuantity = (product) => {
        setQuantities({
            ...quantities,
            [product]: quantities[product] + 1
        });
    };

    const decreaseQuantity = (product) => {
        if (quantities[product] > 1) {
            setQuantities({
                ...quantities,
                [product]: quantities[product] - 1
            });
        }
    };

    const removeItem = (product) => {
        // Por el momento solo es ilustrativo
        console.log(`Eliminar ${product} del carrito`);
    };

    // Cálculo del subtotal, impuesto y total
    const itemPrice = 561;
    const subtotal = itemPrice * (quantities.vestido + quantities.plato + quantities.cama);
    const tax = Math.round(subtotal * 0.04 * 10) / 10; // 4% de impuesto
    const total = subtotal + tax;

    return (
        <div className="cart-page-container">
            <div className="cart-main-container">
                <div className="cart-left-section">
                    <button className="back-button" onClick={onContinueShopping}>
                        <span className="back-arrow">←</span> Continua su compra
                    </button>

                    <div className="cart-title-section">
                        <h2>Carrito de compras</h2>
                        <p>Tienes 3 productos en tu carrito.</p>
                    </div>

                    <div className="cart-items">
                        <div className="cart-item">
                            <div className="item-image">
                                <img src="https://via.placeholder.com/80" alt="Vestido para gato" />
                            </div>
                            <div className="item-details">
                                <h3>Vestido para gato</h3>
                                <p>Talla S, con revestido de algodón, perfecto para días fríos.</p>
                            </div>
                            <div className="item-quantity">
                                <button onClick={() => decreaseQuantity('vestido')}>-</button>
                                <span>{quantities.vestido}</span>
                                <button onClick={() => increaseQuantity('vestido')}>+</button>
                            </div>
                            <div className="item-price">${itemPrice}</div>
                            <button className="remove-item" onClick={() => removeItem('vestido')}>
                                <span className="trash-icon">🗑️</span>
                            </button>
                        </div>

                        <div className="cart-item">
                            <div className="item-image">
                                <img src="https://via.placeholder.com/80" alt="Plato de comida para gato" />
                            </div>
                            <div className="item-details">
                                <h3>Plato de comida para gato</h3>
                                <p>Plato simple para comida de gato, modelo grande color rosado.</p>
                            </div>
                            <div className="item-quantity">
                                <button onClick={() => decreaseQuantity('plato')}>-</button>
                                <span>{quantities.plato}</span>
                                <button onClick={() => increaseQuantity('plato')}>+</button>
                            </div>
                            <div className="item-price">${itemPrice}</div>
                            <button className="remove-item" onClick={() => removeItem('plato')}>
                                <span className="trash-icon">🗑️</span>
                            </button>
                        </div>

                        <div className="cart-item">
                            <div className="item-image">
                                <img src="https://via.placeholder.com/80" alt="Cama para perro" />
                            </div>
                            <div className="item-details">
                                <h3>Cama para perro</h3>
                                <p>Cama talla grande para perros, cómoda y espaciosa.</p>
                            </div>
                            <div className="item-quantity">
                                <button onClick={() => decreaseQuantity('cama')}>-</button>
                                <span>{quantities.cama}</span>
                                <button onClick={() => increaseQuantity('cama')}>+</button>
                            </div>
                            <div className="item-price">${itemPrice}</div>
                            <button className="remove-item" onClick={() => removeItem('cama')}>
                                <span className="trash-icon">🗑️</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="cart-right-section">
                    <div className="payment-details">
                        <h3>Detalles de pago</h3>

                        <div className="payment-method">
                            <p>Tipo de tarjeta de crédito</p>
                            <div className="card-types">
                                <div className="card-option mastercard">
                                    <img src="https://via.placeholder.com/50x30?text=MC" alt="Mastercard" />
                                </div>
                                <div className="card-option visa">
                                    <img src="https://via.placeholder.com/50x30?text=VISA" alt="Visa" />
                                </div>
                                <div className="card-option rupay">
                                    <img src="https://via.placeholder.com/50x30?text=RuPay" alt="RuPay" />
                                </div>
                                <button className="see-all-btn">See all</button>
                            </div>
                        </div>

                        <div className="card-details">
                            <div className="input-group">
                                <label>Nombre de tarjeta</label>
                                <input type="text" placeholder="Nombre" />
                            </div>

                            <div className="input-group">
                                <label>Número de tarjeta</label>
                                <input type="text" placeholder="1111 2222 3333 4444" />
                            </div>

                            <div className="card-security">
                                <div className="input-group expiry">
                                    <label>Fecha de expiración</label>
                                    <input type="text" placeholder="mm/yy" />
                                </div>

                                <div className="input-group cvv">
                                    <label>CVV</label>
                                    <input type="text" placeholder="123" />
                                </div>
                            </div>
                        </div>

                        <div className="price-summary">
                            <div className="price-row">
                                <span>Subtotal</span>
                                <span className="price">${subtotal.toFixed(1)}</span>
                            </div>
                            <div className="price-row">
                                <span>Compra</span>
                                <span className="price">${tax.toFixed(1)}</span>
                            </div>
                            <div className="price-row total">
                                <span>Total</span>
                                <span className="price">${total.toFixed(1)}</span>
                            </div>
                        </div>

                        <button className="confirm-button" onClick={onCheckout}>
                            <span className="price">${total.toFixed(1)}</span>
                            <span className="confirm-text">Confirmar</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;