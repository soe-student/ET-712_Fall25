import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import '../styles/App.css';
import '../styles/cart.css';

function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(cart);
  }, []);

  const removeItem = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.setItem('cart', JSON.stringify([]));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handleCheckout = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn || isLoggedIn !== 'true') {
      // Not logged in - redirect to login page
      navigate('/login');
      return;
    }
    // Logged in - show payment modal
    setShowPaymentModal(true);
  };

  const handlePaymentInputChange = (e) => {
    const { name, value } = e.target;
    
    // Format card number with spaces
    if (name === 'cardNumber') {
      const formatted = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
      setPaymentData({ ...paymentData, [name]: formatted.slice(0, 19) });
      return;
    }
    
    // Format expiry date
    if (name === 'expiry') {
      const cleaned = value.replace(/\D/g, '');
      if (cleaned.length >= 2) {
        setPaymentData({ ...paymentData, [name]: cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4) });
      } else {
        setPaymentData({ ...paymentData, [name]: cleaned });
      }
      return;
    }
    
    // CVV - only numbers, max 4 digits
    if (name === 'cvv') {
      setPaymentData({ ...paymentData, [name]: value.replace(/\D/g, '').slice(0, 4) });
      return;
    }
    
    setPaymentData({ ...paymentData, [name]: value });
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    
    // Validate fields
    if (!paymentData.cardNumber || !paymentData.cardName || !paymentData.expiry || !paymentData.cvv) {
      alert('Please fill in all payment fields');
      return;
    }
    
    // Simulate payment processing
    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      setShowPaymentModal(false);
      alert('🎉 Payment successful! Thank you for your purchase!');
      clearCart();
      navigate('/');
    }, 2000);
  };

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);
  const taxRate = 0.08875; // 8.875% tax
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <div className="App">
      <Navbar />
      
      <main className="main-content">
        <section className="cart-section">
          <div className="cart-container">
            {/* Page Header */}
            <div className="cart-header-section">
              <h1 className="cart-page-title">Shopping Cart</h1>
              <p className="cart-page-subtitle">Review your items before checkout</p>
            </div>

            {cartItems.length === 0 ? (
              /* Empty Cart State */
              <div className="cart-empty">
                <span className="cart-empty-icon">🛒</span>
                <h2>Your cart is empty</h2>
                <p>Looks like you haven't added any items yet.</p>
                <Link to="/album" className="continue-shopping-btn">
                  Continue Shopping
                </Link>
              </div>
            ) : (
              /* Cart with Items */
              <div className="cart-content">
                {/* Items Column */}
                <div className="cart-items-container">
                  <div className="cart-header">
                    <h2>Items ({cartItems.length})</h2>
                    <button className="clear-cart-btn" onClick={clearCart}>
                      Clear All
                    </button>
                  </div>

                  <div className="cart-items-list">
                    {cartItems.map((item, index) => (
                      <div key={index} className="cart-item">
                        {item.image && (
                          <img 
                            src={item.image} 
                            alt={item.title || item.name} 
                            className="cart-item-image" 
                          />
                        )}
                        <div className="cart-item-details">
                          <span className="cart-item-type">{item.type || 'Song'}</span>
                          <span className="cart-item-title">{item.title || item.name}</span>
                          <span className="cart-item-artist">{item.artist}</span>
                        </div>
                        <span className="cart-item-price">${item.price?.toFixed(2)}</span>
                        <button 
                          className="cart-item-remove"
                          onClick={() => removeItem(index)}
                          aria-label="Remove item"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Summary Column */}
                <div className="cart-summary">
                  <h2>Order Summary</h2>
                  
                  <div className="summary-row">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="summary-row">
                    <span>Tax (8.875%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>

                  <div className="summary-divider"></div>

                  <div className="summary-total">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  <button className="checkout-btn" onClick={handleCheckout}>
                    Checkout
                  </button>

                  <Link to="/album" className="continue-shopping-link">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="payment-modal-overlay" onClick={() => setShowPaymentModal(false)}>
          <div className="payment-modal" onClick={(e) => e.stopPropagation()}>
            <button className="payment-modal-close" onClick={() => setShowPaymentModal(false)}>
              ×
            </button>
            
            <h2 className="payment-modal-title">Payment Details</h2>
            <p className="payment-modal-subtitle">Enter your card information to complete purchase</p>
            
            <div className="payment-summary">
              <span>Total Amount:</span>
              <span className="payment-total">${total.toFixed(2)}</span>
            </div>

            <form className="payment-form" onSubmit={handlePaymentSubmit}>
              <div className="payment-form-group">
                <label htmlFor="cardName">Name on Card</label>
                <input
                  type="text"
                  id="cardName"
                  name="cardName"
                  value={paymentData.cardName}
                  onChange={handlePaymentInputChange}
                  placeholder="John Doe"
                  autoComplete="cc-name"
                  required
                />
              </div>

              <div className="payment-form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={paymentData.cardNumber}
                  onChange={handlePaymentInputChange}
                  placeholder="1234 5678 9012 3456"
                  maxLength="19"
                  autoComplete="cc-number"
                  required
                />
              </div>

              <div className="payment-form-row">
                <div className="payment-form-group">
                  <label htmlFor="expiry">Expiry Date</label>
                  <input
                    type="text"
                    id="expiry"
                    name="expiry"
                    value={paymentData.expiry}
                    onChange={handlePaymentInputChange}
                    placeholder="MM/YY"
                    maxLength="5"
                    autoComplete="cc-exp"
                    required
                  />
                </div>

                <div className="payment-form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="password"
                    id="cvv"
                    name="cvv"
                    value={paymentData.cvv}
                    onChange={handlePaymentInputChange}
                    placeholder="•••"
                    maxLength="4"
                    autoComplete="cc-csc"
                    required
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="payment-submit-btn"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <span className="spinner"></span>
                    Processing...
                  </>
                ) : (
                  `Pay $${total.toFixed(2)}`
                )}
              </button>
            </form>

            <p className="payment-secure-note">
              🔒 Your payment information is secure
            </p>
          </div>
        </div>
      )}

      <footer className="footer">
        <p>&copy; 2025 Melody Music. All rights reserved. By Soe Kaythi</p>
      </footer>
    </div>
  );
}

export default Cart;