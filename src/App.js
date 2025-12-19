import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Album from './pages/album';
import Artist from './pages/artist';
import Radio from './pages/radio';
import Single from './pages/single';
import Cart from './pages/cart';
import Login from './pages/login';
import './styles/App.css';
import './styles/home.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album" element={<Album />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/radio" element={<Radio />} />
        <Route path="/single" element={<Single />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;