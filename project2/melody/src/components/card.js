import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalWindow from "./modalwindow";
import "../styles/card.css";

const Card = ({ title, image, description, price, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  const handleAddToCart = () => {
    onAddToCart({
      title,
      price,
      quantity,
      image
    });
  };

  return (
    <div className="card">
      <img
        src={image}
        alt={title}
        className="card-image"
        onClick={() => setOpenModal(true)}
      />

      <h3>{title}</h3>
      <p>{description}</p>
      <p className="price">${price}</p>

      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />

      <button onClick={handleAddToCart}>Add to Cart</button>

      {/* REQUIRED Link inside Card */}
      <Link to="/cart" className="cart-link">
        Go to Cart
      </Link>

      <ModalWindow
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        title={title}
        image={image}
        description={description}
      />
    </div>
  );
};

export default Card;
