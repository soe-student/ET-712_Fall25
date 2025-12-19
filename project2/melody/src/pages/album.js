import React, { useState } from 'react';
import Navbar from '../components/navbar';
import AddToCartModal from '../components/AddToCartModal';
import '../styles/App.css';
import '../styles/album.css';

function Album() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const albumsByGenre = {
    "Pop": [
      { id: 1, title: "Midnights", artist: "Taylor Swift", price: 14.99, genre: "Pop", image: "https://picsum.photos/300/300?random=101", type: "Album", description: "Taylor Swift's tenth studio album, a concept album about nighttime ruminations.", releaseDate: "October 21, 2022", year: "2022", songCount: 13 },
      { id: 2, title: "Harry's House", artist: "Harry Styles", price: 13.99, genre: "Pop", image: "https://picsum.photos/300/300?random=102", type: "Album", description: "Harry Styles' third studio album featuring synth-pop and funk influences.", releaseDate: "May 20, 2022", year: "2022", songCount: 13 },
      { id: 3, title: "Future Nostalgia", artist: "Dua Lipa", price: 12.99, genre: "Pop", image: "https://picsum.photos/300/300?random=103", type: "Album", description: "A disco-influenced pop album that pays homage to the 80s.", releaseDate: "March 27, 2020", year: "2020", songCount: 11 },
      { id: 4, title: "Happier Than Ever", artist: "Billie Eilish", price: 14.99, genre: "Pop", image: "https://picsum.photos/300/300?random=104", type: "Album", description: "Billie Eilish's sophomore album exploring fame and self-discovery.", releaseDate: "July 30, 2021", year: "2021", songCount: 16 },
      { id: 5, title: "1989 (Taylor's Version)", artist: "Taylor Swift", price: 15.99, genre: "Pop", image: "https://picsum.photos/300/300?random=105", type: "Album", description: "Re-recorded version of Taylor's iconic synth-pop album.", releaseDate: "October 27, 2023", year: "2023", songCount: 21 },
      { id: 6, title: "Lover", artist: "Taylor Swift", price: 13.99, genre: "Pop", image: "https://picsum.photos/300/300?random=131", type: "Album", description: "Taylor Swift's romantic seventh studio album.", releaseDate: "August 23, 2019", year: "2019", songCount: 18 },
    ],
    "K-Pop": [
      { id: 7, title: "Born Pink", artist: "BLACKPINK", price: 15.99, genre: "K-Pop", image: "https://picsum.photos/300/300?random=106", type: "Album", description: "BLACKPINK's second studio album featuring hit singles Pink Venom and Shut Down.", releaseDate: "September 16, 2022", year: "2022", songCount: 8 },
      { id: 8, title: "MY WORLD", artist: "aespa", price: 14.99, genre: "K-Pop", image: "https://picsum.photos/300/300?random=107", type: "Album", description: "aespa's third mini album continuing their unique AI concept.", releaseDate: "May 8, 2023", year: "2023", songCount: 6 },
      { id: 9, title: "READY TO BE", artist: "TWICE", price: 14.99, genre: "K-Pop", image: "https://picsum.photos/300/300?random=108", type: "Album", description: "TWICE's 12th mini album showcasing their musical evolution.", releaseDate: "March 10, 2023", year: "2023", songCount: 7 },
      { id: 10, title: "Face", artist: "Jimin", price: 13.99, genre: "K-Pop", image: "https://picsum.photos/300/300?random=109", type: "Album", description: "Jimin's debut solo album exploring his inner thoughts and emotions.", releaseDate: "March 24, 2023", year: "2023", songCount: 6 },
      { id: 11, title: "Golden", artist: "Jung Kook", price: 14.99, genre: "K-Pop", image: "https://picsum.photos/300/300?random=110", type: "Album", description: "Jung Kook's debut solo album featuring global hits.", releaseDate: "November 3, 2023", year: "2023", songCount: 11 },
      { id: 12, title: "Drama", artist: "aespa", price: 14.99, genre: "K-Pop", image: "https://picsum.photos/300/300?random=111", type: "Album", description: "aespa's fourth mini album with the hit title track Drama.", releaseDate: "November 10, 2023", year: "2023", songCount: 6 },
    ],
    "R&B": [
      { id: 13, title: "Renaissance", artist: "Beyoncé", price: 16.99, genre: "R&B", image: "https://picsum.photos/300/300?random=112", type: "Album", description: "Beyoncé's dance and house-influenced seventh studio album.", releaseDate: "July 29, 2022", year: "2022", songCount: 16 },
      { id: 14, title: "SOS", artist: "SZA", price: 14.99, genre: "R&B", image: "https://picsum.photos/300/300?random=113", type: "Album", description: "SZA's sophomore album exploring love, heartbreak and self-reflection.", releaseDate: "December 9, 2022", year: "2022", songCount: 23 },
      { id: 15, title: "After Hours", artist: "The Weeknd", price: 13.99, genre: "R&B", image: "https://picsum.photos/300/300?random=114", type: "Album", description: "A synth-heavy R&B album with themes of excess and heartache.", releaseDate: "March 20, 2020", year: "2020", songCount: 14 },
      { id: 16, title: "Starboy", artist: "The Weeknd", price: 12.99, genre: "R&B", image: "https://picsum.photos/300/300?random=115", type: "Album", description: "The Weeknd's third studio album featuring Daft Punk collaborations.", releaseDate: "November 25, 2016", year: "2016", songCount: 18 },
      { id: 17, title: "Ctrl", artist: "SZA", price: 11.99, genre: "R&B", image: "https://picsum.photos/300/300?random=116", type: "Album", description: "SZA's critically acclaimed debut exploring love and insecurity.", releaseDate: "June 9, 2017", year: "2017", songCount: 14 },
      { id: 18, title: "Dawn FM", artist: "The Weeknd", price: 14.99, genre: "R&B", image: "https://picsum.photos/300/300?random=132", type: "Album", description: "The Weeknd's concept album set in purgatory.", releaseDate: "January 7, 2022", year: "2022", songCount: 16 },
    ],
    "Hip-Hop": [
      { id: 19, title: "Mr. Morale & The Big Steppers", artist: "Kendrick Lamar", price: 15.99, genre: "Hip-Hop", image: "https://picsum.photos/300/300?random=117", type: "Album", description: "Kendrick's introspective double album on family, therapy and growth.", releaseDate: "May 13, 2022", year: "2022", songCount: 18 },
      { id: 20, title: "Her Loss", artist: "Drake & 21 Savage", price: 14.99, genre: "Hip-Hop", image: "https://picsum.photos/300/300?random=118", type: "Album", description: "A collaborative album blending Drake's melodies with 21's street tales.", releaseDate: "November 4, 2022", year: "2022", songCount: 16 },
      { id: 21, title: "Utopia", artist: "Travis Scott", price: 15.99, genre: "Hip-Hop", image: "https://picsum.photos/300/300?random=119", type: "Album", description: "Travis Scott's long-awaited fourth studio album.", releaseDate: "July 28, 2023", year: "2023", songCount: 19 },
      { id: 22, title: "Heroes & Villains", artist: "Metro Boomin", price: 13.99, genre: "Hip-Hop", image: "https://picsum.photos/300/300?random=120", type: "Album", description: "Metro Boomin's cinematic second studio album.", releaseDate: "December 2, 2022", year: "2022", songCount: 15 },
      { id: 23, title: "It's Only Me", artist: "Lil Baby", price: 13.99, genre: "Hip-Hop", image: "https://picsum.photos/300/300?random=133", type: "Album", description: "Lil Baby's introspective third studio album.", releaseDate: "October 14, 2022", year: "2022", songCount: 23 },
    ],
    "Rock": [
      { id: 24, title: "RUSH!", artist: "Måneskin", price: 13.99, genre: "Rock", image: "https://picsum.photos/300/300?random=121", type: "Album", description: "Italian rock band's breakthrough international album.", releaseDate: "January 20, 2023", year: "2023", songCount: 17 },
      { id: 25, title: "Mercury - Act 2", artist: "Imagine Dragons", price: 12.99, genre: "Rock", image: "https://picsum.photos/300/300?random=122", type: "Album", description: "Imagine Dragons' anthemic rock collection.", releaseDate: "July 1, 2022", year: "2022", songCount: 18 },
      { id: 26, title: "72 Seasons", artist: "Metallica", price: 14.99, genre: "Rock", image: "https://picsum.photos/300/300?random=123", type: "Album", description: "Metallica's eleventh studio album.", releaseDate: "April 14, 2023", year: "2023", songCount: 12 },
      { id: 27, title: "So Much (for) Stardust", artist: "Fall Out Boy", price: 12.99, genre: "Rock", image: "https://picsum.photos/300/300?random=134", type: "Album", description: "Fall Out Boy's eighth studio album.", releaseDate: "March 24, 2023", year: "2023", songCount: 13 },
      { id: 28, title: "5SOS5", artist: "5 Seconds of Summer", price: 13.99, genre: "Rock", image: "https://picsum.photos/300/300?random=135", type: "Album", description: "The band's self-titled fifth studio album.", releaseDate: "September 23, 2022", year: "2022", songCount: 19 },
    ],
    "Country": [
      { id: 29, title: "One Thing at a Time", artist: "Morgan Wallen", price: 14.99, genre: "Country", image: "https://picsum.photos/300/300?random=124", type: "Album", description: "Morgan Wallen's record-breaking third studio album.", releaseDate: "March 3, 2023", year: "2023", songCount: 36 },
      { id: 30, title: "Gettin' Old", artist: "Luke Combs", price: 13.99, genre: "Country", image: "https://picsum.photos/300/300?random=125", type: "Album", description: "Luke Combs' fourth studio album about life's journey.", releaseDate: "March 24, 2023", year: "2023", songCount: 18 },
      { id: 31, title: "Bell Bottom Country", artist: "Lainey Wilson", price: 12.99, genre: "Country", image: "https://picsum.photos/300/300?random=126", type: "Album", description: "Lainey Wilson's breakthrough country rock album.", releaseDate: "October 28, 2022", year: "2022", songCount: 14 },
      { id: 32, title: "Zach Bryan", artist: "Zach Bryan", price: 14.99, genre: "Country", image: "https://picsum.photos/300/300?random=136", type: "Album", description: "Zach Bryan's self-titled major label debut.", releaseDate: "August 25, 2023", year: "2023", songCount: 16 },
      { id: 33, title: "Growin' Up", artist: "Luke Combs", price: 12.99, genre: "Country", image: "https://picsum.photos/300/300?random=137", type: "Album", description: "Luke Combs' reflective third studio album.", releaseDate: "June 24, 2022", year: "2022", songCount: 12 },
    ],
    "Latin": [
      { id: 34, title: "Un Verano Sin Ti", artist: "Bad Bunny", price: 14.99, genre: "Latin", image: "https://picsum.photos/300/300?random=127", type: "Album", description: "Bad Bunny's summer-themed reggaeton masterpiece.", releaseDate: "May 6, 2022", year: "2022", songCount: 23 },
      { id: 35, title: "Mañana Será Bonito", artist: "Karol G", price: 13.99, genre: "Latin", image: "https://picsum.photos/300/300?random=128", type: "Album", description: "Karol G's empowering fourth studio album.", releaseDate: "February 24, 2023", year: "2023", songCount: 14 },
      { id: 36, title: "YHLQMDLG", artist: "Bad Bunny", price: 12.99, genre: "Latin", image: "https://picsum.photos/300/300?random=129", type: "Album", description: "Bad Bunny's genre-blending second album.", releaseDate: "February 29, 2020", year: "2020", songCount: 20 },
      { id: 37, title: "Legends Never Die", artist: "Rauw Alejandro", price: 13.99, genre: "Latin", image: "https://picsum.photos/300/300?random=138", type: "Album", description: "Rauw Alejandro's genre-defying third album.", releaseDate: "March 31, 2023", year: "2023", songCount: 17 },
      { id: 38, title: "Nadie Sabe Lo Que Va a Pasar Mañana", artist: "Bad Bunny", price: 14.99, genre: "Latin", image: "https://picsum.photos/300/300?random=139", type: "Album", description: "Bad Bunny's fifth studio album.", releaseDate: "October 13, 2023", year: "2023", songCount: 22 },
    ],
  };

  const handleViewMore = (album) => {
    setSelectedAlbum(album);
    setModalOpen(true);
  };

  const handleAddToCart = (item, quantity) => {
    console.log(`Added ${quantity} x ${item.title} to cart`);
  };

  const scrollLeft = (genreId) => {
    const container = document.getElementById(`scroll-${genreId}`);
    container.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = (genreId) => {
    const container = document.getElementById(`scroll-${genreId}`);
    container.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Navbar />
      
      <main className="main-content">
        <div className="albums-page">
          {/* Page Header */}
          <div className="albums-header">
            <h1 className="albums-title">Albums</h1>
            <p className="albums-subtitle">Most popular albums in the last month</p>
          </div>

          {/* Genre Sections */}
          <div className="albums-container">
            {Object.entries(albumsByGenre).map(([genre, albums]) => (
              <section key={genre} className="genre-section">
                <div className="genre-header">
                  <h2 className="genre-title">{genre}</h2>
                  <div className="scroll-buttons">
                    <button 
                      className="scroll-btn" 
                      onClick={() => scrollLeft(genre)}
                      aria-label="Scroll left"
                    >
                      ‹
                    </button>
                    <button 
                      className="scroll-btn" 
                      onClick={() => scrollRight(genre)}
                      aria-label="Scroll right"
                    >
                      ›
                    </button>
                  </div>
                </div>
                
                <div className="albums-row" id={`scroll-${genre}`}>
                  {albums.map(album => (
                    <div 
                      key={album.id} 
                      className="album-card-horizontal"
                      onClick={() => handleViewMore(album)}
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
              </section>
            ))}
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Melody Music. All rights reserved. By Soe Kaythi</p>
      </footer>

      {/* Add to Cart Modal */}
      <AddToCartModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        item={selectedAlbum}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}

export default Album;