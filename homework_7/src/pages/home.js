import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page-container home-page">
      <h1 className="page-title">✨ Welcome to Precious Gemstones</h1>
      <img 
        src="images/gem.jpg" 
        alt="Collection of precious gemstones"
        className="page-image"
      />
      <div className="content-box">
        <h2>Discover the World's Most Magnificent Treasures</h2>
        <p>
          Welcome to our collection of the world's most precious gemstones. For thousands of years, 
          humans have been captivated by the beauty, rarity, and mystique of gemstones. These natural 
          wonders are formed deep within the Earth under extreme conditions, taking millions or even 
          billions of years to create. Each gemstone tells a unique story of geological processes, 
          cultural significance, and human fascination. From the unbreakable strength of diamonds to 
          the lush green of emeralds and the passionate red of rubies, these gems have adorned royalty, 
          inspired legends, and driven exploration across continents. Explore our collection to learn 
          fascinating facts about these incredible natural treasures that continue to captivate us today.
        </p>
        <div className="gem-links">
          <Link to="/diamond" className="gem-card diamond-card">
            <h3>💎 Diamond</h3>
            <p>The Hardest Natural Substance</p>
          </Link>
          <Link to="/emerald" className="gem-card emerald-card">
            <h3>💚 Emerald</h3>
            <p>The Green Fire of Nature</p>
          </Link>
          <Link to="/ruby" className="gem-card ruby-card">
            <h3>❤️ Ruby</h3>
            <p>The King of Gems</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;