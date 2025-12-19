import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Update cart count from localStorage
  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCartCount(cart.length);
    };

    updateCartCount();
    
    // Listen for storage changes
    window.addEventListener('storage', updateCartCount);
    
    // Check every second for cart updates (for same-tab updates)
    const interval = setInterval(updateCartCount, 1000);

    return () => {
      window.removeEventListener('storage', updateCartCount);
      clearInterval(interval);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo - Click to go home */}
        <Link to="/" className="nav-logo">
          <img 
            src={process.env.PUBLIC_URL + '/images/logo.png'}
            alt="Melody Logo"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <span className="melody-text">
            <span>M</span>
            <span>e</span>
            <span>l</span>
            <span>o</span>
            <span>d</span>
            <span>y</span>
            <span>&nbsp;</span>
            <span>M</span>
            <span>u</span>
            <span>s</span>
            <span>i</span>
            <span>c</span>
          </span>
        </Link>

        {/* Menu Toggle (Mobile) */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/album" className="nav-link" onClick={() => setMenuOpen(false)}>Albums</Link>
          </li>
          <li className="nav-item">
            <Link to="/single" className="nav-link" onClick={() => setMenuOpen(false)}>Songs</Link>
          </li>
          <li className="nav-item">
            <Link to="/artist" className="nav-link" onClick={() => setMenuOpen(false)}>Artists</Link>
          </li>
          <li className="nav-item">
            <Link to="/radio" className="nav-link" onClick={() => setMenuOpen(false)}>Radio</Link>
          </li>
        </ul>

        {/* Icons - Using Link for navigation */}
        <ul className="nav-icons">
          <li>
            <Link to="/login" className="nav-icon" title="Profile">
              👤
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-icon" title="Cart">
              🛒
              <span className="cart-badge">{cartCount}</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;