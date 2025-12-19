import React from 'react';
import './App.css';

const ProductCard = function(props) {
  // Event handler for Add to Cart button
  const handleAddToCart = () => {
    if (props.inStock) {
      alert(`${props.name} has been added to your cart!`);
    }
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={props.image} alt={props.name} className="product-image" />
        {/* Conditional rendering based on stock availability */}
        <span className={`status-badge ${props.inStock ? 'in-stock' : 'out-of-stock'}`}>
          {props.inStock ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>
      
      <div className="product-details">
        <h3 className="product-name">{props.name}</h3>
        <p className="product-category">{props.category}</p>
        <p className="product-price">${props.price.toFixed(2)}</p>
        <p className="product-description">{props.description}</p>
        
        {/* Button disabled when out of stock */}
        <button 
          className={`add-to-cart-btn ${!props.inStock ? 'disabled' : ''}`}
          disabled={!props.inStock}
          onClick={handleAddToCart}
        >
          {props.inStock ? 'Add to Cart' : 'Unavailable'}
        </button>
      </div>
    </div>
  );
}

function App() {
  // Array of product objects - at least 10 products as required
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      image: "./images/headphones.jpg",
      price: 79.99,
      description: "Premium noise-canceling headphones with 30-hour battery life",
      inStock: true
    },
    {
      id: 2,
      name: "Smart Watch",
      category: "Wearables",
      image: "./images/watch.jpg",
      price: 249.99,
      description: "Fitness tracker with heart rate monitor and GPS",
      inStock: true
    },
    {
      id: 3,
      name: "Laptop Backpack",
      category: "Accessories",
      image: "./images/backpack.jpg",
      price: 45.50,
      description: "Water-resistant backpack with laptop compartment",
      inStock: false
    },
    {
      id: 4,
      name: "Coffee Maker",
      category: "Kitchen",
      image: "./images/coffee_maker.jpg",
      price: 129.99,
      description: "Programmable coffee maker with thermal carafe",
      inStock: true
    },
    {
      id: 5,
      name: "Running Shoes",
      category: "Sports",
      image: "./images/shoes.jpg",
      price: 89.99,
      description: "Lightweight running shoes with cushioned support",
      inStock: true
    },
    {
      id: 6,
      name: "Desk Lamp",
      category: "Home",
      image: "./images/lamp.jpg",
      price: 34.99,
      description: "LED desk lamp with adjustable brightness",
      inStock: false
    },
    {
      id: 7,
      name: "Bluetooth Speaker",
      category: "Electronics",
      image: "./images/speaker.jpg",
      price: 59.99,
      description: "Portable waterproof speaker with 360° sound",
      inStock: true
    },
    {
      id: 8,
      name: "Gaming Mouse",
      category: "Gaming",
      image: "./images/mouse.jpg",
      price: 49.99,
      description: "Ergonomic gaming mouse with RGB lighting",
      inStock: true
    },
    {
      id: 9,
      name: "Water Bottle",
      category: "Sports",
      image: "./images/water_bottle.jpg",
      price: 19.99,
      description: "Insulated stainless steel water bottle, 32oz",
      inStock: false
    },
    {
      id: 10,
      name: "Sunglasses",
      category: "Accessories",
      image: "./images/sunglass.jpg",
      price: 149.99,
      description: "Polarized sunglasses with UV protection",
      inStock: true
    },
    
  ];

  return (
    <div className="App">
      {/* Header Section */}
      <header className="app-header">
        <h1>Store</h1>
        <p className="student-name">Soe Kaythi</p>
        <p className="subtitle">Browse our amazing collection of products</p>
      </header>
      
      {/* Products Grid Section */}
      <main className="products-section">
        <div className="products-container">
          {/* Dynamically render ProductCard components using map() */}
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              category={product.category}
              image={product.image}
              price={product.price}
              description={product.description}
              inStock={product.inStock}
            />
          ))}
        </div>
      </main>

      {/* Footer Section */}
      <footer className="app-footer">
        <p>© 2025 Store | Homework 6: React Props</p>
      </footer>
    </div>
  );
}

export default App;