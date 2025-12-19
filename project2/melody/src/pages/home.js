import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import AddToCartModal from '../components/AddToCartModal';
import '../styles/App.css';
import '../styles/home.css';

function Home() {
  // ============================================
  // STATE
  // ============================================
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Refs for scrolling
  const albumsRowRef = useRef(null);

  // ============================================
  // DATA
  // ============================================
  const heroSlides = [
    {
      id: 1,
      title: "ROSÉ",
      subtitle: "Solo Debut Album",
      image: "images/rose.jpg"
    },
    {
      id: 2,
      title: "Taylor Swift",
      subtitle: "The Eras Tour Experience",
      image: "images/taylor_swift.jpg"
    },
    {
      id: 3,
      title: "The Weeknd",
      subtitle: "After Hours til Dawn",
      image: "images/weekend.jpg"
    },
    {
      id: 4,
      title: "aespa",
      subtitle: "MY WORLD",
      image: "images/aspa.jpg"
    },
    {
      id: 5,
      title: "TWICE",
      subtitle: "Ready To Be",
      image: "images/twice.jpg"
    }
  ];

  const featuredAlbums = [
    { 
      id: 1, 
      type: 'album', 
      title: "Born Pink", 
      artist: "BLACKPINK", 
      year: "2022", 
      price: 15.99, 
      image: "https://picsum.photos/300/300?random=10",
      description: "BLACKPINK's second studio album"
    },
    { 
      id: 2, 
      type: 'album', 
      title: "Midnights", 
      artist: "Taylor Swift", 
      year: "2022", 
      price: 14.99, 
      image: "https://picsum.photos/300/300?random=11",
      description: "Taylor Swift's tenth studio album"
    },
    { 
      id: 3, 
      type: 'album', 
      title: "Renaissance", 
      artist: "Beyoncé", 
      year: "2022", 
      price: 16.99, 
      image: "https://picsum.photos/300/300?random=12",
      description: "Beyoncé's seventh studio album"
    },
    { 
      id: 4, 
      type: 'album', 
      title: "Harry's House", 
      artist: "Harry Styles", 
      year: "2022", 
      price: 13.99, 
      image: "https://picsum.photos/300/300?random=13",
      description: "Harry Styles' third studio album"
    },
    { 
      id: 5, 
      type: 'album', 
      title: "Un Verano Sin Ti", 
      artist: "Bad Bunny", 
      year: "2022", 
      price: 14.99, 
      image: "https://picsum.photos/300/300?random=14",
      description: "Bad Bunny's fourth studio album"
    },
    { 
      id: 6, 
      type: 'album', 
      title: "SOS", 
      artist: "SZA", 
      year: "2022", 
      price: 15.99, 
      image: "https://picsum.photos/300/300?random=15",
      description: "SZA's second studio album"
    },
  ];

  const topSongs = [
    { 
      id: 1, 
      type: 'song', 
      title: "Anti-Hero", 
      artist: "Taylor Swift", 
      duration: "3:21",
      price: 1.29, 
      image: "https://picsum.photos/100/100?random=30",
      description: "From the album Midnights"
    },
    { 
      id: 2, 
      type: 'song', 
      title: "Flowers", 
      artist: "Miley Cyrus", 
      duration: "3:20",
      price: 1.29, 
      image: "https://picsum.photos/100/100?random=31",
      description: "From the album Endless Summer Vacation"
    },
    { 
      id: 3, 
      type: 'song', 
      title: "As It Was", 
      artist: "Harry Styles", 
      duration: "2:47",
      price: 1.29, 
      image: "https://picsum.photos/100/100?random=32",
      description: "From the album Harry's House"
    },
    { 
      id: 4, 
      type: 'song', 
      title: "Kill Bill", 
      artist: "SZA", 
      duration: "2:33",
      price: 1.29, 
      image: "https://picsum.photos/100/100?random=33",
      description: "From the album SOS"
    },
  ];

  const radioArtists = [
    { id: 1, name: "Taylor Swift", image: "images/taylor.jpeg" },
    { id: 2, name: "The Weeknd", image: "images/weekend.jpg" },
    { id: 3, name: "aespa", image: "images/aspa.jpg" },
    { id: 4, name: "TWICE", image: "images/twice.jpg" },
    { id: 5, name: "Justin Bieber", image: "images/bieber.jpeg" },
  ];

  // ============================================
  // EFFECTS
  // ============================================
  
  // Auto-slide for hero
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // ============================================
  // HANDLERS
  // ============================================
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const scrollAlbums = (direction) => {
    if (albumsRowRef.current) {
      const scrollAmount = 300;
      albumsRowRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleBuyClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleAddToCart = (item, quantity) => {
    // Dispatch custom event to update cart count in navbar
    window.dispatchEvent(new Event('cartUpdated'));
  };

  // ============================================
  // RENDER
  // ============================================
  return (
    <div className="App">
      <Navbar />
      
      <main className="main-content home-page">
        
        {/* ==================== HERO SLIDER ==================== */}
        <section className="hero-slider">
          {heroSlides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-content">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
              </div>
            </div>
          ))}
          
          <button className="slider-btn prev" onClick={prevSlide}>‹</button>
          <button className="slider-btn next" onClick={nextSlide}>›</button>
          
          <div className="slider-dots">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </section>

        {/* ==================== WELCOME SECTION ==================== */}
        <section className="welcome-section">
          <h2>Welcome to Melody</h2>
          <p>Your destination for discovering and enjoying the best music from around the world.</p>
        </section>

        {/* ==================== FEATURED ALBUMS ==================== */}
        <section className="home-section home-albums-section">
          <div className="home-container">
            <div className="section-header">
              <div className="section-header-text">
                <h2 className="section-title">Featured Albums</h2>
                <p className="section-subtitle">Check out our handpicked collection of albums</p>
              </div>
              <div className="scroll-buttons">
                <button className="scroll-btn" onClick={() => scrollAlbums('left')}>‹</button>
                <button className="scroll-btn" onClick={() => scrollAlbums('right')}>›</button>
              </div>
            </div>
            
            <div className="albums-row" ref={albumsRowRef}>
              {featuredAlbums.map(album => (
                <div 
                  key={album.id} 
                  className="album-card-horizontal"
                  onClick={() => handleBuyClick(album)}
                >
                  <img src={album.image} alt={album.title} />
                  <div className="album-card-info">
                    <h4>{album.title}</h4>
                    <p className="artist">{album.artist}</p>
                    <p className="year">{album.year}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="view-all-container">
              <Link to="/album" className="view-all-btn">View All Albums</Link>
            </div>
          </div>
        </section>

        {/* ==================== TOP SONGS ==================== */}
        <section className="home-section home-songs-section">
          <div className="home-container">
            <h2 className="section-title">Top Songs</h2>
            <p className="section-subtitle">Most popular tracks this week</p>
            
            <div className="songs-list-wrapper">
              {topSongs.map((song) => (
                <div key={song.id} className="song-item">
                  <img src={song.image} alt={song.title} className="song-image" />
                  <div className="song-details">
                    <span className="song-title">{song.title}</span>
                    <span className="song-artist">{song.artist}</span>
                  </div>
                  <div className="song-actions">
                    <span className="song-price">${song.price.toFixed(2)}</span>
                    <button 
                      className="buy-btn-small"
                      onClick={() => handleBuyClick(song)}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="view-all-container">
              <Link to="/single" className="view-all-btn">View All Songs</Link>
            </div>
          </div>
        </section>

        {/* ==================== ARTIST RADIO ==================== */}
        <section className="home-section home-radio-section">
          <div className="home-container">
            <h2 className="section-title">Artist Radio</h2>
            <p className="section-subtitle">Listen to music inspired by your favorite artists</p>
            
            <div className="radio-grid">
              {radioArtists.map(artist => (
                <Link to="/radio" key={artist.id} className="radio-card">
                  <img src={artist.image} alt={artist.name} />
                  <h4>{artist.name}</h4>
                </Link>
              ))}
            </div>
            
            <div className="view-all-container">
              <Link to="/artist" className="view-all-btn">View All Artists</Link>
            </div>
          </div>
        </section>

        {/* ==================== FEATURES ==================== */}
        <section className="home-section features-section">
          <div className="home-container">
            <div className="features-grid">
              <div className="feature-card">
                <span className="feature-icon">🎵</span>
                <h3>Millions of Songs</h3>
                <p>Access a vast library of tracks from artists around the world.</p>
              </div>
              <div className="feature-card">
                <span className="feature-icon">📻</span>
                <h3>Live Radio</h3>
                <p>Stream live radio stations and discover new music every day.</p>
              </div>
              <div className="feature-card">
                <span className="feature-icon">💿</span>
                <h3>Exclusive Albums</h3>
                <p>Get early access to exclusive releases from top artists.</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ==================== MODAL ==================== */}
      <AddToCartModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={selectedItem}
        onAddToCart={handleAddToCart}
      />

      {/* ==================== FOOTER ==================== */}
      <footer className="footer">
        <p>&copy; 2025 Melody Music. All rights reserved. By Soe Kaythi</p>
      </footer>
    </div>
  );
}

export default Home;