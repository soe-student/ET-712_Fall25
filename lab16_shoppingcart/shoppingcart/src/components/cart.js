import '../App.css';
import React from 'react';

const Cart = ({cart,removeFromCart}) => {
    return (
        <>
            <h2 className="carttitle">Your Shopping Cart</h2>
            <section className="cartcontainer">
                {cart.length === 0 && <p className='emptymsg'>Cart is empty</p>}
                {cart.map(
                    (item)=> (
                        <div key={item.id} className="itemcart">
                            <img src={item.image} className="itemimage" />
                            <p className="itemname">{item.name}</p>
                            <p className="itemprice">${item.price}/lb</p>
                            <p className="itemquantity">{item.quantity}</p>
                            <p className="itemtotalprice">{ (item.price * item.quantity) }</p>
                            <button className="btn_remove" onClick={()=>removeFromCart(item.id)}>Remove</button>
                        </div>
                    )
                )}
                <p className='totalcart'>Total $
                    {cart.reduce((total, item) => total + item.price * item.quantity, 0)}
                </p>
            </section>
        </>
    );
}


export default Cart;