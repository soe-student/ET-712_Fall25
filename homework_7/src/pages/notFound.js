import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="page-container not-found">
      <h1 className="page-title">404 - Page Not Found</h1>
      <img 
        src="/images/404.jpg" 
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
        <Link to="/" className="home-link">Return to Home</Link>
      </div>
    </div>
  );
}

export default NotFound;