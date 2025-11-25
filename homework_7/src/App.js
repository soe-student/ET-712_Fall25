import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Diamond Page Component
function Diamond() {
  return (
    <div className="page-container diamond-page">
      <h1 className="page-title">💎 Diamond - The Eternal Stone</h1>
      <img 
        src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80" 
        alt="Sparkling diamond"
        className="page-image"
      />
      <div className="content-box">
        <h2>Diamonds: Ancient Stardust Beneath Our Feet</h2>
        <p>
          Diamonds are not just the hardest natural material on Earth—they're also time capsules from 
          the planet's infancy. Most diamonds formed between 1 to 3.5 billion years ago, deep within 
          Earth's mantle at depths of 150-200 kilometers, where temperatures exceed 1000°C and pressures 
          reach 50,000 times atmospheric pressure. What's truly fascinating is that diamonds are brought 
          to the surface through violent volcanic eruptions called kimberlite eruptions, which travel at 
          speeds up to 400 km/h. These eruptions are so rare that the last one occurred about 25 million 
          years ago. Even more remarkable, scientists have discovered that some diamonds contain tiny 
          pockets of ancient ocean water and minerals from the early Earth, making them invaluable 
          windows into our planet's geological history. Additionally, diamonds rain on Jupiter and Saturn, 
          where methane in the atmosphere transforms into graphite and then diamond as it falls toward 
          the planets' cores.
        </p>
      </div>
    </div>
  );
}

// Emerald Page Component
function Emerald() {
  return (
    <div className="page-container emerald-page">
      <h1 className="page-title">💚 Emerald - The Stone of Kings</h1>
      <img 
        src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80" 
        alt="Beautiful emerald gemstone"
        className="page-image"
      />
      <div className="content-box">
        <h2>The Mystical Green That Captivated Cleopatra</h2>
        <p>
          Emeralds have been prized for over 4,000 years, with the oldest known emerald mines located 
          in Egypt near the Red Sea, which were called "Cleopatra's Mines" because the legendary queen 
          had an obsessive passion for these green gems. What makes emeralds truly special is their 
          incredible rarity—they are actually rarer than diamonds. The mesmerizing green color comes from 
          trace amounts of chromium and vanadium, but the conditions required for emerald formation are 
          so specific and geologically unlikely that finding them is considered a geological miracle. 
          Emeralds are also more fragile than other precious stones and almost always contain inclusions 
          (internal fractures and imperfections) called "jardin" (French for garden) because they resemble 
          foliage. Interestingly, the ancient Incas and Aztecs considered emeralds sacred, and Spanish 
          conquistadors were amazed to find indigenous people worshipping emerald stones larger than an 
          ostrich egg. Today, Colombia produces about 70-90% of the world's emeralds, and a single 
          high-quality emerald can be worth more per carat than a diamond.
        </p>
      </div>
    </div>
  );
}

// Ruby Page Component
function Ruby() {
  return (
    <div className="page-container ruby-page">
      <h1 className="page-title">❤️ Ruby - The King of Gems</h1>
      <img 
        src="https://images.unsplash.com/photo-1583937443566-aaefb3a1c7e1?w=800&q=80" 
        alt="Radiant ruby gemstone"
        className="page-image"
      />
      <div className="content-box">
        <h2>The Blood-Red Stone That Outshines Diamonds</h2>
        <p>
          Rubies are among the most valuable gemstones in the world, with large, high-quality rubies often 
          selling for more per carat than equivalent diamonds. The "Sunrise Ruby," a 25.59-carat Burmese ruby, 
          sold for $30.3 million in 2015, setting a world record for any ruby and any colored gemstone. Rubies 
          are made of corundum (aluminum oxide), the same mineral as sapphires, but it's the presence of chromium 
          that creates their spectacular red color. Ancient warriors in Burma (Myanmar) believed that rubies made 
          them invincible in battle and would actually embed the stones into their skin before combat. 
          Scientifically, rubies exhibit an optical phenomenon called fluorescence—when exposed to ultraviolet 
          light, they glow with an intense red color, making them appear to be lit from within. Myanmar's Mogok 
          Valley, known as the "Valley of Rubies," has produced the finest rubies for over 800 years. Perhaps 
          most intriguingly, rubies were used in the first working laser in 1960, and ruby lasers are still used 
          today in various technologies, from medical procedures to scientific research, proving that this ancient 
          gem continues to play a role in cutting-edge science.
        </p>
      </div>
    </div>
  );
}

// 404 Page Component
function NotFound() {
  return (
    <div className="page-container not-found">
      <h1 className="page-title">404 - Page Not Found</h1>
      <img 
        src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80" 
        alt="Scattered gems"
        className="page-image"
      />
      <div className="content-box">
        <h2>Oops! This gem hasn't been discovered yet</h2>
        <p>
          The page you're looking for seems to have been lost in the mines. 
          Don't worry though - use the navigation above to explore our collection of 
          magnificent gemstones and their fascinating stories!
        </p>
        <Link to="/" className="home-link">Return to Diamonds</Link>
      </div>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo">✨ Precious Gemstones</div>
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/" className="nav-link">💎 Diamond</Link>
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
            <Route path="/" element={<Diamond />} />
            <Route path="/emerald" element={<Emerald />} />
            <Route path="/ruby" element={<Ruby />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>✨ &copy; 2024 Precious Gemstones. Discover the world's most magnificent treasures.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;