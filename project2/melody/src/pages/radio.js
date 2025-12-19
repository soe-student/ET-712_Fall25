import React, { useState } from 'react';
import Navbar from '../components/navbar';
import AddToCartModal from '../components/AddToCartModal';
import '../styles/App.css';
import '../styles/radio.css';

function Radio() {
  const [selectedStation, setSelectedStation] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stations = [
    {
      id: 1,
      name: "Z100 New York",
      genre: "Top 40 / Pop",
      url: "https://www.iheart.com/live/z100-1469/?embed=true",
      image: "https://via.placeholder.com/150x150/a855f7/ffffff?text=Z100",
      relatedSongs: [
        { id: 'z1', type: 'song', title: 'Flowers', artist: 'Miley Cyrus', price: 1.29, image: 'https://via.placeholder.com/150x150/a855f7/ffffff?text=Flowers' },
        { id: 'z2', type: 'song', title: 'Anti-Hero', artist: 'Taylor Swift', price: 1.29, image: 'https://via.placeholder.com/150x150/a855f7/ffffff?text=Anti-Hero' },
        { id: 'z3', type: 'song', title: 'As It Was', artist: 'Harry Styles', price: 1.29, image: 'https://via.placeholder.com/150x150/a855f7/ffffff?text=As+It+Was' },
      ],
      relatedAlbums: [
        { id: 'za1', type: 'album', title: 'Midnights', artist: 'Taylor Swift', price: 14.99, image: 'https://via.placeholder.com/150x150/a855f7/ffffff?text=Midnights' },
        { id: 'za2', type: 'album', title: "Harry's House", artist: 'Harry Styles', price: 13.99, image: 'https://via.placeholder.com/150x150/a855f7/ffffff?text=Harrys+House' },
      ]
    },
    
    {
      id: 3,
      name: "KIIS FM",
      genre: "Top 40 / Pop",
      url: "https://www.iheart.com/live/1027-kiis-fm-185/?embed=true",
      image: "https://via.placeholder.com/150x150/3b82f6/ffffff?text=KIIS+FM",
      relatedSongs: [
        { id: 'k1', type: 'song', title: 'Unholy', artist: 'Sam Smith & Kim Petras', price: 1.29, image: 'https://via.placeholder.com/150x150/3b82f6/ffffff?text=Unholy' },
        { id: 'k2', type: 'song', title: 'Calm Down', artist: 'Rema & Selena Gomez', price: 1.29, image: 'https://via.placeholder.com/150x150/3b82f6/ffffff?text=Calm+Down' },
        { id: 'k3', type: 'song', title: 'About Damn Time', artist: 'Lizzo', price: 1.29, image: 'https://via.placeholder.com/150x150/3b82f6/ffffff?text=About+Damn+Time' },
      ],
      relatedAlbums: [
        { id: 'ka1', type: 'album', title: 'Gloria', artist: 'Sam Smith', price: 14.99, image: 'https://via.placeholder.com/150x150/3b82f6/ffffff?text=Gloria' },
        { id: 'ka2', type: 'album', title: 'Special', artist: 'Lizzo', price: 13.99, image: 'https://via.placeholder.com/150x150/3b82f6/ffffff?text=Special' },
      ]
    },
    {
      id: 4,
      name: "Hot 97",
      genre: "Hip Hop",
      url: "https://www.iheart.com/live/hot-97-1469/?embed=true",
      image: "https://via.placeholder.com/150x150/f59e0b/ffffff?text=Hot+97",
      relatedSongs: [
        { id: 'h1', type: 'song', title: "God's Plan", artist: 'Drake', price: 1.29, image: 'https://via.placeholder.com/150x150/f59e0b/ffffff?text=Gods+Plan' },
        { id: 'h2', type: 'song', title: 'HUMBLE.', artist: 'Kendrick Lamar', price: 1.29, image: 'https://via.placeholder.com/150x150/f59e0b/ffffff?text=HUMBLE' },
        { id: 'h3', type: 'song', title: 'Sicko Mode', artist: 'Travis Scott', price: 1.29, image: 'https://via.placeholder.com/150x150/f59e0b/ffffff?text=Sicko+Mode' },
      ],
      relatedAlbums: [
        { id: 'ha1', type: 'album', title: 'Certified Lover Boy', artist: 'Drake', price: 15.99, image: 'https://via.placeholder.com/150x150/f59e0b/ffffff?text=CLB' },
        { id: 'ha2', type: 'album', title: 'ASTROWORLD', artist: 'Travis Scott', price: 14.99, image: 'https://via.placeholder.com/150x150/f59e0b/ffffff?text=ASTROWORLD' },
      ]
    },
    {
      id: 5,
      name: "K-Pop Radio",
      genre: "K-Pop",
      url: "https://www.iheart.com/live/k-pop-radio-9999/?embed=true",
      image: "https://via.placeholder.com/150x150/ff6fd8/ffffff?text=K-Pop",
      relatedSongs: [
        { id: 'kp1', type: 'song', title: 'Pink Venom', artist: 'BLACKPINK', price: 1.29, image: 'https://via.placeholder.com/150x150/ff6fd8/ffffff?text=Pink+Venom' },
        { id: 'kp2', type: 'song', title: 'Dynamite', artist: 'BTS', price: 1.29, image: 'https://via.placeholder.com/150x150/ff6fd8/ffffff?text=Dynamite' },
        { id: 'kp3', type: 'song', title: 'Super', artist: 'Seventeen', price: 1.29, image: 'https://via.placeholder.com/150x150/ff6fd8/ffffff?text=Super' },
      ],
      relatedAlbums: [
        { id: 'kpa1', type: 'album', title: 'Born Pink', artist: 'BLACKPINK', price: 15.99, image: 'https://via.placeholder.com/150x150/ff6fd8/ffffff?text=Born+Pink' },
        { id: 'kpa2', type: 'album', title: 'Proof', artist: 'BTS', price: 16.99, image: 'https://via.placeholder.com/150x150/ff6fd8/ffffff?text=Proof' },
      ]
    },
    {
      id: 6,
      name: "Latin Hits",
      genre: "Latin / Reggaeton",
      url: "https://www.iheart.com/live/latin-hits-9998/?embed=true",
      image: "https://via.placeholder.com/150x150/10b981/ffffff?text=Latin+Hits",
      relatedSongs: [
        { id: 'l1', type: 'song', title: 'Tití Me Preguntó', artist: 'Bad Bunny', price: 1.29, image: 'https://via.placeholder.com/150x150/10b981/ffffff?text=Titi' },
        { id: 'l2', type: 'song', title: 'Despacito', artist: 'Luis Fonsi', price: 1.29, image: 'https://via.placeholder.com/150x150/10b981/ffffff?text=Despacito' },
        { id: 'l3', type: 'song', title: 'Dákiti', artist: 'Bad Bunny & Jhay Cortez', price: 1.29, image: 'https://via.placeholder.com/150x150/10b981/ffffff?text=Dakiti' },
      ],
      relatedAlbums: [
        { id: 'la1', type: 'album', title: 'Un Verano Sin Ti', artist: 'Bad Bunny', price: 15.99, image: 'https://via.placeholder.com/150x150/10b981/ffffff?text=UVST' },
        { id: 'la2', type: 'album', title: 'YHLQMDLG', artist: 'Bad Bunny', price: 14.99, image: 'https://via.placeholder.com/150x150/10b981/ffffff?text=YHLQMDLG' },
      ]
    },
  ];

  const handleStationClick = (station) => {
    setSelectedStation(selectedStation?.id === station.id ? null : station);
  };

  const handleBuyClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleAddToCart = (item, quantity) => {
    alert(`${quantity} x ${item.title} added to cart!`);
  };

  return (
    <div className="App">
      <Navbar />
      
      <main className="main-content">
        <section className="radio-page-section">
          <div className="container">
            <h1 className="page-title">Live Radio</h1>
            <p className="page-subtitle">Stream live radio stations and discover new music</p>

            <div className="radio-stations-list">
              {stations.map(station => (
                <div key={station.id} className="radio-station-wrapper">
                  <div 
                    className={`radio-station-card ${selectedStation?.id === station.id ? 'active' : ''}`}
                    onClick={() => handleStationClick(station)}
                  >
                    <div className="station-header">
                      <img src={station.image} alt={station.name} className="station-image" />
                      <div className="station-info">
                        <h3>{station.name}</h3>
                        <p className="station-genre">{station.genre}</p>
                      </div>
                      <span className="station-toggle">
                        {selectedStation?.id === station.id ? '▼' : '▶'}
                      </span>
                    </div>

                    {/* Live Player - Shows when station is selected */}
                    {selectedStation?.id === station.id && (
                      <div className="station-player">
                        <iframe
                          src={station.url}
                          title={station.name}
                          width="100%"
                          height="180"
                          frameBorder="0"
                          allow="autoplay"
                        ></iframe>
                      </div>
                    )}
                  </div>

                  {/* Related Content */}
                  {selectedStation?.id === station.id && (
                    <div className="station-related-content">
                      {/* Now Playing / Popular Songs */}
                      <div className="related-section">
                        <h3>🔥 Popular on {station.name}</h3>
                        <div className="related-items">
                          {station.relatedSongs.map(song => (
                            <div key={song.id} className="related-item">
                              <img src={song.image} alt={song.title} />
                              <div className="related-item-info">
                                <div className="related-item-title">{song.title}</div>
                                <div className="related-item-artist">{song.artist}</div>
                                <div className="related-item-price">${song.price.toFixed(2)}</div>
                              </div>
                              <button 
                                className="related-item-btn"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleBuyClick(song);
                                }}
                              >
                                Buy
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Featured Albums */}
                      <div className="related-section">
                        <h3>💿 Featured Albums</h3>
                        <div className="related-items">
                          {station.relatedAlbums.map(album => (
                            <div key={album.id} className="related-item">
                              <img src={album.image} alt={album.title} />
                              <div className="related-item-info">
                                <div className="related-item-title">{album.title}</div>
                                <div className="related-item-artist">{album.artist}</div>
                                <div className="related-item-price">${album.price.toFixed(2)}</div>
                              </div>
                              <button 
                                className="related-item-btn"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleBuyClick(album);
                                }}
                              >
                                Buy
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
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

export default Radio;