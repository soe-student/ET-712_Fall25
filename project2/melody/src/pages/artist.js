import React, { useState } from 'react';
import Navbar from '../components/navbar';
import AddToCartModal from '../components/AddToCartModal';
import '../styles/App.css';
import '../styles/artist.css';

function Artist() {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const artists = [
    { 
      id: 1, 
      name: 'Taylor Swift', 
      image: 'https://picsum.photos/300/300?random=201',
      songs: [
        { id: 'ts1', type: 'Song', title: 'Anti-Hero', artist: 'Taylor Swift', price: 1.29, image: 'https://picsum.photos/150/150?random=211', duration: '3:21', releaseDate: 'October 21, 2022', description: 'Lead single from Midnights album' },
        { id: 'ts2', type: 'Song', title: 'Shake It Off', artist: 'Taylor Swift', price: 1.29, image: 'https://picsum.photos/150/150?random=212', duration: '3:39', releaseDate: 'August 18, 2014', description: 'Hit single from 1989 album' },
        { id: 'ts3', type: 'Song', title: 'Cruel Summer', artist: 'Taylor Swift', price: 1.29, image: 'https://picsum.photos/150/150?random=214', duration: '2:58', releaseDate: 'August 23, 2019', description: 'Fan favorite from Lover album' },
      ],
      albums: [
        { id: 'ta1', type: 'Album', title: 'Midnights', artist: 'Taylor Swift', price: 14.99, image: 'https://picsum.photos/150/150?random=215', songCount: 13, releaseDate: 'October 21, 2022', description: 'Tenth studio album' },
        { id: 'ta2', type: 'Album', title: '1989 (Taylor\'s Version)', artist: 'Taylor Swift', price: 15.99, image: 'https://picsum.photos/150/150?random=217', songCount: 21, releaseDate: 'October 27, 2023', description: 'Re-recorded album' },
      ]
    },
    { 
      id: 2, 
      name: 'The Weeknd', 
      image: 'https://picsum.photos/300/300?random=202',
      songs: [
        { id: 'tw1', type: 'Song', title: 'Blinding Lights', artist: 'The Weeknd', price: 1.29, image: 'https://picsum.photos/150/150?random=221', duration: '3:20', releaseDate: 'November 29, 2019', description: 'Synth-wave hit' },
        { id: 'tw2', type: 'Song', title: 'Save Your Tears', artist: 'The Weeknd', price: 1.29, image: 'https://picsum.photos/150/150?random=222', duration: '3:35', releaseDate: 'August 9, 2020', description: 'Emotional ballad' },
      ],
      albums: [
        { id: 'twa1', type: 'Album', title: 'After Hours', artist: 'The Weeknd', price: 15.99, image: 'https://picsum.photos/150/150?random=225', songCount: 14, releaseDate: 'March 20, 2020', description: 'Fourth studio album' },
        { id: 'twa2', type: 'Album', title: 'Dawn FM', artist: 'The Weeknd', price: 14.99, image: 'https://picsum.photos/150/150?random=226', songCount: 16, releaseDate: 'January 7, 2022', description: 'Concept album' },
      ]
    },
    { 
      id: 3, 
      name: 'BLACKPINK', 
      image: 'https://picsum.photos/300/300?random=203',
      songs: [
        { id: 'bp1', type: 'Song', title: 'Pink Venom', artist: 'BLACKPINK', price: 1.29, image: 'https://picsum.photos/150/150?random=231', duration: '3:07', releaseDate: 'August 19, 2022', description: 'Pre-release single' },
        { id: 'bp2', type: 'Song', title: 'Shut Down', artist: 'BLACKPINK', price: 1.29, image: 'https://picsum.photos/150/150?random=232', duration: '2:58', releaseDate: 'September 16, 2022', description: 'Title track' },
        { id: 'bp3', type: 'Song', title: 'How You Like That', artist: 'BLACKPINK', price: 1.29, image: 'https://picsum.photos/150/150?random=233', duration: '3:01', releaseDate: 'June 26, 2020', description: 'Record-breaking single' },
      ],
      albums: [
        { id: 'bpa1', type: 'Album', title: 'Born Pink', artist: 'BLACKPINK', price: 15.99, image: 'https://picsum.photos/150/150?random=235', songCount: 8, releaseDate: 'September 16, 2022', description: 'Second studio album' },
      ]
    },
    { 
      id: 4, 
      name: 'BTS', 
      image: 'https://picsum.photos/300/300?random=204',
      songs: [
        { id: 'bts1', type: 'Song', title: 'Dynamite', artist: 'BTS', price: 1.29, image: 'https://picsum.photos/150/150?random=241', duration: '3:19', releaseDate: 'August 21, 2020', description: 'First English single' },
        { id: 'bts2', type: 'Song', title: 'Butter', artist: 'BTS', price: 1.29, image: 'https://picsum.photos/150/150?random=242', duration: '2:44', releaseDate: 'May 21, 2021', description: 'Summer anthem' },
      ],
      albums: [
        { id: 'btsa1', type: 'Album', title: 'Map of the Soul: 7', artist: 'BTS', price: 16.99, image: 'https://picsum.photos/150/150?random=245', songCount: 20, releaseDate: 'February 21, 2020', description: 'Fourth Korean album' },
      ]
    },
    { 
      id: 5, 
      name: 'Drake', 
      image: 'https://picsum.photos/300/300?random=205',
      songs: [
        { id: 'd1', type: 'Song', title: 'God\'s Plan', artist: 'Drake', price: 1.29, image: 'https://picsum.photos/150/150?random=251', duration: '3:18', releaseDate: 'January 19, 2018', description: 'Chart-topping hit' },
        { id: 'd2', type: 'Song', title: 'Hotline Bling', artist: 'Drake', price: 1.29, image: 'https://picsum.photos/150/150?random=252', duration: '4:27', releaseDate: 'July 31, 2015', description: 'Viral sensation' },
      ],
      albums: [
        { id: 'da1', type: 'Album', title: 'Her Loss', artist: 'Drake & 21 Savage', price: 15.99, image: 'https://picsum.photos/150/150?random=255', songCount: 16, releaseDate: 'November 4, 2022', description: 'Collaborative album' },
      ]
    },
    { 
      id: 6, 
      name: 'Ariana Grande', 
      image: 'https://picsum.photos/300/300?random=206',
      songs: [
        { id: 'ag1', type: 'Song', title: '7 Rings', artist: 'Ariana Grande', price: 1.29, image: 'https://picsum.photos/150/150?random=261', duration: '2:58', releaseDate: 'January 18, 2019', description: 'Trap-pop anthem' },
        { id: 'ag2', type: 'Song', title: 'Thank U, Next', artist: 'Ariana Grande', price: 1.29, image: 'https://picsum.photos/150/150?random=262', duration: '3:27', releaseDate: 'November 3, 2018', description: 'Empowering breakup anthem' },
      ],
      albums: [
        { id: 'aga1', type: 'Album', title: 'Positions', artist: 'Ariana Grande', price: 14.99, image: 'https://picsum.photos/150/150?random=265', songCount: 14, releaseDate: 'October 30, 2020', description: 'Sixth studio album' },
      ]
    },
    { 
      id: 7, 
      name: 'Bad Bunny', 
      image: 'https://picsum.photos/300/300?random=207',
      songs: [
        { id: 'bb1', type: 'Song', title: 'Tití Me Preguntó', artist: 'Bad Bunny', price: 1.29, image: 'https://picsum.photos/150/150?random=271', duration: '4:03', releaseDate: 'May 6, 2022', description: 'Summer anthem' },
        { id: 'bb2', type: 'Song', title: 'Me Porto Bonito', artist: 'Bad Bunny', price: 1.29, image: 'https://picsum.photos/150/150?random=272', duration: '2:58', releaseDate: 'May 6, 2022', description: 'Featuring Chencho' },
      ],
      albums: [
        { id: 'bba1', type: 'Album', title: 'Un Verano Sin Ti', artist: 'Bad Bunny', price: 15.99, image: 'https://picsum.photos/150/150?random=275', songCount: 23, releaseDate: 'May 6, 2022', description: 'Summer album' },
      ]
    },
    { 
      id: 8, 
      name: 'SZA', 
      image: 'https://picsum.photos/300/300?random=208',
      songs: [
        { id: 'sza1', type: 'Song', title: 'Kill Bill', artist: 'SZA', price: 1.29, image: 'https://picsum.photos/150/150?random=281', duration: '2:33', releaseDate: 'December 9, 2022', description: 'Chart-topping hit' },
        { id: 'sza2', type: 'Song', title: 'Snooze', artist: 'SZA', price: 1.29, image: 'https://picsum.photos/150/150?random=282', duration: '3:21', releaseDate: 'December 9, 2022', description: 'Dreamy love song' },
      ],
      albums: [
        { id: 'szaa1', type: 'Album', title: 'SOS', artist: 'SZA', price: 15.99, image: 'https://picsum.photos/150/150?random=285', songCount: 23, releaseDate: 'December 9, 2022', description: 'Sophomore album' },
      ]
    },
    { 
      id: 9, 
      name: 'Billie Eilish', 
      image: 'https://picsum.photos/300/300?random=301',
      songs: [
        { id: 'be1', type: 'Song', title: 'Bad Guy', artist: 'Billie Eilish', price: 1.29, image: 'https://picsum.photos/150/150?random=302', duration: '3:14', releaseDate: 'March 29, 2019', description: 'Grammy-winning hit' },
        { id: 'be2', type: 'Song', title: 'Lovely', artist: 'Billie Eilish', price: 1.29, image: 'https://picsum.photos/150/150?random=303', duration: '3:20', releaseDate: 'April 19, 2018', description: 'Featuring Khalid' },
      ],
      albums: [
        { id: 'bea1', type: 'Album', title: 'Happier Than Ever', artist: 'Billie Eilish', price: 14.99, image: 'https://picsum.photos/150/150?random=304', songCount: 16, releaseDate: 'July 30, 2021', description: 'Sophomore album' },
      ]
    },
    { 
      id: 10, 
      name: 'Kendrick Lamar', 
      image: 'https://picsum.photos/300/300?random=330',
      songs: [
        { id: 'kl1', type: 'Song', title: 'HUMBLE.', artist: 'Kendrick Lamar', price: 1.29, image: 'https://picsum.photos/150/150?random=331', duration: '2:57', releaseDate: 'March 30, 2017', description: 'Grammy-winning hit' },
      ],
      albums: [
        { id: 'kla1', type: 'Album', title: 'Mr. Morale & The Big Steppers', artist: 'Kendrick Lamar', price: 15.99, image: 'https://picsum.photos/150/150?random=332', songCount: 18, releaseDate: 'May 13, 2022', description: 'Fifth studio album' },
      ]
    },
    { 
      id: 11, 
      name: 'Beyoncé', 
      image: 'https://picsum.photos/300/300?random=320',
      songs: [
        { id: 'by1', type: 'Song', title: 'Break My Soul', artist: 'Beyoncé', price: 1.29, image: 'https://picsum.photos/150/150?random=321', duration: '4:38', releaseDate: 'June 20, 2022', description: 'Lead single' },
      ],
      albums: [
        { id: 'bya1', type: 'Album', title: 'Renaissance', artist: 'Beyoncé', price: 16.99, image: 'https://picsum.photos/150/150?random=322', songCount: 16, releaseDate: 'July 29, 2022', description: 'Dance album' },
      ]
    },
    { 
      id: 12, 
      name: 'Dua Lipa', 
      image: 'https://picsum.photos/300/300?random=305',
      songs: [
        { id: 'dl1', type: 'Song', title: 'Levitating', artist: 'Dua Lipa', price: 1.29, image: 'https://picsum.photos/150/150?random=306', duration: '3:23', releaseDate: 'March 27, 2020', description: 'Disco-pop hit' },
      ],
      albums: [
        { id: 'dla1', type: 'Album', title: 'Future Nostalgia', artist: 'Dua Lipa', price: 13.99, image: 'https://picsum.photos/150/150?random=307', songCount: 11, releaseDate: 'March 27, 2020', description: 'Disco-influenced album' },
      ]
    },
  ];

  const handleArtistClick = (artist) => {
    setSelectedArtist(selectedArtist?.id === artist.id ? null : artist);
  };

  const handleBuyClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleAddToCart = (item, quantity) => {
    console.log(`Added ${quantity} x ${item.title} to cart`);
  };

  const scrollLeft = () => {
    const container = document.getElementById('artists-scroll');
    container.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const container = document.getElementById('artists-scroll');
    container.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <div className="artists-page">
          {/* Page Header */}
          <div className="artists-header">
            <h1 className="artists-title">Artists</h1>
            <p className="artists-subtitle">Discover your favorite artists and their music</p>
          </div>

          {/* Artists Container */}
          <div className="artists-container">
            <div className="artists-section-header">
              <div className="scroll-buttons">
                <button className="scroll-btn" onClick={scrollLeft} aria-label="Scroll left">‹</button>
                <button className="scroll-btn" onClick={scrollRight} aria-label="Scroll right">›</button>
              </div>
            </div>
            
            <div className="artists-row" id="artists-scroll">
              {artists.map(artist => (
                <div key={artist.id} className="artist-item">
                  <div 
                    className="artist-card"
                    onClick={() => handleArtistClick(artist)}
                  >
                    <img src={artist.image} alt={artist.name} />
                    <h4 className="artist-name">{artist.name}</h4>
                  </div>

                  {/* Dropdown when artist is selected */}
                  {selectedArtist?.id === artist.id && (
                    <div className="artist-dropdown">
                      <div className="dropdown-section">
                        <h3 className="dropdown-title">Top Songs</h3>
                        <div className="dropdown-items">
                          {artist.songs.map(song => (
                            <div key={song.id} className="dropdown-item">
                              <img src={song.image} alt={song.title} />
                              <div className="dropdown-item-info">
                                <span className="dropdown-item-title">{song.title}</span>
                                <span className="dropdown-item-meta">{song.duration}</span>
                              </div>
                              <span className="dropdown-item-price">${song.price.toFixed(2)}</span>
                              <button 
                                className="dropdown-item-btn"
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

                      <div className="dropdown-section">
                        <h3 className="dropdown-title">Albums</h3>
                        <div className="dropdown-items">
                          {artist.albums.map(album => (
                            <div key={album.id} className="dropdown-item">
                              <img src={album.image} alt={album.title} />
                              <div className="dropdown-item-info">
                                <span className="dropdown-item-title">{album.title}</span>
                                <span className="dropdown-item-meta">{album.songCount} songs</span>
                              </div>
                              <span className="dropdown-item-price">${album.price.toFixed(2)}</span>
                              <button 
                                className="dropdown-item-btn"
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
        </div>
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

export default Artist;