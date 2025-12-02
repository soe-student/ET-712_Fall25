import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import ProductList from './components/productlist';
import Cart from './components/cart';
import './App.css';

function Navbar({ cartCount }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          FreshMart
        </div>
        <ul className="nav-links">
          <li>
            <button 
              onClick={() => navigate('/')}
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Products
            </button>
          </li>
          <li className="cart-badge">
            <button 
              onClick={() => navigate('/cart')}
              className={`nav-link ${location.pathname === '/cart' ? 'active' : ''}`}
            >
              Cart
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function AppContent() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const isInCart = cart.some(item => item.id === product.id);
    
    if (!isInCart) {
      setCart([...cart, product]);
    } else {
      alert('This item is already in your cart!');
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="app">
      <Navbar cartCount={cart.length} />
      <div className="main-content">
        <Routes>
          <Route 
            path="/" 
            element={<ProductList addToCart={addToCart} cart={cart} />} 
          />
          <Route 
            path="/cart" 
            element={
              <Cart 
                cart={cart} 
                removeFromCart={removeFromCart} 
                clearCart={clearCart}
              />
            } 
          />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;