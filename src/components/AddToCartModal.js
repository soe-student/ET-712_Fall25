import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../styles/modal.css';

const AddToCartModal = ({ isOpen, onClose, item, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [addedItem, setAddedItem] = useState(null);

  const handleClose = useCallback(() => {
    setShowSuccess(false);
    setAddedItem(null);
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      setQuantity(1);
      setShowSuccess(false);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target.className === 'modal-backdrop' || e.target.className === 'success-backdrop') {
      handleClose();
    }
  };

  const handleAddToCart = () => {
    // Add to cart directly - no login required
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    for (let i = 0; i < quantity; i++) {
      cart.push(item);
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Store added item info for success message
    setAddedItem({
      name: item.title || item.name,
      quantity: quantity,
      type: item.type
    });
    
    // Show success message (don't call onAddToCart to avoid duplicate alerts)
    setShowSuccess(true);
  };

  // Success Message - Wide and Short
  if (showSuccess && addedItem) {
    return (
      <div className="success-backdrop" onClick={handleBackdropClick}>
        <div className="success-toast">
          <div className="success-toast-content">
            <span className="success-toast-icon">✓</span>
            <div className="success-toast-text">
              <strong>{addedItem.quantity} x {addedItem.name}</strong> added to your cart
            </div>
          </div>
          <div className="success-toast-actions">
            <Link to="/cart" className="success-toast-cart-btn" onClick={handleClose}>
              View Cart
            </Link>
            <button className="success-toast-close-btn" onClick={handleClose}>
              ×
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Don't render if no item
  if (!item) return null;

  const totalPrice = (item.price * quantity).toFixed(2);
  const isAlbum = item.type?.toLowerCase() === 'album';
  const isSong = item.type?.toLowerCase() === 'song' || item.type?.toLowerCase() === 'single';

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-container cart-modal">
        <button className="modal-close" onClick={handleClose} aria-label="Close modal">
          ×
        </button>

        <div className="modal-content">
          {/* Item Image */}
          <div className="cart-modal-image-container">
            <img src={item.image} alt={item.title || item.name} className="cart-modal-image" />
          </div>

          {/* Item Details */}
          <div className="cart-modal-details">
            <span className="cart-modal-type">{item.type}</span>
            <h2 className="cart-modal-title">{item.title || item.name}</h2>
            <p className="cart-modal-artist">{item.artist || item.genre}</p>
            
            {/* Description */}
            {item.description && (
              <p className="cart-modal-description">{item.description}</p>
            )}
            
            {/* Meta Information */}
            <div className="cart-modal-meta">
              {/* Release Date */}
              {item.releaseDate && (
                <div className="cart-modal-meta-item">
                  <span className="cart-modal-meta-label">Release Date</span>
                  <span className="cart-modal-meta-value">{item.releaseDate}</span>
                </div>
              )}
              
              {/* Duration for Songs */}
              {isSong && item.duration && (
                <div className="cart-modal-meta-item">
                  <span className="cart-modal-meta-label">Duration</span>
                  <span className="cart-modal-meta-value">{item.duration}</span>
                </div>
              )}
              
              {/* Song Count for Albums */}
              {isAlbum && item.songCount && (
                <div className="cart-modal-meta-item">
                  <span className="cart-modal-meta-label">Songs</span>
                  <span className="cart-modal-meta-value">{item.songCount} tracks</span>
                </div>
              )}
              
              {/* Genre */}
              {item.genre && (
                <div className="cart-modal-meta-item">
                  <span className="cart-modal-meta-label">Genre</span>
                  <span className="cart-modal-meta-value">{item.genre}</span>
                </div>
              )}
            </div>

            <p className="cart-modal-price">${item.price.toFixed(2)}</p>

            {/* Quantity Selector */}
            <div className="cart-modal-quantity">
              <label>Quantity:</label>
              <div className="quantity-controls">
                <button
                  className="quantity-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  −
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="quantity-input"
                />
                <button
                  className="quantity-btn"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Total */}
            <div className="cart-modal-total">
              <span>Total:</span>
              <span className="total-price">${totalPrice}</span>
            </div>

            {/* Actions */}
            <div className="cart-modal-actions">
              <button className="cart-modal-add-btn" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <button className="cart-modal-cancel-btn" onClick={handleClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal;