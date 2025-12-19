import React, { useState } from 'react';
import Navbar from '../components/navbar';
import AddToCartModal from '../components/AddToCartModal';
import '../styles/App.css';
import '../styles/single.css';

function Single() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const songs = [
    { id: 1, type: 'song', title: 'Anti-Hero', artist: 'Taylor Swift', price: 1.29, image: 'https://via.placeholder.com/150x150/a855f7/ffffff?text=Anti-Hero' },
    { id: 2, type: 'song', title: 'Flowers', artist: 'Miley Cyrus', price: 1.29, image: 'https://via.placeholder.com/150x150/ec4899/ffffff?text=Flowers' },
    { id: 3, type: 'song', title: 'As It Was', artist: 'Harry Styles', price: 1.29, image: 'https://via.placeholder.com/150x150/3b82f6/ffffff?text=As+It+Was' },
    { id: 4, type: 'song', title: 'Calm Down', artist: 'Rema & Selena Gomez', price: 1.29, image: 'https://via.placeholder.com/150x150/f59e0b/ffffff?text=Calm+Down' },
    { id: 5, type: 'song', title: 'Unholy', artist: 'Sam Smith & Kim Petras', price: 1.29, image: 'https://via.placeholder.com/150x150/10b981/ffffff?text=Unholy' },
    { id: 6, type: 'song', title: 'Kill Bill', artist: 'SZA', price: 1.29, image: 'https://via.placeholder.com/150x150/ef4444/ffffff?text=Kill+Bill' },
    { id: 7, type: 'song', title: 'Creepin', artist: 'Metro Boomin', price: 1.29, image: 'https://via.placeholder.com/150x150/8b5cf6/ffffff?text=Creepin' },
    { id: 8, type: 'song', title: 'Die For You', artist: 'The Weeknd', price: 1.29, image: 'https://via.placeholder.com/150x150/06b6d4/ffffff?text=Die+For+You' },
  ];

  const handleBuyClick = (song) => {
    setSelectedItem(song);
    setIsModalOpen(true);
  };

  const handleAddToCart = (item, quantity) => {
    alert(`${quantity} x ${item.title} added to cart!`);
  };

  return (
    <div className="App">
      <Navbar />
      
      <main className="main-content">
        <section className="songs-page-section">
          <div className="container">
            <h1 className="page-title">Top Songs</h1>
            <p className="page-subtitle">Most popular tracks this week</p>
            
            <div className="songs-list-container">
              {songs.map(song => (
                <div key={song.id} className="song-list-item">
                  <div className="song-list-info">
                    <div className="song-list-title">{song.title}</div>
                    <div className="song-list-artist">{song.artist}</div>
                  </div>
                  <div className="song-list-actions">
                    <span className="song-list-price">${song.price.toFixed(2)}</span>
                    <button 
                      className="song-list-buy-btn"
                      onClick={() => handleBuyClick(song)}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <AddToCartModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={selectedItem}
        onAddToCart={handleAddToCart}
      />

      <footer className="footer">
        <p>&copy; 2025 Melody Music. All rights reserved. By Soe Kaythi</p>
      </footer>
    </div>
  );
}

export default Single;