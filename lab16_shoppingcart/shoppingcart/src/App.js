import './App.css';
import React, {useState} from 'react';
import ProductList from './components/productlist';
import Cart from './components/cart';

function App() {
  const [cart, setCart] = useState([]);
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  }

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }
  return (
    <div className="App">
      <h1 className='apptitle'>Welcome to Soe Kaythi's supermarket</h1> 
    
      <ProductList addToCart = {addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;
