import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';
import './Cart.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="empty-cart-message">Cart is empty</div>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="cart-item-details">
                  <h2 className="cart-item-title">{item.title}</h2>
                  <p className="cart-item-price">${item.price}</p>
                  <div className="cart-item-quantity">
                    <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))} disabled={item.quantity <= 1}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
                  </div>
                </div>
                <button className="cart-item-remove" onClick={() => dispatch(removeFromCart({ id: item.id }))}>
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
