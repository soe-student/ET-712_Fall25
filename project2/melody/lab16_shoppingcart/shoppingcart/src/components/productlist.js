import React from "react";
import '../App.css';
import apple from '../images/apple.png';
import grapes from '../images/grapes.png';
import orange from '../images/orange.png';

const products = [
    {
        id: 1,
        name: 'Apple',
        price: 1.5,
        was: 2.0,
        image: apple
    },
    {
        id: 2,
        name: 'Grapes',
        price: 2.0,
        was: 2.5,
        image: grapes
    },
    {
        id: 3,
        name: 'Orange',
        price: 1.0,
        was: 1.5,
        image: orange
    }
];

const ProductList = ({ addToCart }) => {
    return (
        <section className="product-section">
            <h2 className="producttitle">Product List</h2>
            <div className="cardcontainer">
                {products.map((product) => (
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
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProductList;