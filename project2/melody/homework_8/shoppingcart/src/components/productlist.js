import React from 'react';
import '../App.css';
import carrot from '../images/carrot.png';
import avocado from '../images/avocado.png';
import cabbage from '../images/cabbage.png';
import tomato from '../images/tomato.png';
import broccoli from '../images/broccoli.png';
import pepper from '../images/pepper.png';

const products = [
    {
        id: 1,
        name: 'carrot',
        price: 1.5,
        was: 2.0,
        image: carrot
    },
    {
        id: 2,
        name: 'avocado',
        price: 2.0,
        was: 2.5,
        image: avocado
    },
    {
        id: 3,
        name: 'cabbage',
        price: 1.0,
        was: 1.5,
        image: cabbage
    },
    {
        id: 4,
        name: 'tomato',
        price: 1.8,
        was: 2.2,
        image: tomato
    },
    {
        id: 5,
        name: 'broccoli',
        price: 2.5,
        was: 3.0,
        image: broccoli
    },
    {
        id: 6,
        name: 'pepper',
        price: 1.2,
        was: 1.8,
        image: pepper
    }
];

const ProductList = ({ addToCart, cart }) => {
    return (
        <>
            {/* Hero Header Section */}
            <div className="hero-header">
                <div className="hero-content">
                    <h1 className="hero-title">Soe's Grocery Store</h1>
                    <p className="hero-subtitle">Farm Fresh Fruits & Vegetables Delivered to Your Door</p>
                </div>
            </div>

            <section className="product-section">
                <h2 className="producttitle">Our Fresh Products</h2>
                <div className="cardcontainer">
                    {products.map((product) => {
                        const isInCart = cart.some(item => item.id === product.id);
                        return (
                            <div key={product.id} className="card">
                                <img src={product.image} alt={product.name} />
                                <p className="productname">{product.name}/lb</p>
                                <div className="price-section">
                                    <s className="old-price">${product.was}</s>
                                    <span className="current-price">${product.price}</span>
                                    <span className="per-lb">/lb</span>
                                </div>
                                <button 
                                    className="btn_addcart"
                                    onClick={() => addToCart(product)}
                                    disabled={isInCart}
                                >
                                    {isInCart ? 'Already in Cart' : 'Add to Cart'}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
}

export default ProductList;