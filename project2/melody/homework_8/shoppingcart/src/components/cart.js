import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cart({ cart, removeFromCart, clearCart }) {
  const navigate = useNavigate();
  
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleCheckout = () => {
    alert('Thank you for your purchase!');
  };

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h1 className="page-title">Shopping Cart</h1>
        <div className="cart-empty">
          <p className="cart-empty-icon">🛒</p>
          <p className="cart-empty-message">Your cart is empty</p>
          <button 
            className="btn-continue-shopping"
            onClick={() => navigate('/')}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="page-title">Shopping Cart</h1>
      <div className="cart-container">
        <p className="item-count">
          {cart.length} {cart.length === 1 ? 'item' : 'items'} in cart
        </p>
        
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img 
                src={item.image} 
                alt={item.name} 
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <div className="cart-item-info">
                  <h3 className="cart-item-name">{item.name}/lb</h3>
                  <p className="cart-item-description">${item.price} per lb</p>
                </div>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
                <button 
                  className="btn-remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="cart-total">
            <span className="cart-total-label">Total:</span>
            <span className="cart-total-amount">${totalPrice.toFixed(2)}</span>
          </div>
          
          <div className="cart-actions">
            <button 
              className="btn-clear-cart"
              onClick={clearCart}
            >
              Clear Cart
            </button>
            <button 
              className="btn-checkout"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;