import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Diamond from './pages/diamond';
import Emerald from './pages/emerald';
import Ruby from './pages/ruby';
import NotFound from './pages/notFound';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo">✨ Precious Gemstones</div>
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/" className="nav-link">🏠 Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/diamond" className="nav-link">💎 Diamond</Link>
              </li>
              <li className="nav-item">
                <Link to="/emerald" className="nav-link">💚 Emerald</Link>
              </li>
              <li className="nav-item">
                <Link to="/ruby" className="nav-link">❤️ Ruby</Link>
              </li>
            </ul>
          </div>
        </nav>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diamond" element={<Diamond />} />
            <Route path="/emerald" element={<Emerald />} />
            <Route path="/ruby" element={<Ruby />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>✨ &copy; 2025 Precious Gemstones by Soe Kaythi(ET-712)</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;